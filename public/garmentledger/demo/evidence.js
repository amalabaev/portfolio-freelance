(() => {
  'use strict';

  const styles = `
.gl-proof{position:absolute;inset:0;isolation:isolate;container-type:size;overflow:hidden;background:radial-gradient(ellipse at 45% 30%,#295248,transparent 70%),#173f39;color:#243d32;font-family:Arial,sans-serif;--cream:#f6efdc;--print:#415b4c;--copper:#aa4928}
.gl-proof,.gl-proof *{box-sizing:border-box}
.gl-proof:before,.gl-proof:after{content:"";position:absolute;inset:0;pointer-events:none}
.gl-proof:before{background-image:linear-gradient(#b9d0ac0d 1px,transparent 1px),linear-gradient(90deg,#b9d0ac0d 1px,transparent 1px);background-size:4.2% 7.2%}
.gl-proof:after{z-index:8;opacity:.10;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='.6' filter='url(%23grain)'/%3E%3C/svg%3E");mix-blend-mode:multiply}
.gl-proof .ep-paper{position:absolute;background-color:var(--cream);background-image:linear-gradient(150deg,#fff8e9,#eee5c9);box-shadow:0 2.2cqh 2.6cqh #10282070,0 .5cqh .6cqh #11292155}
.gl-proof .ep-display{font-family:Georgia,'Times New Roman',serif;font-weight:normal;line-height:1.03;letter-spacing:-.055em;margin:0}
.gl-proof .ep-kicker,.gl-proof .ep-note,.gl-proof .ep-code,.gl-proof .ep-equation{font-family:ui-monospace,Consolas,monospace}
.gl-proof .ep-kicker{font-size:clamp(8px,1.26cqw,12px);font-weight:700;line-height:1.2;letter-spacing:.04em;text-transform:uppercase}
.gl-proof .ep-note,.gl-proof .ep-code{font-size:clamp(8px,1.28cqw,12px);line-height:1.3}
.gl-proof .ep-doc{top:16.5%;width:35%;height:60%;padding:3.4% 3.2%;display:flex;flex-direction:column;gap:1.8cqh;overflow:hidden}
.gl-proof .ep-contract{left:12.3%;transform:rotate(-6deg);--dx:-12%;--dr:-4deg}
.gl-proof .ep-invoice{left:51%;top:20%;transform:rotate(5deg);--dx:12%;--dr:4deg;background-image:linear-gradient(125deg,#fcf6e6 55%,#eee4cb)}
.gl-proof .ep-doc:after{position:absolute;content:"";right:0;top:0;width:11%;aspect-ratio:1;background:linear-gradient(45deg,#e2d6b9 49%,#35594c 51%);filter:drop-shadow(-1px 1px 1px #746b5433)}
.gl-proof .ep-code{color:var(--print);border-bottom:1px solid #9a9c80;padding-bottom:1cqh;letter-spacing:.02em}
.gl-proof .ep-doc .ep-display{font-size:clamp(22px,4.7cqw,44px)}
.gl-proof .ep-detail{font-size:clamp(10px,1.7cqw,15px);line-height:1.22}
.gl-proof .ep-quantity{display:flex;justify-content:space-between;color:var(--print);border-bottom:1px dotted #b1ab8e;padding-bottom:.65cqh}
.gl-proof .ep-price{width:max-content;position:relative;margin:auto 0 .8cqh;font-family:Georgia,serif;font-size:clamp(18px,3.8cqw,36px);font-weight:bold;line-height:1}
.gl-proof .ep-price svg{position:absolute;inset:-32% -13% -30%;width:126%;height:162%;fill:none;stroke:#b65730;stroke-width:1.6;overflow:visible}
.gl-proof .ep-price path{stroke-dasharray:1}
.gl-proof .ep-foot{padding-top:.8cqh;border-top:1px solid #89917b;color:var(--print)}
.gl-proof .ep-strip{left:9%;right:9%;bottom:6.8%;height:17%;padding:1.2% 3%;transform:rotate(-1.5deg);border-left:1cqw solid #d47749;display:flex;align-items:center;justify-content:space-between;gap:2%;--dy:40%;background:#f9f1d9}
.gl-proof .ep-equation{font-size:clamp(10px,1.85cqw,17px);line-height:1.2;margin-top:.6cqh}
.gl-proof .ep-total{font-size:clamp(22px,4.6cqw,44px);white-space:nowrap}
.gl-proof .ep-pending{color:#686f5f}
.gl-proof .ep-currency{font-family:Arial,sans-serif;vertical-align:baseline;font-size:.37em;letter-spacing:.035em;font-weight:bold}
.gl-proof .ep-creditback{left:13%;top:20%;width:77%;height:64%;transform:rotate(2.4deg);background:#ccbfa2}
.gl-proof .ep-credit{left:11.5%;top:19.5%;width:77%;height:66%;display:grid;grid-template-columns:1.7fr 1fr;transform:rotate(-2deg);--dy:14%}
.gl-proof .ep-credit-main,.gl-proof .ep-credit-stub{min-width:0;display:flex;flex-direction:column}
.gl-proof .ep-credit-main{padding:5.3% 7.5% 5.3% 8%}
.gl-proof .ep-credit-stub{position:relative;padding:11% 10% 8%;border-left:2px dashed #a6a180;background:linear-gradient(95deg,#b3ad8c59,transparent 12%),#ede4c9}
.gl-proof .ep-credit-stub:after{content:"";position:absolute;right:0;bottom:0;width:16%;aspect-ratio:1;background:linear-gradient(135deg,#d3c8a9 50%,#36594b 51%);filter:drop-shadow(-1px -1px 1px #776d4f30)}
.gl-proof .ep-credit-title{font-size:clamp(23px,5.1cqw,48px);margin:1cqh 0 .8cqh}
.gl-proof .ep-credit-title:after{content:"";display:block;max-width:7cqw;width:28%;height:2px;background:#cb724e;margin:1.5cqh 0}
.gl-proof .ep-credit-value,.gl-proof .ep-book-value{font-size:clamp(32px,7.7cqw,70px);white-space:nowrap}
.gl-proof .ep-gauge-wrap{margin-top:auto}
.gl-proof .ep-gauge{height:2.7cqh;min-height:6px;border-block:1px solid #5b6551;margin:.9cqh 0 .7cqh;position:relative;background:#cdcbb0}
.gl-proof .ep-gauge:before,.gl-proof .ep-gauge:after{content:"";position:absolute;inset:0}
.gl-proof .ep-gauge:before{background:#bf603c;transform-origin:left;transform:scaleX(var(--applied-ratio,var(--start-ratio)));transition:transform .2s}
.gl-proof .ep-gauge:after{background:repeating-linear-gradient(90deg,transparent 0 calc(100% / 15 - 1px),#f7f0db calc(100% / 15 - 1px) calc(100% / 15))}
.gl-proof .ep-stub-value{font-size:clamp(21px,4.7cqw,44px);margin-top:1.2cqh}
.gl-proof .ep-stamp{align-self:center;margin:auto;display:grid;place-items:center;border:3px double var(--copper);width:8.3cqw;aspect-ratio:1;border-radius:50%;color:var(--copper);transform:rotate(-13deg)}
.gl-proof .ep-stamp svg{width:62%;height:62%;fill:none;stroke:currentColor;stroke-width:2.7}
.gl-proof .ep-stub-bottom{border-top:1px solid #a5a384;padding-top:1.5cqh}
.gl-proof .ep-cover{left:8.8%;top:19.8%;width:82.4%;height:65.5%;border-radius:4px 9px 7px 4px;transform:rotate(-2deg);background:#996447;box-shadow:0 2.2cqh 3cqh #10282099}
.gl-proof .ep-spread{left:9.5%;top:18%;width:81%;height:65%;display:grid;grid-template-columns:1fr 1fr;transform:rotate(-2deg);--dy:10%;box-shadow:0 .7cqh 0 #d6c6a3,0 1cqh 0 #a39779}
.gl-proof .ep-book-page{min-width:0;padding:8% 10%;display:flex;flex-direction:column;position:relative;background-image:repeating-linear-gradient(transparent 0 4.5cqh,#63746420 4.5cqh calc(4.5cqh + 1px));background-position:0 1.9cqh}
.gl-proof .ep-book-page.ep-left{background-color:#f2ebd7;box-shadow:inset -2.2cqw 0 1.8cqw -2cqw #57543c70;border-right:1px solid #b9ad91}
.gl-proof .ep-book-page.ep-right{background-color:#fbf3dd;box-shadow:inset 1.6cqw 0 1.4cqw -1.4cqw #6c674750}
.gl-proof .ep-book-page.ep-right:after{content:"";position:absolute;right:12%;top:0;width:7%;height:10%;background:#c7683c;clip-path:polygon(0 0,100% 0,100% 100%,50% 75%,0 100%)}
.gl-proof .ep-book-page .ep-kicker{padding-top:3.8cqh;color:#4c5f52}
.gl-proof .ep-book-title{font-size:clamp(20px,4.1cqw,38px);margin:3cqh 0 1.5cqh}
.gl-proof .ep-book-value{color:#314b41}
.gl-proof .ep-book-page.ep-right .ep-book-value{color:#995033}


.gl-proof .ep-book-foot{margin-top:auto;border-top:1px solid #a1997b;padding-top:1.4cqh}
@keyframes gl-proof-enter{from{translate:var(--dx,0) var(--dy,10%);rotate:var(--dr,0deg);opacity:0}to{translate:0 0;rotate:0deg;opacity:1}}
@keyframes gl-proof-pencil{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes gl-proof-ink{from{opacity:0}to{opacity:1}}
@container (max-width:530px){
.gl-proof .ep-doc{left:6%;width:41%;height:57%;top:18%;padding:4% 3.8%;gap:1.25cqh}
.gl-proof .ep-invoice{left:53%;top:21%}
.gl-proof .ep-strip{left:4%;right:4%;height:16%;bottom:8%}
.gl-proof .ep-creditback,.gl-proof .ep-credit{width:88%;left:6%;top:21%;height:62%}
.gl-proof .ep-creditback{left:7%;top:22%}
.gl-proof .ep-credit-main{padding:7%}
.gl-proof .ep-credit-stub{padding:12% 8% 9%}
.gl-proof .ep-credit-stub .ep-kicker{letter-spacing:0}
.gl-proof .ep-cover{left:3%;width:94%;top:21%;height:62%}
.gl-proof .ep-spread{left:4%;width:92%;top:19.8%;height:61.5%}
.gl-proof .ep-book-page{padding-inline:7.5%}
}
/* On the desk, the first fold opens before the clip catches the contract. */
.gl-proof .ep-fold,.gl-proof .ep-pencil-point,.gl-proof .ep-stamp-tool,.gl-proof .ep-jacket,.gl-proof .ep-flyleaf{pointer-events:none}
.gl-proof .ep-fold{position:absolute;inset:0 0 50%;z-index:2;opacity:0;transform-origin:center bottom;background:repeating-linear-gradient(transparent 0 17%,#9a977d40 17% calc(17% + 1px)),linear-gradient(#f8efdb,#e5d7b6);border-bottom:1px solid #b9aa86}
.gl-proof .ep-clip{position:absolute;width:11%;height:21%;right:7%;top:-1%;z-index:3;overflow:visible;filter:drop-shadow(.25cqw .5cqh .12cqw #2a362355);transform:rotate(9deg)}
.gl-proof .ep-clip path{fill:none;stroke-linecap:round;stroke-linejoin:round}
.gl-proof .ep-pencil-point{position:absolute;left:0;top:0;width:0;height:0;opacity:0;z-index:7}
.gl-proof .ep-pencil-point svg{position:absolute;left:0;bottom:0;width:clamp(58px,13cqw,120px);height:auto;overflow:visible;filter:drop-shadow(.5cqw .9cqh .4cqw #28372a60)}
.gl-proof .ep-total{position:relative}
.gl-proof .ep-sum-line{position:absolute;left:0;right:0;bottom:-.8cqh;width:100%;height:.95cqh;overflow:visible;stroke:#b65730;stroke-width:1.9;fill:none}
.gl-proof .ep-sum-line path,.gl-proof .ep-account-line path{stroke-dasharray:1}
.gl-proof.gl-enter .ep-contract{animation:gl-desk-arrive .85s cubic-bezier(.21,.75,.25,1) both;--slide:22%;--rise:-19%;--tilt:11deg}
.gl-proof.gl-enter .ep-invoice{animation:gl-desk-arrive .95s .16s cubic-bezier(.21,.75,.25,1) both;--slide:-54%;--rise:-16%;--tilt:-14deg}
.gl-proof.gl-enter .ep-fold{animation:gl-fold-open 1.3s .32s both}
.gl-proof.gl-enter .ep-invoice .ep-fold{animation-delay:.62s}
.gl-proof.gl-enter .ep-clip{animation:gl-clip-on .75s 1.25s both}
.gl-proof.gl-enter .ep-strip{animation:gl-proof-enter .6s 1.5s both}
.gl-proof.gl-enter .ep-price path{animation:gl-proof-pencil .65s 1.55s both}
.gl-proof.gl-choose .ep-contract .ep-price path{animation:gl-proof-pencil .72s .27s linear both}
.gl-proof.gl-verify .ep-contract .ep-price path{animation:gl-proof-pencil .68s .32s linear both}
.gl-proof.gl-verify .ep-invoice .ep-price path{animation:gl-proof-pencil .69s 1.48s linear both}
.gl-proof.gl-verify .ep-sum-line path{animation:gl-proof-pencil .48s 2.55s linear both}
.gl-proof.gl-verify .ep-equation{animation:gl-ink-write .64s .45s both}
.gl-proof.gl-verify .ep-total{animation:gl-proof-ink .48s 1.92s both}
@keyframes gl-desk-arrive{0%{translate:var(--slide) var(--rise);rotate:var(--tilt);clip-path:inset(0 0 48%);opacity:0}24%{opacity:1}52%{clip-path:inset(0 0 46%)}100%{translate:0 0;rotate:0deg;clip-path:inset(0)}}
@keyframes gl-fold-open{0%,15%{opacity:1;transform:perspective(75cqw) rotateX(0deg)}60%{opacity:1;transform:perspective(75cqw) rotateX(-102deg)}95%,100%{opacity:0;transform:perspective(75cqw) rotateX(-174deg)}}
@keyframes gl-clip-on{0%{translate:-80% -120%;rotate:-28deg;opacity:0}50%{opacity:1}78%{translate:0 4%;rotate:3deg}100%{translate:0 0;rotate:0deg}}

/* The perforated counterfoil separates before the rubber stamp makes contact. */
.gl-proof .ep-credit.ep-paper,.gl-proof .ep-spread.ep-paper{background:none;box-shadow:none}
.gl-proof .ep-creditback.ep-paper{width:47%;background:#c9bd99}
.gl-proof .ep-credit-main,.gl-proof .ep-credit-stub{box-shadow:0 1.3cqh 1.65cqh #112a2660}
.gl-proof .ep-credit-main{background:linear-gradient(120deg,#fcf4de,#eee6cb)}
.gl-proof .ep-credit-stub{translate:3.3% 1%;rotate:1.8deg;transform-origin:top left}
.gl-proof .ep-credit-stub:before{content:"";position:absolute;left:-1px;top:0;bottom:0;width:max(3px,.57cqw);background:radial-gradient(circle at 0 50%,#345348 0 35%,transparent 45%) left top / 100% 2.5cqh repeat-y;transform-origin:top}
.gl-proof .ep-stamp{border:0;position:relative;overflow:visible}
.gl-proof .ep-imprint{display:grid;place-items:center;width:100%;height:100%;border:3px double var(--copper);border-radius:50%}
.gl-proof .ep-stamp-tool{position:absolute;bottom:47%;left:50%;width:154%;aspect-ratio:80 / 88;opacity:0;transform-origin:50% 100%;filter:drop-shadow(.45cqw .7cqh .25cqw #33291d50)}
.gl-proof .ep-stamp .ep-stamp-tool svg{width:100%;height:100%;fill:initial;stroke:none}
.gl-proof.gl-enter .ep-credit{animation:gl-desk-arrive 1s both;--slide:-9%;--rise:24%;--tilt:-5deg}
.gl-proof.gl-enter .ep-credit-main{animation:gl-tear-resist 1.05s .83s both}
.gl-proof.gl-enter .ep-credit-stub{animation:gl-tear-away 1.17s .83s both}
.gl-proof.gl-enter .ep-credit-stub:before{animation:gl-tear-line .7s .96s both}
.gl-proof.gl-enter .ep-credit-value{animation:gl-ink-write .55s .78s both}
.gl-proof.gl-enter .ep-stamp-tool{animation:gl-press-stamp 1.6s 1.62s both}
.gl-proof.gl-enter .ep-imprint{animation:gl-leave-ink .23s 2.39s both}
@keyframes gl-tear-away{0%{translate:0 0;rotate:0deg}32%{translate:.3% -.8%;rotate:-1.2deg}65%{translate:3.8% .4%;rotate:2deg}82%{translate:7% 1%;rotate:3.5deg}100%{translate:3.3% 1%;rotate:1.8deg}}
@keyframes gl-tear-resist{0%,100%{translate:0 0;rotate:0deg}42%{translate:-1.2% .6%;rotate:-.6deg}73%{translate:-.3% 0;rotate:.35deg}}
@keyframes gl-tear-line{from{scale:1 0}to{scale:1 1}}
@keyframes gl-press-stamp{0%{opacity:0;transform:translate(40%,-125%) rotate(21deg) scale(1.08)}21%{opacity:1;transform:translate(-34%,-64%) rotate(-6deg)}45%{transform:translate(-50%,2%) rotate(7deg)}51%,58%{opacity:1;transform:translate(-50%,8%) rotate(10deg) scale(1.05,.9)}74%{opacity:1;transform:translate(-30%,-48%) rotate(15deg)}100%{opacity:0;transform:translate(45%,-135%) rotate(27deg) scale(1.08)}}
@keyframes gl-leave-ink{0%{opacity:0;scale:.94}100%{opacity:1;scale:1}}

/* A cloth cover and a flyleaf turn around the same stitched binding. */
.gl-proof .ep-book-page{box-shadow:0 .55cqh 0 #cfbe9b,0 .85cqh 0 #93856c}
.gl-proof .ep-jacket,.gl-proof .ep-flyleaf{position:absolute;left:50%;width:50%;inset-block:0;transform-origin:left center;opacity:0;z-index:3}
.gl-proof .ep-jacket{border-radius:0 3px 3px 0;border:1px solid #513e2b;background:repeating-linear-gradient(20deg,#fff1d711 0 1px,transparent 1px 3px),repeating-linear-gradient(110deg,#342c251a 0 1px,transparent 1px 3px),linear-gradient(90deg,#6e4832,#ad7851 10%,#936344 96%,#68452d);box-shadow:.5cqw 1cqh 1.4cqh #1c201d40}
.gl-proof .ep-jacket:before{content:"";position:absolute;inset:5% 6% 5% 10%;border:3px double #e3c28b99}
.gl-proof .ep-jacket:after{content:"GarmentLedger";position:absolute;left:14%;right:10%;top:44%;padding:.5em 0;text-align:center;color:#f0cf91;font:italic clamp(13px,3cqw,29px) Georgia,serif;letter-spacing:-.04em;border-block:1px solid #cfac79}
.gl-proof .ep-flyleaf{z-index:2;background:linear-gradient(90deg,#b9ac87,#f4ecd7 12%,#e5dac1);border-top:1px solid #cfbf9c}
.gl-proof .ep-spine{position:absolute;left:49.56%;width:1%;inset-block:0;background:repeating-linear-gradient(to bottom,transparent 0 10%,#a68855 10% 13%,transparent 13% 25%);z-index:1;opacity:.7;pointer-events:none}
.gl-proof .ep-book-foot{position:relative;border:none}
.gl-proof .ep-account-line{position:absolute;left:0;top:0;width:100%;height:.8cqh;fill:none;stroke:#93603e;stroke-width:1.15;overflow:visible}
.gl-proof.gl-enter .ep-cover{animation:gl-cover-expand 1.65s both}
.gl-proof.gl-enter .ep-book-page.ep-left{animation:gl-left-page 1.7s both}
.gl-proof.gl-enter .ep-jacket{animation:gl-open-jacket 1.65s both}
.gl-proof.gl-enter .ep-jacket:after{animation:gl-cover-lettering .45s .25s both}
.gl-proof.gl-enter .ep-flyleaf{animation:gl-turn-leaf 1.3s .53s both}
.gl-proof.gl-enter .ep-spine{animation:gl-binding .35s 1.3s both}
.gl-proof.gl-enter .ep-left .ep-account-line path{animation:gl-proof-pencil .58s 1.65s linear both}
.gl-proof.gl-enter .ep-right .ep-account-line path{animation:gl-proof-pencil .63s 2.3s linear both}
.gl-proof.gl-enter .ep-left .ep-book-value{animation:gl-ink-write .6s 1.57s both}
.gl-proof.gl-enter .ep-right .ep-book-value{animation:gl-ink-write .62s 2.23s both}
@keyframes gl-cover-expand{0%,15%{clip-path:inset(-5% -5% -8% 50%)}100%{clip-path:inset(-5% -5% -8% -5%)}}
@keyframes gl-open-jacket{0%,12%{opacity:1;transform:perspective(110cqw) rotateY(0deg)}50%{opacity:1;transform:perspective(110cqw) rotateY(-100deg)}87%{opacity:1}100%{opacity:0;transform:perspective(110cqw) rotateY(-179deg)}}
@keyframes gl-turn-leaf{0%,8%{opacity:1;transform:perspective(92cqw) rotateY(-1deg)}60%{opacity:1;transform:perspective(92cqw) rotateY(-104deg) skewY(2deg)}100%{opacity:0;transform:perspective(92cqw) rotateY(-177deg) skewY(0deg)}}
@keyframes gl-left-page{0%,45%{opacity:0}100%{opacity:1}}
@keyframes gl-cover-lettering{0%,70%{opacity:1}100%{opacity:0}}
@keyframes gl-binding{from{opacity:0}to{opacity:.7}}
@keyframes gl-ink-write{from{clip-path:inset(-10% 100% -15% 0)}to{clip-path:inset(-10% -5% -15% 0)}}
@container(max-width:530px){.gl-proof .ep-creditback.ep-paper{width:52%}}
@media (prefers-reduced-motion:reduce){
  .gl-proof *,.gl-proof *:before,.gl-proof *:after{animation:none!important;transition:none!important}
  .gl-proof .ep-pencil-point{visibility:hidden}
}
.gl-proof.gl-still *,.gl-proof.gl-still *:before,.gl-proof.gl-still *:after{animation:none!important;transition:none!important}
`;

  function installStyle() {
    if (document.getElementById('gl-evidence-style')) return;
    const sheet = document.createElement('style');
    sheet.id = 'gl-evidence-style';
    sheet.textContent = styles;
    document.head.appendChild(sheet);
  }


  // Sample the actual paths after layout so the pencil follows rotated sheets at every width.
  function drawWithPencil(root, action) {
    const pencil = root.querySelector('.ep-pencil-point');
    if (!pencil || !pencil.animate || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const table = root.getBoundingClientRect();
    if (!table.width || !table.height) return;
    const duration = action === 'choose' ? 1350 : 3420;
    const radius = root.clientWidth * .07;
    const frames = [];
    function frame(time, point, angle = 0, opacity = 1) {
      frames.push({ offset: time / duration, transform: 'translate(' + point.x + 'px,' + point.y + 'px) rotate(' + angle + 'deg)', opacity });
    }
    function follow(selector, start, end) {
      const path = root.querySelector(selector);
      if (!path) return;
      const matrix = path.getScreenCTM();
      if (!matrix) return;
      const length = path.getTotalLength();
      const points = Array.from({ length: 25 }, (_, i) => {
        const p = path.getPointAtLength(length * i / 24).matrixTransform(matrix);
        return { x: (p.x - table.left) * root.clientWidth / table.width, y: (p.y - table.top) * root.clientHeight / table.height };
      });
      const first = points[0];
      const last = points[24];
      if (!frames.length) {
        frame(0, { x: first.x - radius, y: first.y - radius * 2.1 }, -18, 0);
        frame(start * .65, { x: first.x - radius * .4, y: first.y - radius * .56 }, -6);
      }
      points.forEach((p, i) => frame(start + (end - start) * i / 24, p, -2 + 4 * Math.sin(i / 24 * Math.PI * 2)));
      frame(end + 100, { x: last.x + radius * .3, y: last.y - radius * .55 }, 7);
      return last;
    }
    let last = follow('.ep-contract .ep-price path', action === 'choose' ? 270 : 320, action === 'choose' ? 990 : 1000);
    if (action === 'verify') {
      follow('.ep-invoice .ep-price path', 1480, 2170);
      last = follow('.ep-sum-line path', 2550, 3030) || last;
    }
    if (!last) return;
    frame(duration, {x: last.x + radius * 1.15, y: last.y - radius * 1.7}, 17, 0);
    pencil.animate(frames, { duration, easing: 'linear' });
  }

  const paperclip = '<svg class="ep-clip" viewBox="0 0 24 52" aria-hidden="true"><path d="M7 11V37Q7 44 13 44T19 37V7Q19 2 14 2T9 7V34Q9 38 13 38T16 34V12" stroke="#58655b" stroke-width="3.4"/><path d="M7.1 11V37Q7.1 43 13 43T18.5 37V7Q18.5 2.5 14 2.5T9.5 7V34Q9.5 37.4 13 37.4T15.6 34V12" stroke="#d8ddcf" stroke-width="1.3"/></svg>';
  const writingTool = '<span class="ep-pencil-point" aria-hidden="true"><svg viewBox="0 0 95 74"><path d="M0 74 6 59 77 3Q79 1 81 3L87 11Q88 13 85 15L15 69Z" fill="#965035"/><path d="m6 59 71-56 4 3-70 57z" fill="#f1ab6d"/><path d="m11 63 70-57 4 5-70 56z" fill="#d77843"/><path d="m6 59 9 8-15 7z" fill="#dfba85"/><path d="m0 74 2.3-6 3.2 3.1z" fill="#643b2b"/><path d="m72 7 5-4 9 10-5 4z" fill="#c4bc9e"/><path d="m75 7 5-4 7 8-5 4z" fill="#6c8175"/><path d="m79 3 3-2q2-1 4 1l5 6q1 2-1 4l-3 2z" fill="#a94c32"/></svg></span>';
  const stampTool = '<span class="ep-stamp-tool"><svg viewBox="0 0 80 88"><ellipse cx="40" cy="81" rx="31" ry="6" fill="#392b25"/><path d="M10 69h60v12q-27 9-60 0z" fill="#914e33"/><ellipse cx="40" cy="70" rx="31" ry="7" fill="#d09355"/><path d="m17 60 7-6h32l7 6 5 8q-29 9-56 0z" fill="#5e7065"/><path d="m21 59 6-4h21l8 6-4 5-37-1z" fill="#9aa78f"/><path d="M32 54q4-12 1-19l-8-10 29 1-8 10q-3 10 2 18-6 6-16 0z" fill="#754732"/><path d="M36 35q3 9 0 17l3 1q3-13 0-18z" fill="#b77a51"/><path d="M21 13Q23 2 40 2t20 12q2 9-9 15l-7 7H34l-7-8q-9-6-6-15z" fill="#895338"/><ellipse cx="39" cy="12" rx="17" ry="8" fill="#ab7351"/><path d="M27 10q6-7 14-5" fill="none" stroke="#e1b58c" stroke-linecap="round" stroke-width="2"/></svg></span>';
  window.ledgerEvidence = function ledgerEvidence({ scene, lang, applied = 10, reduced = false, rate = '', verified = false, action = 'enter' }) {
    const en = lang === 'en';
    const t = (fr, english) => en ? english : fr;
    const amount = Math.max(0, Math.min(15, Math.round(Number(applied) || 0)));
    const selected = rate === 'january' || rate === 'february';
    const money = (value, attribute = '') => {
      const number = attribute ? '<span ' + attribute + '>' + value + '</span>' : value;
      return number + ' <small class="ep-currency">USD</small>';
    };
    const circle = '<svg viewBox="0 0 110 36" preserveAspectRatio="none" aria-hidden="true"><path d="M22 7C46 -1 103 3 106 15S94 34 57 33 3 29 4 19 13 9 31 5" pathLength="1"/></svg>';
    const mark = '<span class="ep-stamp" aria-hidden="true"><span class="ep-imprint"><svg viewBox="0 0 24 24"><path d="m4 13 5 5L20 6"/></svg></span>' + stampTool + '</span>';

    function documentCard(invoice) {
      const title = invoice ? t('Facture','Invoice') : t('Contrat','Contract');
      let meta = t('Pièce contractuelle','Contract document');
      let foot = t('Tarif par chemise','Rate per shirt');
      let price = '—';
      if (invoice) {
        meta = 'DEMO-1-002';
        foot = t('12–18 janv. 2026','12–18 Jan 2026');
        price = money(t('3,00','3.00'));
      } else if (rate === 'january') {
        meta = t('P. 1 · BARÈME 1','P. 1 · RATE CARD 1');
        foot = t('Effet le 5 janv. 2026','From 5 Jan 2026');
        price = money(t('2,50','2.50'));
      } else if (rate === 'february') {
        meta = t('AVENANT · BARÈME 2','AMENDMENT · RATE CARD 2');
        foot = t('Effet le 2 févr. 2026','From 2 Feb 2026');
        price = money(t('3,00','3.00'));
      }
      return '<div class="ep-paper ep-doc ' + (invoice ? 'ep-invoice" data-ledger-prop="invoice' : 'ep-contract') + '">' +
        '<span class="ep-fold" aria-hidden="true"></span>' + (invoice ? '' : paperclip) +
        '<div class="ep-code">' + meta + '</div><div class="ep-display">' + title + '</div>' +
        '<div class="ep-detail">' + t('Location de chemises','Shirt rental') + '</div>' +
        '<div class="ep-note ep-quantity"><span>' + t('Quantité','Quantity') + '</span><strong>40</strong></div>' +
        '<div class="ep-price">' + price + (invoice || selected ? circle : '') + '</div><div class="ep-note ep-foot">' + foot + '</div></div>';
    }

    function compare() {
      const showDifference = verified === true && rate === 'january';
      const heading = showDifference ? t('Écart potentiel HT','Potential pre-tax variance') : t('Contrôle du tarif unitaire','Unit rate check');
      let instruction = t('Choisir le barème applicable','Select the applicable rate');
      if (selected) instruction = t('Vérifier le barème choisi','Check the selected rate');
      const formula = showDifference ? t('40 × (3,00 − 2,50)','40 × (3.00 − 2.50)') : instruction;
      const underline = '<svg class="ep-sum-line" viewBox="0 0 100 7" preserveAspectRatio="none" aria-hidden="true"><path d="M0 5Q25 1 54 2T99 2" pathLength="1"/></svg>';
      const total = showDifference ? '= ' + money(20) + underline : '<span class="ep-pending">—</span>';
      return documentCard(false) + documentCard(true) +
        '<div class="ep-paper ep-strip" data-ledger-prop="variance"><div><div class="ep-kicker">' + heading +
        '</div><div class="ep-equation">' + formula +
        '</div></div><div class="ep-display ep-total">' + total + '</div></div>' + writingTool;
    }

    function credit() {
      return '<div class="ep-paper ep-creditback" aria-hidden="true"></div><div class="ep-paper ep-credit" data-ledger-prop="credit">' +
        '<div class="ep-credit-main"><div class="ep-code">DEMO-CR-001</div><div class="ep-display ep-credit-title">' +
        t('Avoir reçu','Credit received') + '</div><div class="ep-display ep-credit-value">' + money(15) +
        '</div><div class="ep-gauge-wrap"><div class="ep-kicker">' + t('Imputation simulée','Simulated application') +
        '</div><div class="ep-gauge" aria-hidden="true"></div><div class="ep-note">' + money(amount, 'data-gl-applied') +
        t(' sur 15',' of 15') + '</div></div></div><div class="ep-credit-stub"><div class="ep-kicker">' +
        t('Correction acceptée','Correction accepted') + '</div><div class="ep-display ep-stub-value">' + money(20) +
        '</div>' + mark + '<div class="ep-stub-bottom"><div class="ep-kicker">' + t('Solde simulé','Simulated balance') +
        '</div><div class="ep-stub-value ep-display">' + money(15 - amount, 'data-gl-received-left') + '</div></div></div></div>';
    }

    function bookPage(side, kicker, title, value, foot) {
      const line = '<svg class="ep-account-line" viewBox="0 0 100 5" preserveAspectRatio="none" aria-hidden="true"><path d="M0 3Q26 1.8 58 2.5T99 2.4" pathLength="1"/></svg>';
      return '<div class="ep-book-page ep-' + side + '"><div class="ep-kicker">' + kicker + '</div><div class="ep-display ep-book-title">' +
        title + '</div><div class="ep-display ep-book-value">' + value + '</div><div class="ep-note ep-book-foot">' + line + foot + '</div></div>';
    }

    function balance() {
      return '<div class="ep-paper ep-cover" aria-hidden="true"></div><div class="ep-paper ep-spread" data-ledger-prop="book">' +
        bookPage('left', t('Solde fournisseur','Supplier balance'), t('À recevoir','Still due'), money(5),
          t('20 acceptés − 15 reçus','20 accepted − 15 received')) +
        bookPage('right', t('Sur l’avoir reçu','Received credit'), t('À imputer','To apply'), money(15 - amount, 'data-gl-received-left'),
          t('15 reçus − ','15 received − ') + '<span data-gl-applied>' + amount + '</span>' + t(' imputés',' applied')) +
        '<span class="ep-spine" aria-hidden="true"></span><span class="ep-flyleaf" aria-hidden="true"></span><span class="ep-jacket" aria-hidden="true"></span></div>';
    }

    const draw = { compare, credit, balance }[scene];
    if (!draw) return '';
    installStyle();
    const gesture = ['choose', 'verify', 'still'].includes(action) ? action : 'enter';
    return '<div class="gl-proof gl-' + gesture + (reduced && gesture !== 'still' ? ' gl-still' : '') + '" style="--start-ratio:' +
      amount / 15 + '">' + draw() + '</div>';
  };
  window.ledgerEvidence.startGesture = function startGesture(layer, action) {
    if (action === 'choose' || action === 'verify') drawWithPencil(layer.querySelector('.gl-proof'), action);
  };
})();
