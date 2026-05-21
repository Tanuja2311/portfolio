"use client";

import { motion } from "framer-motion";

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
  return (
    <div className="cs-summary">
      <div className="cs-summary-grid">
        {CELLS.map(({ key, label }, i) => (
          <motion.div
            key={key}
            className="cs-summary-cell"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
          >
            <p className="cs-summary-label">{label}</p>
            <p className="cs-summary-body">{summary[key]}</p>
          </motion.div>
        ))}
      </div>

      <div className="cs-summary-divider" aria-hidden />

      <div className="cs-summary-hint">
        <span className="cs-summary-hint-circle" aria-hidden>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
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
      </div>
    </div>
  );
}
