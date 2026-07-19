"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { REVEAL_EASE } from "@/components/RevealSection";

const SCROLL_THRESHOLD = 400;

function ArrowUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 13V3M8 3L3.5 7.5M8 3l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: REVEAL_EASE }}
          whileHover={{ color: "#B794F4", borderColor: "#B794F4" }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 45,
            width: "44px",
            height: "44px",
            borderRadius: "9999px",
            background: "#0A0A0A",
            border: "1px solid rgba(245, 243, 238, 0.25)",
            color: "#f5f3ee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <ArrowUpIcon />
        </m.button>
      )}
    </AnimatePresence>
  );
}
