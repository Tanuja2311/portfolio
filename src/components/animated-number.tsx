"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

const VALID_SUFFIX = /^[%×★+kM]?$/;

type ParsedMetric =
  | { animatable: true; value: number; prefix: string; suffix: string; decimals: number }
  | { animatable: false; raw: string };

export function parseMetricValue(str: string): ParsedMetric {
  const match = str.match(/^([^0-9]*)([\d.]+)([^0-9]*)$/);
  if (!match) return { animatable: false, raw: str };
  const [, prefix, numStr, suffix] = match;
  if (!VALID_SUFFIX.test(suffix)) return { animatable: false, raw: str };
  const value = parseFloat(numStr);
  if (isNaN(value)) return { animatable: false, raw: str };
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { animatable: true, value, prefix, suffix, decimals };
}

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState((0).toFixed(decimals));
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const duration = 1200;
    const start = performance.now();
    let frameId: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const current = easeOutCubic(t) * value;
      setDisplay(current.toFixed(decimals));
      if (t < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
