import type { Metadata } from "next";
import Image from "next/image";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { Reveal } from "@/components/case-study/reveal";
import { CaseImage } from "@/components/case-study/case-image";

export const metadata: Metadata = {
  title: "St James Royal Gala - Tanuja Bodas",
  description:
    "A luxury event website built entirely with AI tools in under a week.",
};

const SECTIONS = [
  { id: "context",     label: "Context"     },
  { id: "ai-workflow", label: "AI Workflow" },
  { id: "design",      label: "Design"      },
  { id: "mentorship",  label: "Mentorship"  },
  { id: "outcome",     label: "Outcome"     },
];

function BrowserMockup({
  src,
  alt,
  description,
  label,
}: {
  src: string;
  alt: string;
  description: string;
  label: string;
}) {
  return (
    <div className="cs-browser-frame">
      <div className="cs-browser-bar" aria-hidden="true">
        <div className="cs-browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="cs-browser-url">stjamesgala.com</div>
      </div>
      <div className="cs-browser-img">
        <CaseImage
          src={src}
          alt={alt}
          description={description}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <span className="cs-browser-label">{label}</span>
    </div>
  );
}

export default function StJamesGalaPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="cs-hero">
        <div className="cs-hero-img-wrap">
          <CaseImage
            src="/images/st-james-gala/hero.jpg"
            alt="St James Royal Gala website shown in a browser"
            description="Browser mockup of the gala homepage with dark luxury aesthetic"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="cs-hero-overlay">
          <div className="cs-hero-inner">
            <h1 className="cs-hero-title">St James Royal Gala</h1>
            <p className="cs-hero-subtitle">
              A luxury event website built entirely with AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* ── Metadata bar ─────────────────────────────────────────────── */}
      <div className="cs-meta-bar">
        <div className="cs-meta-item">
          <span className="cs-meta-label">Role</span>
          <span className="cs-meta-value">Lead Designer &amp; Developer</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Duration</span>
          <span className="cs-meta-value">Under 1 week</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Client</span>
          <span className="cs-meta-value">St James Church Piccadilly</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Tech</span>
          <span className="cs-meta-value">React + Tailwind + Vercel</span>
        </div>
      </div>

      {/* ── TOC ──────────────────────────────────────────────────────── */}
      <CsScrollLinks sections={SECTIONS} />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="cs-content">

        {/* ── Context ───────────────────────────────────────────────── */}
        <section id="context" className="cs-section">
          <Reveal>
            <h2 className="cs-section-title">Context</h2>
          </Reveal>

          <Reveal delay={60}>
            <p className="cs-body">
              St James Church Piccadilly hosts an annual black-tie fundraising
              gala for 500 guests. For the 2024 edition, they needed a website
              that matched the event's prestige - something that felt like it
              was designed by a boutique studio, not knocked together on a
              template builder. The catch: they needed it in under a week and
              the budget was close to zero.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <p className="cs-body">
              I took it on as a side project to test something I'd been curious
              about: could AI tools close the gap between design vision and
              shipped product fast enough to actually matter on a real deadline?
              The answer changed how I think about building things.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="cs-subsection-label">Scope</h3>
            <p className="cs-body">
              Four pages: a cinematic landing page with a full-screen video
              loop, an event details page with venue and schedule information,
              a ticket purchase page with tiered pricing, and a gallery
              celebrating past galas. All pages needed to feel coherent -
              dark, editorial, gold accents, the kind of website a luxury
              hotel would launch.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="cs-browser-grid">
              <BrowserMockup
                src="/images/st-james-gala/page-landing.jpg"
                alt="Landing page with full-screen video and gold headline"
                description="Dark cinematic landing with centered headline and subtle scroll cue"
                label="Landing"
              />
              <BrowserMockup
                src="/images/st-james-gala/page-details.jpg"
                alt="Event details page with venue info and schedule"
                description="Typographic event details page with venue photography"
                label="Event Details"
              />
              <BrowserMockup
                src="/images/st-james-gala/page-tickets.jpg"
                alt="Tiered ticket pricing page"
                description="Clean ticket tiers with CTA and charity breakdown"
                label="Tickets"
              />
              <BrowserMockup
                src="/images/st-james-gala/page-gallery.jpg"
                alt="Gallery page showing past gala photography"
                description="Masonry photo gallery from previous galas"
                label="Gallery"
              />
            </div>
          </Reveal>
        </section>

        {/* ── AI Workflow ───────────────────────────────────────────── */}
        <section id="ai-workflow" className="cs-section">
          <Reveal>
            <h2 className="cs-section-title">AI Workflow</h2>
          </Reveal>

          <Reveal delay={60}>
            <p className="cs-body">
              This is the part I get asked about most. I didn't hand-type a
              single line of code. But that doesn't mean I wasn't making
              decisions - it means I was making them faster, and at a higher
              level. The process went through three distinct phases before I
              landed on something that actually worked.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="ai-timeline">

              {/* Phase 1 */}
              <div className="ai-phase">
                <div className="ai-phase-header">
                  <span className="ai-phase-num">01</span>
                  <span className="ai-phase-tool">Figma Make</span>
                </div>
                <div className="ai-phase-body">
                  <p className="cs-body">
                    I started in Figma Make, converting my existing Figma
                    designs into code. The layout translation was fast - almost
                    shockingly so. Spacing, typography, column structure: it
                    nailed the static scaffolding.
                  </p>
                  <ul className="ai-phase-checks">
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">✓</span>
                      Fast layout generation from existing Figma frames
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">✓</span>
                      Design token fidelity - respected font sizes and spacing
                    </li>
                    <li className="ai-check ai-check--con">
                      <span className="ai-check-icon">✗</span>
                      No animation support - everything was static
                    </li>
                    <li className="ai-check ai-check--con">
                      <span className="ai-check-icon">✗</span>
                      Couldn't handle scroll effects or video backgrounds
                    </li>
                  </ul>
                  <div className="ai-phase-verdict ai-phase-verdict--moved">
                    Moved on
                  </div>
                </div>
              </div>

              <div className="ai-arrow" aria-hidden="true">↓</div>

              {/* Phase 2 */}
              <div className="ai-phase">
                <div className="ai-phase-header">
                  <span className="ai-phase-num">02</span>
                  <span className="ai-phase-tool">Lovable</span>
                </div>
                <div className="ai-phase-body">
                  <p className="cs-body">
                    Lovable brought the page to life. Real scroll animations,
                    parallax, the full-screen video loop on the landing page -
                    things that make a luxury site feel alive. I could describe
                    interactions in plain English and watch them appear.
                  </p>
                  <ul className="ai-phase-checks">
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">✓</span>
                      Real motion - scroll-triggered reveals, parallax, video
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">✓</span>
                      Natural language to interaction: fast iteration loop
                    </li>
                    <li className="ai-check ai-check--con">
                      <span className="ai-check-icon">✗</span>
                      Running on a budget model - started hallucinating structure
                    </li>
                    <li className="ai-check ai-check--con">
                      <span className="ai-check-icon">✗</span>
                      Lost coherence on complex multi-section edits
                    </li>
                  </ul>
                  <div className="ai-phase-verdict ai-phase-verdict--moved">
                    Moved on
                  </div>
                </div>
              </div>

              <div className="ai-arrow" aria-hidden="true">↓</div>

              {/* Phase 3 */}
              <div className="ai-phase ai-phase--final">
                <div className="ai-phase-header">
                  <span className="ai-phase-num">03</span>
                  <span className="ai-phase-tool">Claude + VS Code</span>
                </div>
                <div className="ai-phase-body">
                  <p className="cs-body">
                    Switching to Claude in VS Code gave me the control I was
                    missing. I could describe exactly what I wanted, see the
                    code, ask follow-up questions, and iterate without worrying
                    that one edit would unravel another section. The whole
                    codebase stayed coherent because I was the one holding
                    context.
                  </p>
                  <ul className="ai-phase-checks">
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">✓</span>
                      Full control - I could read and guide every decision
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">✓</span>
                      Codebase stayed coherent across all four pages
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">✓</span>
                      No tool cost - Claude API via subscription
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">✓</span>
                      Shipped to Vercel in under a week from zero
                    </li>
                  </ul>
                  <div className="ai-phase-verdict ai-phase-verdict--final">
                    Final workflow ✓
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="cs-hook">
              I didn&apos;t hand-type a single line of code. Every pixel you
              see was described, reviewed, and refined - just not written by
              hand. That distinction matters more than it sounds.
            </blockquote>
          </Reveal>
        </section>

        {/* ── Design ────────────────────────────────────────────────── */}
        <section id="design" className="cs-section">
          <Reveal>
            <h2 className="cs-section-title">Design</h2>
          </Reveal>

          <Reveal delay={60}>
            <p className="cs-body">
              The design direction came before any AI tool was opened. I spent
              two hours in Figma establishing the visual language: near-black
              background, a muted gold (#C9A84C) as the single accent, Cormorant
              Garamond for display headings to signal heritage, and Inter for
              all body text for clarity. The goal was to feel like a Michelin
              restaurant's website - restrained but unmistakably premium.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="cs-feature">
              <h3 className="cs-feature-title">Landing experience</h3>
              <p className="cs-body">
                The landing page opens on a full-screen looping video of the
                church nave lit for a formal dinner. The headline sits centered
                in Cormorant Garamond, letter-spaced, with a subtle fade-in.
                Scroll and the video recedes - the page content slides up over
                it. No hero section has ever felt more like an invitation.
              </p>
              <div className="cs-feature-decision">
                <strong>Design decision:</strong> I resisted the urge to add a
                countdown timer or social proof strip. On a luxury site, white
                space is credibility. Every element I considered adding, I asked
                whether a five-star hotel would add it. Most things didn't
                survive that filter.
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="cs-feature">
              <h3 className="cs-feature-title">Ticket page</h3>
              <p className="cs-body">
                Three tiers: Patron (£150), Benefactor (£300), and Chairman's
                Circle (£600). Each tier had a different card weight - lightest
                for Patron, heavier border and gold accent for Chairman's
                Circle. The goal was to make the £300 tier feel like the
                obvious choice without saying so. Classic pricing psychology,
                but done with restraint.
              </p>
              <div className="cs-feature-decision">
                <strong>Design decision:</strong> The Chairman's Circle card
                used a subtle gold gradient border rather than a "MOST POPULAR"
                badge. The signal needed to be implicit. Explicit upsell tactics
                would have undermined the brand positioning entirely.
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="cs-feature">
              <h3 className="cs-feature-title">Gallery page</h3>
              <p className="cs-body">
                A masonry grid of photography from the previous three galas.
                Images loaded with a staggered fade-in - each column offset by
                100ms from the last. Clicking any photo opened a full-screen
                lightbox with keyboard navigation. The photography did the
                selling; I just gave it room to breathe.
              </p>
              <div className="cs-feature-decision">
                <strong>Design decision:</strong> I deliberately kept the
                gallery unfiltered - no category tags, no search, no year
                selector. Filtering would have introduced UI complexity that
                wasn't needed for a 3-year archive. Let people scroll and
                remember.
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Mentorship ────────────────────────────────────────────── */}
        <section id="mentorship" className="cs-section">
          <Reveal>
            <h2 className="cs-section-title">Mentorship</h2>
          </Reveal>

          <Reveal delay={60}>
            <p className="cs-body">
              Halfway through the build, I brought in a junior designer who had
              been asking how to get into design-adjacent development. I walked
              her through the entire workflow - how I was prompting Claude, how
              I was reviewing the output, and crucially, how I was making
              decisions that the AI couldn't make for me.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <p className="cs-body">
              The thing I wanted her to understand is that AI tools shift the
              bottleneck, not remove it. Before these tools, the bottleneck was
              implementation - turning a design into working code took hours.
              Now the bottleneck is judgment: knowing what to ask for, knowing
              when the output is wrong even if it looks right, knowing when
              "good enough" is actually good enough and when it isn't.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="cs-body">
              She shipped her first real feature - a dynamic seat counter on
              the ticket page - by the end of the session. Watching someone go
              from "I don't code" to "I just shipped a feature" in an afternoon
              was the best part of this whole project.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <blockquote className="cs-hook">
              AI tools shift the bottleneck, not remove it. The bottleneck
              used to be implementation. Now it&apos;s judgment. That&apos;s
              actually a better problem to have.
            </blockquote>
          </Reveal>
        </section>

        {/* ── Outcome ───────────────────────────────────────────────── */}
        <section id="outcome" className="cs-section">
          <Reveal>
            <h2 className="cs-section-title">Outcome</h2>
          </Reveal>

          <Reveal delay={60}>
            <p className="cs-body">
              The site launched on time, was received well by the organising
              committee, and handled ticket sales without issue. I don't have
              conversion numbers - this wasn't an instrumented product launch,
              it was a charity event for a church. What I do have is the
              knowledge that something that would have taken a small agency
              two weeks and several thousand pounds was built in four days at
              zero tool cost.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <p className="cs-body">
              More than the site itself, this project gave me a framework for
              thinking about AI-assisted design work that I've carried into
              every project since. The tools are only as good as the decisions
              you bring to them. Design judgment doesn't get automated - it
              gets amplified.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="cs-subsection-label">What I&apos;d do differently</h3>
            <p className="cs-body">
              I would set up analytics from day one. Even basic pageview data
              would have told the client something meaningful about how people
              engaged with the site and which pages drove ticket intent. I
              skipped it to save setup time and regretted it immediately after
              launch.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p className="cs-body">
              I'd also document the prompting process more carefully in real
              time. I reconstructed this workflow from memory and notes after
              the fact. A running log of what I asked, what came back, and what
              I changed would have been both a better record and a better
              teaching artifact for the junior designer I brought in.
            </p>
          </Reveal>
        </section>

      </div>
    </main>
  );
}
