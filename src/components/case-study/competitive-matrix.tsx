const FEATURES = [
  "Structured Award Types",
  "Award Calendar",
  "Multi-Role Permissions",
  "Budget Tracking",
  "Group-Based Configuration",
];

const COLS = [
  { name: "ZingHR (before)", before: true },
  { name: "Darwinbox",       before: false },
  { name: "Keka",            before: false },
  { name: "Zoho",            before: false },
  { name: "GreytHR",         before: false },
];

// [ZingHR-before, Darwinbox, Keka, Zoho, GreytHR]
const DATA: boolean[][] = [
  [false, true,  true,  true,  true ],
  [false, false, false, false, false],
  [false, true,  false, false, false],
  [false, true,  true,  false, false],
  [false, false, false, false, false],
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="Supported">
      <circle cx="9" cy="9" r="7.5" fill="rgba(104,211,145,0.12)" stroke="#68D391" strokeWidth="1.2"/>
      <polyline points="5,9.5 7.5,12 13,6.5"
        stroke="#68D391" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="Not supported">
      <circle cx="9" cy="9" r="7.5" fill="rgba(252,129,129,0.1)" stroke="#FC8181" strokeWidth="1.2"/>
      <line x1="6" y1="6" x2="12" y2="12" stroke="#FC8181" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="6" x2="6" y2="12" stroke="#FC8181" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function CompetitiveMatrix() {
  return (
    <figure className="rr-diagram rr-diagram--table" aria-label="Competitive feature comparison: ZingHR before module, Darwinbox, Keka, Zoho, and GreytHR across five capability dimensions">
      <div className="rr-comp-wrap">
        <div className="rr-comp-scroll">
          <table className="rr-comp-table">
            <thead>
              <tr>
                <th className="rr-comp-th rr-comp-th--feature">Feature</th>
                {COLS.map((col) => (
                  <th
                    key={col.name}
                    className={`rr-comp-th rr-comp-th--vendor${col.before ? " rr-comp-th--before" : ""}`}
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature, fi) => (
                <tr key={feature} className="rr-comp-row">
                  <td className="rr-comp-td rr-comp-td--feature">{feature}</td>
                  {DATA[fi].map((supported, ci) => (
                    <td
                      key={ci}
                      className={`rr-comp-td rr-comp-td--cell${ci === 0 ? " rr-comp-td--before" : ""}`}
                    >
                      {supported ? <Check /> : <Cross />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="rr-comp-footer">
          No competitor offered all five capabilities in a single configurable module.
        </p>
      </div>
    </figure>
  );
}
