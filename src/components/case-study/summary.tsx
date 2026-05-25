"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface CaseStudySummaryData {
  problem:  string;
  role:     string;
  timeline: string;
  outcome:  string;
}

const CELLS: { key: keyof CaseStudySummaryData; label: string }[] = [
  { key: "problem",  label: "Problem"  },
  { key: "role",     label: "My Role"  },
  { key: "timeline", label: "Timeline" },
  { key: "outcome",  label: "Outcome"  },
];

export function CaseStudySummary({ summary }: { summary: CaseStudySummaryData }) {
  const reduced = useReducedMotion();

  return (
    <div className="cs-summary">
      <dl className="cs-summary-grid">
        {CELLS.map(({ key, label }, i) => (
          <motion.div
            key={key}
            className="cs-summary-cell"
            initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.5, ease: "easeOut", delay: reduced ? 0 : 0.2 + i * 0.1 }}
          >
            <dt className="cs-summary-label">{label}</dt>
            <dd className="cs-summary-body">{summary[key]}</dd>
          </motion.div>
        ))}
      </dl>

      <div className="cs-summary-divider" aria-hidden />

      <button
        className="cs-summary-hint"
        onClick={() =>
          document.getElementById("cs-toc")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to case study navigation"
      >
        <span className="cs-summary-hint-circle" aria-hidden>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 4l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>Scroll for the full case study</span>
      </button>
    </div>
  );
}
