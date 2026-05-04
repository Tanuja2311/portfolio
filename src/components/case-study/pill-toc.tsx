"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "challenge", label: "Challenge" },
  { id: "process",   label: "Process"   },
  { id: "solution",  label: "Solution"  },
  { id: "impact",    label: "Impact"    },
] as const;

// Nav height (3.5rem) + TOC height (~46px) + margin
const SCROLL_OFFSET = 56 + 46 + 16;

export function PillTOC() {
  const [active, setActive] = useState<string>("challenge");
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Of all currently intersecting sections, pick the topmost one.
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting.length > 0) {
          setActive(intersecting[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll active pill into view inside the TOC bar on mobile.
  useEffect(() => {
    const bar = tocRef.current;
    if (!bar) return;
    const pill = bar.querySelector(`[data-id="${active}"]`) as HTMLElement | null;
    if (!pill) return;
    pill.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  }, [active]);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div className="cs-toc" role="navigation" aria-label="Case study sections">
      <div ref={tocRef} className="cs-toc-inner">
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            data-id={id}
            onClick={() => scrollToSection(id)}
            className={`cs-toc-pill${active === id ? " cs-toc-pill--active" : ""}`}
            aria-current={active === id ? "true" : undefined}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
