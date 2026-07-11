import type { Metadata } from "next";
import { AI_PROJECTS } from "@/lib/projects";
import { WorkCard }    from "@/components/home/work-card";
import { Reveal }      from "@/components/case-study/reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

export const metadata: Metadata = {
  title:       "Built with AI",
  description: "Projects built with AI tools by Tanuja Bodas. Exploring AI-assisted design and development workflows.",
  alternates:  { canonical: "/built-with-ai" },
  openGraph: {
    type:        "website",
    url:         "/built-with-ai",
    description: "Projects built with AI tools by Tanuja Bodas. Exploring AI-assisted design and development workflows.",
  },
  twitter: {
    description: "Projects built with AI tools by Tanuja Bodas. Exploring AI-assisted design and development workflows.",
  },
};

export default function BuiltWithAIPage() {
  return (
    <main className="home">
      {/* ── Page header ───────────────────────────────────────────────── */}
      <section className="work-page-header">
        <StaggerContainer className="work-page-header-inner">
          <StaggerItem>
            <h1 className="work-page-title">Built with AI</h1>
          </StaggerItem>
          <StaggerItem>
            <p className="work-page-subtitle">
              Projects designed and shipped end-to-end using AI-assisted
              workflows. Every line of code was generated through AI tools,
              guided by design thinking.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────── */}
      <section className="home-section" aria-labelledby="ai-projects-label">
        <div className="home-section-inner">
          <Reveal>
            <h2 className="section-label" id="ai-projects-label">
              Projects
            </h2>
          </Reveal>

          <div className="work-grid">
            {AI_PROJECTS.filter(p => !p.hidden).map((project, i) => (
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
