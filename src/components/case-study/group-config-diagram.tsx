export function GroupConfigDiagram() {
  // Three overlapping circles
  const circles = [
    { cx: 188, cy: 168, r: 108, label: "Location",  examples: ["Mumbai", "Delhi", "Bangalore"], ex_y: [145, 162, 179] },
    { cx: 372, cy: 168, r: 108, label: "Function",  examples: ["Design", "Engineering", "Sales"], ex_y: [145, 162, 179] },
    { cx: 280, cy: 296, r: 108, label: "Team",       examples: ["Project Alpha", "Project Beta"], ex_y: [300, 318] },
  ] as const;

  // Approximate centers of overlap regions for award icons
  const overlaps = [
    { x: 280, y: 168 },   // Location ∩ Function
    { x: 215, y: 248 },   // Location ∩ Team
    { x: 345, y: 248 },   // Function ∩ Team
    { x: 280, y: 238 },   // All three (triple)
  ];

  return (
    <figure
      className="rr-diagram"
      aria-label="Group-based award configuration: awards can target Location groups, Function groups, Team groups, or any combination, independent of reporting hierarchy"
    >
      <svg viewBox="0 0 560 420" width="100%" height="auto" fill="none" aria-hidden="true">

        {/* ── Circles ────────────────────────────────────────── */}
        <circle cx={188} cy={168} r={108} fill="rgba(183,148,244,0.10)" stroke="#B794F4" strokeWidth="1.2" opacity="0.7"/>
        <circle cx={372} cy={168} r={108} fill="rgba(183,148,244,0.10)" stroke="#B794F4" strokeWidth="1.2" opacity="0.7"/>
        <circle cx={280} cy={296} r={108} fill="rgba(183,148,244,0.10)" stroke="#B794F4" strokeWidth="1.2" opacity="0.7"/>

        {/* ── Circle labels ──────────────────────────────────── */}
        <text x="136" y="122" textAnchor="middle" fontSize="13" fill="currentColor"
          fontWeight="600" fontFamily="var(--font-sans), sans-serif">
          Location
        </text>
        {["Mumbai", "Delhi", "Bangalore"].map((t, i) => (
          <text key={t} x="136" y={142 + i * 15} textAnchor="middle" fontSize="10.5"
            fill="currentColor" opacity="0.45"
            fontFamily="var(--font-sans), sans-serif">
            {t}
          </text>
        ))}

        <text x="424" y="122" textAnchor="middle" fontSize="13" fill="currentColor"
          fontWeight="600" fontFamily="var(--font-sans), sans-serif">
          Function
        </text>
        {["Design", "Engineering", "Sales"].map((t, i) => (
          <text key={t} x="424" y={142 + i * 15} textAnchor="middle" fontSize="10.5"
            fill="currentColor" opacity="0.45"
            fontFamily="var(--font-sans), sans-serif">
            {t}
          </text>
        ))}

        <text x="280" y="374" textAnchor="middle" fontSize="13" fill="currentColor"
          fontWeight="600" fontFamily="var(--font-sans), sans-serif">
          Team
        </text>
        {["Project Alpha", "Project Beta"].map((t, i) => (
          <text key={t} x="280" y={390 + i * 15} textAnchor="middle" fontSize="10.5"
            fill="currentColor" opacity="0.45"
            fontFamily="var(--font-sans), sans-serif">
            {t}
          </text>
        ))}

        {/* ── Award icons in overlap regions (simple star) ───── */}
        {overlaps.map((o, i) => (
          <g key={i} transform={`translate(${o.x}, ${o.y})`}>
            {/* 5-pointed star, small */}
            <polygon
              points="0,-7 1.7,-2.3 6.6,-2.3 2.7,0.9 4.1,5.9 0,3.1 -4.1,5.9 -2.7,0.9 -6.6,-2.3 -1.7,-2.3"
              fill="#B794F4" opacity="0.65"
            />
          </g>
        ))}

        {/* ── Caption ────────────────────────────────────────── */}
        <text x="280" y="413" textAnchor="middle" fontSize="11"
          fill="currentColor" opacity="0.45"
          fontFamily="var(--font-sans), sans-serif">
          Awards can target any group or combination, independent of reporting hierarchy.
        </text>

      </svg>
    </figure>
  );
}
