(() => {
  "use strict";

  let session = null;

  function disable() {
    if (!session) return;
    const { context, master } = session;
    session = null;
    master.disconnect();
    if (context.state !== "closed") context.close().catch(() => {});
  }

  async function enable() {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return false;
    let requested;
    try {
      if (!session) {
        const context = new Audio();
        const master = context.createGain();
        master.gain.value = 0.28;
        master.connect(context.destination);
        session = { context, master, paper: null };
      }
      requested = session;
      if (requested.context.state !== "running") await requested.context.resume();
      if (session !== requested) return false;
      if (requested.context.state === "running") return true;
    } catch {
      // Audio output can be unavailable or interrupted on mobile.
    }
    if (session === requested) disable();
    return false;
  }

  function connectNote(source, lastNode, start, length, level) {
    const { context, master } = session;
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(0.0001, start);
    envelope.gain.exponentialRampToValueAtTime(level, start + 0.008);
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + length);
    lastNode.connect(envelope);
    envelope.connect(master);
    source.onended = () => {
      source.disconnect();
      if (lastNode !== source) lastNode.disconnect();
      envelope.disconnect();
    };
    source.start(start);
    source.stop(start + length + 0.01);
  }

  function tone(start, pitch, length, level, endPitch = pitch) {
    const oscillator = session.context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(pitch, start);
    oscillator.frequency.exponentialRampToValueAtTime(endPitch, start + length);
    connectNote(oscillator, oscillator, start, length, level);
  }

  function brush(start, length, level) {
    const { context } = session;
    if (!session.paper) {
      const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * 0.15), context.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
      session.paper = buffer;
    }
    const source = context.createBufferSource();
    source.buffer = session.paper;
    const filter = context.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 0.65;
    filter.frequency.setValueAtTime(2100, start);
    filter.frequency.exponentialRampToValueAtTime(820, start + length);
    source.connect(filter);
    connectNote(source, filter, start, length, level);
  }

  function cue(kind) {
    if (session?.context.state !== "running") return;
    const now = session.context.currentTime + 0.005;
    switch (kind) {
      case "secret":
        brush(now, 0.13, 0.4);
        tone(now + 0.035, 523, 0.14, 0.18);
        break;
      case "table":
        tone(now, 131, 0.2, 0.35, 98);
        brush(now + 0.055, 0.09, 0.19);
        break;
      case "clue":
        tone(now, 440, 0.07, 0.19, 330);
        break;
      case "vote":
        tone(now, 294, 0.07, 0.27);
        tone(now + 0.075, 392, 0.11, 0.22);
        break;
      case "hit":
        tone(now, 392, 0.21, 0.28);
        tone(now + 0.065, 494, 0.23, 0.23);
        tone(now + 0.13, 587, 0.27, 0.2);
        break;
      case "miss":
        tone(now, 349, 0.18, 0.26);
        tone(now + 0.085, 294, 0.23, 0.24);
        break;
      case "replay":
        brush(now, 0.09, 0.33);
        brush(now + 0.068, 0.12, 0.25);
        break;
    }
  }

  window.masqAudio = { enable, disable, cue };
  window.addEventListener("pagehide", disable);
})();
