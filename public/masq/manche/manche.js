(() => {
  "use strict";
  const words = {
    fr: {
      page: "MASQ — Une manche de bluff", back: "MASQ — retour au projet", mode: "Jeu de bluff · Démo solo",
      opening: ["Quelqu’un", "bluffe."], read: ["Garde le", "secret."], clues: ["Autour de", "la table."],
      vote: ["Qui est", "l’intrus ?"], hit: ["Bien", "vu."], miss: ["Bien", "bluffé."],
      intro: "Tu joues Nova. Trois joueurs ont reçu le même mot. Le quatrième en a reçu un autre. À toi de le démasquer.",
      readLead: (word) => "Ton mot est « " + word + " ». Mémorise-le avant de rejoindre les trois autres.",
      clueLead: "Chaque joueur donne un indice sans prononcer son mot. Repère celui qui s’écarte des autres.",
      voteLead: "Voici les deux indices de chaque suspect. Qui avait un autre mot que toi ?",
      hitLead: (name, word) => name + " avait bien « " + word + " ». Tu as trouvé l’intrus.",
      missLead: (name, spy) => name + " avait le même mot que toi. C’est " + spy + " qui bluffait.",
      show: "Découvrir mon mot", join: "Rejoindre la table", pause: "Pause", play: "Reprendre", next: "Indice suivant", skip: "Passer au vote", confirm: "Confirmer mon vote", tally: "Carte en vue…", replay: "Nouvelle manche",
      return: "Revoir le projet", rounds: "Manche", chapter: "Étape", faces: ["Carte privée","Les indices","Le vote","Révélation"],
      you: "toi", secret: "Mot secret", word: "Le groupe", other: "L’intrus", role: "Carte de", turn: "Tour", of: "sur", wait: "Les joueurs prennent place…",
      stage: ["Carte de Nova", "Vue de la table", "À toi de voter", "Carte révélée"], sound: ["Son coupé", "Son activé"], unavailable: "Son indisponible",
      sceneAlt: ["Un téléphone MASQ posé à côté d’un jeu de cartes.", "Quatre téléphones autour d’une table violette.", "Choisis le joueur dont les indices te semblent suspects.", "La carte du joueur que tu as choisi se retourne."],
    },
    en: {
      page: "MASQ — A round of bluff", back: "MASQ — back to the project", mode: "Bluffing game · Solo demo",
      opening: ["Someone’s", "bluffing."], read: ["Keep it", "secret."], clues: ["Around", "the table."],
      vote: ["Who’s the", "impostor?"], hit: ["Good", "call."], miss: ["You were", "fooled."],
      intro: "You’re Nova. Three players got the same word. The fourth got a different one. Can you spot them?",
      readLead: (word) => "Your word is “" + word + "”. Remember it before you join the other three.",
      clueLead: "Each player gives a clue without saying their word. Look for the clue that doesn’t quite fit.",
      voteLead: "Here are both clues from each suspect. Who received a different word?",
      hitLead: (name, word) => name + " really had “" + word + "”. You found the impostor.",
      missLead: (name, spy) => name + " had your word. It was " + spy + " who was bluffing.",
      show: "See my word", join: "Join the table", pause: "Pause", play: "Resume", next: "Next clue", skip: "Go to the vote", confirm: "Confirm my vote", tally: "Turning the card…", replay: "Play another round",
      return: "Back to the project", rounds: "Round", chapter: "Step", faces: ["Secret card","The clues","The vote","Reveal"],
      you: "you", secret: "Secret word", word: "The group", other: "Impostor", role: "Card held by", turn: "Turn", of: "of", wait: "The players take their seats…",
      stage: ["Nova’s card", "At the table", "Cast your vote", "Card revealed"], sound: ["Sound off","Sound on"], unavailable: "Sound unavailable",
      sceneAlt: ["A MASQ phone beside a deck of cards.", "Four phones around a violet table.", "Choose the player whose clues seem suspicious.", "Your chosen player’s card turns over."],
    },
  };
  const get = id => document.getElementById(id);
  const names = ["Nova","Luna","Pixel","Orion"];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const stage = get("stage"), canvas = get("table"), portrait = get("portrait"), bubble = get("bubble");
  portrait.innerHTML = window.masqPortraitMarkup;
  let lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "fr";
  let phase = "secret", open = false, round = 0, clue = -1, selected = -1, paused = false, audioOn = false;
  let visualStart = performance.now(), clueDeadline = 0, clueStarted = 0, remaining = 0, revealStart = 0, request = 0, lastDraw = -1000;
  const clueDuration = 2750;
  const lines = () => words[lang];
  const dataset = () => window.masqRounds[round % window.masqRounds.length][lang];
  const spySeat = () => [2,3,1][round % 3];
  const chapter = () => phase === "secret" ? 0 : phase === "table" ? 1 : phase === "vote" || phase === "turning" ? 2 : 3;
  function cluesFor(seat) {
    if (seat === spySeat()) return dataset().minority;
    return dataset().majority[names.map((_, index) => index).filter(index => index !== spySeat()).indexOf(seat)];
  }
  function element(tag, text, cls) {
    const el = document.createElement(tag);
    if (text !== undefined) el.textContent = text;
    if (cls) el.className = cls;
    return el;
  }
  function pip(seat) { return element("i", "", "pip p" + seat); }
  function action(id, label, primary = false) {
    const btn = element("button", label, primary ? "primary" : "quiet");
    btn.type = "button";
    btn.dataset.action = id;
    if (primary) {
      const arrow = element("span", id === "replay" ? "↻" : "→", "arrow");
      arrow.setAttribute("aria-hidden","true");
      btn.append(arrow);
    }
    return btn;
  }
  function updateSound() {
    const label = lines().sound[Number(audioOn)];
    get("sound-text").textContent = label;
    get("sound").setAttribute("aria-label", label);
    get("sound").setAttribute("aria-pressed", String(audioOn));
    get("sound-icon").innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h4l5-4v14l-5-4H3z"/>' +
      (audioOn ? '<path d="M15 9a4 4 0 0 1 0 6m3-9a8 8 0 0 1 0 12"/>' : '<path d="m16 9 5 6m0-6-5 6"/>') + '</svg>';
  }
  function makeRoster() {
    const nodes = names.map((name, seat) => {
      const chip = element("span", undefined, "participant" + (seat === 0 ? " you" : ""));
      chip.append(pip(seat),name + (seat ? "" : " · " + lines().you));
      return chip;
    });
    get("roster").replaceChildren(...nodes);
  }
  function paintTurn() {
    const c = lines(), box = get("phase-ui");
    if (!get("turn-line")) {
      const line = element("p", "", "turn-readout");
      line.id = "turn-line";
      const progress = element("div", undefined, "turn-progress");
      progress.append(element("i"));
      box.append(line,progress);
    }
    const line = get("turn-line");
    if (clue < 0) line.textContent = c.wait;
    else {
      const seat = clue % 4, tour = Math.floor(clue/4);
      line.replaceChildren(pip(seat), names[seat] + " · " + cluesFor(seat)[tour], element("small",c.turn + " " + (tour+1) + " / 2"));
    }
    box.querySelector(".turn-progress i").style.width = (clue+1)/8*100 + "%";
    bubble.hidden = clue < 0;
    if (!bubble.hidden) {
      const seat = clue % 4;
      bubble.firstElementChild.textContent = names[seat];
      bubble.lastElementChild.textContent = cluesFor(seat)[Math.floor(clue/4)];
      bubble.classList.remove("arriving");
      void bubble.offsetWidth;
      bubble.classList.add("arriving");
    }
    get("announce").textContent = line.textContent;
  }
  function render({ focusTitle = false } = {}) {
    const c = lines(), step = chapter(), d = dataset();
    const returnUrl = (lang === "en" ? "/en" : "") + "/work/masq/";
    document.documentElement.lang = lang;
    document.title = c.page;
    get("mode").textContent = c.mode;
    get("back").href = returnUrl; get("back").setAttribute("aria-label",c.back);
    for (const btn of document.querySelectorAll("[data-lang]")) btn.setAttribute("aria-pressed",String(btn.dataset.lang === lang));
    updateSound(); makeRoster();
    get("chapter-count").textContent = c.chapter + " 0" + (step + 1) + " / 04";
    get("round-id").textContent = c.rounds + " " + String(round+1).padStart(2,"0");
    get("steps").replaceChildren(...c.faces.map((name, index) => {
      const item = element("li",name, index === step ? "on" : index < step ? "done" : "");
      if (index === step) item.setAttribute("aria-current","step");
      return item;
    }));
    get("stage-label").textContent = c.stage[step];
    stage.setAttribute("aria-label",c.sceneAlt[step]);
    const cardSeat = phase === "result" ? selected : 0;
    portrait.querySelectorAll("[data-seat-name]").forEach(el => el.textContent = names[cardSeat]);
    portrait.querySelector("[data-secret-label]").textContent = c.secret;
    portrait.querySelector("[data-secret-name]").textContent = cardSeat === spySeat() ? d.otherWord : d.mainWord;
    portrait.dataset.open = String((phase === "secret" && open) || phase === "result");
    let title, lead;
    const box = get("phase-ui"), actions = get("actions");
    box.replaceChildren(); actions.replaceChildren(); bubble.hidden = true;
    if (phase === "secret") {
      title = open ? c.read : c.opening;
      lead = open ? c.readLead(d.mainWord) : c.intro;
      actions.append(action(open ? "join" : "show",open ? c.join : c.show,true));
    } else if (phase === "table") {
      title = c.clues; lead = c.clueLead;
      paintTurn();
      actions.append(action("next",clue === 7 ? c.skip : c.next,true), action("pause",paused ? c.play : c.pause));
      if (clue < 7) actions.append(action("skip",c.skip));
    } else if (phase === "vote" || phase === "turning") {
      title = c.vote; lead = c.voteLead;
      const options = element("div",undefined,"options");
      options.setAttribute("role","group");options.setAttribute("aria-label",c.faces[2]);
      for (let i=1;i<4;i++) {
        const opt = action("choose","");
        opt.className="option";opt.dataset.seat=String(i);
        opt.setAttribute("aria-pressed",String(i === selected));
        opt.disabled=phase === "turning";
        opt.append(pip(i),element("strong",names[i]),element("small",cluesFor(i).join(" · ")));
        options.append(opt);
      }
      box.append(options);
      const confirm = action("confirm",phase === "turning" ? c.tally : c.confirm,true);
      confirm.disabled = selected < 0 || phase === "turning";actions.append(confirm);
    } else {
      const spy = spySeat(), hit = selected === spy;
      title = hit ? c.hit : c.miss; lead = hit ? c.hitLead(names[spy],d.otherWord) : c.missLead(names[selected],names[spy]);
      const dl = element("dl",undefined,"word-pair");
      for (const [label,value] of [[c.word,d.mainWord],[c.other,names[spy]+" · "+d.otherWord]]) {
        const div = element("div");div.append(element("dt",label),element("dd",value));dl.append(div);
      }
      box.append(dl);
      const back = element("a",c.return,"text-action");back.href=returnUrl;
      actions.append(action("replay",c.replay,true),back);
      get("stage-label").textContent = c.role + " · " + names[selected];
    }
    get("heading").replaceChildren(title[0] + " ", element("em",title[1]));
    get("lead").textContent = lead;
    if (focusTitle) get("heading").focus({preventScroll:true});
    lastDraw = -1000;
    wake();
  }
  function toVote() {
    phase="vote"; paused=false; selected=-1; clueDeadline=0;
    window.masqAudio.cue("vote");
    render({focusTitle:true});
  }
  function advanceClue(now = performance.now()) {
    if (clue === 7) { toVote(); return; }
    clue++;
    clueStarted = now; clueDeadline = now + clueDuration; remaining = clueDuration;
    window.masqAudio.cue("clue");
    if (clue === 7) render();
    else paintTurn();
    lastDraw = -1000; wake();
  }
  function choose(seat) {
    selected=seat;
    get("phase-ui").querySelectorAll("[data-seat]").forEach(btn=>btn.setAttribute("aria-pressed",String(Number(btn.dataset.seat) === seat)));
    get("actions").querySelector("button").disabled=false;
    lastDraw=-1000;wake();
  }
  document.querySelector("main").addEventListener("click",event=>{
    const btn=event.target.closest("[data-action]");
    if (!btn || btn.disabled) return;
    const now=performance.now();
    switch(btn.dataset.action) {
      case "show":
        open=true;window.masqAudio.cue("secret");render({focusTitle:true});break;
      case "join":
        phase="table";clue=-1;paused=false;visualStart=now;
        clueDeadline=now+(reduced.matches ? 250 : 1750);window.masqAudio.cue("table");render({focusTitle:true});break;
      case "pause":
        if (!paused) remaining=Math.max(0,clueDeadline-now);
        else clueDeadline=now+remaining;
        paused=!paused;btn.textContent=paused?lines().play:lines().pause;wake();break;
      case "next": advanceClue();break;
      case "skip": toVote();break;
      case "choose": choose(Number(btn.dataset.seat));break;
      case "confirm":
        phase="turning";revealStart=now;window.masqAudio.cue("secret");render();break;
      case "replay":
        round++;phase="secret";open=false;selected=-1;clue=-1;visualStart=now;window.masqAudio.cue("replay");render({focusTitle:true});break;
    }
  });
  document.querySelector(".languages").addEventListener("click",event=>{
    const btn=event.target.closest("[data-lang]");
    if (!btn || btn.dataset.lang===lang) return;
    lang=btn.dataset.lang;
    const url=new URL(location.href);url.searchParams.set("lang",lang);history.replaceState(null,"",url);
    render();
  });
  get("sound").addEventListener("click",async()=>{
    const button=get("sound");
    button.disabled=true;
    if(audioOn){window.masqAudio.disable();audioOn=false;}
    else {audioOn=await window.masqAudio.enable();if(audioOn)window.masqAudio.cue("secret");}
    button.disabled=false;updateSound();
    if (!audioOn && window.AudioContext === undefined && window.webkitAudioContext === undefined) get("announce").textContent=lines().unavailable;
  });
  const ease = n => {n=Math.max(0,Math.min(1,n)); return n*n*(3-2*n);};
  function placeBubble(point) {
    if (!point || bubble.hidden) return;
    const x=Math.max(8,Math.min(stage.clientWidth-bubble.offsetWidth-8,point.x-bubble.offsetWidth/2));
    const y=Math.max(8,Math.min(stage.clientHeight-bubble.offsetHeight-8,point.y-bubble.offsetHeight-18));
    bubble.style.left=x+"px"; bubble.style.top=y+"px";
  }
  function wake(){ if (!request && !document.hidden) request=requestAnimationFrame(frame); }
  function frame(now){
    request=0;
    if(document.hidden) return;
    const age=now-visualStart;
    if(phase==="table" && !paused && now>=clueDeadline) advanceClue(now);
    if(phase==="turning" && now-revealStart >= (reduced.matches?60:1250)){
      phase="result";visualStart=now;window.masqAudio.cue(selected===spySeat()?"hit":"miss");render({focusTitle:true});
    }
    let alpha=0, zoom=1, focus=0;
    if(phase==="secret") alpha=1;
    if(phase==="table"){
      alpha=reduced.matches?0:1-ease(age/730);
      zoom=reduced.matches?1:ease(age/1700);
    }
    if(phase==="turning") focus=reduced.matches?1:ease((now-revealStart)/1200);
    if(phase==="result"){focus=1;alpha=reduced.matches?1:ease((now-visualStart)/620);}
    portrait.style.opacity=String(alpha);
    if (alpha<1 && now-lastDraw>= (reduced.matches ? 100 : 32)){
      const centers=window.MasqTable.draw(canvas,{zoom,focus,selected:Math.max(0,selected),active:phase==="table"&&clue>=0?clue%4:phase==="vote"?selected:-1,clueIndex:phase==="table"?clue:7,clueProgress:reduced.matches||paused?1:ease((now-clueStarted)/410),time:now/1000,phase,reduced:reduced.matches,names,lang});
      if(phase==="table" && clue>=0)placeBubble(centers[clue%4]);
      lastDraw=now;
    }
    if (phase==="table" && (!paused || age<1800) || phase==="turning" || phase==="result" && alpha<1) wake();
  }
  let hiddenAt = 0;
  document.addEventListener("visibilitychange",()=>{
    if(document.hidden){hiddenAt=performance.now();if(request)cancelAnimationFrame(request);request=0;}
    else {const gap=hiddenAt?performance.now()-hiddenAt:0;visualStart+=gap;if(phase==="turning")revealStart+=gap;if(phase==="table")clueDeadline+=gap;hiddenAt=0;lastDraw=-1000;wake();}
  });
  new ResizeObserver(()=>{lastDraw=-1000;wake();}).observe(stage);
  reduced.addEventListener("change",()=>{lastDraw=-1000;wake();});
  render();
})();
