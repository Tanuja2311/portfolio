export function PivotFlowDiagram() {
  // Before — left side
  const bChro = { x: 72, y: 108, w: 156, h: 50 };
  const bCx   = bChro.x + bChro.w / 2;   // 150

  // After — right side
  const aChro    = { x: 462, y: 60, w: 156, h: 50 };
  const aCx      = aChro.x + aChro.w / 2; // 540
  const aBoxes   = [
    { x: 372,  y: 218, w: 100, h: 42, label: "Manager" },
    { x: 490,  y: 218, w: 100, h: 42, label: "Product Owner" },
    { x: 608,  y: 218, w: 100, h: 42, label: "Head of Product" },
  ];

  return (
    <figure
      className="rr-diagram"
      aria-label="Mid-project pivot: Before shows CHRO acting as both nominator and approver (single actor, does not scale). After shows three separate nominator roles (Manager, Product Owner, Head of Product) feeding nominations up to the CHRO as final approver (multi-level, configurable per org structure)."
    >
      <svg viewBox="0 0 728 300" width="100%" height="auto" fill="none" aria-hidden="true">

        {/* ── BEFORE label ───────────────────────────────────── */}
        <text x="150" y="32" textAnchor="middle" fontSize="11"
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
        <text x={bCx} y={bChro.y + 22} textAnchor="middle"
          fontSize="14" fill="currentColor" fontWeight="600"
          fontFamily="var(--font-sans), sans-serif">
          CHRO
        </text>

        {/* Nominates arrow — loops from left back to box */}
        <path d={`M${bChro.x},${bChro.y + 14} C${bChro.x - 42},${bChro.y - 18} ${bChro.x - 42},${bChro.y + 46} ${bChro.x},${bChro.y + 38}`}
          stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.45"
        />
        <polygon
          points={`${bChro.x},${bChro.y + 38} ${bChro.x - 10},${bChro.y + 32} ${bChro.x - 8},${bChro.y + 44}`}
          fill="currentColor" opacity="0.4"
        />
        <text x={bChro.x - 48} y={bChro.y + 15} textAnchor="end" fontSize="10"
          fill="currentColor" opacity="0.5"
          fontFamily="var(--font-sans), sans-serif">
          Nominates
        </text>

        {/* Approves arrow — loops from right back to box */}
        <path d={`M${bChro.x + bChro.w},${bChro.y + 14} C${bChro.x + bChro.w + 42},${bChro.y - 18} ${bChro.x + bChro.w + 42},${bChro.y + 46} ${bChro.x + bChro.w},${bChro.y + 38}`}
          stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.45"
        />
        <polygon
          points={`${bChro.x + bChro.w},${bChro.y + 38} ${bChro.x + bChro.w + 10},${bChro.y + 32} ${bChro.x + bChro.w + 8},${bChro.y + 44}`}
          fill="currentColor" opacity="0.4"
        />
        <text x={bChro.x + bChro.w + 48} y={bChro.y + 15} textAnchor="start" fontSize="10"
          fill="currentColor" opacity="0.5"
          fontFamily="var(--font-sans), sans-serif">
          Approves
        </text>

        {/* Before caption */}
        <text x="150" y="226" textAnchor="middle" fontSize="11.5"
          fill="currentColor" opacity="0.45"
          fontFamily="var(--font-sans), sans-serif">
          Single actor. Does not scale.
        </text>

        {/* ── Divider ────────────────────────────────────────── */}
        <line x1="338" y1="44" x2="338" y2="256"
          stroke="currentColor" strokeWidth="1" opacity="0.12" strokeDasharray="4 3"
        />

        {/* ── AFTER label ────────────────────────────────────── */}
        <text x="550" y="32" textAnchor="middle" fontSize="11"
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

        {/* ── After nominator boxes + arrows ─────────────────── */}
        {aBoxes.map((b) => {
          const bMidX = b.x + b.w / 2;
          return (
            <g key={b.label}>
              {/* Box */}
              <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="6"
                style={{ fill: "var(--diag-box-fill)", stroke: "var(--diag-box-stroke)" }}
                strokeWidth="1.2"
              />
              <text x={bMidX} y={b.y + b.h / 2 + 5} textAnchor="middle"
                fontSize="11.5" fill="currentColor" fontWeight="500"
                fontFamily="var(--font-sans), sans-serif">
                {b.label}
              </text>
              {/* Arrow to CHRO */}
              <line
                x1={bMidX} y1={b.y}
                x2={aCx}   y2={aChro.y + aChro.h}
                stroke="#B794F4" strokeWidth="1.3" opacity="0.45"
              />
              <polygon
                points={`${aCx},${aChro.y + aChro.h} ${aCx - 5},${aChro.y + aChro.h + 10} ${aCx + 5},${aChro.y + aChro.h + 10}`}
                fill="#B794F4" opacity="0.45"
              />
              {/* "Nominates" label on arrow midpoint */}
              <text
                x={(bMidX + aCx) / 2 + 6}
                y={(b.y + aChro.y + aChro.h) / 2}
                fontSize="9.5" fill="#B794F4" opacity="0.55"
                fontFamily="var(--font-sans), sans-serif"
              >
                Nominates
              </text>
            </g>
          );
        })}

        {/* After caption */}
        <text x="550" y="277" textAnchor="middle" fontSize="11.5"
          fill="currentColor" opacity="0.45"
          fontFamily="var(--font-sans), sans-serif">
          Multi-level. Configurable per org structure.
        </text>

      </svg>
    </figure>
  );
}
