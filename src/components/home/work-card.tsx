import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="work-card"
      aria-label={`${project.title} — case study`}
    >
      {/* Thumbnail */}
      <div
        className="work-card-media"
        style={{ background: project.coverColor }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="work-card-img"
        />
      </div>

      {/* Info */}
      <div className="work-card-info">
        <h3 className="work-card-title">{project.title}</h3>
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
