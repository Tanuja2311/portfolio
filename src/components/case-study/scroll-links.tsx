"use client";

import { Fragment, useEffect, useState } from "react";

export interface ScrollSection {
  id: string;
  label: string;
}

export function CsScrollLinks({ sections }: { sections: ScrollSection[] }) {
  const [active,  setActive]  = useState<string>(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);

  // Track which section is in view → active link
  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (hit.length > 0) setActive(hit[0].target.id);
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  // Show pill once the first section has entered the viewport; hide at top
  useEffect(() => {
    function check() {
      const firstEl = document.getElementById(sections[0]?.id ?? "");
      if (!firstEl) { setVisible(false); return; }
      // Becomes visible when the first section's top edge is within the viewport
      setVisible(firstEl.getBoundingClientRect().top <= window.innerHeight);
    }

    window.addEventListener("scroll", check, { passive: true });
    check(); // run once on mount
    return () => window.removeEventListener("scroll", check);
  }, [sections]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <nav
      className={`cs-float-nav${visible ? " cs-float-nav--visible" : ""}`}
      aria-label="Page sections"
      aria-hidden={!visible}
    >
      {sections.map(({ id, label }, i) => (
        <Fragment key={id}>
          <button
            onClick={() => scrollTo(id)}
            className={`cs-float-link${active === id ? " cs-float-link--active" : ""}`}
            aria-current={active === id ? "true" : undefined}
            tabIndex={visible ? 0 : -1}
          >
            {label}
          </button>
          {i < sections.length - 1 && (
            <span className="cs-float-sep" aria-hidden>·</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
