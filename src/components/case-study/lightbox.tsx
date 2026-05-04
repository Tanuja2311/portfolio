"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CaseImage } from "@/lib/case-studies";

interface LightboxProps {
  images: CaseImage[];
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex]         = useState(initialIndex);
  const [animDir, setAnimDir]     = useState<"left" | "right" | null>(null);
  const touchStartX               = useRef<number | null>(null);

  const go = useCallback((dir: "left" | "right") => {
    setAnimDir(dir);
    setIndex((i) =>
      dir === "right"
        ? (i + 1) % images.length
        : (i - 1 + images.length) % images.length
    );
    setTimeout(() => setAnimDir(null), 300);
  }, [images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowRight")  go("right");
      if (e.key === "ArrowLeft")   go("left");
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, go]);

  const current = images[index];

  return (
    <div
      className="lb-backdrop"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 48) go(dx < 0 ? "right" : "left");
        touchStartX.current = null;
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Image frame */}
      <div
        className={`lb-frame${animDir ? ` lb-frame--${animDir}` : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lb-img-wrap">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="100vw"
            className="lb-img"
            priority
          />
        </div>
        {current.caption && (
          <p className="lb-caption">{current.caption}</p>
        )}
      </div>

      {/* Nav arrows */}
      {images.length > 1 && (
        <>
          <button
            className="lb-btn lb-btn--prev"
            onClick={(e) => { e.stopPropagation(); go("left"); }}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            className="lb-btn lb-btn--next"
            onClick={(e) => { e.stopPropagation(); go("right"); }}
            aria-label="Next image"
          >
            →
          </button>
        </>
      )}

      {/* Close */}
      <button
        className="lb-btn lb-btn--close"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <div className="lb-counter" aria-live="polite">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
