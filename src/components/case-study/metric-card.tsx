import type { Metric } from "@/lib/case-studies";

export function MetricCard({ metric, index = 0 }: { metric: Metric; index?: number }) {
  // Alternate subtle accent border per card.
  return (
    <div className="cs-metric" style={{ "--i": index } as React.CSSProperties}>
      <span className="cs-metric-value">{metric.value}</span>
      <span className="cs-metric-label">{metric.label}</span>
      <span className="cs-metric-context">{metric.context}</span>
    </div>
  );
}
