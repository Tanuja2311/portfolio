export function JuryModelDiagram() {
  // Boxes
  const chro   = { x: 195, y: 42, w: 170, h: 48 };
  const bottom = [
    { x: 28,  y: 252, w: 130, h: 44, label: "Managers" },
    { x: 215, y: 252, w: 130, h: 44, label: "Product Owners" },
    { x: 402, y: 252, w: 130, h: 44, label: "Heads of Product" },
  ];

  const chroMidX  = chro.x + chro.w / 2;           // 280
  const chroBot   = chro.y + chro.h;                // 90
  const connY     = 178;                             // horizontal connector y
  const arrowTipY = chroBot + 1;                     // where arrow meets CHRO

  return (
    <figure
      className="rr-diagram"
      aria-label="Jury mental model: three preliminary judges (Managers, Product Owners, Heads of Product) nominate candidates; the CHRO acts as final jury and approves or rejects nominations"
    >
      <svg viewBox="0 0 560 370" width="100%" height="auto" fill="none" aria-hidden="true">

        {/* ── Tree connector ─────────────────────────────────── */}
        {/* Vertical stems from each bottom box to connector line */}
        {bottom.map((b) => {
          const bx = b.x + b.w / 2;
          return (
            <line key={b.label}
              x1={bx} y1={b.y} x2={bx} y2={connY}
              stroke="#B794F4" strokeWidth="1.5" opacity="0.45"
            />
          );
        })}
        {/* Horizontal connector */}
        <line
          x1={bottom[0].x + bottom[0].w / 2} y1={connY}
          x2={bottom[2].x + bottom[2].w / 2} y2={connY}
          stroke="#B794F4" strokeWidth="1.5" opacity="0.45"
        />
        {/* Vertical trunk to CHRO */}
        <line
          x1={chroMidX} y1={connY}
          x2={chroMidX} y2={arrowTipY}
          stroke="#B794F4" strokeWidth="1.5" opacity="0.7"
        />
        {/* Arrow tip at CHRO bottom */}
        <polygon
          points={`${chroMidX},${chro.y} ${chroMidX - 6},${chro.y + 12} ${chroMidX + 6},${chro.y + 12}`}
          fill="#B794F4" opacity="0.7"
        />

        {/* ── CHRO box (purple) ──────────────────────────────── */}
        <rect
          x={chro.x} y={chro.y} width={chro.w} height={chro.h} rx="8"
          fill="rgba(183,148,244,0.14)" stroke="#B794F4" strokeWidth="1.5"
        />
        <text x={chroMidX} y={chro.y + 21} textAnchor="middle"
          fontSize="15" fill="#B794F4" fontWeight="700"
          fontFamily="var(--font-sans), sans-serif">
          CHRO
        </text>
        <text x={chroMidX} y={chro.y + 37} textAnchor="middle"
          fontSize="11" fill="#B794F4" opacity="0.75"
          fontFamily="var(--font-sans), sans-serif">
          Final jury · Approves or rejects
        </text>

        {/* ── Bottom boxes ───────────────────────────────────── */}
        {bottom.map((b) => (
          <g key={b.label}>
            <rect
              x={b.x} y={b.y} width={b.w} height={b.h} rx="7"
              style={{ fill: "var(--diag-box-fill)", stroke: "var(--diag-box-stroke)" }}
              strokeWidth="1.2"
            />
            <text x={b.x + b.w / 2} y={b.y + b.h / 2 + 5} textAnchor="middle"
              fontSize="13" fill="currentColor" fontWeight="500"
              fontFamily="var(--font-sans), sans-serif">
              {b.label}
            </text>
          </g>
        ))}

        {/* ── "Nominates" label on trunk ─────────────────────── */}
        <text x={chroMidX + 10} y={connY - 12} fontSize="11"
          fill="#B794F4" opacity="0.6" fontFamily="var(--font-sans), sans-serif">
          Nominates
        </text>

        {/* ── Caption below bottom row ───────────────────────── */}
        <text x="280" y="314" textAnchor="middle" fontSize="11.5"
          fill="currentColor" opacity="0.5"
          fontFamily="var(--font-sans), sans-serif">
          Preliminary judges · Nominate candidates within their group scope
        </text>

        {/* ── Side annotation ────────────────────────────────── */}
        <text x="546" y="148" textAnchor="end" fontSize="10.5"
          fill="currentColor" opacity="0.38"
          fontFamily="var(--font-sans), sans-serif" fontStyle="italic">
          Modeled after real-world
        </text>
        <text x="546" y="163" textAnchor="end" fontSize="10.5"
          fill="currentColor" opacity="0.38"
          fontFamily="var(--font-sans), sans-serif" fontStyle="italic">
          award jury systems.
        </text>

      </svg>
    </figure>
  );
}
