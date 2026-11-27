(() => {
  "use strict";

  const TAU = Math.PI * 2;
  const TOP = 1.04;
  const phones = [
    { x: 0.05, z: 1.33, angle: -.12, face: "#e2d6fc", ink: "#39205f", accent: "#ae8ce7" },
    { x: -1.87, z: .05, angle: -.90, face: "#f7ccbc", ink: "#592c48", accent: "#f69d91" },
    { x: -.1, z: -1.28, angle: .13, face: "#deeac4", ink: "#304937", accent: "#a5c99d" },
    { x: 1.84, z: -.03, angle: .91, face: "#f5e5a6", ink: "#4d383e", accent: "#e8c963" }
  ];
  const seats = [
    { x: -.03, z: 2.86, angle: 0 },
    { x: -3.41, z: .05, angle: -Math.PI / 2 },
    { x: .03, z: -2.82, angle: Math.PI },
    { x: 3.38, z: -.06, angle: Math.PI / 2 }
  ];
  const clueSlots = [
    [{x:.53, z:.82, angle:-.29}, {x:.88, z:1.05, angle:-.11}],
    [{x:-1.25, z:.53, angle:-1.22}, {x:-.98, z:.84, angle:-1.05}],
    [{x:-.65, z:-.81, angle:.27}, {x:-.97, z:-1.08, angle:.40}],
    [{x:1.21, z:-.51, angle:1.19}, {x:.92, z:-.82, angle:1.02}]
  ];
  const cache = new WeakMap();
  const clamp = (x, low, high) => Math.max(low, Math.min(high, x));
  const mix = (a, b, t) => a + (b - a) * t;
  const smooth = t => t * t * (3 - 2 * t);

  function grain() {
    const tile = document.createElement("canvas");
    tile.width = tile.height = 96;
    const g = tile.getContext("2d");
    const data = g.createImageData(96, 96);
    let seed = 81;
    for (let i = 0; i < data.data.length; i += 4) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      const v = (seed >>> 24) < 132 ? 15 : 255;
      data.data[i] = data.data[i + 1] = data.data[i + 2] = v;
      data.data[i + 3] = (seed >>> 19) & 20;
    }
    g.putImageData(data, 0, 0);
    return tile;
  }

  function draw(canvas, state = {}) {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return [];
    let memo = cache.get(canvas);
    if (!memo) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return [];
      memo = { ctx, grain: ctx.createPattern(grain(), "repeat") };
      cache.set(canvas, memo);
    }
    const ctx = memo.ctx;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = ctx.lineJoin = "round";

    const zoom = smooth(clamp(state.zoom ?? 1, 0, 1));
    const focus = smooth(clamp(state.focus ?? 0, 0, 1));
    const selected = phones[state.selected] ? state.selected : 0;
    const active = Number.isInteger(state.active) ? state.active : -1;
    const t = state.reduced ? 0 : (state.time || 0);
    const targetX = mix(phones[0].x * (1 - zoom), phones[selected].x, focus);
    const targetZ = mix(phones[0].z * (1 - zoom), phones[selected].z, focus);
    const targetY = mix(mix(TOP + .1, .62, zoom), TOP + .1, focus);
    const angle = mix(-.22, -.14, zoom) + focus * .10;
    const elev = mix(1.03, .87, zoom) + focus * .10;
    const ca = Math.cos(angle), sa = Math.sin(angle), ce = Math.cos(elev), se = Math.sin(elev);
    const wide = Math.min(w / 8.5, h / 6.24);
    const near = Math.min(w / 2.14, h / 2.00);
    const scale = mix(mix(near, wide, zoom), near * .9, focus);
    const camDistance = mix(mix(8.6, 14.2, zoom), 9.2, focus);
    const centerX = w * .5, centerY = h * mix(.505, .475, zoom);
    const plane = (x, y, z) => {
      const X = x - targetX, Y = y - targetY, Z = z - targetZ;
      const along = X * sa + Z * ca;
      const factor = scale * camDistance / Math.max(1, camDistance - along * ce - Y * se);
      return { x: centerX + (X * ca - Z * sa) * factor, y: centerY + (along * se - Y * ce) * factor };
    };
    function local(o, x, y, z) {
      const c = Math.cos(o.angle), s = Math.sin(o.angle);
      return plane(o.x + x * c + z * s, y, o.z - x * s + z * c);
    }
    function path(points) {
      ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.closePath();
    }
    function shape(points, fill, stroke, width = 1) {
      path(points);
      if (fill) { ctx.fillStyle = fill; ctx.fill(); }
      if (stroke) { ctx.lineWidth = width; ctx.strokeStyle = stroke; ctx.stroke(); }
    }
    function stroke(points, color, width) {
      ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.lineWidth = width; ctx.strokeStyle = color; ctx.stroke();
    }
    const grad = (a, b, stops) => {
      const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      stops.forEach(([n, color]) => g.addColorStop(n, color));
      return g;
    };
    function ellipse(o, y, rx, rz, n = 80) {
      return Array.from({length: n}, (_, i) => {
        const a = i * TAU / n;
        return local(o, rx * Math.cos(a), y, rz * Math.sin(a));
      });
    }
    function rounded(o, y, width, depth, radius, offsetX = 0, offsetZ = 0) {
      const pts = [];
      for (let k = 0; k < 4; k++) {
        const ax = (k === 0 || k === 3 ? 1 : -1) * (width / 2 - radius);
        const az = (k < 2 ? 1 : -1) * (depth / 2 - radius);
        for (let j = 0; j <= 5; j++) {
          const a = (k + j / 5) * Math.PI / 2;
          pts.push(local(o, offsetX + ax + radius * Math.cos(a), y, offsetZ + az + radius * Math.sin(a)));
        }
      }
      return pts;
    }
    // Near-side walls connect matching projected rings; far-side walls remain occluded.
    function side(top, bottom, fill) {
      const surface = top.concat(bottom);
      const sorted = surface.slice().sort((a, b) => a.x - b.x || a.y - b.y);
      const cross = (a, b, p) => (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);
      const half = list => {
        const hull = [];
        for (const p of list) {
          while (hull.length >= 2 && cross(hull[hull.length - 2], hull[hull.length - 1], p) <= 0) hull.pop();
          hull.push(p);
        }
        hull.pop(); return hull;
      };
      shape(half(sorted).concat(half(sorted.reverse())), fill);
    }
    function shadow(o, y, rx, rz, amount) {
      const p = local(o, 0, y, 0), a = local(o, rx, y, 0), b = local(o, 0, y, rz);
      ctx.save(); ctx.transform(a.x - p.x, a.y - p.y, b.x - p.x, b.y - p.y, p.x, p.y);
      const g = ctx.createRadialGradient(0, 0, .03, 0, 0, 1);
      g.addColorStop(0, "rgba(43,22,78," + amount + ")");
      g.addColorStop(.53, "rgba(49,28,83," + (amount * .62) + ")");
      g.addColorStop(1, "rgba(55,28,82,0)");
      ctx.fillStyle = g; ctx.fillRect(-1, -1, 2, 2); ctx.restore();
    }
    function cast(points, dx, dy, blur, alpha) {
      ctx.save();
      ctx.shadowColor = "rgba(45,28,62," + alpha + ")";
      ctx.shadowBlur = Math.min(46, scale * blur) * dpr;
      ctx.shadowOffsetX = scale * dx * dpr;
      ctx.shadowOffsetY = scale * dy * dpr;
      shape(points, "rgba(63,41,85,.62)");
      ctx.restore();
    }

    const origin = { x: 0, z: 0, angle: 0 };
    const sky = ctx.createLinearGradient(0, 0, w, h);
    sky.addColorStop(0, "#f0ecfc"); sky.addColorStop(.49, "#e2dcf5"); sky.addColorStop(1, "#c9bfdf");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    // Three bands of late-afternoon window light stay anchored to the floor.
    for (const x of [-6.1, -4.45, -2.8]) {
      shape([[x, -7], [x + 1.23, -7], [x + 9.23, 7], [x + 8, 7]].map(([X,Z]) => plane(X, -.03, Z)), "rgba(255,251,242,.20)");
    }
    ctx.save(); ctx.globalAlpha = .28; ctx.fillStyle = memo.grain; ctx.fillRect(0, 0, w, h); ctx.restore();
    const rug = { x: .08, z: .04, angle: 0 };
    shape(ellipse(rug, .006, 3.92, 3.38), "rgba(177,161,204,.16)", "rgba(140,120,168,.17)", .8);
    shape(ellipse(rug, .01, 3.84, 3.3), null, "rgba(255,251,255,.30)", .8);
    shadow({ x:.36,z:.44,angle:0 }, .015, 3.72, 2.60, .50);
    shadow({ x:.08,z:.1,angle:0 }, .015, 2.28, 1.57, .37);

    function chair(o) {
      const light = grad(local(o,-.65,.65,-.12),local(o,.64,.40,.5),[[0,"#73627e"],[.43,"#514158"],[1,"#302530"]]);
      cast(rounded(o,.028,1.17,.84,.25),.19,.12,.085,.34);
      for (const dx of [-.42, .42]) for (const dz of [-.31, .31]) {
        const x0 = dx * 1.16, z0 = dz * 1.27;
        stroke([local(o,x0,.045,z0),local(o,dx,.55,dz)], "#372e3d", Math.max(1,scale*.053));
        stroke([local(o,x0,.045,z0),local(o,mix(x0,dx,.17),.13,mix(z0,dz,.17))], "#b9a678", Math.max(1,scale*.052));
      }
      const top = rounded(o,.65,1.23,.92,.25);
      side(top,rounded(o,.47,1.23,.92,.25), "#352b3b"); shape(top,light,"rgba(255,240,255,.31)",.8);
      shape(rounded(o,.655,1.12,.81,.23),null,"rgba(206,187,206,.29)",.75);
      ctx.save();path(top);ctx.clip();ctx.fillStyle=memo.grain;ctx.globalAlpha=.52;ctx.fillRect(0,0,w,h);ctx.restore();
      const edge = [];
      for (let i=0;i<=20;i++) {
        const x = -.53 + i * .053;
        edge.push(local(o,x,.94,.375 - .18*(x/.53)**2));
      }
      const backLow = edge.map((_, i) => {
        const x = -.53 + i*.053;
        return local(o,x,.68,.375 - .18*(x/.53)**2);
      });
      shape(edge.concat(backLow.reverse()),grad(edge[0],edge[edge.length-1],[[0,"#746076"],[.43,"#49384c"],[1,"#3c2c43"]]));
      stroke(edge,"#9a838e",Math.max(1,scale*.027));
    }
    const nearSeats = [];
    for (const o of seats) {
      shadow({x:o.x+.10,z:o.z+.15,angle:o.angle},.017,.88,.65,.25);
      if (o.z * ca + o.x * sa > 1.5) nearSeats.push(o);
      else chair(o);
    }
    // The pedestal and brass lip give the otherwise flat ellipse weight in profile.
    side(ellipse(origin,.35,1.02,.73),ellipse(origin,.06,1.41,1.01),grad(plane(-1,0,0),plane(1,0,0),[[0,"#72627e"],[.45,"#58465e"],[1,"#3b314c"]]));
    side(ellipse(origin,.84,.70,.57),ellipse(origin,.20,.86,.64),grad(plane(-.8,0,0),plane(.8,0,0),[[0,"#8b7595"],[.5,"#6c5279"],[1,"#433749"]]));
    const top = ellipse(origin,TOP,2.80,2.12);
    side(ellipse(origin,.855,2.78,2.10),ellipse(origin,.815,2.75,2.08),grad(plane(-2,1,0),plane(2,1,0),[[0,"#c2a878"],[.46,"#f3dbab"],[1,"#a48576"]]));
    side(top,ellipse(origin,.855,2.78,2.10),grad(plane(-2,1,0),plane(2,1,0),[[0,"#58446d"],[.52,"#4a3662"],[1,"#342b48"]]));
    shape(top,grad(plane(-1.8,TOP,-1.8),plane(2,TOP,2),[[0,"#8770ad"],[.45,"#765c9f"],[1,"#5a4384"]]),"rgba(255,250,246,.53)",Math.max(.8,scale*.014));
    ctx.save();path(top);ctx.clip();
    const sheen=plane(-1.65,TOP,-1.2);
    const velvet=ctx.createRadialGradient(sheen.x,sheen.y,scale*.15,sheen.x,sheen.y,scale*3.3);
    velvet.addColorStop(0,"rgba(213,177,235,.31)");velvet.addColorStop(.53,"rgba(193,155,209,.08)");velvet.addColorStop(1,"rgba(85,42,100,0)");
    ctx.fillStyle=velvet;ctx.fillRect(0,0,w,h);ctx.restore();
    ctx.save(); path(top); ctx.clip(); ctx.globalAlpha = .87; ctx.fillStyle=memo.grain; ctx.fillRect(0,0,w,h); ctx.restore();
    shape(ellipse(origin,TOP+.006,2.63,1.96),null,"rgba(48,25,69,.37)",Math.max(.75,scale*.012));
    ctx.save(); ctx.setLineDash([scale*.038,scale*.036]);
    shape(ellipse(origin,TOP+.007,2.62,1.95),null,"rgba(230,206,235,.43)",Math.max(.5,scale*.009)); ctx.restore();

    function print(o, x, y, z, width, depth, fn) {
      const p = local(o,x,y,z), a=local(o,x+width,y,z), b=local(o,x,y,z+depth);
      ctx.save(); ctx.transform(a.x-p.x,a.y-p.y,b.x-p.x,b.y-p.y,p.x,p.y); fn(); ctx.restore();
    }
    // A recurring cut-paper mask is the motif on both the deck and the personal screens.
    function mask(x,y,size,color,eyes,variant=0) {
      ctx.save();ctx.translate(x,y);ctx.scale(size,size);
      ctx.beginPath();ctx.moveTo(-.51,-.15);ctx.bezierCurveTo(-.28,-.10,-.20,-.27,0,-.12);
      ctx.bezierCurveTo(.22,-.26,.30,-.08,.51,-.14);ctx.bezierCurveTo(.47,.16,.30,.31,.13,.15);
      ctx.quadraticCurveTo(.02,-.01,-.10,.15);ctx.bezierCurveTo(-.28,.33,-.49,.18,-.51,-.15); ctx.closePath();
      ctx.fillStyle=color;ctx.fill();ctx.fillStyle=eyes;
      for (const u of [-.246,.246]) {
        ctx.beginPath();ctx.ellipse(u,0,.106,.049, (u<0?1:-1)*(.16+variant*.1),0,TAU);ctx.fill();
      }
      ctx.restore();
    }
    const votesOpen = ["vote", "turning", "result"].includes(state.phase);
    const lastClue = votesOpen ? 7 : clamp(state.clueIndex ?? -1, -1, 7);
    for (let i = 0; i <= lastClue; i++) {
      const seat = i % 4, turn = Math.floor(i / 4);
      const player = phones[seat], slot = clueSlots[seat][turn];
      const progress = smooth(votesOpen || state.reduced || i < lastClue ? 1 : clamp(state.clueProgress ?? 1, 0, 1));
      if (progress <= .001) continue;
      const lift = Math.sin(progress * Math.PI);
      const card = {
        x: mix(player.x, slot.x, progress), z: mix(player.z, slot.z, progress),
        angle: mix(player.angle + .55, slot.angle, progress) + .18 * lift
      };
      const y = TOP + .019 + .014 * turn + lift * .21;
      const width = .44, depth = .59;
      ctx.save();
      ctx.globalAlpha = clamp(progress * 4.5, 0, 1);
      cast(rounded(card,TOP+.013,width,depth,.04),.037+.06*lift,.035+.06*lift,.025+.09*lift,.42);
      shape(rounded(card,y,width,depth,.04),grad(local(card,-.22,y,-.24),local(card,.22,y,.24),[[0,"#fff8e5"],[1,"#e8dac1"]]),"rgba(64,42,75,.58)",Math.max(.5,scale*.007));
      print(card,-width/2,y+.002,-depth/2,width,depth,()=>{
        ctx.fillStyle=player.accent;ctx.fillRect(.077,.08,.84,.11);
        for(let n=0;n<=turn;n++){
          ctx.beginPath();ctx.ellipse(.21+n*.21,.32,.045,.033,0,0,TAU);ctx.fillStyle=player.ink;ctx.fill();
        }
        mask(.50,.66,.63,player.ink,"#f6ebd6",seat);
      });
      ctx.restore();
    }
    shadow({x:.12,z:.13,angle:-.20},TOP+.01,.82,.66,.45);
    cast(rounded({x:0,z:.035,angle:-.18},TOP+.017,.74,.96,.052),.075,.075,.045,.45);
    for(let i=0;i<5;i++) {
      const o={x:-.035+.017*i,z:.015-.012*i,angle:-.25+i*.038};
      const y=TOP+.022+i*.016;
      shape(rounded(o,y,.74,.96,.052),i===4?"#f0dc9c":i%2?"#57465f":"#e6d9bd","rgba(55,32,70,.50)",.6);
      if(i===4) {
        print(o,-.37,y+.006,-.48,.74,.96,()=>{
          ctx.strokeStyle="#70526b";ctx.lineWidth=.013;ctx.strokeRect(.07,.055,.86,.89);
          ctx.save();ctx.translate(.50,.50);ctx.rotate(-.23);
          for(let j=0;j<4;j++){ctx.beginPath();ctx.ellipse(0,0,.27+j*.075,.15+j*.055,0,0,TAU);ctx.strokeStyle="rgba(100,70,103,.46)";ctx.lineWidth=.011;ctx.stroke();}
          ctx.restore(); mask(.50,.50,.74,"#4f3868","#f0dc9c");
        });
      }
    }
    function chip(x,z,color) {
      const o={x,z,angle:0};
      shadow({x:x+.06,z:z+.075,angle:0},TOP+.008,.18,.15,.31);
      const t0=ellipse(o,TOP+.115,.115,.115,32);
      side(t0,ellipse(o,TOP+.027,.115,.115,32),"#8a735c");shape(t0,color,"rgba(255,251,234,.81)",.65);
      shape(ellipse(o,TOP+.117,.067,.067,22),null,"rgba(78,59,65,.34)",.6);
    }
    chip(-.61,-.40,"#e7c980"); chip(-.71,-.19,"#cbad97");
    const centers = [];
    for(const [idx,o] of phones.entries()) {
      const y=TOP+.1, bw=.66, bd=1.0;
      const on=idx===active || (focus>.36 && idx===selected);
      if (on) {
        const breath = state.reduced ? 0 : (1+Math.sin(t*3.4))/2;
        shape(rounded(o,TOP+.015,.90+breath*.07,1.22+breath*.07,.17),null,"rgba(255,232,149,.65)",Math.max(1.2,scale*.018));
      }
      shadow({x:o.x+.055,z:o.z+.073,angle:o.angle},TOP+.012,.56,.74,.49);
      cast(rounded(o,TOP+.015,bw,bd,.084),.067,.057,.034,.45);
      const frame=rounded(o,y,bw,bd,.084);
      side(frame,rounded(o,TOP+.034,bw,bd,.083),grad(local(o,-.32,y,0),local(o,.32,y,0),[[0,"#aaa4ae"],[.54,"#544c60"],[1,"#2a2438"]]));
      shape(frame,"#242033", "rgba(230,222,235,.92)",Math.max(.68,scale*.009));
      const screen=rounded(o,y+.006,bw-.055,bd-.058,.065);
      shape(screen,grad(local(o,-.25,y,-.5),local(o,.3,y,.5),[[0,o.face],[1,o.accent]]));
      print(o,-.3025,y+.009,-.471,.605,.942,()=>{
        ctx.save();ctx.beginPath();ctx.roundRect(0,0,1,1,.078);ctx.clip();
        for(let j=0;j<5;j++) {
          ctx.beginPath();ctx.ellipse(.5,.38,.43+j*.16,.29+j*.105,-.31,0,TAU);
          ctx.strokeStyle="rgba(255,255,255,.47)";ctx.lineWidth=.010;ctx.stroke();
        }
        ctx.fillStyle="#211c2a";ctx.beginPath();ctx.roundRect(.36,.038,.28,.045,.023);ctx.fill();
        mask(.5,.45,.71,o.ink,o.face,idx);
        const name=(state.names?.[idx] || ["NOVA","LUNA","PIXEL","ORION"][idx]).toLocaleUpperCase();
        ctx.fillStyle=o.ink;ctx.font="bold .128px Arial, sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(name,.5,.76,.83);
        ctx.fillStyle=o.ink;ctx.globalAlpha=.66;ctx.fillRect(.365,.941,.27,.012);
        ctx.globalAlpha=1;
        const glass=ctx.createLinearGradient(0,0,1,.72);
        glass.addColorStop(0,"rgba(252,249,255,.2)");glass.addColorStop(.47,"rgba(255,255,255,.015)");glass.addColorStop(.49,"rgba(255,255,255,.12)");glass.addColorStop(.63,"rgba(255,255,255,0)");
        ctx.fillStyle=glass;ctx.fillRect(0,0,1,1);
        ctx.restore();
      });
      centers[idx]=local(o,0,y+.009,0);
    }
    for (const o of nearSeats) chair(o);
    return centers;
  }
  window.MasqTable = { draw };
})();
