"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";
import { m } from "framer-motion";

type Props = Omit<ImageProps, "onError" | "onLoad"> & {
  description?: string;
  noCurtain?: boolean;
};

export function CaseImage({ src, alt, description, className, noCurtain = false, ...rest }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const curtain = !noCurtain && (
    <m.div
      aria-hidden
      style={{ position: "absolute", inset: 0, background: "var(--bg)", zIndex: 2 }}
      initial={{ x: "0%" }}
      whileInView={{ x: "100%" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
    />
  );

  if (failed) {
    return (
      <>
        <div className="img-ph" role="img" aria-label={description ?? String(alt)}>
          <span className="img-ph-icon" aria-hidden>⬚</span>
          <span className="img-ph-label">{description ?? String(alt)}</span>
          <span className="img-ph-hint">Mockup coming soon</span>
        </div>
        {curtain}
      </>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={String(alt)}
        className={`img-fade${loaded ? " img-loaded" : ""}${className ? ` ${className}` : ""}`}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        {...rest}
      />
      {curtain}
    </>
  );
}
