"use client";

import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface ScrollSection {
  id: string;
  label: string;
}

export function CsScrollLinks({ sections }: { sections: ScrollSection[] }) {
  const [active,  setActive]  = useState<string>(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount guard - createPortal needs document.body (unavailable during SSR)
  useEffect(() => { setMounted(true); }, []);

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
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  // Show pill once the first section enters the viewport; hide when above it
  useEffect(() => {
    function check() {
      const firstEl = document.getElementById(sections[0]?.id ?? "");
      if (!firstEl) { setVisible(false); return; }
      setVisible(firstEl.getBoundingClientRect().top <= window.innerHeight);
    }
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, [sections]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  }

  if (!mounted) return null;

  // Portal into document.body so position:fixed is relative to the viewport,
  // not any ancestor that has a transform (e.g. PageTransition).
  return (
    <>
      {/* In-flow anchor so #cs-toc scroll target exists for the summary hint */}
      <div id="cs-toc" style={{ height: 0 }} aria-hidden />
      {createPortal(
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
    </nav>,
    document.body,
  )}
    </>
  );
}
