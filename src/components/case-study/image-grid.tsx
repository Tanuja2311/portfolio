"use client";

import { useState } from "react";
import Image from "next/image";
import type { CaseImage } from "@/lib/case-studies";
import { Lightbox } from "./lightbox";

export function ImageGrid({ images }: { images: CaseImage[] }) {
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  return (
    <>
      <div className={`cs-img-grid${images.length === 1 ? " cs-img-grid--single" : ""}`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            className="cs-img-thumb"
            onClick={() => setLbIndex(i)}
            aria-label={`Expand: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="cs-img-thumb-img"
            />
            {img.caption && (
              <span className="cs-img-caption">{img.caption}</span>
            )}
            <span className="cs-img-zoom" aria-hidden>⤢</span>
          </button>
        ))}
      </div>

      {lbIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lbIndex}
          onClose={() => setLbIndex(null)}
        />
      )}
    </>
  );
}
