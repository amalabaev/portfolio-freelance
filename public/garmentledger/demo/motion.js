window.createLedgerPlayer = function createLedgerPlayer({studio, reducedMotion, replay}) {
  const transport = document.querySelector(".scene-transport");
  const control = document.getElementById("motion-control");
  const label = document.getElementById("motion-label");
  const symbol = document.getElementById("motion-symbol");
  const track = transport.querySelector(".scene-track i");
  const controls = {
    fr: {playing:"Mettre en pause", paused:"Reprendre", finished:"Rejouer la scène"},
    en: {playing:"Pause animation", paused:"Resume", finished:"Replay scene"}
  };
  const icons = {
    playing:"M6 4v12m7-12v12",
    paused:"m6 3 9 7-9 7z",
    finished:"M3.5 9a6.6 6.6 0 1 1 .7 4.1M3.5 4.5V9H8"
  };
  let language = "fr";
  let state = "finished";
  let current = null;
  let effects = [];
  let progress = null;
  let generation = 0;

  function setState(next) {
    state = next;
    label.textContent = controls[language][state];
    symbol.setAttribute("d",icons[state]);
  }

  function handOff(outgoing, incoming, scene) {
    outgoing.classList.add("scene-outgoing");
    outgoing.inert = true;
    outgoing.setAttribute("aria-hidden","true");
    // Hold each paper where the visitor last saw it, even if they advanced early.
    outgoing.getAnimations({subtree:true}).forEach(animation => animation.pause());
    const from = outgoing.dataset.scene;
    let destination = "translateY(-3%) scale(.96)";
    let origin = "50% 50%";
    if (from === "desk" && scene === "compare") {
      const bill = outgoing.querySelector('[data-ledger-prop="invoice"]');
      const next = incoming.querySelector('[data-ledger-prop="invoice"]');
      if (bill && next) {
        const frame = studio.getBoundingClientRect();
        const box = bill.getBoundingClientRect();
        const x = box.left - frame.left + box.width / 2;
        const y = box.top - frame.top + box.height / 2;
        const dx = next.offsetLeft + next.offsetWidth / 2 - x;
        const dy = next.offsetTop + next.offsetHeight / 2 - y;
        origin = `${x}px ${y}px`;
        destination = `translate(${dx}px, ${dy}px) scale(.90)`;
      }
    } else if (from === "compare" && scene === "credit") {
      origin = "55% 84%";
      destination = "perspective(1000px) rotateX(8deg) translateY(-9%) scale(1.13)";
    } else if (scene === "foldout" || from === "foldout") {
      destination = "perspective(950px) rotateX(13deg) translateY(5%) scale(.83)";
    }
    outgoing.style.transformOrigin = origin;
    const turn = outgoing.animate([
      {opacity:1,transform:"none"},
      {opacity:.88,offset:.28},
      {opacity:0,transform:destination}
    ], {duration:560, easing:"cubic-bezier(.38,.05,.28,1)", fill:"both"});
    turn.finished.then(() => outgoing.remove(), () => outgoing.remove());
    return turn;
  }

  function show(markup, {scene, action, lang, onMount}) {
    const ticket = ++generation;
    language = lang;
    if (progress) progress.cancel();
    studio.querySelector(".scene-outgoing")?.remove();
    studio.style.removeProperty("--applied-ratio");
    const incoming = document.createElement("div");
    incoming.className = "scene-layer";
    incoming.dataset.scene = scene;
    const still = action === "still" || reducedMotion.matches;
    if (still) incoming.classList.add("scene-still");
    incoming.innerHTML = markup;
    studio.appendChild(incoming);
    const leaving = current && !still && current.dataset.scene !== scene ?
      handOff(current, incoming, scene) : null;
    if (!leaving) current?.remove();
    current = incoming;
    if (!still) onMount?.(incoming, action);

    transport.hidden = reducedMotion.matches;
    effects = still ? [] : incoming.getAnimations({subtree:true}).filter(animation => {
      const end = animation.effect?.getComputedTiming().endTime;
      return Number.isFinite(end) && end > 0;
    });
    if (leaving) effects.push(leaving);
    if (!effects.length) {
      setState("finished");
      return;
    }
    const duration = Math.max(...effects.map(animation => animation.effect.getComputedTiming().endTime));
    progress = track.animate([{transform:"scaleX(0)"},{transform:"scaleX(1)"}], {duration, fill:"both"});
    effects.push(progress);
    setState("playing");
    Promise.allSettled(effects.map(animation => animation.finished)).then(() => {
      if (ticket === generation) setState("finished");
    });
  }

  control.addEventListener("click", () => {
    if (state === "finished") {
      replay();
      return;
    }
    const pause = state === "playing";
    for (const animation of effects) {
      if (animation.playState !== "finished") {
        if (pause) animation.pause();
        else animation.play();
      }
    }
    setState(pause ? "paused" : "playing");
  });
  return {show};
};
