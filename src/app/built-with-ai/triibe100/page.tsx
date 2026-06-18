import type { Metadata } from "next";
import { CaseStudyHero }  from "@/components/case-study/hero";
import { CsScrollLinks }  from "@/components/case-study/scroll-links";
import { ScrollReveal }   from "@/components/scroll-reveal";
import { CaseImage }      from "@/components/case-study/case-image";

const SECTIONS = [
  { id: "overview",      label: "Overview"      },
  { id: "challenge",     label: "Challenge"     },
  { id: "brand-move",    label: "Brand Move"    },
  { id: "launch",        label: "Launch"        },
  { id: "built-with-ai", label: "Built with AI" },
];

export const metadata: Metadata = {
  title:       "Triibe100",
  description: "Triibe100 case study by Tanuja Bodas. Triibe's recognition list, designed, art-directed, and built end to end with AI.",
  alternates:  { canonical: "/built-with-ai/triibe100" },
  openGraph: {
    type:        "article",
    url:         "/built-with-ai/triibe100",
    description: "Triibe100 case study by Tanuja Bodas. Triibe's recognition list, designed, art-directed, and built end to end with AI.",
  },
  twitter: {
    description: "Triibe100 case study by Tanuja Bodas. Triibe's recognition list, designed, art-directed, and built end to end with AI.",
  },
};

const IMG = (name: string) => `/images/triibe100/${name}`;

export default function Triibe100Page() {
  return (
    <main>
      <CaseStudyHero study={{
        hero:       "/images/triibe100/hero.png",
        coverColor: "#111111",
        tags:       ["AI Workflow", "Art Direction"],
        title:      "Triibe100",
        titleTrailing: (
          <a
            href="https://triibe.org/100"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-live-link"
          >
            View the live list &#8599;
          </a>
        ),
        subtitle:   "Designed, art-directed, and built by me, with AI.",
        meta: {
          role:     "Visual direction, design, and build (solo)",
          duration: "Solo project",
          year:     "2025",
        },
      }} />

      <CsScrollLinks sections={SECTIONS} />

      <div className="cs-body">

        {/* ── Overview ───────────────────────────────────────────────── */}
        <section id="overview" className="cs-section" aria-labelledby="overview-heading">
          <ScrollReveal>
            <h2 id="overview-heading" className="cs-section-heading">Overview</h2>
            <p className="cs-section-body">
              Triibe100 is Triibe&rsquo;s recognition list, our take on Forbes 30 Under 30,
              spotlighting 100 founders and changemakers. I owned it end to end: the visual
              direction, the web page, and the social launch.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap">
              <CaseImage
                src={IMG("hero.png")}
                alt="Hero: live screenshot of triibe.org/100 (browser mockup)"
                description="Hero: live screenshot of triibe.org/100 (browser mockup)"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ── Challenge ──────────────────────────────────────────────── */}
        <section id="challenge" className="cs-section" aria-labelledby="challenge-heading">
          <ScrollReveal>
            <h2 id="challenge-heading" className="cs-section-heading">The challenge</h2>
            <p className="cs-section-body">
              A prestige list has to feel prestigious. On their own, the honoree photos
              looked flat, and the experience needed to feel fresh and unmistakably Triibe
              across both the website and social.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Brand Move ─────────────────────────────────────────────── */}
        <section id="brand-move" className="cs-section" aria-labelledby="brand-move-heading">
          <ScrollReveal>
            <h2 id="brand-move-heading" className="cs-section-heading">The brand move</h2>
            <p className="cs-section-body">
              Triibe&rsquo;s signature visual is a branches motif we use across all of our
              posts. I extended it into floating-leaf visuals layered behind the honorees,
              giving the page depth and a distinctly Triibe identity without competing with
              the faces.
            </p>
          </ScrollReveal>

          {/* Before / After */}
          <ScrollReveal>
            <div className="cs-img-grid">
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("before.png")}
                  alt="Before: plain layout"
                  description="Before: plain layout"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("after.png")}
                  alt="After: with floating leaves"
                  description="After: with floating leaves"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Leaves motion GIF */}
          <ScrollReveal>
            <div className="cs-feature-img-wrap">
              <CaseImage
                src={IMG("leaves-motion.gif")}
                alt="Screen recording: floating-leaf animation on the live page"
                description="Screen recording: floating-leaf animation on the live page"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          {/* Design decision */}
          <ScrollReveal>
            <div className="cs-feature-decision">
              <span className="cs-feature-decision-label">Design decision</span>
              <p className="cs-feature-decision-text">
                The leaves are layered behind, never in front of, the honoree faces.
                The motif adds depth and a distinctly Triibe identity; the people remain
                the focal point.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Launch ─────────────────────────────────────────────────── */}
        <section id="launch" className="cs-section" aria-labelledby="launch-heading">
          <ScrollReveal>
            <h2 id="launch-heading" className="cs-section-heading">One launch, every surface</h2>
            <p className="cs-section-body">
              The list also went live on social. I carried the same leaf motif into the
              announcement cards for LinkedIn, Instagram, and TikTok, so the web page and
              the posts read as one coordinated launch.
            </p>
          </ScrollReveal>

          {/* Social card grid */}
          <ScrollReveal>
            <div className="cs-img-grid">
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("social-linkedin.png")}
                  alt="LinkedIn announcement card"
                  description="LinkedIn announcement card"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("social-instagram.png")}
                  alt="Instagram announcement card"
                  description="Instagram announcement card"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("social-tiktok.png")}
                  alt="TikTok announcement card"
                  description="TikTok announcement card"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Built with AI ──────────────────────────────────────────── */}
        <section id="built-with-ai" className="cs-section" aria-labelledby="built-with-ai-heading">
          <ScrollReveal>
            <h2 id="built-with-ai-heading" className="cs-section-heading">Built with AI</h2>
            <p className="cs-section-body">
              I designed and built the page myself, vibe-coding it with Claude Code and
              VS Code, then art-directed the visuals to final.
            </p>
          </ScrollReveal>

          {/* Project meta footer */}
          <ScrollReveal>
            <div
              className="cs-hero-meta"
              style={{
                marginTop:     "3rem",
                paddingTop:    "2.5rem",
                paddingBottom: 0,
                borderTop:     "1px solid var(--border)",
                borderBottom:  "none",
              }}
            >
              <div className="cs-hero-meta-item">
                <span className="cs-hero-meta-label">Role</span>
                <span className="cs-hero-meta-value">
                  Visual direction, design, and build (solo).
                </span>
              </div>
              <div className="cs-hero-meta-item">
                <span className="cs-hero-meta-label">Tools</span>
                <span className="cs-hero-meta-value">Figma, Claude Code, VS Code.</span>
              </div>
              <div className="cs-hero-meta-item">
                <span className="cs-hero-meta-label">Live</span>
                <span className="cs-hero-meta-value">
                  <a
                    href="https://triibe.org/100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-live-link"
                  >
                    triibe.org/100 &#8599;
                  </a>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
}
