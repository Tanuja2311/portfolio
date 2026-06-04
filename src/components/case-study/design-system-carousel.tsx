"use client";

import { useState, useEffect, useRef } from "react";

const SLIDES = [
  { src: "/images/urbanpark/ds-primitives.png",   caption: "Color primitives — 9 ramps, 10 to 100 scale"  },
  { src: "/images/urbanpark/ds-semantic.png",     caption: "Semantic tokens aliased to primitives"          },
  { src: "/images/urbanpark/ds-typography.png",   caption: "Typography tokens — 2 families, 3 weights"      },
  { src: "/images/urbanpark/ds-components-1.png", caption: "Core components — buttons, controls, dropdowns" },
  { src: "/images/urbanpark/ds-components-2.png", caption: "Input fields and navigation — 6 states"         },
  { src: "/images/urbanpark/ds-components-3.png", caption: "Product specific components"                    },
];

const TOTAL    = SLIDES.length;
const FADE_MS  = 200;
const AUTO_MS  = 4000;
const PAUSE_MS = 8000;

export function DesignSystemCarousel() {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);
  const targetRef    = useRef(0);
  const pausedUntil  = useRef(0);
  const fadeTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fadeTo = (next: number) => {
    targetRef.current = next;
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    setVisible(false);
    fadeTimer.current = setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, FADE_MS);
  };

  const prev = () => {
    pausedUntil.current = Date.now() + PAUSE_MS;
    fadeTo((targetRef.current - 1 + TOTAL) % TOTAL);
  };

  const next = () => {
    pausedUntil.current = Date.now() + PAUSE_MS;
    fadeTo((targetRef.current + 1) % TOTAL);
  };

  const goTo = (i: number) => {
    pausedUntil.current = Date.now() + PAUSE_MS;
    fadeTo(i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      const next = (targetRef.current + 1) % TOTAL;
      targetRef.current = next;
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      setVisible(false);
      fadeTimer.current = setTimeout(() => {
        setIndex(next);
        setVisible(true);
      }, FADE_MS);
    }, AUTO_MS);

    return () => {
      clearInterval(interval);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  const chevronStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    flexShrink: 0,
  };

  return (
    <div style={{ marginTop: "2rem" }}>

      {/* Slide */}
      <div style={{ position: "relative" }}>
        <img
          src={SLIDES[index].src}
          alt={SLIDES[index].caption}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "8px",
            opacity: visible ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease`,
          }}
        />

        <button onClick={prev} aria-label="Previous image" style={{ ...chevronStyle, left: "12px" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button onClick={next} aria-label="Next image" style={{ ...chevronStyle, right: "12px" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Caption */}
      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          fontFamily: "var(--font-sans)",
          lineHeight: 1.5,
        }}
      >
        {SLIDES[index].caption}
      </p>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "1rem" }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              border: "1.5px solid var(--accent)",
              background: i === index ? "var(--accent)" : "transparent",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.2s ease",
            }}
          />
        ))}
      </div>

    </div>
  );
}
