"use client";

import { useEffect, useRef } from "react";
import type { Thumb } from "@/lib/side-quests";

// Decorative preview next to an episode (the title beside it already says what it is, so alt is empty).
// A video thumb starts as its still image and only plays if the visitor hasn't asked for reduced motion.
export function EpisodeThumb({ thumb }: { thumb: Thumb }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) { v.pause(); v.currentTime = 0; }
      else v.play().catch(() => {});
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!thumb.video) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="sq-thumb" src={thumb.image} alt="" loading="lazy" />;
  }

  return (
    <video
      ref={ref}
      className="sq-thumb"
      poster={thumb.image}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    >
      <source src={thumb.video.replace(/\.mp4$/, ".webm")} type="video/webm" />
      <source src={thumb.video} type="video/mp4" />
    </video>
  );
}
