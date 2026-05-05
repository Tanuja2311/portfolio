"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";

type Props = Omit<ImageProps, "onError" | "onLoad"> & {
  description?: string;
};

export function CaseImage({ src, alt, description, className, ...rest }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div className="img-ph" role="img" aria-label={description ?? String(alt)}>
        <span className="img-ph-icon" aria-hidden>⬚</span>
        <span className="img-ph-label">{description ?? String(alt)}</span>
        <span className="img-ph-hint">Mockup coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={String(alt)}
      className={`img-fade${loaded ? " img-loaded" : ""}${className ? ` ${className}` : ""}`}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
