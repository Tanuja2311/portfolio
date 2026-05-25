import type { Metadata } from "next";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/projects";
import { FeaturedCard } from "@/components/home/featured-card";
import { WorkCard }     from "@/components/home/work-card";
import { Reveal }       from "@/components/case-study/reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

export const metadata: Metadata = {
  title: { absolute: "Tanuja Bodas | Senior Product Designer" },
  description:
    "Tanuja Bodas is a senior product designer specializing in enterprise B2B platforms, design systems, and complex workflow design. View selected work including MyRCloud, Rewards & Recognition, and more.",
  alternates: { canonical: "/" },
  openGraph: {
    type:        "website",
    url:         "/",
    description: "Tanuja Bodas is a senior product designer specializing in enterprise B2B platforms, design systems, and complex workflow design. View selected work including MyRCloud, Rewards & Recognition, and more.",
  },
  twitter: {
    description: "Tanuja Bodas is a senior product designer specializing in enterprise B2B platforms, design systems, and complex workflow design.",
  },
};

const SITE = "https://portfolio-olive-ten-27.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Tanuja Bodas",
    "jobTitle": "Senior Product Designer",
    "url": SITE,
    "sameAs": ["https://www.linkedin.com/in/tanujabodas23/"],
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "MyRCloud",
        "url": `${SITE}/work/myrcloud`,
        "description": "Designing a recruitment marketplace from scratch, replacing a Google Sheets operation with a multi-sided platform serving 100+ clients and 600+ recruiting partners.",
      },
      {
        "@type": "CreativeWork",
        "name": "Rewards & Recognition",
        "url": `${SITE}/work/rewards-and-recognition`,
        "description": "Designing a culture of visibility for enterprise teams where employee contributions were going unnoticed.",
      },
      {
        "@type": "CreativeWork",
        "name": "Employee Dossier",
        "url": `${SITE}/work/employee-dossier`,
        "description": "Redesigning ZingHR's centralized employee record into a single, scannable page.",
      },
      {
        "@type": "CreativeWork",
        "name": "The Wren Gala",
        "url": `${SITE}/built-with-ai/wren-gala`,
        "description": "A luxury charity gala website for a historic London church, designed and shipped in under a week using AI-assisted development.",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            {OTHER_PROJECTS.filter(p => !p.hidden && !p.homepageHidden).map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <WorkCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
