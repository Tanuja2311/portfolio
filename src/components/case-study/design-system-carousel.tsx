"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const SLIDES = [
  { src: "/images/urbanpark/ds-primitives.png",   caption: "Color primitives — 9 ramps, 10 to 100 scale"  },
  { src: "/images/urbanpark/ds-semantic.png",     caption: "Semantic tokens aliased to primitives"          },
  { src: "/images/urbanpark/ds-typography.png",   caption: "Typography tokens — 2 families, 3 weights"      },
  { src: "/images/urbanpark/ds-components-1.png", caption: "Core components — buttons, controls, dropdowns" },
  { src: "/images/urbanpark/ds-components-2.png", caption: "Input fields and navigation — 6 states"         },
  { src: "/images/urbanpark/ds-components-3.png", caption: "Product specific components"                    },
];

const TOTAL   = SLIDES.length;
const AUTO_MS = 6000;

export function DesignSystemCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Starts (or restarts) the 4-second auto-advance interval.
  // Called on mount and after every manual navigation to reset the timer.
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % TOTAL);
    }, AUTO_MS);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const prev = () => {
    setIndex(i => (i - 1 + TOTAL) % TOTAL);
    startInterval();
  };

  const next = () => {
    setIndex(i => (i + 1) % TOTAL);
    startInterval();
  };

  const goTo = (i: number) => {
    setIndex(i);
    startInterval();
  };

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
    zIndex: 1,
  };

  return (
    <div style={{ marginTop: "2rem" }}>

      {/* Viewport — clips the slide track */}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px", height: "500px" }}>

        {/* Slide track — all slides in a flex row, shifted by translateX */}
        <div
          style={{
            display: "flex",
            height: "100%",
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 0.7s ease",
          }}
        >
          {SLIDES.map(({ src, caption }) => (
            <div key={src} style={{ minWidth: "100%", flexShrink: 0, height: "100%" }}>
              <img
                src={src}
                alt={caption}
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", borderRadius: "20px" }}
              />
            </div>
          ))}
        </div>

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
