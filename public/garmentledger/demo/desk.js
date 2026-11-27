(() => {
  const shirtOutline = "M80 46 122 27Q148 18 174 25L215 37 252 56Q260 61 261 76L272 282Q273 294 259 297L60 307Q48 306 47 296L43 96Q42 70 59 58Z";
  const threadPath = "M12 85c74-58 100 114 195 79s114 37 151 21 51-55 115-34 102-11 113-31";
  const shirt = `
    <svg class="gl-desk-shirt" viewBox="0 0 310 353" aria-hidden="true">
      <defs>
        <linearGradient id="gld-cloth" x1="0" y1=".2" x2="1" y2=".65" gradientUnits="objectBoundingBox"><stop stop-color="#163f50"/><stop offset=".19" stop-color="#377184"/><stop offset=".47" stop-color="#54889a"/><stop offset=".72" stop-color="#386c80"/><stop offset="1" stop-color="#28576b"/></linearGradient>
        <linearGradient id="gld-collar" x2=".7" y2="1" gradientUnits="objectBoundingBox"><stop stop-color="#81a9b2"/><stop offset=".5" stop-color="#558697"/><stop offset="1" stop-color="#326071"/></linearGradient>
        <linearGradient id="gld-fold" x2="1" y2=".2" gradientUnits="objectBoundingBox"><stop stop-color="#153f50"/><stop offset=".32" stop-color="#638e9b"/><stop offset=".59" stop-color="#3b6f80"/><stop offset="1" stop-color="#193f50"/></linearGradient>
        <pattern id="gld-twill" width="3" height="3" patternUnits="userSpaceOnUse"><path d="M-1 3 3 -1M2 4 4 2" stroke="#cce8e5" stroke-width=".55" opacity=".47"/><path d="M0 1 1 0M1 3 3 1" stroke="#122d39" stroke-width=".55" opacity=".45"/></pattern>
        <pattern id="gld-fibres" width="4" height="3.5" patternUnits="userSpaceOnUse"><path d="M0 .5H4M1 0V3.5" stroke="#8f9282" stroke-width=".4" opacity=".5"/></pattern>
        <clipPath id="gld-shirt-clip"><path d="${shirtOutline}"/></clipPath>
        <g id="gld-button"><ellipse cx=".5" cy="1" rx="4.7" ry="4" fill="#173744" opacity=".63"/><ellipse rx="4" ry="3.7" fill="#b5bebb" stroke="#66818a" stroke-width=".8"/><path d="M-1.4 1 1.2-1M-1.4-1l2.6 2" stroke="#315360" stroke-width=".85"/></g>
      </defs>
      <g stroke-linejoin="round">
        <path d="M57 88 34 109 17 265Q17 280 34 288L66 293 73 122Z" fill="url(#gld-fold)" stroke="#1e4450" stroke-width="2"/>
        <path d="M23 247 18 271 47 282 52 257Z" fill="#477688" stroke="#234c5c" stroke-width="1.5"/>
        <path d="m22 268 25 9m-20-24 20 7" fill="none" stroke="#9eafb0" stroke-width=".7" stroke-dasharray="2 2"/>
        <path d="M250 79Q274 96 280 120L296 236Q298 250 284 254L263 256Z" fill="url(#gld-fold)" stroke="#244650" stroke-width="2"/>
        <path d="m263 223 31-6 2 25q1 8-7 10l-24 6Z" fill="#406c7a" stroke="#264d59" stroke-width="1.5"/>
        <path d="m267 227 23-4m-24 29 26-6" stroke="#a6b0a6" stroke-dasharray="2 2" stroke-width=".8"/>
        <path d="${shirtOutline}" transform="translate(0 5)" fill="#113644" stroke="#163642" stroke-width="2.5"/>
        <path d="${shirtOutline}" fill="url(#gld-cloth)" stroke="#244b58" stroke-width="1.5"/>
        <g clip-path="url(#gld-shirt-clip)">
          <path d="M66 60q28 21 8 70-12 29-5 53m-5 58q6 36-4 61m172-248q-17 30 6 54 17 18 13 42m-20 87q16 18 21 61" stroke="#c1d1ca" opacity=".14" stroke-width="7" fill="none"/>
          <path d="M61 66q19 29 5 66m166-63q-13 33 17 67m-21 87q24 33 22 69" stroke="#193e50" opacity=".16" stroke-width="6" fill="none"/>
          <path d="M41 86Q76 68 117 73m62-5q37-7 81 8M47 293q93 4 224-11" stroke="#2e5363" fill="none" stroke-width="2"/>
          <path d="M45 87Q79 71 117 76m63-6q36-6 81 9M48 296q98 5 222-11" stroke="#aec0b9" fill="none" stroke-dasharray="2.3 2.5" stroke-width=".95" opacity=".86"/>
          <path d="M143 71 157 68l14 234-15 2Z" fill="#538091" stroke="#2e5463" stroke-width=".85"/>
          <path d="m145 76 12 225m-2-226 13 225" stroke="#acc4c5" stroke-width=".8" stroke-dasharray="2.3 2.2" fill="none"/>
          <path d="m175 111 48-4 3 39q0 7-4 9l-17 11-22-6q-4-1-4-6Z" fill="#487a8b" stroke="#295766" stroke-width="1.7"/>
          <path d="m177 115 44-4 3 37-20 14-22-6Z" fill="none" stroke="#a9bdba" stroke-dasharray="2 1.8" stroke-width=".95"/>
          <path d="m173 107 51-4 1 13-23 8-28-4Z" fill="url(#gld-collar)" stroke="#305464" stroke-width="1"/>
          <path d="m176 117 26 4 20-7" stroke="#aab9b0" stroke-dasharray="2 2" stroke-width=".9" fill="none"/>
          <path d="${shirtOutline}" fill="url(#gld-twill)" opacity=".55"/>
        </g>
        <g><use href="#gld-button" x="151" y="105"/><use href="#gld-button" x="154" y="145"/><use href="#gld-button" x="156" y="185"/><use href="#gld-button" x="159" y="225"/><use href="#gld-button" x="161" y="265"/><use href="#gld-button" x="202" y="115"/></g>
        <path d="M90 49 115 25Q147 12 176 23L205 41l-15 44-32-12-18 8-42 24Z" fill="#173a48" opacity=".52" transform="translate(1 4)"/>
        <path d="M114 24Q146 9 178 21l17 14-10 22q-32 6-66 4Z" fill="#234b5a" stroke="#426c7a"/>
        <path d="M120 28q28-12 54-3l7 5q-28-5-61 4Z" fill="#688a94"/>
        <path d="m134 31 25-2 1 7-25 2Z" fill="#e0d6ba"/><path d="m138 34 17-1" stroke="#728879" stroke-width="1.3" stroke-dasharray="1.4 1.2"/>
        <path d="m112 25-25 22 16 53 43-28-20-22Z" fill="url(#gld-collar)" stroke="#365b68" stroke-width="1.2"/>
        <path d="M178 21q12 5 27 17l-11 55-39-22 17-29Z" fill="url(#gld-collar)" stroke="#365b68" stroke-width="1.2"/>
        <path d="m90 49 14 46 38-25m61-31-11 49-32-18" fill="none" stroke="#b9c8bb" stroke-dasharray="2 2" stroke-width="1.05"/>
        <g transform="translate(78 250) rotate(6)"><path d="m0 2 62-1 1 37-62 1Z" fill="#153439" opacity=".48" transform="translate(1 2)"/><rect width="62" height="37" rx="1" fill="#e3dac0"/><rect width="62" height="37" fill="url(#gld-fibres)"/><path d="M3 2v33m55-33v33" stroke="#758778" stroke-width=".95" stroke-dasharray="1.5 1.5"/><text x="31" y="26" text-anchor="middle" fill="#294d50" font-family="ui-monospace,monospace" font-size="23" font-weight="700">40</text></g>
      </g>
    </svg>`;

  window.ledgerDesk = ({lang}) => {
    const fr = lang === "fr";
    const invoice = fr ? "Facture" : "Invoice";
    const item = fr ? "Location de chemises" : "Shirt rental";
    const period = fr ? "12–18 JANV. 2026" : "12–18 JAN 2026";
    const rate = fr ? "40 × 3,00 USD" : "40 × USD 3.00";
    const total = fr ? "120 USD" : "USD 120";
    return `<style>
      .gl-desk{position:absolute;inset:0;overflow:hidden;container-type:size;isolation:isolate;background:radial-gradient(ellipse at 19% 12%,#507b6f 0%,transparent 67%),linear-gradient(139deg,#295448,#183f39 61%,#103a37);color:#253f36}
      .gl-desk::before,.gl-desk::after{content:"";position:absolute;inset:-24%;pointer-events:none}
      .gl-desk::before{background-image:linear-gradient(90deg,#e2ddac25 1px,transparent 1px),linear-gradient(#e2ddac25 1px,transparent 1px),linear-gradient(90deg,#e2ddac13 1px,transparent 1px),linear-gradient(#e2ddac13 1px,transparent 1px);background-size:108px 108px,108px 108px,18px 18px,18px 18px;transform:rotate(-8deg);opacity:.7}
      .gl-desk::after{z-index:4;background:linear-gradient(115deg,transparent 40%,#dbf2d308 43%,transparent 48%,#082d261c 68%,transparent 83%);mix-blend-mode:multiply}
      .gl-desk .gl-desk-shirt,.gl-desk .gl-desk-bill{display:block;overflow:visible;position:absolute;max-width:none;max-height:none}
      .gl-desk .gl-desk-shirt{width:min(60cqw,103cqh);top:51%;left:33%;transform:translate(-50%,-48%) rotate(-13deg);filter:drop-shadow(2px 3px 1px #102a29a1) drop-shadow(11px 14px 8px #0b2e2c75);animation:gld-lay-shirt 1.12s cubic-bezier(.2,.72,.23,1) backwards}
      .gl-desk .gl-desk-bill{width:min(42cqw,63cqh);top:49%;left:67%;transform:translate(-50%,-52%) rotate(8deg);filter:drop-shadow(1px 2px 1px #162a2485) drop-shadow(7px 12px 8px #0b30276b);animation:gld-slide-paper 1.32s 1.68s cubic-bezier(.21,.67,.23,1) backwards}
      .gl-desk .gl-desk-thread{position:absolute;left:21%;top:46%;width:74%;height:54%;overflow:visible;filter:drop-shadow(1px 2px 1px #112c2d9c)}
      .gl-desk .gl-desk-thread-reveal,.gl-desk .gl-desk-mark{stroke-dasharray:100;stroke-dashoffset:0}
      .gl-desk .gl-desk-thread-reveal{animation:gld-trace 1.78s .64s cubic-bezier(.38,.06,.38,1) backwards}
      .gl-desk .gl-desk-bobbin{position:absolute;left:22%;top:67%;width:min(10.5cqw,15.5cqh);overflow:visible;transform:translate(-75%,-57%) rotate(-23deg);filter:drop-shadow(2px 4px 2px #173129b5);animation:gld-roll 1.55s .26s cubic-bezier(.19,.61,.24,1) backwards}
      .gl-desk .gl-desk-pencil{transform:translate(242px,253px) rotate(-86deg);animation:gld-pencil 1.88s 2.78s linear backwards}
      .gl-desk .gl-desk-mark{animation:gld-trace .696s 3.325s linear backwards}
      @keyframes gld-lay-shirt{
        from{transform:translate(-67%,-63%) rotate(-23deg) scale(1.055)}
        78%{transform:translate(-49%,-47.6%) rotate(-12.6deg)}
        to{transform:translate(-50%,-48%) rotate(-13deg)}
      }
      @keyframes gld-roll{
        from{transform:translate(-215%,-112%) rotate(-107deg)}
        68%{transform:translate(-70%,-54%) rotate(-18deg)}
        to{transform:translate(-75%,-57%) rotate(-23deg)}
      }
      @keyframes gld-trace{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}
      @keyframes gld-slide-paper{
        from{transform:translate(29%,-62%) rotate(23deg)}
        76%{transform:translate(-51%,-51%) rotate(6.7deg)}
        to{transform:translate(-50%,-52%) rotate(8deg)}
      }
      @keyframes gld-pencil{
        0%{opacity:0;transform:translate(146px,322px) rotate(-65deg);animation-timing-function:ease-out}
        10%{opacity:1}
        29%{transform:translate(20px,272px) rotate(-43deg)}
        47%{transform:translate(86px,270px) rotate(-42deg)}
        66%{transform:translate(155px,271px) rotate(-39deg);animation-timing-function:ease-in-out}
        81%{transform:translate(206px,242px) rotate(-55deg);animation-timing-function:ease-out}
        100%{transform:translate(242px,253px) rotate(-86deg)}
      }
      @container (max-aspect-ratio: 7/5){.gl-desk .gl-desk-shirt{top:52%;left:24%;width:70cqw}.gl-desk .gl-desk-bill{width:min(51cqw,67cqh);left:68%;top:53%}}
      @media (prefers-reduced-motion:reduce){.gl-desk *{animation:none!important}}
    </style><div class="gl-desk" aria-hidden="true">
      ${shirt}
      <svg class="gl-desk-thread" viewBox="0 0 600 220" preserveAspectRatio="none">
        <defs><path id="gld-line" d="${threadPath}"/>
          <mask id="gld-unwind" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="220"><path class="gl-desk-thread-reveal" pathLength="100" d="${threadPath}" stroke="white" stroke-width="6" fill="none"/></mask></defs>
        <g mask="url(#gld-unwind)"><use href="#gld-line" fill="none" stroke="#9c4d2e" stroke-width="3.3"/><use href="#gld-line" fill="none" stroke="#e8955e" stroke-width="2.4"/><use href="#gld-line" fill="none" stroke="#fbc892" stroke-width=".85" stroke-dasharray="1.3 1.8"/></g>
      </svg>
      <svg class="gl-desk-bobbin" viewBox="0 0 78 52">
        <defs><linearGradient id="gld-winding" x2="0" y2="1"><stop stop-color="#6f3021"/><stop offset=".26" stop-color="#e6a277"/><stop offset=".47" stop-color="#eb9257"/><stop offset=".78" stop-color="#ac4f2f"/><stop offset="1" stop-color="#693522"/></linearGradient>
          <pattern id="gld-coils" width="3.4" height="34" patternUnits="userSpaceOnUse"><path d="m1 0 2 34" stroke="#582f20" stroke-width=".8"/><path d="m2 0 2 34" stroke="#ffd6a0" stroke-width=".8"/></pattern></defs>
        <ellipse cx="11" cy="26" rx="8" ry="23" fill="#8c6549"/><ellipse cx="14" cy="25" rx="7" ry="22.5" fill="#d2b18b"/>
        <path d="M13 6q23 4 49 0v38q-25-2-49 0-8-20 0-38Z" fill="url(#gld-winding)"/>
        <path d="M13 6q23 4 49 0v38q-25-2-49 0-8-20 0-38Z" fill="url(#gld-coils)" opacity=".64"/>
        <path d="m15 40 42-27m-42 23 27-19" stroke="#b95c31" stroke-width="1.1"/>
        <ellipse cx="62" cy="25.5" rx="8" ry="23" fill="#976c49"/><ellipse cx="65" cy="25" rx="8.2" ry="23" fill="#e1c198"/>
        <ellipse cx="65.5" cy="25" rx="5" ry="17.5" stroke="#b79570" stroke-width=".8" fill="none"/><ellipse cx="66" cy="25" rx="2.8" ry="6.5" fill="#63482e"/>
      </svg>
      <svg class="gl-desk-bill" data-ledger-prop="invoice" viewBox="0 0 260 314" aria-hidden="true">
        <defs><linearGradient id="gld-paper" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop stop-color="#fffdf2"/><stop offset=".68" stop-color="#f5efde"/><stop offset="1" stop-color="#e5ddc6"/></linearGradient>
          <pattern id="gld-paper-grain" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="1" cy="2" r=".43" fill="#786941" opacity=".25"/><path d="M3 0v1" stroke="#aa9972" stroke-width=".45" opacity=".34"/></pattern></defs>
        <path d="m4 3 251 1 2 304-249 3Z" fill="#b6b5a4" transform="rotate(-3 130 155)"/>
        <path d="m2 2 251 2 3 305-251 1Z" fill="#e8e2cb" transform="rotate(-1.6 130 155)"/>
        <path d="M1 2Q110 0 254 2l2 306-255 2Z" fill="url(#gld-paper)"/><path d="M1 2Q110 0 254 2l2 306-255 2Z" fill="url(#gld-paper-grain)"/>
        <g font-family="Arial,Helvetica,sans-serif" fill="#243f38">
          <path d="M20 24h24m-24 4h10" stroke="#b86b42" stroke-width="2.4"/>
          <text x="233" y="32" text-anchor="end" font-family="monospace" font-size="10" letter-spacing=".7">DEMO-1-002</text>
          <text x="20" y="83" font-family="Georgia,serif" font-size="45" letter-spacing="-2.8">${invoice}</text>
          <path d="M20 99h213" stroke="#49635a" stroke-width="1.4"/>
          <text x="20" y="120" font-family="monospace" font-size="10" letter-spacing=".85">${period}</text>
          <text x="20" y="158" font-size="18" font-weight="600" letter-spacing="-.6">${item}</text>
          <text x="20" y="181" font-size="16" letter-spacing="-.2">${rate}</text>
          <path d="M20 206h213" stroke="#839183" stroke-dasharray="2.5 2.5"/>
          <text x="20" y="226" font-size="11" font-weight="600" letter-spacing=".5">${fr ? "TOTAL HORS TAXES" : "PRE-TAX TOTAL"}</text>
          <text x="18" y="265" font-family="Georgia,serif" font-size="40" letter-spacing="-2.1">${total}</text>
          <path class="gl-desk-mark" pathLength="100" d="M20 272Q58 270 86 270T155 271" fill="none" stroke="#a25336" stroke-width="2.1" stroke-linecap="round"/>
          <path d="M20 281h213" stroke="#6c7b6c" stroke-width=".85"/>
          <path d="M20 290h58m-58 3h36" stroke="#c1c2b2" stroke-width="1.5"/>
          <g transform="translate(194 285)" fill="#5f7064"><path d="M0 0h2v10H0zm4 0h1v10H4zm3 0h4v10H7zm6 0h1v10h-1zm4 0h3v10h-3zm5 0h1v10h-1zm3 0h3v10h-3zm5 0h1v10h-1zm3 0h5v10h-5z"/></g>
        </g>
        <g class="gl-desk-pencil">
          <g style="filter:drop-shadow(0 2.4px 1.2px #49382168)" stroke-linejoin="round">
            <path d="M0 0 15-4.4h98l2 4.4-2 4.4H15Z" fill="#d49c4e"/>
            <path d="M15-4.4h94v2.7H15Z" fill="#ecd19b"/><path d="M15 1.1h94v3.3H15Z" fill="#9e6036"/>
            <path d="M0 0 14-4.4l3 1.4-1.8 1.5 2.9 2-2 1.7 1 2.2Z" fill="#e7c69d"/><path d="M0 0 5-1.5l.7 2.8Z" fill="#78432b"/>
            <rect x="108" y="-4.4" width="9" height="8.8" rx=".7" fill="#b4b8ac"/><path d="M110-4v8m4-8v8" stroke="#6f756a" stroke-width=".8"/>
            <path d="M117-4.1h6q3 0 3 3v2.2q0 3-3 3h-6Z" fill="#b77762"/>
          </g>
        </g>
      </svg>
    </div>`;
  };
})();
