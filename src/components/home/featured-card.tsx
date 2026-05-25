"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  index: number;
}

export function FeaturedCard({ project, index }: Props) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    const img  = imgRef.current;
    if (!card || !img) return;

    const rect = card.getBoundingClientRect();
    const dx   = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
    const dy   = ((e.clientY - rect.top)   / rect.height - 0.5) * 2;

    img.style.transition = "transform 0.12s ease-out";
    img.style.transform  = `translate(${dx * -10}px, ${dy * -7}px)`;
  }

  function handleMouseLeave() {
    const img = imgRef.current;
    if (!img) return;
    img.style.transition = "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)";
    img.style.transform  = "translate(0, 0)";
  }

  const num = String(index).padStart(2, "0");

  return (
    <Link
      ref={cardRef}
      href={project.href}
      className="feat-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={`${project.title} - case study`}
    >
      <div
        className="feat-card-media"
        style={{ background: project.coverColor }}
      >
        <div ref={imgRef} className="feat-card-img-wrap">
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt ?? `${project.title} - project thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`feat-card-img img-fade${imgLoaded ? " img-loaded" : ""}`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
        <div className="feat-card-vignette" aria-hidden />
      </div>

      <div className="feat-card-info">
        <span className="feat-card-num" aria-hidden>{num}</span>

        <div className="feat-card-body">
          <h3 className="feat-card-title">{project.title}</h3>
          {project.role && <p className="feat-card-role">{project.role}</p>}
          <p className="feat-card-stat">{project.stat}</p>
          <div className="feat-card-tags" aria-label="Tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <span className="feat-card-arrow" aria-hidden>↗</span>
      </div>
    </Link>
  );
}
