"use client";

import { useEffect, useRef, useState } from "react";

export interface TocSection {
  id: string;
  label: string;
}

const DEFAULT_SECTIONS: TocSection[] = [
  { id: "challenge", label: "Challenge" },
  { id: "process",   label: "Process"   },
  { id: "solution",  label: "Solution"  },
  { id: "impact",    label: "Impact"    },
];

// Nav height (3.5rem) + TOC height (~46px) + margin
const SCROLL_OFFSET = 56 + 46 + 16;

export function PillTOC({ sections = DEFAULT_SECTIONS }: { sections?: TocSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (intersecting.length > 0) setActive(intersecting[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  // Keep active pill scrolled into view on narrow screens.
  useEffect(() => {
    const bar = tocRef.current;
    if (!bar) return;
    const pill = bar.querySelector(`[data-id="${active}"]`) as HTMLElement | null;
    pill?.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
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
        {sections.map(({ id, label }) => (
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
