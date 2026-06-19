import type { Metadata } from "next";
import { CaseStudyHero }    from "@/components/case-study/hero";
import { CaseStudySummary } from "@/components/case-study/summary";
import { CsScrollLinks }    from "@/components/case-study/scroll-links";
import { ScrollReveal }     from "@/components/scroll-reveal";
import { CaseImage }        from "@/components/case-study/case-image";

const SECTIONS = [
  { id: "overview",      label: "Overview"      },
  { id: "challenge",     label: "Challenge"     },
  { id: "direction",     label: "Direction"     },
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
        heroAlt:    "Screenshot of the live Triibe100 page at triibe.org/100, the grid of 100 honorees shown in a browser frame",
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
          duration: "3 days",
          year:     "2026",
        },
      }} />
      <CaseStudySummary summary={{
        problem:  "A prestige list has to feel prestigious. The honoree photos looked flat on their own, and the experience had to feel fresh and unmistakably Triibe across both the website and social.",
        role:     "Solo across the project: visual direction, page design, and front-end build. I art-directed the honoree visuals, vibe-coded the page with Claude Code and VS Code, and carried the system into the social launch.",
        timeline: "Three days total, solo, covering both the page and the social designs.",
        outcome:  "Launched live at triibe.org/100 as one coordinated release. The leaf system unified the web page and the LinkedIn, Instagram, and TikTok announcement cards into a single launch.",
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
                alt="Screenshot of the live Triibe100 page at triibe.org/100, the grid of 100 honorees shown in a browser frame"
                description="Screenshot of the live Triibe100 page at triibe.org/100, the grid of 100 honorees shown in a browser frame"
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

        {/* ── Direction ──────────────────────────────────────────────── */}
        <section id="direction" className="cs-section" aria-labelledby="direction-heading">
          <ScrollReveal>
            <h2 id="direction-heading" className="cs-section-heading">Finding the visual direction</h2>
            <p className="cs-section-body">
              A prestige list lives by one rule: nothing competes with the people on it.
              The honorees are the content. Everything else is supporting cast. The page
              had to feel unmistakably Triibe and feel prestigious without any element
              pulling focus from the names. Three directions tested that rule. Two broke it.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01</span>
              <h3 className="cs-subsection-heading">Themed category backgrounds</h3>
              <p className="cs-subsection-body">
                The list was first organized around five categories, each section carrying
                its own environmental imagery generated with AI from Unsplash sources. The
                backgrounds were busy and chaotic. They competed with the honorees and broke
                Triibe&rsquo;s minimalism. When the five categories were cut company-wide,
                the structure they supported went with them.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap">
              <CaseImage
                src={IMG("explore-backgrounds.png")}
                alt="Early Triibe100 design split into five themed category sections, each with its own busy environmental photo background"
                description="Early Triibe100 design split into five themed category sections, each with its own busy environmental photo background"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02</span>
              <h3 className="cs-subsection-heading">Animated branches</h3>
              <p className="cs-subsection-body">
                With the page now too plain, I tried Triibe&rsquo;s signature branches as
                a scroll-driven animation, a trunk that grew new branches as the user moved
                down the list. Made literal and animated, the branches read as twiggy
                scaffolding. They competed with the names instead of supporting them.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap">
              <CaseImage
                src={IMG("explore-branches.gif")}
                alt="Rejected direction, thin branches growing across the honoree grid as the user scrolls, reading as twiggy scaffolding"
                description="Rejected direction, thin branches growing across the honoree grid as the user scrolls, reading as twiggy scaffolding"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03</span>
              <h3 className="cs-subsection-heading">Leaves behind the honorees</h3>
              <p className="cs-subsection-body">
                Both failures shared one cause: every element placed beside the honorees
                fought them. So I took the most recognizable Triibe asset, the branch, and
                moved it behind the people instead of around them, reduced to subtle floating
                leaves that add depth without pulling focus. The brand stays present. The
                names stay first.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap">
              <CaseImage
                src={IMG("branch-motif.png")}
                alt="Triibe's standard branch motif, a minimal white line illustration of a branch on a dark background"
                description="Triibe's standard branch motif, a minimal white line illustration of a branch on a dark background"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-img-grid">
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("before.png")}
                  alt="Triibe100 honoree grid on a plain dark green background with no brand motif"
                  description="Triibe100 honoree grid on a plain dark green background with no brand motif"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("after.png")}
                  alt="The same honoree grid with subtle floating leaves layered behind the cards, adding depth without competing with the faces"
                  description="The same honoree grid with subtle floating leaves layered behind the cards, adding depth without competing with the faces"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap">
              <CaseImage
                src={IMG("leaves-motion.gif")}
                alt="The final subtle leaf motion drifting behind the honoree grid on the live page"
                description="The final subtle leaf motion drifting behind the honoree grid on the live page"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-decision">
              <span className="cs-feature-decision-label">Design decision</span>
              <p className="cs-feature-decision-text">
                The brand frames the honorees, it never competes with them. Triibe&rsquo;s
                signature branch earns its place on the page only when its volume is
                turned down.
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
                  alt="Triibe100 announcement card sized for LinkedIn, carrying the same leaf motif as the web page"
                  description="Triibe100 announcement card sized for LinkedIn, carrying the same leaf motif as the web page"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("social-instagram.png")}
                  alt="Triibe100 announcement card sized for Instagram, matching the launch system"
                  description="Triibe100 announcement card sized for Instagram, matching the launch system"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ margin: 0 }}>
                <CaseImage
                  src={IMG("social-tiktok.png")}
                  alt="Triibe100 announcement card sized for TikTok, matching the launch system"
                  description="Triibe100 announcement card sized for TikTok, matching the launch system"
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
