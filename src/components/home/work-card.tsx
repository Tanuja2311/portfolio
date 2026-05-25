"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export function WorkCard({ project }: { project: Project }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link
      href={project.href}
      className="work-card"
      aria-label={`${project.title} - case study`}
    >
      <div
        className="work-card-media"
        style={{ background: project.coverColor }}
      >
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt ?? `${project.title} - project thumbnail`}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className={`work-card-img img-fade${imgLoaded ? " img-loaded" : ""}`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      <div className="work-card-info">
        <h3 className="work-card-title">{project.title}</h3>
        {project.role && <p className="work-card-role">{project.role}</p>}
        <p className="work-card-stat">{project.stat}</p>
        <div className="work-card-tags" aria-label="Tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
