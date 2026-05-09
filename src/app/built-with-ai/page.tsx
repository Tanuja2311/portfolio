import type { Metadata } from "next";
import { AI_PROJECTS } from "@/lib/projects";
import { WorkCard }    from "@/components/home/work-card";
import { Reveal }      from "@/components/case-study/reveal";

export const metadata: Metadata = {
  title: "Built with AI - Tanuja Bodas",
  description:
    "Projects designed and shipped end-to-end using AI-assisted workflows.",
};

export default function BuiltWithAIPage() {
  return (
    <main className="home">
      {/* ── Page header ───────────────────────────────────────────────── */}
      <section className="work-page-header">
        <div className="work-page-header-inner">
          <Reveal>
            <h1 className="work-page-title">Built with AI</h1>
          </Reveal>
          <Reveal delay={60}>
            <p className="work-page-subtitle">
              Projects designed and shipped end-to-end using AI-assisted
              workflows. Every line of code was generated through AI tools,
              guided by design thinking.
            </p>
          </Reveal>
        </div>
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
            {AI_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <WorkCard project={project} />
              </Reveal>
            ))}

            {/* Coming soon card — not a link, visually greyed out */}
            <Reveal delay={AI_PROJECTS.length * 80}>
              <div
                className="work-card work-card--disabled"
                aria-label="Rise & Shine Foundation — coming soon"
              >
                <div
                  className="work-card-media"
                  style={{ background: "#0a1510" }}
                />
                <div className="work-card-info">
                  <h3 className="work-card-title">Rise &amp; Shine Foundation</h3>
                  <p className="work-card-stat">Coming soon.</p>
                  <div className="work-card-tags" aria-label="Tags">
                    {["AI Workflow", "Nonprofit"].map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
