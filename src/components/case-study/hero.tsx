"use client";

import Image from "next/image";
import { m } from "framer-motion";

export interface HeroStudy {
  hero?: string;
  heroAlt?: string;
  coverColor: string;
  tags?: string[];
  title: string;
  subtitle: string;
  meta: {
    role: string;
    duration?: string;
    year?: string;
    team?: string;
    company?: string;
    /** When provided, overrides the default meta row entirely. */
    items?: { label: string; value: string }[];
  };
}

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export function CaseStudyHero({ study }: { study: HeroStudy }) {
  const metadata = buildMeta(study);
  const hasImage = Boolean(study.hero);

  return (
    <section className="cs-hero">
      {/* ── Cover ─────────────────────────────────────────────── */}
      <div
        className="cs-hero-cover"
        style={hasImage ? { background: study.coverColor } : undefined}
      >
        {hasImage ? (
          <m.div
            className="cs-hero-img-wrap"
            initial={{ scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={study.hero!}
              alt={study.heroAlt ?? study.title}
              fill
              priority
              sizes="100vw"
              className="cs-hero-img"
            />
          </m.div>
        ) : (
          <div className="cs-hero-placeholder" aria-hidden>
            <span className="cs-hero-placeholder-label">Project cover image</span>
          </div>
        )}
        <div className="cs-hero-dim" aria-hidden />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="cs-hero-content">
        {(study.tags ?? []).length > 0 && (
          <m.div className="cs-hero-tags" {...fadeUp(0.1)}>
            {study.tags!.map((tag) => (
              <span key={tag} className="cs-hero-tag">{tag}</span>
            ))}
          </m.div>
        )}

        <m.h1 className="cs-hero-title" {...fadeUp(0.2)}>
          {study.title}
        </m.h1>

        <m.p className="cs-hero-desc" {...fadeUp(0.3)}>
          {study.subtitle}
        </m.p>

        <m.div className="cs-hero-meta" {...fadeUp(0.4)}>
          {metadata.map(({ label, value }) => (
            <div key={label} className="cs-hero-meta-item">
              <span className="cs-hero-meta-label">{label}</span>
              <span className="cs-hero-meta-value">{value}</span>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

function buildMeta(study: HeroStudy): { label: string; value: string }[] {
  if (study.meta.items) return study.meta.items;
  const items: { label: string; value: string }[] = [
    { label: "Role",     value: study.meta.role },
    { label: "Timeline", value: study.meta.duration ?? "" },
  ];
  if (study.meta.year)      items.push({ label: "Year",    value: study.meta.year });
  if (study.meta.company)   items.push({ label: "Company", value: study.meta.company });
  else if (study.meta.team) items.push({ label: "Team",    value: study.meta.team });
  return items;
}
