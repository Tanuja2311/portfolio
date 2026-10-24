import type { Metadata } from "next";
import { WORK_PROJECTS, HOME_AI_PROJECTS } from "@/lib/projects";
import { FeaturedCard }  from "@/components/home/featured-card";
import { HeroSection }   from "@/components/home/hero-section";
import { Reveal }        from "@/components/case-study/reveal";
import Link              from "next/link";
import { SIDE_QUESTS_LIVE, getAllSeries } from "@/lib/side-quests";
import { SeriesCard }    from "@/components/side-quests/series-card";

export const metadata: Metadata = {
  title: { absolute: "Tanuja Bodas | Senior Product Designer & Builder" },
  description:
    "Tanuja Bodas is a senior product designer and builder who designs and ships her own production code: enterprise B2B platforms, design systems, and complex workflows.",
  alternates: { canonical: "/" },
  openGraph: {
    type:        "website",
    url:         "/",
    title:       "Tanuja Bodas | Senior Product Designer & Builder",
    description: "Tanuja Bodas is a senior product designer and builder who designs and ships her own production code: enterprise B2B platforms, design systems, and complex workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title:       "Tanuja Bodas | Senior Product Designer & Builder",
    description: "Senior product designer and builder. I design enterprise B2B products and design systems, then build and ship them myself.",
  },
};

const SITE = "https://www.tanujabodas.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Tanuja Bodas",
    "jobTitle": ["Senior Product Designer", "Builder"],
    "description": "Tanuja Bodas is a senior product designer and builder. She designs enterprise B2B products and design systems, then builds and ships them herself in React, TypeScript, and Next.js, with no handoff between design and code.",
    "hasOccupation": [
      { "@type": "Occupation", "name": "Senior Product Designer" },
      { "@type": "Occupation", "name": "Builder (design engineer)" },
    ],
    "knowsAbout": [
      "Product design",
      "Design systems",
      "Enterprise B2B UX",
      "Design to code",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "AI-assisted development with Claude Code and Cursor",
    ],
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
        "name": "UrbanPark",
        "url": `${SITE}/work/urbanpark`,
        "description": "A 0 to 1 C2C driveway rental marketplace designed around what homeowners actually fear.",
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
      <HeroSection />

      {/* ── Work ──────────────────────────────────────────────── */}
      <section className="home-section" id="work" aria-labelledby="work-label">
        <div className="home-section-inner">
          <Reveal>
            <h2 className="section-label" id="work-label">
              Work
            </h2>
          </Reveal>

          <div className="featured-grid">
            {WORK_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <FeaturedCard project={project} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built with AI ─────────────────────────────────────── */}
      <section className="home-section" id="built-with-ai" aria-labelledby="ai-label">
        <div className="home-section-inner">
          <Reveal>
            <h2 className="section-label" id="ai-label">
              Built with AI
            </h2>
          </Reveal>

          <div className="featured-grid">
            {HOME_AI_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <FeaturedCard project={project} index={WORK_PROJECTS.length + i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Side Quests (hidden until SIDE_QUESTS_LIVE is true) ──── */}
      {SIDE_QUESTS_LIVE && (
        <section className="home-section" id="side-quests" aria-labelledby="sq-label">
          <div className="home-section-inner">
            <Reveal>
              <h2 className="section-label" id="sq-label">
                Side Quests
              </h2>
              <p className="sq-home-intro">
                Weekend projects, new episodes on F1 race weekends. Not always finished, never boring.
              </p>
            </Reveal>

            <div className="sq-series-grid">
              {getAllSeries().slice(0, 2).map((s, i) => (
                <Reveal key={s.slug} delay={i * 90}>
                  <SeriesCard series={s} />
                </Reveal>
              ))}
            </div>

            <Reveal>
              <Link href="/side-quests" className="sq-home-more">
                See all side quests ↗
              </Link>
            </Reveal>
          </div>
        </section>
      )}
    </main>
    </>
  );
}
