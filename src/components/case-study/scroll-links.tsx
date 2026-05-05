"use client";

import { Fragment, useEffect, useState } from "react";

export interface ScrollSection {
  id: string;
  label: string;
}

export function CsScrollLinks({ sections }: { sections: ScrollSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <nav className="cs-float-nav" aria-label="Page sections">
      {sections.map(({ id, label }, i) => (
        <Fragment key={id}>
          <button
            onClick={() => scrollTo(id)}
            className={`cs-float-link${active === id ? " cs-float-link--active" : ""}`}
            aria-current={active === id ? "true" : undefined}
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
