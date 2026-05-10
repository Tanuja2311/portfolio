import type { Metadata } from "next";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/projects";
import { FeaturedCard } from "@/components/home/featured-card";
import { WorkCard }     from "@/components/home/work-card";
import { Reveal }       from "@/components/case-study/reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

export const metadata: Metadata = {
  title: "Tanuja Bodas - Senior Product Designer",
  description:
    "I turn complex enterprise problems into intuitive workflows that people actually want to use.",
};

export default function HomePage() {
  return (
    <main className="home">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" aria-label="Introduction">
        <StaggerContainer className="hero-inner">
          <StaggerItem>
            <div className="badge-available" aria-label="Availability status">
              <span className="badge-dot" aria-hidden />
              Available for work
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="hero-name">Tanuja Bodas</h1>
          </StaggerItem>
          <StaggerItem>
            <p className="hero-role">Senior Product Designer</p>
          </StaggerItem>
          <StaggerItem>
            <p className="hero-bio">
              I turn complex enterprise problems into intuitive workflows
              that people actually want to use.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ── Featured Work ─────────────────────────────────────── */}
      <section className="home-section" aria-labelledby="featured-label">
        <div className="home-section-inner">
          <Reveal>
            <h2 className="section-label" id="featured-label">
              Featured Work
            </h2>
          </Reveal>

          <div className="featured-grid">
            {FEATURED_PROJECTS.filter(p => !p.hidden).map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <FeaturedCard project={project} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Work ────────────────────────────────────────── */}
      <section className="home-section" aria-labelledby="other-label">
        <div className="home-section-inner">
          <Reveal>
            <h2 className="section-label" id="other-label">
              Other Work
            </h2>
          </Reveal>

          <div className="work-grid">
            {OTHER_PROJECTS.filter(p => !p.hidden).map((project, i) => (
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
