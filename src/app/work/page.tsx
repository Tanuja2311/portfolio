import type { Metadata } from "next";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/projects";
import { FeaturedCard } from "@/components/home/featured-card";
import { WorkCard }     from "@/components/home/work-card";
import { Reveal }       from "@/components/case-study/reveal";

export const metadata: Metadata = {
  title: "Work - Tanuja Bodas",
};

export default function WorkPage() {
  return (
    <main className="home">
      {/* ── Page header ───────────────────────────────────────────── */}
      <section className="work-page-header">
        <div className="work-page-header-inner">
          <Reveal>
            <h1 className="work-page-title">Work</h1>
          </Reveal>
          <Reveal delay={60}>
            <p className="work-page-subtitle">
              Selected projects across product design, UX research, and systems thinking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Featured Work ─────────────────────────────────────────── */}
      <section className="home-section" aria-labelledby="work-featured-label">
        <div className="home-section-inner">
          <Reveal>
            <h2 className="section-label" id="work-featured-label">
              Featured Work
            </h2>
          </Reveal>

          <div className="featured-grid">
            {FEATURED_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <FeaturedCard project={project} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Work ────────────────────────────────────────────── */}
      <section className="home-section" aria-labelledby="work-other-label">
        <div className="home-section-inner">
          <Reveal>
            <h2 className="section-label" id="work-other-label">
              Other Work
            </h2>
          </Reveal>

          <div className="work-grid">
            {OTHER_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <WorkCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
