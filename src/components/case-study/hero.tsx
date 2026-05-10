import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <StaggerContainer as="section" className="cs-hero">
      {/* Full-width image banner */}
      <StaggerItem className="cs-hero-media" style={{ background: study.coverColor }}>
        <Image
          src={study.hero}
          alt={study.title}
          fill
          priority
          sizes="100vw"
          className="cs-hero-img"
        />
        <div className="cs-hero-overlay" aria-hidden />
        <div className="cs-hero-text">
          <h1 className="cs-hero-title">{study.title}</h1>
          <p className="cs-hero-subtitle">{study.subtitle}</p>
        </div>
      </StaggerItem>

      {/* Metadata bar */}
      <StaggerItem className="cs-meta-bar">
        <div className="cs-meta-inner">
          <MetaItem label="Role"     value={study.meta.role}     />
          <MetaItem label="Duration" value={study.meta.duration} />
          <MetaItem label="Team"     value={study.meta.team}     />
          <div className="cs-meta-item">
            <span className="cs-meta-label">Tools</span>
            <span className="cs-meta-value">{study.meta.tools.join(", ")}</span>
          </div>
        </div>
      </StaggerItem>
    </StaggerContainer>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="cs-meta-item">
      <span className="cs-meta-label">{label}</span>
      <span className="cs-meta-value">{value}</span>
    </div>
  );
}
