import type { Metric } from "@/lib/case-studies";

interface Props {
  metric: Metric;
  index?: number;
  projected?: boolean;
}

export function MetricCard({ metric, index = 0, projected = false }: Props) {
  return (
    <div
      className={`cs-metric${projected ? " cs-metric--projected" : ""}`}
      style={{ "--i": index } as React.CSSProperties}
    >
      <span className="cs-metric-value">{metric.value}</span>
      <span className="cs-metric-label">{metric.label}</span>
      <span className="cs-metric-context">{metric.context}</span>
      {projected && (
        <span className="cs-metric-projected-tag" aria-label="Projected metric">
          Projected
        </span>
      )}
    </div>
  );
}
