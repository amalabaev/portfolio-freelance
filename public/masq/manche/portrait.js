/* The mask uses the same outlines as the Pop Choc artwork in the MASQ app. */
(() => {
  const mask = `<svg viewBox="0 0 360 270" fill="none" aria-hidden="true">
    <path fill="currentColor" d="M24 45C65 56 129 57 165 101L193 177C174 219 133 225 103 202 60 170 32 112 24 45ZM214 117C241 89 287 75 341 82 340 137 321 185 282 210 243 237 212 218 194 179Z"/>
    <g fill="var(--eye-paper,#f6f1df)"><path d="M65 111C96 96 134 119 157 148 124 164 88 151 65 111ZM225 148C249 119 281 110 311 111 294 146 263 165 225 148Z"/></g>
    <g fill="#1c1725"><ellipse cx="120" cy="133" rx="13" ry="20" transform="rotate(-30 120 133)"/><ellipse cx="269" cy="139" rx="13" ry="20" transform="rotate(24 269 139)"/></g>
  </svg>`;

  window.masqPortraitMarkup = `<style>
    #portrait { container-type:size; isolation:isolate; }
    #portrait *, #portrait *::before, #portrait *::after { box-sizing:border-box; }
    #portrait .mp-set {
      --device:min(36cqw, 39cqh); --unit:calc(var(--device) / 100);
      position:absolute; inset:0; overflow:hidden;
      background:
        radial-gradient(ellipse at 34% 24%,#e9e6f9 0%,transparent 53%),
        linear-gradient(135deg,#dad5ee 10%,#bdb6da 65%,#a49bc5 100%);
      color:#241a33; font-family:Arial,Helvetica,sans-serif; user-select:none;
    }
    #portrait .mp-floor {
      position:absolute; width:134%; height:152%; left:-14%; top:-25%;
      transform:rotate(-18deg);
      background:
        repeating-linear-gradient(90deg, transparent 0 7.95%,rgb(88 67 137 / .09) 7.99% 8%,transparent 8.04% 16%),
        repeating-linear-gradient(0deg, transparent 0 9.95%,rgb(88 67 137 / .08) 10% 10.04%,transparent 10.07% 20%);
    }
    #portrait .mp-floor::before, #portrait .mp-floor::after {
      content:""; position:absolute; left:5%; top:19%; width:92%; height:62%;
      border:1px solid rgb(86 66 130 / .16); border-radius:50%; transform:rotate(7deg);
    }
    #portrait .mp-floor::after { inset:15% auto auto 0; width:103%; height:70%; border-style:dashed; opacity:.66; }
    #portrait .mp-shadow {
      position:absolute; left:49%; top:47%; width:calc(var(--device) * 1.33); height:calc(var(--device) * 1.98);
      transform:translate(-32%,-28%) rotate(-25deg) skewY(10deg);
      background:linear-gradient(145deg,rgb(44 30 69 / .42),rgb(58 39 89 / .16) 69%,transparent);
      border-radius:18%; filter:blur(calc(5 * var(--unit))); transition:opacity .8s;
    }
    #portrait .mp-deck {
      position:absolute; left:60%; top:53%; width:calc(var(--device) * .97); height:calc(var(--device) * 1.42);
      transform:translate(-22%,-34%) rotate(18deg) skew(-4deg,-7deg);
      transition:transform .95s cubic-bezier(.2,.7,.18,1);
      animation:masq-deal-stack 1.05s cubic-bezier(.18,.67,.2,1) both;
    }
    #portrait .mp-ticket {
      position:absolute; inset:0; border-radius:5%; background:#fff7db;
      box-shadow:0 2px 0 #c2af98, 1px 3px 0 #9c8a76, 0 5px 4px #48335844;
    }
    #portrait .mp-ticket:nth-child(1) { transform:translate(9%,12%) rotate(12deg); background:#584498; }
    #portrait .mp-ticket:nth-child(2) { transform:translate(4%,5%) rotate(7deg); background:#e3dafa; }
    #portrait .mp-ticket:nth-child(3) { overflow:hidden; background:#f1e7d3; border:1px solid #fff7e9; }
    #portrait .mp-ticket:nth-child(3)::before {
      content:""; position:absolute; inset:5.5%; border-radius:4%;
      background:repeating-radial-gradient(ellipse at 50% 50%,#7662a7 0 .8%,#efe4cf 1.15% 3.8%);
      border:calc(.9 * var(--unit)) solid #7965a4;
    }
    #portrait .mp-ticket svg {
      position:absolute; width:51%; top:33%; left:24.5%; padding:1%; color:#514079;
      background:#f3eadb; border:1px solid #7662a7; transform:rotate(-5deg); border-radius:50%;
    }
    #portrait .mp-rig {
      position:absolute; left:46%; top:48%; width:var(--device); height:calc(var(--device) * 1.95);
      perspective:calc(var(--device) * 6.5); transform:translate(-50%,-50%);
      animation:masq-deal-phone 1.35s cubic-bezier(.18,.76,.15,1) both;
    }
    #portrait .mp-phone {
      position:absolute; inset:0; border-radius:14% / 7.1%;
      background:linear-gradient(140deg,#90829d,#26202c 26%,#110e16 69%,#796681);
      transform:rotateZ(-14deg) rotateY(-18deg) rotateX(18deg);
      box-shadow:inset 1px 1px 1px #e4dced,inset -2px -2px 2px #21182e,
        calc(.8 * var(--unit)) calc(1.2 * var(--unit)) #64596d,
        calc(1.5 * var(--unit)) calc(2 * var(--unit)) #43394d,
        calc(2 * var(--unit)) calc(2.8 * var(--unit)) #211c28,
        calc(2.6 * var(--unit)) calc(3.4 * var(--unit)) #55465f,
        calc(3.5 * var(--unit)) calc(4 * var(--unit)) #302836,
        calc(5 * var(--unit)) calc(7 * var(--unit)) calc(3 * var(--unit)) #49345455;
      transition:transform 1.02s cubic-bezier(.25,.7,.16,1);
    }
    #portrait .mp-glass {
      position:absolute; inset:2% 3.8%; border:calc(1.1 * var(--unit)) solid #17131a;
      border-radius:12% / 6%; background:#261d31; overflow:hidden;
      perspective:calc(var(--unit) * 310);
    }
    #portrait .mp-glass::after {
      content:""; position:absolute; pointer-events:none; inset:0; border-radius:inherit;
      background:linear-gradient(117deg,rgb(255 255 255 / .1),transparent 34%,transparent 80%,rgb(255 255 255 / .05));
      box-shadow:inset 0 0 4px #24192d66;
    }
    #portrait .mp-speaker {
      position:absolute; z-index:3; top:1.8%; left:39%; width:22%; height:2.3%;
      border-radius:100px; background:radial-gradient(circle at 83% 45%,#61586a 1%,#403749 5%,#141117 9%);
    }
    #portrait .mp-cardturn { width:100%; height:100%; transform-style:preserve-3d; transition:transform .9s cubic-bezier(.34,.08,.16,1); }
    #portrait .mp-face {
      position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; overflow:hidden;
      display:flex; flex-direction:column; align-items:stretch; justify-content:space-between;
      padding:15% 8% 9%; text-align:left; color:#20192c;
    }
    #portrait .mp-cover {
      background:
        radial-gradient(circle,rgba(81,63,19,.2) .5px,transparent .8px) 0 0 / 4px 4px,
        linear-gradient(151deg,#f9ff8c,#e5ea46);
    }
    #portrait .mp-cover::before {
      content:""; position:absolute; width:145%; aspect-ratio:1; top:27%; left:-21%;
      background:#b9c63a;
      clip-path:polygon(50% 0,56% 20%,70% 5%,70% 24%,88% 16%,79% 34%,99% 32%,84% 45%,100% 53%,82% 57%,94% 76%,75% 69%,77% 91%,62% 78%,52% 100%,46% 80%,31% 95%,31% 76%,13% 84%,22% 65%,1% 68%,17% 54%,0 47%,18% 41%,8% 24%,26% 29%,24% 11%,38% 23%); opacity:.68;
    }
    #portrait .mp-brand { position:relative; line-height:.87; font-weight:900; font-size:calc(20 * var(--unit)); letter-spacing:-.105em; }
    #portrait .mp-sub, #portrait .mp-secret-type {
      position:relative; display:block; font:700 calc(4.1 * var(--unit))/1.3 ui-monospace,Consolas,monospace;
      letter-spacing:.14em; text-transform:uppercase; margin-top:4%;
    }
    #portrait .mp-eyes { position:absolute; left:-1%; top:29%; width:103%; color:#251d31; --eye-paper:#fffcef; transform:rotate(-4deg); }
    #portrait .mp-eyes svg { width:100%; display:block; }
    #portrait .mp-strip {
      position:relative; border-top:1px solid currentColor; padding-top:6%;
      display:flex; align-items:center; justify-content:space-between;
    }
    #portrait .mp-stripes {
      width:44%; height:calc(5.5 * var(--unit));
      background:repeating-linear-gradient(90deg,currentColor 0 1.3%,transparent 1.3% 3.2%,currentColor 3.2% 6.5%,transparent 6.5% 9%,currentColor 9% 10%,transparent 10% 14%);
    }
    #portrait .mp-seat { font:700 calc(5.8 * var(--unit))/1 Arial,sans-serif; }
    #portrait .mp-back {
      transform:rotateY(180deg); background:
        radial-gradient(circle at 92% 0,#f7ff87 0 20%,transparent 20.3%),
        radial-gradient(circle at 105% -5%,#d7cca8 0 37%,transparent 37.3%), #f9f1de;
    }
    #portrait .mp-back > svg { width:27%; height:auto; color:#2d2335; --eye-paper:#faf2dd; }
    #portrait .mp-word {
      display:block; font-family:Georgia,'Times New Roman',serif; font-weight:600;
      font-size:calc(14 * var(--unit)); line-height:.98; letter-spacing:-.065em; overflow-wrap:anywhere;
    }
    #portrait .mp-back .mp-secret-type { margin:0 0 8%; font-size:calc(4.7 * var(--unit)); }
    #portrait[data-open="true"] .mp-cardturn { transform:rotateY(180deg); }
    #portrait[data-open="true"] .mp-phone { transform:rotateZ(-5deg) rotateY(-5deg) rotateX(6deg) scale(1.035); }
    #portrait[data-open="true"] .mp-deck { transform:translate(-12%,-35%) rotate(24deg) skew(-4deg,-7deg); }
    @keyframes masq-deal-phone {
      from { translate:-4% -14%; scale:1.23; rotate:-4deg; }
      to { translate:0 0; scale:1; rotate:0deg; }
    }
    @keyframes masq-deal-stack {
      from { translate:17% 13%; rotate:8deg; }
      to { translate:0 0; rotate:0deg; }
    }
    @container (max-aspect-ratio:6/5) {
      #portrait .mp-rig { left:46%; top:49%; }
      #portrait .mp-deck { left:59%; top:52%; }
    }
    @media(prefers-reduced-motion:reduce) {
      #portrait .mp-cardturn, #portrait .mp-phone, #portrait .mp-deck, #portrait .mp-rig { transition:none; animation:none; }
    }
  </style>
  <div class="mp-set" aria-hidden="true">
    <div class="mp-floor"></div><div class="mp-shadow"></div>
    <div class="mp-deck"><i class="mp-ticket"></i><i class="mp-ticket"></i><i class="mp-ticket">${mask}</i></div>
    <div class="mp-rig"><div class="mp-phone"><div class="mp-glass">
      <i class="mp-speaker"></i>
      <div class="mp-cardturn">
        <div class="mp-face mp-cover">
          <div><div class="mp-brand">MASQ</div><span class="mp-sub">Undercover Pop</span></div>
          <span class="mp-eyes">${mask}</span>
          <div class="mp-strip"><i class="mp-stripes"></i><b class="mp-seat" data-seat-name>Nova</b></div>
        </div>
        <div class="mp-face mp-back">
          ${mask}
          <div><span class="mp-secret-type" data-secret-label>Mot secret</span><strong class="mp-word" data-secret-name></strong></div>
          <div class="mp-strip"><i class="mp-stripes"></i><b class="mp-seat" data-seat-name>Nova</b></div>
        </div>
      </div></div></div></div>
  </div>`;
})();
