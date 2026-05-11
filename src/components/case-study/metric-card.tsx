"use client";

import type { Metric } from "@/lib/case-studies";
import { AnimatedNumber, parseMetricValue } from "@/components/animated-number";

interface Props {
  metric: Metric;
  index?: number;
  projected?: boolean;
}

export function MetricCard({ metric, index = 0, projected = false }: Props) {
  const parsed = parseMetricValue(metric.value);
  return (
    <div
      className={`cs-metric${projected ? " cs-metric--projected" : ""}`}
      style={{ "--i": index } as React.CSSProperties}
    >
      <span className="cs-metric-value">
        {parsed.animatable ? (
          <AnimatedNumber
            value={parsed.value}
            prefix={parsed.prefix}
            suffix={parsed.suffix}
            decimals={parsed.decimals}
          />
        ) : (
          metric.value
        )}
      </span>
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
