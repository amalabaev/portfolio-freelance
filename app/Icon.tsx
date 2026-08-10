/**
 * Arrow and marker glyphs as inline SVG.
 *
 * Unicode arrows (→ ↗ ↘ ←) are outside the Inter subset the site ships, so
 * browsers resolved them through the colour-emoji font and rendered blue tiles.
 * Drawing them keeps one stroke weight and one colour across every platform.
 */

const paths = {
  down: "M12 5v14M6 13l6 6 6-6",
  up: "M12 19V5M6 11l6-6 6 6",
  right: "M5 12h14M13 6l6 6-6 6",
  left: "M19 12H5M11 18l-6-6 6-6",
  upRight: "M7 17 17 7M8 7h9v9",
  downRight: "M7 7l10 10M17 8v9H8",
  cornerDown: "M7 5v7a3 3 0 0 0 3 3h7M14 11l4 4-4 4",
} as const;

export function Icon({ name, size = 16 }: { name: keyof typeof paths; size?: number }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}

/** The small four-pointed mark used as a list and strip bullet. */
export function Spark({ size = 10 }: { size?: number }) {
  return (
    <svg className="icon spark" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 0c.7 6.3 4.9 10.6 12 12-7.1 1.4-11.3 5.7-12 12-.7-6.3-4.9-10.6-12-12C7.1 10.6 11.3 6.3 12 0Z" />
    </svg>
  );
}

/** Copy-to-clipboard glyph for the email button. */
export function CopyIcon({ size = 14 }: { size?: number }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15" />
    </svg>
  );
}
