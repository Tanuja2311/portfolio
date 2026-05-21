export function BeforeStateDiagram() {
  return (
    <figure
      className="rr-diagram"
      aria-label="Before state: ZingHR's recognition system ran on one admin's phone calendar, physical diary, and 13 years of memory — a single point of failure for 500 employees across 5 regions and 5 award types"
    >
      <svg
        viewBox="0 0 640 288"
        width="100%"
        height="auto"
        fill="none"
        aria-hidden="true"
        overflow="visible"
      >
        {/* ── Phone icon (x=115) ─────────────────────────────────── */}
        <g transform="translate(101, 12)">
          <rect x="0" y="0" width="28" height="46" rx="4"
            style={{ fill: "var(--diag-box-fill)" }}
            stroke="currentColor" strokeWidth="1.5"
          />
          <line x1="9" y1="5" x2="19" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="39" r="3" stroke="currentColor" strokeWidth="1.2"/>
          <line x1="4" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
          <line x1="4" y1="32" x2="24" y2="32" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
        </g>
        <text x="115" y="74" textAnchor="middle" fontSize="12" fill="currentColor"
          opacity="0.65" fontFamily="var(--font-sans), sans-serif" fontWeight="500">
          Phone Calendar
        </text>

        {/* ── Diary icon (x=320) ────────────────────────────────── */}
        <g transform="translate(303, 12)">
          <rect x="4" y="0" width="28" height="46" rx="2"
            style={{ fill: "var(--diag-box-fill)" }}
            stroke="currentColor" strokeWidth="1.5"
          />
          <line x1="4" y1="0" x2="4" y2="46" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="12" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="12" y1="19" x2="28" y2="19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="12" y1="26" x2="23" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="12" y1="33" x2="26" y2="33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
        </g>
        <text x="320" y="74" textAnchor="middle" fontSize="12" fill="currentColor"
          opacity="0.65" fontFamily="var(--font-sans), sans-serif" fontWeight="500">
          Physical Diary
        </text>

        {/* ── Brain icon (x=525) ────────────────────────────────── */}
        <g transform="translate(506, 12)">
          <path
            d="M19,3 C19,3 25,0 30,4 C35,8 35,15 31,18 C33,21 33,26 30,28 C28,31 24,31 21,29 C19,31 15,31 13,29 C10,31 6,31 4,28 C1,26 1,21 3,18 C-1,15 0,8 5,4 C9,0 15,3 19,3 Z"
            stroke="currentColor" strokeWidth="1.5"
          />
          <line x1="19" y1="3" x2="19" y2="29" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 2"/>
          <path d="M9,15 C11,13 14,14 16,15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M22,15 C24,13 27,14 29,15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="19" y1="29" x2="19" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
        </g>
        <text x="525" y="70" textAnchor="middle" fontSize="12" fill="currentColor"
          opacity="0.65" fontFamily="var(--font-sans), sans-serif" fontWeight="500">
          13 Years of
        </text>
        <text x="525" y="84" textAnchor="middle" fontSize="12" fill="currentColor"
          opacity="0.65" fontFamily="var(--font-sans), sans-serif" fontWeight="500">
          Memory
        </text>

        {/* ── Converging dashed lines ──────────────────────────── */}
        <line x1="115" y1="90" x2="320" y2="181" stroke="#B794F4" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5"/>
        <line x1="320" y1="90" x2="320" y2="181" stroke="#B794F4" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5"/>
        <line x1="525" y1="96" x2="320" y2="181" stroke="#B794F4" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5"/>

        {/* ── Person silhouette ──────────────────────────────── */}
        <circle cx="320" cy="194" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M297,228 C297,213 343,213 343,228" stroke="currentColor" strokeWidth="1.5"/>

        {/* Warning badge */}
        <g transform="translate(337, 177)">
          <polygon points="9,0 18,16 0,16"
            fill="rgba(245,101,101,0.12)"
            stroke="#F56565" strokeWidth="1.5" strokeLinejoin="round"
          />
          <text x="9" y="13.5" textAnchor="middle" fontSize="8.5" fill="#F56565"
            fontWeight="800" fontFamily="var(--font-sans), sans-serif">!
          </text>
        </g>

        {/* ── Labels ────────────────────────────────────────── */}
        <text x="320" y="252" textAnchor="middle" fontSize="14" fill="currentColor"
          fontWeight="600" fontFamily="var(--font-sans), sans-serif">
          Single Point of Failure
        </text>
        <text x="320" y="272" textAnchor="middle" fontSize="11" fill="currentColor"
          opacity="0.45" fontFamily="var(--font-sans), sans-serif">
          500 employees · 5 regions · 5 award types
        </text>
      </svg>
    </figure>
  );
}
