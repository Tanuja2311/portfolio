export function PivotFlowDiagram() {
  // Before — left half (0–320, center x=160)
  const bChro = { x: 82, y: 96, w: 156, h: 64 };
  const bCx   = bChro.x + bChro.w / 2; // 160

  // After — right half (320–640, center x=480)
  const aChro  = { x: 402, y: 44, w: 156, h: 50 };
  const aCx    = aChro.x + aChro.w / 2; // 480
  const aBoxes = [
    { x: 325, y: 170, w: 90, h: 42, label: "Manager" },
    { x: 435, y: 170, w: 90, h: 42, label: "Product Owner" },
    { x: 545, y: 170, w: 90, h: 42, label: "Head of Product" },
  ];

  return (
    <figure
      className="rr-diagram"
      aria-label="Mid-project pivot: Before shows CHRO acting as both nominator and approver (single actor, does not scale). After shows three separate nominator roles (Manager, Product Owner, Head of Product) feeding nominations up to the CHRO as final approver (multi-level, configurable per org structure)."
    >
      <svg viewBox="0 0 640 280" width="100%" height="auto" fill="none" aria-hidden="true">

        {/* ── BEFORE label ───────────────────────────────────── */}
        <text x="160" y="30" textAnchor="middle" fontSize="11"
          fill="currentColor" opacity="0.4"
          fontFamily="var(--font-sans), sans-serif"
          fontWeight="600" letterSpacing="0.08em">
          BEFORE
        </text>

        {/* ── Before CHRO box ────────────────────────────────── */}
        <rect
          x={bChro.x} y={bChro.y} width={bChro.w} height={bChro.h} rx="8"
          style={{ fill: "var(--diag-box-fill)", stroke: "var(--diag-box-stroke)" }}
          strokeWidth="1.2"
        />
        <text x={bCx} y={bChro.y + 24} textAnchor="middle"
          fontSize="14" fill="currentColor" fontWeight="600"
          fontFamily="var(--font-sans), sans-serif">
          CHRO
        </text>
        <text x={bCx} y={bChro.y + 44} textAnchor="middle"
          fontSize="10.5" fill="currentColor" opacity="0.5"
          fontFamily="var(--font-sans), sans-serif">
          Nominates + Approves
        </text>

        {/* Before caption */}
        <text x="160" y="248" textAnchor="middle" fontSize="11.5"
          fill="currentColor" opacity="0.45"
          fontFamily="var(--font-sans), sans-serif">
          Single actor. Does not scale.
        </text>

        {/* ── Divider ────────────────────────────────────────── */}
        <line x1="320" y1="40" x2="320" y2="260"
          stroke="currentColor" strokeWidth="1" opacity="0.12" strokeDasharray="4 3"
        />

        {/* ── AFTER label ────────────────────────────────────── */}
        <text x="480" y="30" textAnchor="middle" fontSize="11"
          fill="#B794F4" opacity="0.7"
          fontFamily="var(--font-sans), sans-serif"
          fontWeight="600" letterSpacing="0.08em">
          AFTER
        </text>

        {/* ── After CHRO box (purple) ────────────────────────── */}
        <rect
          x={aChro.x} y={aChro.y} width={aChro.w} height={aChro.h} rx="8"
          fill="rgba(183,148,244,0.14)" stroke="#B794F4" strokeWidth="1.5"
        />
        <text x={aCx} y={aChro.y + 21} textAnchor="middle"
          fontSize="14" fill="#B794F4" fontWeight="700"
          fontFamily="var(--font-sans), sans-serif">
          CHRO
        </text>
        <text x={aCx} y={aChro.y + 37} textAnchor="middle"
          fontSize="10.5" fill="#B794F4" opacity="0.7"
          fontFamily="var(--font-sans), sans-serif">
          Approves
        </text>

        {/* ── After nominator boxes + lines to CHRO ──────────── */}
        {aBoxes.map((b) => {
          const bMidX = b.x + b.w / 2;
          return (
            <g key={b.label}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="6"
                style={{ fill: "var(--diag-box-fill)", stroke: "var(--diag-box-stroke)" }}
                strokeWidth="1.2"
              />
              <text x={bMidX} y={b.y + b.h / 2 + 5} textAnchor="middle"
                fontSize="11" fill="currentColor" fontWeight="500"
                fontFamily="var(--font-sans), sans-serif">
                {b.label}
              </text>
              <line
                x1={bMidX} y1={b.y}
                x2={aCx}   y2={aChro.y + aChro.h}
                stroke="#B794F4" strokeWidth="1.3" opacity="0.45"
              />
            </g>
          );
        })}

        {/* After caption */}
        <text x="480" y="248" textAnchor="middle" fontSize="11.5"
          fill="currentColor" opacity="0.45"
          fontFamily="var(--font-sans), sans-serif">
          Multi-level. Configurable per org structure.
        </text>

      </svg>
    </figure>
  );
}
