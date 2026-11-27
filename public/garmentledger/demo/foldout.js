(()=>{
  'use strict';

  const styles = `
.gl-fold{position:absolute;inset:0;container-type:size;isolation:isolate;overflow:hidden;color:#263f36;background:radial-gradient(ellipse at 20% 12%,#456a5b 0%,#254a40 52%,#173c36 95%)}
.gl-fold *{box-sizing:border-box}
.gf-mat{position:absolute;inset:-15%;transform:rotate(-7deg);background-image:linear-gradient(#d3ddc716 1px,transparent 1px),linear-gradient(90deg,#d3ddc716 1px,transparent 1px),linear-gradient(#d3ddc70c 1px,transparent 1px),linear-gradient(90deg,#d3ddc70c 1px,transparent 1px);background-size:12cqw 12cqw,12cqw 12cqw,2cqw 2cqw,2cqw 2cqw}
.gf-camera{position:absolute;inset:0;perspective:170cqw;perspective-origin:55% 52%}
.gf-rig,.gf-sheet{transform-style:preserve-3d}
.gf-rig{position:absolute;inset:0;transform:rotateX(8deg) rotateZ(-3.2deg)}
.gf-shadow{position:absolute;left:10%;top:59%;height:25%;width:78%;background:#102d28;filter:blur(2.7cqw);opacity:.66;transform:rotate(-3deg);animation:gf-shadow 2.5s ease-out both}
.gf-sheet{position:absolute;width:100%;height:100%;left:100%;top:0;transform-origin:left center;transform:var(--opened);animation:gf-unfold var(--duration) cubic-bezier(.22,.72,.2,1) var(--delay) both}
.gf-first{--opened:rotateY(-9deg);--closed:translateX(29cqw) rotateY(-31deg) rotateZ(3deg);--duration:2.55s;--delay:0s;left:6%;top:17%;width:29%;height:65%;--paper:#f5ead0;--wire-at:1.72s;--pin-at:2.16s}
.gf-second{--closed:rotateY(-171deg);--opened:rotateY(23deg);--duration:1.75s;--delay:.22s;--paper:#f1e3c5;--wire-at:2.45s;--pin-at:2.87s}
.gf-third{--closed:rotateY(168deg);--opened:rotateY(-26deg);--duration:1.85s;--delay:.78s;--paper:#fff2d9;--wire-at:3.18s;--pin-at:3.78s}
.gf-face,.gf-back{position:absolute;inset:0;backface-visibility:hidden;border-block:1px solid #948d72}
.gf-face{background-color:var(--paper);background-image:linear-gradient(105deg,#fff9e944,transparent 62%,#90764816),repeating-linear-gradient(0deg,transparent 0 3px,#61583705 3.4px 4px);box-shadow:0 2px 0 #b3a98e}
.gf-first>.gf-face{border-left:1px solid #a49a7e}
.gf-third>.gf-face{border-right:1px solid #a49a7e}
.gf-face:before{position:absolute;content:"";inset:0;background:linear-gradient(90deg,#614e3430,transparent 8%,transparent 85%,#fff9e677 99%,#66563e38);opacity:.64;pointer-events:none}
.gf-second>.gf-face:before{background:linear-gradient(90deg,#5f543b47,#715e3228 9%,transparent 72%,#685b3c32)}
.gf-back{display:grid;place-content:center;transform:rotateY(180deg);background:repeating-linear-gradient(45deg,#acb0a115 0 1px,transparent 1px 3px),#b7baa1;border:1px solid #9a9f8b}
.gf-back:before{content:"";position:absolute;inset:7%;border:1px solid #63756666}
.gf-back span{font:italic clamp(17px,3cqw,30px)/1 Georgia,serif;letter-spacing:-.065em;color:#4b6154}
.gf-date,.gf-doc{position:absolute;left:8%;right:8%;font:600 clamp(8px,1.3cqw,13px)/1.15 ui-monospace,Consolas,monospace;letter-spacing:.065em;text-transform:uppercase;color:#43584a}
.gf-date{top:9%;border-bottom:1px solid #7b8067;padding-bottom:2.3cqh}
.gf-title{position:absolute;left:8%;right:7%;top:26%;font:400 clamp(16px,3.15cqw,40px)/1.02 Georgia,serif;letter-spacing:-.047em;text-wrap:balance}
.gf-amount{position:absolute;left:8%;top:48%;font:400 clamp(26px,6.4cqw,76px)/1 Georgia,serif;letter-spacing:-.07em;white-space:nowrap}
.gf-unit{font:700 clamp(9px,1.4cqw,15px)/1 ui-monospace,Consolas,monospace;letter-spacing:.035em;margin-left:.28em}
.gf-doc{bottom:7.8%;border-top:1px solid #96977c;padding-top:1.9cqh;font-size:clamp(8px,1.06cqw,12px);letter-spacing:.035em}
.gf-wire{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;--hidden-thread:inset(0 100% 0 0);animation:gf-thread .74s linear var(--wire-at) both}
.gf-wire path{fill:none;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke}
.gf-wire .gf-cast{stroke:#82654e69;stroke-width:3.7;transform:translateY(.6px)}
.gf-wire .gf-copper{stroke:#a84525;stroke-width:2.1}
.gf-wire .gf-glint{stroke:#ffb47b;stroke-width:.65;transform:translateY(-.14px)}
.gf-pin{position:absolute;left:var(--pin-x);top:var(--pin-y);width:clamp(6px,1.05cqw,12px);height:clamp(6px,1.05cqw,12px);border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffcb9a,#c26d3d 46%,#824329 78%);border:1px solid #924526;box-shadow:1px 2px 1px #593c3055;transform:translate(-50%,-50%);animation:gf-pin .32s ease-out var(--pin-at) both}
.gf-mobile{display:none}
@keyframes gf-unfold{from{transform:var(--closed)}to{transform:var(--opened)}}
@keyframes gf-thread{from{clip-path:var(--hidden-thread)}to{clip-path:inset(0)}}
@keyframes gf-pin{from{scale:.2;opacity:.1}to{scale:1;opacity:1}}
@keyframes gf-shadow{from{scale:.38 1;opacity:.36}to{scale:1;opacity:.66}}
@container (max-width:500px){
  .gf-rig{transform:rotateX(5deg) rotateZ(-2deg)}
  .gf-camera{perspective:190cqw;perspective-origin:50% 51%}
  .gf-sheet{top:100%;left:0;transform-origin:center top}
  .gf-first{top:8.5%;left:8%;width:83%;height:27%;--closed:translateY(20cqh) rotateX(-18deg);--opened:rotateX(4deg)}
  .gf-second{--closed:rotateX(165deg);--opened:rotateX(-17deg)}
  .gf-third{--closed:rotateX(-165deg);--opened:rotateX(26deg)}
  .gf-back{transform:rotateX(180deg)}
  .gf-face{border:0;border-inline:1px solid #96977c}
  .gf-first>.gf-face{border-top:1px solid #96977c}
  .gf-third>.gf-face{border-bottom:1px solid #96977c}
  .gf-face:before,.gf-second>.gf-face:before{background:linear-gradient(#70604733,transparent 14%,transparent 84%,#fffae688 98%,#9e927e66)}
  .gf-date{left:22%;top:16%;right:auto;padding:0;border:0;font-size:clamp(8px,2.25cqw,11px)}
  .gf-title{top:44%;left:22%;right:28%;font-size:clamp(12px,4.8cqw,22px);text-wrap:initial}
  .gf-amount{left:auto;right:5%;top:31%;font-size:clamp(17px,8cqw,35px)}
  .gf-unit{font-size:clamp(8px,2cqw,10px)}
  .gf-doc{display:none}
  .gf-wide{display:none}.gf-mobile{display:block}
  .gf-wire{--hidden-thread:inset(0 0 100% 0)}
  .gf-pin{left:var(--mobile-pin-x);top:var(--mobile-pin-y);width:6px;height:6px}
}
.gl-fold.gf-still *{animation:none!important}
@media(prefers-reduced-motion:reduce){.gl-fold *{animation:none!important}}
`;

  // The ends of each line share the same hinge point with the next sheet.
  const wirePaths = [
    { wide:'M5 80 C15 82 20 76 29 76 S43 81 55 77 S79 71 100 74', mobile:'M10 12 C9 29 18 36 16 52 S9 78 12 100', pin:[55,77,16,52] },
    { wide:'M0 74 C18 76 26 79 39 75 S51 70 61 73 S83 82 100 76', mobile:'M12 0 C15 22 10 31 11 48 S19 79 14 100', pin:[61,73,11,48] },
    { wide:'M0 76 C18 71 22 77 35 76 S49 69 58 72 S73 79 88 72', mobile:'M14 0 C13 22 17 29 16 46 S10 68 12 82', pin:[88,72,12,82] }
  ];

  function wire(path, orientation) {
    return `<svg class="gf-wire gf-${orientation}" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path class="gf-cast" d="${path}" pathLength="1"/><path class="gf-copper" d="${path}" pathLength="1"/><path class="gf-glint" d="${path}" pathLength="1"/>
    </svg>`;
  }

  function installStyle() {
    if (document.getElementById('gl-fold-style')) return;
    const sheet = document.createElement('style');
    sheet.id = 'gl-fold-style';
    sheet.textContent = styles;
    document.head.appendChild(sheet);
  }

  window.ledgerFoldout = function ledgerFoldout({lang, applied, reduced}) {
    installStyle();
    const fr = lang === 'fr';
    const amount = Math.min(15,Math.max(0,Math.round(Number(applied) || 0)));
    const dates = fr ? ['1er fév. 2026','8 fév. 2026','15 fév. 2026'] : ['1 Feb 2026','8 Feb 2026','15 Feb 2026'];
    const titles = fr ? ['Correction acceptée','Avoir reçu','Imputation simulée'] : ['Correction accepted','Credit received','Simulated application'];
    const refs = ['DEMO-RESPONSE-001','DEMO-CR-001',amount === 10 ? 'AP-001' : 'Simulation'];
    const amounts = [20,15,amount];
    const types = ['first','second','third'];
    // Each sheet is the physical hinge for the next one.
    const sheets = wirePaths.reduceRight((next, path, i) => {
      const [x,y,mx,my] = path.pin;
      return `<div class="gf-sheet gf-${types[i]}">
        <div class="gf-back" aria-hidden="true"><span>GarmentLedger</span></div>
        <div class="gf-face">
          <span class="gf-date">${dates[i]}</span><span class="gf-title">${titles[i]}</span>
          <span class="gf-amount">${amounts[i]}<span class="gf-unit">USD</span></span>
          <span class="gf-doc">${refs[i]}</span>
          ${wire(path.wide,'wide')}${wire(path.mobile,'mobile')}
          <i class="gf-pin" aria-hidden="true" style="--pin-x:${x}%;--pin-y:${y}%;--mobile-pin-x:${mx}%;--mobile-pin-y:${my}%"></i>
        </div>${next}</div>`;
    },'');
    return `<div class="gl-fold${reduced ? ' gf-still' : ''}"><div class="gf-mat" aria-hidden="true"></div><div class="gf-shadow" aria-hidden="true"></div><div class="gf-camera"><div class="gf-rig">${sheets}</div></div></div>`;
  };
})();
