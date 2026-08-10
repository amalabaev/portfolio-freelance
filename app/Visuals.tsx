/**
 * Interface mock-ups drawn as inline SVG.
 *
 * Every illustration on the site lives here so the drawing rules stay in one
 * place: one plotting palette (indigo / clay / teal), hairline chrome, 2px
 * lines, rounded data-ends, and a legend whenever two series share a frame.
 */

type Labels = readonly string[];

const S = {
  ink: "#161814",
  soft: "#5d6058",
  muted: "#8b8e84",
  line: "rgba(22,24,20,.14)",
  grid: "rgba(22,24,20,.09)",
  card: "#fffdf6",
  indigo: "#2f47c9",
  clay: "#d4482c",
  teal: "#0f8a73",
  lime: "#d8f34a",
} as const;

const mono = { fontFamily: "var(--sans)", fontWeight: 600, letterSpacing: ".08em" } as const;

/** The editorial signature each creative direction is signed off with. */
function Signature({ x, y, size, children }: { x: number; y: number; size: number; children: string }) {
  return (
    <text x={x} y={y} textAnchor="end" fontFamily="var(--serif)" fontStyle="italic" fontSize={size} letterSpacing="-.02em" fill="rgba(22,24,20,.3)">{children}</text>
  );
}

/* ---------------------------------------------------------------- concepts */

/** B2B consulting — a reporting dashboard: two stat tiles over a revenue chart. */
export function ConsultingDashboard({ labels, locale, signature }: { labels: Labels; locale: "fr" | "en"; signature: string }) {
  const months = locale === "fr"
    ? ["JAN", "FÉV", "MAR", "AVR", "MAI", "JUIN", "JUIL", "AOÛT"]
    : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"];
  const legend = locale === "fr" ? ["Réalisé", "Objectif"] : ["Actual", "Target"];
  const chartTitle = locale === "fr" ? "Revenu mensuel récurrent" : "Monthly recurring revenue";
  const delta = locale === "fr" ? "vs T2" : "vs Q2";
  const xs = [28, 94.3, 160.6, 226.9, 293.1, 359.4, 425.7, 492];
  const ys = [75.2, 67.6, 71.4, 56.1, 49.7, 38.2, 42, 21.6];

  return (
    <svg className="concept-svg consulting-dashboard" viewBox="0 0 640 440" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="cs-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={S.indigo} stopOpacity=".18" />
          <stop offset="100%" stopColor={S.indigo} stopOpacity="0" />
        </linearGradient>
        <filter id="cs-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#1a2560" floodOpacity=".22" />
        </filter>
      </defs>

      <Signature x={630} y={430} size={44}>{signature}</Signature>

      {/* The dashboard is inset so the signature keeps a clear corner. */}
      <g transform="translate(-4 -6) scale(.955)">
      <g filter="url(#cs-shadow)">
        <rect x="24" y="22" width="592" height="396" rx="12" fill={S.card} stroke={S.line} />
      </g>

      {/* header */}
      <text x="48" y="56" {...mono} fontSize="11" fill={S.muted}>{labels[0]}</text>
      <rect x="524" y="40" width="68" height="22" rx="11" fill={S.lime} />
      <text x="558" y="55" {...mono} fontSize="10" fill={S.ink} textAnchor="middle">Q3 / 2026</text>
      <line x1="48" y1="76" x2="592" y2="76" stroke={S.line} />

      {/* stat tiles */}
      {[
        { x: 48, label: labels[1], value: "+38%", note: `+11 pts ${delta}`, spark: true },
        { x: 328, label: labels[2], value: "24", note: `+9 ${delta}`, spark: false },
      ].map((tile) => (
        <g key={tile.label}>
          <rect x={tile.x} y="88" width="264" height="84" rx="10" fill="#fbfaf3" stroke={S.line} />
          <text x={tile.x + 18} y="110" {...mono} fontSize="10" fill={S.muted}>{tile.label}</text>
          <text x={tile.x + 18} y="146" fontFamily="var(--sans)" fontWeight="700" fontSize="32" letterSpacing="-.03em" fill={S.ink}>{tile.value}</text>
          <text x={tile.x + 18} y="162" fontFamily="var(--sans)" fontWeight="600" fontSize="10" fill={S.teal}>▲ {tile.note}</text>
          {tile.spark ? (
            <path d="M198 146 L214 138 L230 142 L246 126 L262 116" fill="none" stroke={S.indigo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform={`translate(${tile.x - 48} 0)`} />
          ) : (
            <g transform={`translate(${tile.x + 196} 118)`}>
              {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={i * 14} y={28 - [16, 22, 12, 30][i]} width="8" height={[16, 22, 12, 30][i]} rx="3" fill={i === 3 ? S.indigo : "#c3cbf0"} />
              ))}
            </g>
          )}
        </g>
      ))}

      {/* chart panel */}
      <rect x="48" y="186" width="544" height="210" rx="10" fill="#fbfaf3" stroke={S.line} />
      <text x="66" y="212" {...mono} fontSize="10" fill={S.muted}>{chartTitle.toUpperCase()}</text>
      <g transform="translate(430 204)">
        <line x1="0" y1="4" x2="14" y2="4" stroke={S.indigo} strokeWidth="2" strokeLinecap="round" />
        <text x="20" y="8" fontFamily="var(--sans)" fontWeight="600" fontSize="10" fill={S.soft}>{legend[0]}</text>
        <line x1="76" y1="4" x2="90" y2="4" stroke={S.clay} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        <text x="96" y="8" fontFamily="var(--sans)" fontWeight="600" fontSize="10" fill={S.soft}>{legend[1]}</text>
      </g>

      <g transform="translate(60 226)">
        <rect x="459" y="14" width="33" height="102" fill={S.indigo} opacity=".07" />
        {[14, 48, 82, 116].map((y) => <line key={y} x1="28" y1={y} x2="492" y2={y} stroke={S.grid} />)}
        <path d="M28.0 75.2 C39.0 73.9 72.2 68.2 94.3 67.6 C116.4 66.9 138.5 73.3 160.6 71.4 C182.7 69.5 204.8 59.7 226.9 56.1 C249.0 52.5 271.0 52.7 293.1 49.7 C315.2 46.7 337.3 39.5 359.4 38.2 C381.5 37.0 403.6 44.8 425.7 42.0 C447.8 39.3 481.0 25.0 492.0 21.6 L492.0 116 L28.0 116 Z" fill="url(#cs-area)" />
        <path d="M28.0 72.7 C39.0 72.0 72.2 70.1 94.3 68.8 C116.4 67.5 138.5 66.3 160.6 65.0 C182.7 63.7 204.8 62.7 226.9 61.2 C249.0 59.7 271.0 57.6 293.1 56.1 C315.2 54.6 337.3 53.7 359.4 52.2 C381.5 50.8 403.6 48.8 425.7 47.1 C447.8 45.4 481.0 42.9 492.0 42.0" fill="none" stroke={S.clay} strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
        <path d="M28.0 75.2 C39.0 73.9 72.2 68.2 94.3 67.6 C116.4 66.9 138.5 73.3 160.6 71.4 C182.7 69.5 204.8 59.7 226.9 56.1 C249.0 52.5 271.0 52.7 293.1 49.7 C315.2 46.7 337.3 39.5 359.4 38.2 C381.5 37.0 403.6 44.8 425.7 42.0 C447.8 39.3 481.0 25.0 492.0 21.6" fill="none" stroke={S.indigo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="28" y1="116" x2="492" y2="116" stroke={S.line} />
        <circle cx="492" cy="21.6" r="5.5" fill={S.indigo} stroke={S.card} strokeWidth="2" />
        {xs.map((x, i) => (
          <text key={x} x={x} y="134" {...mono} fontSize="9" fill={i === xs.length - 1 ? S.ink : S.muted} textAnchor={i === 0 ? "start" : i === xs.length - 1 ? "end" : "middle"}>{months[i]}</text>
        ))}
        {/* direct label on the point the story is about */}
        <text x="486" y="12" fontFamily="var(--sans)" fontWeight="700" fontSize="13" fill={S.ink} textAnchor="end">74 k€</text>
        <g transform="translate(360 148)">
          <rect x="0" y="0" width="132" height="22" rx="11" fill={S.ink} />
          <text x="66" y="15" {...mono} fontSize="9" fill={S.lime} textAnchor="middle">{labels[3]}</text>
        </g>
        <circle cx={xs[5]} cy={ys[5]} r="3.5" fill={S.indigo} stroke={S.card} strokeWidth="2" />
      </g>
      </g>
    </svg>
  );
}

/** Architecture — a measured elevation drawing on a blueprint grid. */
export function ArchitectureBlueprint({ labels, signature }: { labels: Labels; signature: string }) {
  return (
    <svg className="concept-svg architecture-blueprint" viewBox="0 0 640 440" role="img" aria-hidden="true">
      <defs>
        <pattern id="ar-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#2f3a33" strokeWidth="1" strokeOpacity=".35" />
        </pattern>
        <linearGradient id="ar-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a9b6c4" />
          <stop offset="100%" stopColor="#dfe4e2" />
        </linearGradient>
      </defs>

      {/* sun */}
      <circle cx="546" cy="96" r="46" fill={S.lime} opacity=".55" />
      <circle cx="546" cy="96" r="30" fill={S.lime} />

      {/* title block */}
      <text x="46" y="56" {...mono} fontSize="12" fill={S.ink}>{labels[0]}</text>
      <text x="46" y="74" {...mono} fontSize="9.5" fill="#6f7468">{labels[1]}</text>
      <line x1="46" y1="88" x2="330" y2="88" stroke="#2f3a33" strokeOpacity=".4" />

      {/* ground line + section markers */}
      <line x1="46" y1="368" x2="594" y2="368" stroke="#2f3a33" strokeWidth="1.5" />
      <path d="M46 372 L594 372" stroke="url(#ar-hatch)" strokeWidth="14" />

      {/* main volume */}
      <path d="M120 368 L120 214 L262 168 L404 208 L404 368 Z" fill="#f6f3e8" stroke="#2f3a33" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M120 214 L262 168 L404 208" fill="none" stroke="#2f3a33" strokeWidth="1.5" strokeLinejoin="round" />
      {/* openings */}
      <rect x="152" y="258" width="66" height="80" fill="url(#ar-glass)" stroke="#2f3a33" />
      <line x1="185" y1="258" x2="185" y2="338" stroke="#2f3a33" strokeOpacity=".6" />
      <rect x="252" y="252" width="112" height="46" fill="url(#ar-glass)" stroke="#2f3a33" />
      <line x1="308" y1="252" x2="308" y2="298" stroke="#2f3a33" strokeOpacity=".6" />
      <rect x="286" y="322" width="42" height="46" fill="#e7e3d5" stroke="#2f3a33" />
      <line x1="120" y1="308" x2="404" y2="308" stroke="#2f3a33" strokeOpacity=".25" />

      {/* side volume */}
      <path d="M404 368 L404 258 L516 258 L516 368 Z" fill="#efece0" stroke="#2f3a33" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="404" y1="300" x2="516" y2="300" stroke="#2f3a33" strokeOpacity=".35" />
      <line x1="460" y1="258" x2="460" y2="368" stroke="#2f3a33" strokeOpacity=".35" />

      {/* scale figures — an elevation is unreadable without them */}
      <g fill="#2f3a33" opacity=".62">
        <circle cx="538" cy="330" r="5.5" />
        <path d="M532 340 h12 v16 l-3 12 h-3 l-1 -12 h-1 l-1 12 h-3 l-3 -12 z" />
      </g>
      <g stroke="#2f3a33" strokeOpacity=".55" fill="none">
        <line x1="576" y1="368" x2="576" y2="318" strokeWidth="1.5" />
        <path d="M576 336 l-14 -12 M576 344 l14 -12 M576 326 l-10 -10 M576 332 l10 -10" strokeWidth="1.2" />
      </g>
      <circle cx="576" cy="312" r="15" fill="#2f3a33" fillOpacity=".12" />

      {/* dimension line */}
      <g stroke="#2f3a33" strokeOpacity=".7">
        <line x1="120" y1="398" x2="516" y2="398" />
        <line x1="120" y1="392" x2="120" y2="404" />
        <line x1="516" y1="392" x2="516" y2="404" />
        <line x1="404" y1="393" x2="404" y2="403" strokeOpacity=".4" />
      </g>
      <text x="318" y="394" {...mono} fontSize="9" fill="#4c5248" textAnchor="middle">18,40 M</text>

      {/* vertical dimension */}
      <g stroke="#2f3a33" strokeOpacity=".7">
        <line x1="86" y1="214" x2="86" y2="368" />
        <line x1="80" y1="214" x2="92" y2="214" />
        <line x1="80" y1="368" x2="92" y2="368" />
      </g>
      <text x="74" y="296" {...mono} fontSize="9" fill="#4c5248" textAnchor="middle" transform="rotate(-90 74 296)">6,10 M</text>

      <text x="46" y="418" {...mono} fontSize="9" fill="#6f7468">{labels[2]} · {labels[3]}</text>
      <Signature x={598} y={202} size={44}>{signature}</Signature>
    </svg>
  );
}

/** Healthcare — a booking screen plus the week's remaining availability. */
export function HealthAppointment({ labels, locale, signature }: { labels: Labels; locale: "fr" | "en"; signature: string }) {
  const days = locale === "fr" ? ["LUN", "MAR", "MER", "JEU", "VEN"] : ["MON", "TUE", "WED", "THU", "FRI"];
  const slots = [6, 3, 8, 5, 7];
  const free = locale === "fr" ? "CRÉNEAUX LIBRES CETTE SEMAINE" : "OPEN SLOTS THIS WEEK";

  return (
    <svg className="concept-svg health-appointment" viewBox="0 0 640 440" role="img" aria-hidden="true">
      <defs>
        <filter id="hl-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#123a2c" floodOpacity=".2" />
        </filter>
      </defs>

      {/* ambient shapes */}
      <circle cx="596" cy="66" r="104" fill="#f0a08c" opacity=".55" />
      <circle cx="60" cy="392" r="86" fill={S.lime} opacity=".7" />
      <circle cx="132" cy="130" r="40" fill="none" stroke="#2f3a33" strokeOpacity=".3" strokeDasharray="4 5" />

      <g filter="url(#hl-shadow)">
        <rect x="150" y="40" width="340" height="364" rx="28" fill={S.card} stroke={S.line} />
      </g>

      {/* app header */}
      <circle cx="192" cy="82" r="17" fill="#f0a08c" />
      <path d="M192 74 v16 M184 82 h16" stroke={S.card} strokeWidth="2.5" strokeLinecap="round" />
      <text x="220" y="79" {...mono} fontSize="11" fill={S.ink}>{labels[0]}</text>
      <text x="220" y="93" fontFamily="var(--sans)" fontWeight="500" fontSize="10" fill={S.muted}>Dr. Léa Marchand</text>
      <circle cx="452" cy="78" r="2" fill={S.muted} /><circle cx="460" cy="78" r="2" fill={S.muted} /><circle cx="468" cy="78" r="2" fill={S.muted} />
      <line x1="174" y1="114" x2="466" y2="114" stroke={S.line} />

      {/* next appointment */}
      <text x="174" y="142" {...mono} fontSize="10" fill={S.muted}>{labels[1]}</text>
      <rect x="174" y="156" width="292" height="76" rx="16" fill={S.ink} />
      <text x="194" y="180" {...mono} fontSize="9" fill="#9ea39a">{locale === "fr" ? "MARDI 14 OCTOBRE" : "TUESDAY 14 OCTOBER"}</text>
      <text x="194" y="214" fontFamily="var(--serif)" fontWeight="400" fontSize="32" fill={S.card}>{labels[2]}</text>
      <rect x="266" y="192" width="130" height="22" rx="11" fill="rgba(255,253,246,.13)" />
      <text x="331" y="207" {...mono} fontSize="8.5" fill="#d5d9cf" textAnchor="middle">{labels[3]}</text>
      <circle cx="432" cy="194" r="15" fill={S.lime} />
      <path d="M425 194 l5 5 l10 -11" fill="none" stroke={S.ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* availability chart */}
      <text x="174" y="262" {...mono} fontSize="10" fill={S.muted}>{free}</text>
      <g transform="translate(178 274)">
        <line x1="-4" y1="58" x2="288" y2="58" stroke={S.line} />
        {slots.map((v, i) => {
          const h = v * 5.4;
          const x = i * 58;
          const best = v === Math.max(...slots);
          return (
            <g key={days[i]}>
              <rect x={x} y={58 - h} width="22" height={h} rx="5" fill={best ? S.teal : "#bcd6cb"} />
              <text x={x + 11} y="74" {...mono} fontSize="8.5" fill={best ? S.ink : S.muted} textAnchor="middle">{days[i]}</text>
              {best && <text x={x + 11} y={52 - h} {...mono} fontSize="9" fill={S.teal} textAnchor="middle">{v}</text>}
            </g>
          );
        })}
      </g>

      {/* primary action */}
      <rect x="174" y="358" width="292" height="34" rx="17" fill={S.teal} />
      <text x="320" y="379" {...mono} fontSize="11" fill="#ffffff" textAnchor="middle">{locale === "fr" ? "RÉSERVER UN CRÉNEAU" : "BOOK AN APPOINTMENT"}</text>

      <Signature x={620} y={422} size={44}>{signature}</Signature>
    </svg>
  );
}

/* -------------------------------------------------------------------- work */

/** Operational planning — a resource schedule with shifts, absence and a now-line. */
export function PlanningVisual({ locale }: { locale: "fr" | "en" }) {
  /* The track maps 08:00 → 18:00 onto x 188 → 560, which keeps every shift
     inside the card's 64 → 576 content box however long its label is. */
  const at = (hour: number) => 188 + (hour - 8) * 37.2;
  const hours = [8, 10, 12, 14, 16, 18];
  const rows = locale === "fr"
    ? [["Équipe A", "A"], ["Équipe B", "B"], ["Maintenance", "M"], ["Astreinte", "N"]] as const
    : [["Team A", "A"], ["Team B", "B"], ["Maintenance", "M"], ["On-call", "O"]] as const;
  const legend = locale === "fr"
    ? [["Poste planifié", S.indigo], ["Intervention", S.clay], ["Absence validée", "#9aa0a8"]] as const
    : [["Scheduled shift", S.indigo], ["Intervention", S.clay], ["Approved leave", "#9aa0a8"]] as const;
  const bars = [
    { row: 0, from: 8, to: 12, fill: S.indigo, label: "08:00 — 12:00" },
    { row: 0, from: 13.5, to: 16.5, fill: S.indigo, label: "13:30 — 16:30", ghost: true },
    { row: 1, from: 10, to: 15, fill: S.clay, label: "10:00 — 15:00" },
    { row: 2, from: 8.5, to: 11, fill: "#9aa0a8", label: locale === "fr" ? "ABSENCE" : "LEAVE", hatch: true },
    { row: 2, from: 15.5, to: 18, fill: S.indigo, label: "15:30 — 18:00", ghost: true },
    { row: 3, from: 12, to: 17, fill: S.teal, label: locale === "fr" ? "ASTREINTE" : "ON-CALL" },
  ];

  return (
    <svg className="work-svg" viewBox="0 0 640 500" role="img" aria-hidden="true">
      <defs>
        <pattern id="pl-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="7" height="7" fill="#e6e8ec" />
          <line x1="0" y1="0" x2="0" y2="7" stroke="#9aa0a8" strokeWidth="2.5" />
        </pattern>
        <filter id="pl-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#161814" floodOpacity=".16" />
        </filter>
      </defs>

      <g filter="url(#pl-shadow)">
        <rect x="40" y="52" width="560" height="396" rx="12" fill={S.card} stroke={S.line} />
      </g>

      {/* toolbar */}
      <text x="64" y="88" {...mono} fontSize="11" fill={S.ink}>{locale === "fr" ? "PLANNING · SEMAINE 32" : "SCHEDULE · WEEK 32"}</text>
      <g transform="translate(478 74)">
        <rect x="0" y="0" width="98" height="24" rx="12" fill="#eef3ee" stroke={S.line} />
        <circle cx="16" cy="12" r="4" fill={S.teal} />
        <text x="28" y="16" {...mono} fontSize="9" fill={S.soft}>{locale === "fr" ? "EN DIRECT" : "LIVE"}</text>
      </g>
      <line x1="40" y1="110" x2="600" y2="110" stroke={S.line} />

      {/* time axis */}
      {hours.map((h) => (
        <text key={h} x={at(h)} y="134" {...mono} fontSize="9" fill={S.muted} textAnchor="middle">{`${h}`.padStart(2, "0")}:00</text>
      ))}
      {hours.map((h) => (
        <line key={h} x1={at(h)} y1="144" x2={at(h)} y2="392" stroke={S.grid} />
      ))}
      <line x1="180" y1="144" x2="180" y2="392" stroke={S.line} />

      {/* rows */}
      {rows.map(([label, initial], i) => (
        <g key={label}>
          <line x1="64" y1={144 + i * 62} x2="576" y2={144 + i * 62} stroke={S.grid} />
          <rect x="64" y={158 + i * 62} width="26" height="26" rx="8" fill="#eceade" stroke={S.line} />
          <text x="77" y={175 + i * 62} {...mono} fontSize="10" fill={S.soft} textAnchor="middle">{initial}</text>
          <text x="100" y={175 + i * 62} fontFamily="var(--sans)" fontWeight="600" fontSize="11" fill={S.ink}>{label}</text>
        </g>
      ))}
      <line x1="64" y1="392" x2="576" y2="392" stroke={S.line} />

      {/* shift blocks */}
      {bars.map((bar, i) => {
        const x = at(bar.from);
        const y = 156 + bar.row * 62;
        return (
          <g key={i}>
            <rect x={x} y={y} width={at(bar.to) - x} height="30" rx="7" fill={bar.hatch ? "url(#pl-hatch)" : bar.fill} opacity={bar.ghost ? 0.34 : 1} />
            <rect x={x} y={y} width="3" height="30" rx="1.5" fill={bar.fill} />
            <text x={x + 13} y={y + 19} {...mono} fontSize="9.5" fill={bar.hatch || bar.ghost ? S.soft : "#ffffff"}>{bar.label}</text>
          </g>
        );
      })}

      {/* now line */}
      <line x1={at(13)} y1="140" x2={at(13)} y2="396" stroke={S.clay} strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx={at(13)} cy="140" r="4" fill={S.clay} />

      {/* legend */}
      <g transform="translate(64 424)">
        {legend.map(([label, color], i) => (
          <g key={label} transform={`translate(${i * 172} 0)`}>
            <rect x="0" y="0" width="12" height="12" rx="4" fill={color as string} />
            <text x="20" y="10" fontFamily="var(--sans)" fontWeight="600" fontSize="10" fill={S.soft}>{label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Cardzap — the document pipeline, from PDF to validated structured data. */
export function CardzapVisual({ locale }: { locale: "fr" | "en" }) {
  const stages = locale === "fr"
    ? [["01", "EXTRACTION", "OCR + parsing"], ["02", "STRUCTURATION", "Schéma validé"], ["03", "GÉNÉRATION", "Assistée par IA"]]
    : [["01", "EXTRACTION", "OCR + parsing"], ["02", "STRUCTURING", "Validated schema"], ["03", "GENERATION", "AI assisted"]];

  return (
    <svg className="work-svg" viewBox="0 0 640 500" role="img" aria-hidden="true">
      <defs>
        <filter id="cz-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#000000" floodOpacity=".45" />
        </filter>
      </defs>

      {/* source document */}
      <g transform="rotate(-5 168 250)" filter="url(#cz-shadow)">
        <rect x="60" y="118" width="196" height="262" rx="8" fill="#f4f1e6" />
        <text x="82" y="164" fontFamily="var(--serif)" fontSize="30" fill={S.ink}>PDF</text>
        <text x="82" y="182" {...mono} fontSize="8.5" fill={S.muted}>{locale === "fr" ? "CONTRAT_2026.PDF" : "CONTRACT_2026.PDF"}</text>
        <line x1="82" y1="200" x2="234" y2="200" stroke="rgba(22,24,20,.14)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="82" y={216 + i * 18} width={i === 4 ? 96 : 152} height="5" rx="2.5" fill="rgba(22,24,20,.16)" />
        ))}
        <rect x="78" y="308" width="120" height="24" rx="5" fill={S.lime} opacity=".85" />
        <rect x="82" y="316" width="108" height="6" rx="3" fill="rgba(22,24,20,.45)" />
        {[0, 1].map((i) => (
          <rect key={i} x="82" y={344 + i * 18} width={i === 1 ? 74 : 128} height="5" rx="2.5" fill="rgba(22,24,20,.16)" />
        ))}
      </g>

      {/* pipeline */}
      <g transform="translate(300 128)">
        {stages.map(([n, title, sub], i) => (
          <g key={n} transform={`translate(0 ${i * 74})`}>
            <circle cx="18" cy="18" r="17" fill="none" stroke={S.lime} strokeWidth="1.5" />
            <text x="18" y="23" fontFamily="var(--serif)" fontSize="15" fill={S.lime} textAnchor="middle">{n}</text>
            <text x="48" y="15" {...mono} fontSize="10.5" fill="#ffffff">{title}</text>
            <text x="48" y="30" fontFamily="var(--sans)" fontWeight="500" fontSize="10" fill="#95998f">{sub}</text>
            {i < 2 && <line x1="18" y1="40" x2="18" y2="58" stroke={S.lime} strokeWidth="1.5" strokeDasharray="3 4" />}
          </g>
        ))}
      </g>

      {/* queue meter */}
      <g transform="translate(300 350)">
        <text x="0" y="0" {...mono} fontSize="9" fill="#95998f">{locale === "fr" ? "FILE DE TRAITEMENT" : "PROCESSING QUEUE"}</text>
        <rect x="0" y="10" width="252" height="8" rx="4" fill="rgba(255,255,255,.14)" />
        <rect x="0" y="10" width="196" height="8" rx="4" fill={S.lime} />
        <text x="252" y="18" {...mono} fontSize="9" fill="#ffffff" textAnchor="end">78%</text>
      </g>

      {/* structured output */}
      <g transform="translate(300 392)">
        <rect x="0" y="0" width="252" height="76" rx="10" fill={S.lime} />
        <text x="18" y="24" {...mono} fontSize="9" fill="rgba(22,24,20,.65)">{locale === "fr" ? "DONNÉES STRUCTURÉES" : "STRUCTURED DATA"}</text>
        <text x="18" y="56" fontFamily="var(--mono)" fontWeight="600" fontSize="20" fill={S.ink}>{locale === "fr" ? "{ 42 champs }" : "{ 42 fields }"}</text>
        <rect x="182" y="46" width="52" height="18" rx="9" fill={S.ink} />
        <text x="208" y="59" {...mono} fontSize="8.5" fill={S.lime} textAnchor="middle">{locale === "fr" ? "VALIDÉ" : "VALID"}</text>
      </g>
    </svg>
  );
}

/** Portfolio — the site itself, with its measured delivery scores. */
export function PortfolioVisual({ locale, headline }: { locale: "fr" | "en"; headline: string }) {
  const scores = [["100", "PERF."], ["100", "SEO"], ["100", "A11Y"]];

  return (
    <svg className="work-svg" viewBox="0 0 640 500" role="img" aria-hidden="true">
      <defs>
        <filter id="pf-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="20" stdDeviation="16" floodColor="#161814" floodOpacity=".3" />
        </filter>
      </defs>

      <g transform="rotate(-2 320 250)" filter="url(#pf-shadow)">
        <rect x="56" y="72" width="528" height="330" rx="12" fill="#f7f4ea" stroke={S.ink} strokeWidth="1.5" />
        <line x1="56" y1="112" x2="584" y2="112" stroke={S.ink} strokeOpacity=".18" />
        <circle cx="80" cy="92" r="4" fill="rgba(22,24,20,.3)" /><circle cx="94" cy="92" r="4" fill="rgba(22,24,20,.3)" /><circle cx="108" cy="92" r="4" fill="rgba(22,24,20,.3)" />
        <rect x="238" y="82" width="164" height="20" rx="10" fill="rgba(22,24,20,.06)" />
        <text x="320" y="96" {...mono} fontSize="9.5" fill={S.soft} textAnchor="middle">amalabaev.com</text>

        <text x="88" y="140" {...mono} fontSize="9" fill={S.muted}>{locale === "fr" ? "FULL-STACK · PRODUIT · DESIGN" : "FULL-STACK · PRODUCT · DESIGN"}</text>
        <text x="88" y="204" fontFamily="var(--serif)" fontSize="46" letterSpacing="-.03em" fill={S.ink}>{headline.split(" ").slice(0, 3).join(" ")}</text>
        <text x="88" y="250" fontFamily="var(--serif)" fontStyle="italic" fontSize="46" letterSpacing="-.03em" fill={S.ink} opacity=".55">{headline.split(" ").slice(3).join(" ")}</text>

        <line x1="88" y1="286" x2="552" y2="286" stroke={S.ink} strokeOpacity=".18" />
        {scores.map(([value, label], i) => (
          <g key={label} transform={`translate(${88 + i * 96} 0)`}>
            <circle cx="20" cy="336" r="19" fill="none" stroke="rgba(22,24,20,.12)" strokeWidth="3" />
            <circle cx="20" cy="336" r="19" fill="none" stroke={S.teal} strokeWidth="3" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset="0" transform="rotate(-90 20 336)" />
            <text x="20" y="341" fontFamily="var(--sans)" fontWeight="700" fontSize="13" fill={S.ink} textAnchor="middle">{value}</text>
            <text x="52" y="341" {...mono} fontSize="9" fill={S.soft}>{label}</text>
          </g>
        ))}
        <rect x="452" y="316" width="100" height="40" rx="8" fill={S.ink} />
        <text x="502" y="341" {...mono} fontSize="9.5" fill={S.lime} textAnchor="middle">LIVE / 2026</text>
      </g>

      <g transform="translate(496 60)">
        <circle cx="42" cy="42" r="42" fill="#f0a08c" stroke={S.ink} strokeWidth="1.5" />
        <text x="42" y="55" fontFamily="var(--serif)" fontSize="30" fill={S.ink} textAnchor="middle">AM</text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------- other */

/** Hero — a site preview card with the three outcomes it is measured on. */
export function HeroBrowser({ url, kicker, words, score, live, trend }: {
  url: string; kicker: string; words: readonly string[]; score: readonly (readonly [string, string])[]; live: string; trend: readonly string[];
}) {
  return (
    <svg className="hero-svg" viewBox="0 0 560 470" role="img" aria-hidden="true">
      <defs>
        <filter id="hb-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#161814" floodOpacity=".22" />
        </filter>
        <linearGradient id="hb-spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={S.indigo} stopOpacity=".22" />
          <stop offset="100%" stopColor={S.indigo} stopOpacity="0" />
        </linearGradient>
      </defs>

      <g filter="url(#hb-shadow)">
        <rect x="24" y="24" width="512" height="422" rx="14" fill={S.card} stroke={S.ink} strokeWidth="1.5" />
      </g>

      {/* browser bar */}
      <line x1="24" y1="70" x2="536" y2="70" stroke={S.ink} strokeOpacity=".2" />
      <circle cx="50" cy="47" r="4.5" fill="rgba(22,24,20,.28)" /><circle cx="66" cy="47" r="4.5" fill="rgba(22,24,20,.28)" /><circle cx="82" cy="47" r="4.5" fill="rgba(22,24,20,.28)" />
      <rect x="196" y="36" width="168" height="22" rx="11" fill="rgba(22,24,20,.05)" stroke={S.line} />
      <text x="280" y="51" {...mono} fontSize="10" fill={S.soft} textAnchor="middle">{url}</text>
      <rect x="466" y="36" width="48" height="22" rx="6" fill={S.lime} />
      <text x="490" y="51" {...mono} fontSize="9" fill={S.ink} textAnchor="middle">{live}</text>

      {/* page content */}
      <text x="56" y="112" {...mono} fontSize="9.5" fill={S.muted}>{kicker.toUpperCase()}</text>
      <text x="56" y="180" fontFamily="var(--serif)" fontSize="58" letterSpacing="-.035em" fill={S.ink}>{words[0]}</text>
      <text x="56" y="238" fontFamily="var(--serif)" fontStyle="italic" fontSize="58" letterSpacing="-.035em" fill={S.ink} opacity=".5">{words[1]}</text>
      <text x="56" y="296" fontFamily="var(--serif)" fontSize="58" letterSpacing="-.035em" fill={S.ink}>{words[2]}</text>

      <line x1="56" y1="320" x2="504" y2="320" stroke={S.ink} strokeOpacity=".18" />

      {score.map(([a, b], i) => (
        <g key={a} transform={`translate(${56 + i * 152} 0)`}>
          <text x="0" y="358" fontFamily="var(--serif)" fontSize="21" fill={S.ink}>0{i + 1}</text>
          <text x="28" y="349" {...mono} fontSize="9" fill={S.soft}>{a.toUpperCase()}</text>
          <text x="28" y="361" {...mono} fontSize="9" fill={S.muted}>{b.toUpperCase()}</text>
        </g>
      ))}

      {/* the site's own analytics widget */}
      <rect x="56" y="378" width="448" height="52" rx="10" fill="#faf8f0" stroke={S.line} />
      <text x="72" y="398" {...mono} fontSize="8.5" fill={S.muted}>{trend[0]}</text>
      <text x="72" y="416" fontFamily="var(--sans)" fontWeight="700" fontSize="14" fill={S.ink}>{trend[1]}</text>
      <path d="M204 418 C230 417 256 415 282 412 C308 409 334 408 360 404 C386 400 412 398 438 396 C456 394 472 393 488 390 L488 422 L204 422 Z" fill="url(#hb-spark)" />
      <path d="M204 418 C230 417 256 415 282 412 C308 409 334 408 360 404 C386 400 412 398 438 396 C456 394 472 393 488 390" fill="none" stroke={S.indigo} strokeWidth="2" strokeLinecap="round" />
      <circle cx="488" cy="390" r="4.5" fill={S.indigo} stroke="#faf8f0" strokeWidth="2" />
    </svg>
  );
}

/** Engineering profile — the layers a full-stack engagement actually covers. */
export function EngineeringDiagram({ locale }: { locale: "fr" | "en" }) {
  const layers = locale === "fr"
    ? [["INTERFACE", "React · TypeScript · design system"], ["LOGIQUE MÉTIER", "API · permissions · validations"], ["DONNÉES & JOBS", "MySQL · Redis · files de traitement"], ["LIVRAISON", "Tests · Docker · CI/CD · monitoring"]]
    : [["INTERFACE", "React · TypeScript · design system"], ["DOMAIN LOGIC", "APIs · permissions · validation"], ["DATA & JOBS", "MySQL · Redis · job queues"], ["DELIVERY", "Tests · Docker · CI/CD · monitoring"]];

  return (
    <svg className="engineering-svg" viewBox="0 0 820 280" role="img" aria-hidden="true">
      <defs>
        <marker id="eg-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill={S.ink} />
        </marker>
      </defs>

      {layers.map(([title, sub], i) => (
        <g key={title} transform={`translate(${16 + i * 200} 40)`}>
          <rect x="0" y="0" width="172" height="140" rx="12" fill={i === 0 ? S.lime : S.card} stroke={S.ink} strokeWidth="1.5" />
          <text x="20" y="36" fontFamily="var(--serif)" fontSize="22" fill={S.ink}>0{i + 1}</text>
          <text x="20" y="70" {...mono} fontSize="11" fill={S.ink}>{title}</text>
          <foreignObject x="20" y="80" width="134" height="52">
            <span style={{ fontFamily: "var(--sans)", fontSize: "11px", lineHeight: 1.45, color: S.soft, display: "block" }}>{sub}</span>
          </foreignObject>
          {i < 3 && <line x1="180" y1="70" x2="196" y2="70" stroke={S.ink} strokeWidth="1.5" markerEnd="url(#eg-arrow)" />}
        </g>
      ))}
      <line x1="16" y1="212" x2="804" y2="212" stroke={S.ink} strokeOpacity=".2" />
      <text x="16" y="236" {...mono} fontSize="10" fill={S.soft}>{locale === "fr" ? "UN SEUL INTERLOCUTEUR SUR LES QUATRE COUCHES" : "ONE POINT OF CONTACT ACROSS ALL FOUR LAYERS"}</text>
      <text x="804" y="236" {...mono} fontSize="10" fill={S.soft} textAnchor="end">AM / FULL-STACK</text>
    </svg>
  );
}
