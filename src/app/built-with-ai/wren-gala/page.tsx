import type { Metadata } from "next";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CaseImage }      from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

const SECTIONS = [
  { id: "context",    label: "Context"    },
  { id: "process",    label: "Process"    },
  { id: "solution",   label: "Solution"   },
  { id: "reflection", label: "Reflection" },
];

export const metadata: Metadata = {
  title: "The Wren Gala - Tanuja Bodas",
  description:
    "Designing and shipping a luxury charity event website in under a week, with zero hand-written code.",
};

const IMG = (name: string) => `/images/wren-gala/${name}`;

export default function WrenGalaPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="cs-hero">
        <StaggerItem className="cs-hero-media" style={{ background: "#100d14" }}>
          <CaseImage
            src={IMG("hero.jpg")}
            alt="The Wren Gala website shown in a browser mockup"
            description="Browser mockup of the Wren Gala homepage — sjpgalany.org"
            fill
            priority
            noCurtain
            sizes="100vw"
            className="cs-hero-img"
          />
          <div className="cs-hero-overlay" aria-hidden />
          <div className="cs-hero-text">
            <h1 className="cs-hero-title">The Wren Gala</h1>
            <p className="cs-hero-subtitle">
              Designing and shipping a luxury charity event website in under
              a week, with zero hand-written code.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className="cs-meta-bar">
          <div className="cs-meta-inner">
            {[
              ["Role",     "Lead Designer & Developer"],
              ["Duration", "Under 1 week"],
              ["Client",   "St James Church Piccadilly"],
              ["Tech",     "React · Tailwind · Vercel"],
            ].map(([label, value]) => (
              <div key={label} className="cs-meta-item">
                <span className="cs-meta-label">{label}</span>
                <span className="cs-meta-value">{value}</span>
              </div>
            ))}
          </div>
        </StaggerItem>
      </StaggerContainer>

      <CsScrollLinks sections={SECTIONS} />

      <div className="cs-body">

        {/* ── Context ──────────────────────────────────────────────────── */}
        <section id="context" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Context</h2>

            <p className="cs-section-body">
              St James Church in Piccadilly, London, hosts an annual charity
              gala in New York City. The church needed a dedicated website for
              the 2026 event that could do two things simultaneously: sell the
              prestige of the evening and convert visitors into ticket buyers.
            </p>

            <p className="cs-section-body">
              The existing church website served its purpose for general parish
              communications but was not built for event marketing. A gala in
              this category requires a specific visual register. Formal
              typography, restrained color, generous whitespace, and a sense of
              occasion. The site needed to feel like an invitation, not a
              brochure.
            </p>

            <p className="cs-section-body">
              The scope was four pages: a homepage anchoring the event&rsquo;s
              identity, a Changemaker Cohort page spotlighting the honorees, a
              Story of St James page connecting the church&rsquo;s history to
              its mission, and a Tickets page with a purchase flow. Payment
              processing runs through ACH, with attendee data stored in
              Airtable.
            </p>

            <p className="cs-section-body">
              The constraint was time. The entire site needed to ship in under
              a week.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("context-comparison.jpg")}
                alt="Side-by-side: existing church site vs. Wren Gala homepage"
                description="Side-by-side: existing church site vs. Wren Gala homepage"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ── Process ──────────────────────────────────────────────────── */}
        <section id="process" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Process</h2>
          </ScrollReveal>

          {/* 01 — Visual Direction */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01</span>
              <h3 className="cs-subsection-heading">Visual Direction</h3>
              <p className="cs-subsection-body">
                The visual language had to signal luxury without excess. The
                client&rsquo;s event sits in a category alongside museum galas
                and foundation dinners, not tech launch parties. That meant a
                palette anchored in deep navy and warm gold, serif typography
                for headlines, clean sans-serif for body text, and imagery
                treated with restraint rather than spectacle.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                I established the direction through mood boarding and rapid
                iteration directly in the browser rather than spending days in
                Figma. The compressed timeline made this the right call: the
                client could see real pages, not static comps, from day one.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-decision">
              <span className="cs-feature-decision-label">Design decision</span>
              <p className="cs-feature-decision-text">
                Designing in the browser eliminated the handoff gap entirely.
                Every design review happened on a live URL. Feedback was
                immediate and specific because the client was reacting to real
                behavior, not a flat mockup.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("visual-direction.jpg")}
                alt="Visual direction: color palette, typography, mood references"
                description="Visual direction: color palette, typography, mood references"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          {/* 02 — AI Tool Evaluation */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02</span>
              <h3 className="cs-subsection-heading">AI Tool Evaluation</h3>
              <p className="cs-subsection-body">
                This project became a case study in AI-assisted design and
                development. I used three different AI tools across the
                timeline, each for a specific reason, and each with clear
                tradeoffs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="ai-timeline">

              <div className="ai-phase">
                <div className="ai-phase-header">
                  <span className="ai-phase-num">01</span>
                  <span className="ai-phase-tool">Figma Make</span>
                </div>
                <div className="ai-phase-body">
                  <p className="cs-subsection-body" style={{ marginBottom: "1rem" }}>
                    Generated static page templates quickly. Good for
                    establishing layout structure and content hierarchy. Limited
                    output when it came to animation, responsiveness, and
                    interaction design.
                  </p>
                  <ul className="ai-phase-checks">
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">&#10003;</span>
                      Fast layout generation and design token fidelity
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">&#10003;</span>
                      Good starting point for structure and content hierarchy
                    </li>
                    <li className="ai-check ai-check--con">
                      <span className="ai-check-icon">&#10007;</span>
                      No animation, responsiveness, or interaction support
                    </li>
                    <li className="ai-check ai-check--con">
                      <span className="ai-check-icon">&#10007;</span>
                      Useful as a starting point, not a production tool
                    </li>
                  </ul>
                  <div className="ai-phase-verdict ai-phase-verdict--moved">Moved on</div>
                </div>
              </div>

              <div className="ai-arrow" aria-hidden>&#8595;</div>

              <div className="ai-phase">
                <div className="ai-phase-header">
                  <span className="ai-phase-num">02</span>
                  <span className="ai-phase-tool">Lovable</span>
                </div>
                <div className="ai-phase-body">
                  <p className="cs-subsection-body" style={{ marginBottom: "1rem" }}>
                    Significantly better at producing polished, animated output.
                    The results felt closer to a finished product. I abandoned
                    it because the cost model did not make sense for a client
                    project with a tight budget.
                  </p>
                  <ul className="ai-phase-checks">
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">&#10003;</span>
                      Polished, animated output that felt production-ready
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">&#10003;</span>
                      Natural language to interaction: fast iteration loop
                    </li>
                    <li className="ai-check ai-check--con">
                      <span className="ai-check-icon">&#10007;</span>
                      Cost model didn&rsquo;t make sense for a tight client budget
                    </li>
                    <li className="ai-check ai-check--con">
                      <span className="ai-check-icon">&#10007;</span>
                      Pricing prohibitive for the project scope
                    </li>
                  </ul>
                  <div className="ai-phase-verdict ai-phase-verdict--moved">Moved on</div>
                </div>
              </div>

              <div className="ai-arrow" aria-hidden>&#8595;</div>

              <div className="ai-phase ai-phase--final">
                <div className="ai-phase-header">
                  <span className="ai-phase-num">03</span>
                  <span className="ai-phase-tool">Claude + VS Code</span>
                </div>
                <div className="ai-phase-body">
                  <p className="cs-subsection-body" style={{ marginBottom: "1rem" }}>
                    Full control over every line of code. No per-generation cost
                    beyond the subscription. The output was production-ready and
                    deployable directly to Vercel. I prompted, reviewed,
                    iterated, and shipped without hand-typing a single line of
                    code.
                  </p>
                  <ul className="ai-phase-checks">
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">&#10003;</span>
                      Full control over every decision
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">&#10003;</span>
                      No per-generation cost beyond subscription
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">&#10003;</span>
                      Production-ready output, deployable to Vercel
                    </li>
                    <li className="ai-check ai-check--pro">
                      <span className="ai-check-icon">&#10003;</span>
                      Zero hand-typed code — shipped in under a week
                    </li>
                  </ul>
                  <div className="ai-phase-verdict ai-phase-verdict--final">Final workflow &#10003;</div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-decision" style={{ marginTop: "2rem" }}>
              <span className="cs-feature-decision-label">Design decision</span>
              <p className="cs-feature-decision-text">
                The value of evaluating multiple AI tools was not just about
                finding the cheapest option. It was about understanding what
                each tool optimizes for. Figma Make optimizes for speed of
                static output. Lovable optimizes for visual polish. Claude
                optimizes for control and iteration depth. Knowing when to
                switch tools is itself a design skill.
              </p>
            </div>
          </ScrollReveal>

          {/* 03 — Content Strategy */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03</span>
              <h3 className="cs-subsection-heading">Content Strategy</h3>
              <p className="cs-subsection-body">
                A gala website is not an information site. It is a persuasion
                tool. Every page needed a clear job: the homepage builds
                anticipation, the Changemaker page creates emotional investment
                in the cause, the Story page lends historical weight, and the
                Tickets page removes friction from the purchase decision.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                I structured the content hierarchy around a single principle:
                every scroll should move the visitor closer to purchasing a
                ticket. The homepage leads with the event&rsquo;s prestige, not
                with logistical details. Date, time, and venue appear, but they
                are secondary to the emotional register. The Tickets page strips
                away everything that is not directly relevant to completing the
                transaction.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("content-hierarchy.jpg")}
                alt="Content hierarchy: page flow from homepage to ticket purchase"
                description="Content hierarchy: page flow from homepage to ticket purchase"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          {/* 04 — Mentoring Through the Process */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">04</span>
              <h3 className="cs-subsection-heading">Mentoring Through the Process</h3>
              <p className="cs-subsection-body">
                I brought a junior designer into the project as a learning
                opportunity. Rather than assigning isolated tasks, I structured
                the mentorship around the AI workflow itself. The junior designer
                observed how I evaluated tools, wrote prompts, reviewed output,
                and made iteration decisions.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The key lesson was that AI tools do not replace design judgment.
                They compress execution time. The decisions about visual
                hierarchy, content structure, interaction patterns, and
                responsive behavior still require a designer who understands why
                those decisions matter. The junior designer left the project with
                a working mental model for when AI tools are useful and when they
                introduce risk.
              </p>
            </div>
          </ScrollReveal>

          {/* 05 — Payment Platform Evaluation */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">05</span>
              <h3 className="cs-subsection-heading">Payment Platform Evaluation</h3>
              <p className="cs-subsection-body">
                The ticket purchase flow went through its own evaluation cycle,
                separate from the build tools. The pattern was the same:
                evaluate, adopt, hit a constraint, switch.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The initial plan was Rayze. It was ruled out early because the
                platform does not support event ticketing. The scope simply did
                not fit.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The second option was Givebutter, a donation and fundraising
                platform with event support. I integrated it, the client
                approved the setup, and it technically worked. The problem was
                visual. Givebutter&rsquo;s UI is not fully customizable. The
                embedded ticketing experience broke from the site&rsquo;s
                formal, luxury aesthetic. A guest scrolling through deep navy
                and gold typography would land on a payment form that looked
                like a different product entirely. For a general nonprofit
                fundraiser, that mismatch might be acceptable. For a gala in
                this category, it was not.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The final solution is ACH transfers, with attendee data stored
                in Airtable. This trades the convenience of a pre-built ticketing
                platform for full control over the purchase experience. Every
                element of the form, the confirmation, and the receipt matches
                the site&rsquo;s visual language.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-decision">
              <span className="cs-feature-decision-label">Design decision</span>
              <p className="cs-feature-decision-text">
                This was not a technical failure. Givebutter worked. The decision
                to move away from it was a design decision: brand coherence
                across the entire experience matters more than integration
                convenience. A luxury event cannot have a generic checkout.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("payment-comparison.jpg")}
                alt="Payment platform evaluation: Givebutter embedded UI vs. custom ticket flow"
                description="Payment platform evaluation: Givebutter embedded UI vs. custom ticket flow"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ── Solution ─────────────────────────────────────────────────── */}
        <section id="solution" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Solution</h2>
            <p className="cs-section-body">
              Four pages, each with a specific persuasion job. The visual
              language holds through every surface: dark navy background, warm
              gold accents, serif display type, and generous whitespace that
              signals occasion rather than urgency.
            </p>
          </ScrollReveal>

          {/* Feature 01 — Homepage */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 01</span>
              <h3 className="cs-feature-title">Homepage</h3>
              <p className="cs-feature-body">
                The homepage establishes the event&rsquo;s visual identity in
                the first viewport. A full-bleed hero image, the gala name in a
                serif headline, the date and venue, and a single call-to-action.
                No navigation clutter above the fold. The goal is atmosphere
                first, logistics second.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                Below the fold, the page introduces the mission, previews the
                Changemaker cohort, and provides a second ticket CTA. The scroll
                rhythm alternates between image-heavy and text-heavy sections to
                maintain visual interest without overwhelming.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("homepage.jpg")}
                  alt="Wren Gala homepage — desktop and mobile"
                  description="Homepage — desktop and mobile"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  The single-CTA hero was a deliberate choice. Event websites
                  often front-load navigation, sponsor logos, and secondary
                  links. That dilutes attention. A gala at this level should
                  feel like you are being welcomed, not marketed to.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 02 — Changemaker Cohort */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 02</span>
              <h3 className="cs-feature-title">Changemaker Cohort Page</h3>
              <p className="cs-feature-body">
                This page profiles the individuals being honored at the gala.
                Each profile card includes a portrait, a name, a title, and a
                short narrative about their contribution. The layout uses a grid
                that adapts from three columns on desktop to a single stack on
                mobile.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                The profiles are written to connect each person&rsquo;s work to
                the church&rsquo;s broader mission. The page is not a directory.
                It is an argument for why this event matters and why attendance
                is a form of participation in the mission.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("changemaker.jpg")}
                  alt="Changemaker Cohort page with profile cards"
                  description="Changemaker Cohort page with profile cards"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  Profile cards use a consistent template rather than bespoke
                  layouts per person. This was a practical choice (faster to
                  produce, easier to update) and a design choice (visual
                  consistency signals institutional seriousness).
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 03 — Story of St James */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 03</span>
              <h3 className="cs-feature-title">Story of St James</h3>
              <p className="cs-feature-body">
                This page connects the 2026 gala to the church&rsquo;s
                340-year history. The content moves chronologically, from the
                church&rsquo;s founding through its restoration, its community
                programs, and its expansion into international philanthropy.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                The design uses a scrolling narrative format with large section
                breaks, archival imagery, and pull quotes. The pacing is slower
                than the homepage by design. A visitor who reaches this page is
                already interested. The goal is to deepen commitment, not create
                urgency.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("story.jpg")}
                  alt="Story of St James — narrative scroll"
                  description="Story of St James — narrative scroll"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  Using a linear narrative rather than a tabbed or accordion
                  layout was intentional. The church&rsquo;s story gains power
                  from continuity. Breaking it into collapsed sections would
                  have undermined the sense of unfolding history.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 04 — Tickets */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 04</span>
              <h3 className="cs-feature-title">Tickets Page &amp; Purchase Flow</h3>
              <p className="cs-feature-body">
                The Tickets page is where the entire site&rsquo;s persuasion arc
                resolves into action. It presents ticket tiers and drives the
                visitor toward a single outcome: completing the purchase.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                This page went through more iteration than any other because of
                the payment platform changes. The initial Givebutter integration
                was functional but visually dissonant. The embedded UI introduced
                colors, typography, and spacing that broke from the site&rsquo;s
                established language. Replacing it with a custom flow built on
                ACH transfers (with Airtable for data storage) restored full
                visual control. Every element of the form, confirmation state,
                and receipt now matches the gala&rsquo;s design system.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                The page design eliminates all secondary content. No sidebar, no
                footer links, no related content. Once a visitor lands here, the
                only action available is completing the purchase. Form fields are
                minimal: name, email, ticket selection, payment. Error states are
                inline. Confirmation is immediate.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("tickets.jpg")}
                  alt="Tickets page: custom purchase flow"
                  description="Tickets page: custom purchase flow"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  Removing navigation from the ticket purchase flow was a
                  conversion-focused choice. Every link that is not
                  &ldquo;complete your purchase&rdquo; is a potential exit.
                  But the deeper decision was rejecting a working integration
                  (Givebutter) because it compromised brand coherence. A luxury
                  event cannot have a generic checkout. The visual standard has
                  to hold through the final interaction, not just the marketing
                  pages.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Reflection ───────────────────────────────────────────────── */}
        <section id="reflection" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Reflection</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <h3 className="cs-wid-heading">What I learned</h3>

              <p className="cs-wid-body">
                <strong>AI tools are not interchangeable.</strong> Each one
                optimizes for a different output quality, and the skill is in
                evaluating fit quickly rather than committing to one tool and
                forcing it to work. Figma Make, Lovable, and Claude each had
                clear strengths and hard limits. The project worked because I
                switched tools at the right moments.
              </p>

              <p className="cs-wid-body">
                <strong>Speed is a design decision.</strong> Shipping in under a
                week was not about cutting corners. It was about using AI to
                compress the build phase so I could spend more time on design
                thinking, content strategy, and client alignment. The time saved
                on code was reinvested in the decisions that actually shape the
                user experience.
              </p>

              <p className="cs-wid-body">
                <strong>Prompting is a design skill.</strong> The quality of AI
                output is directly tied to the clarity of the input. Writing
                effective prompts requires the same discipline that good design
                requires: knowing what you want, understanding constraints, and
                communicating tradeoffs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">What I&rsquo;d do differently</h3>

              <p className="cs-wid-body">
                I would establish the AI tool choice before starting rather than
                evaluating three tools sequentially. The evaluation was valuable
                as a learning exercise, but on a future project with the same
                time constraint, I would go directly to Claude + VS Code based
                on what I now know about the tradeoffs.
              </p>

              <p className="cs-wid-body">
                I would also build a lightweight analytics setup from the start
                to capture site traffic, ticket page visits, and conversion data.
                The gala has not yet taken place, so there are no outcome metrics
                to report. Having analytics in place from launch would have made
                it possible to share meaningful data regardless of timing.
              </p>
            </div>
          </ScrollReveal>

          {/* Live site + next project */}
          <ScrollReveal>
            <div style={{ marginTop: "3rem" }}>
              <a
                href="https://sjpgalany.org"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-live-link"
              >
                View live site: sjpgalany.org &#8599;
              </a>
            </div>

            <div className="cs-next-project cs-next-project--disabled" aria-disabled="true">
              <div>
                <span className="cs-next-project-label">Next project</span>
                <span className="cs-next-project-title">Rise &amp; Shine Foundation</span>
              </div>
              <span style={{ fontSize: "1.25rem", color: "var(--text-faint)" }}>&#8594;</span>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </>
  );
}
