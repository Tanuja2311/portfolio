"use client";

import { Fragment } from "react";

export interface ScrollSection {
  id: string;
  label: string;
}

export function CsScrollLinks({ sections }: { sections: ScrollSection[] }) {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    // Clear fixed floating nav (~68px) plus a little breathing room
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <nav className="cs-scroll-links" aria-label="Page sections">
      {sections.map(({ id, label }, i) => (
        <Fragment key={id}>
          <button onClick={() => scrollTo(id)} className="cs-scroll-link">
            {label}
          </button>
          {i < sections.length - 1 && (
            <span className="cs-scroll-sep" aria-hidden>·</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
