import type { Metadata } from "next";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { Reveal }         from "@/components/case-study/reveal";
import { MetricCard }     from "@/components/case-study/metric-card";
import { CaseImage }      from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

const SECTIONS = [
  { id: "challenge", label: "Challenge" },
  { id: "process",   label: "Process"   },
  { id: "solution",  label: "Solution"  },
  { id: "impact",    label: "Impact"    },
];

export const metadata: Metadata = {
  title: "Rewards & Recognition",
  description:
    "Designing a culture of visibility for enterprise teams at ZingHR.",
};

const IMG = (name: string) => `/images/rewards-recognition/${name}`;

export default function RRCaseStudy() {
  return (
    <div className="rr-study">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="cs-hero">
        <StaggerItem className="cs-hero-media" style={{ background: "#1a1410" }}>
          <CaseImage
            src={IMG("hero.jpg")}
            alt="Rewards & Recognition dashboard"
            description="R&R dashboard - full mockup, 1440px"
            fill
            priority
            sizes="100vw"
            className="cs-hero-img"
          />
          <div className="cs-hero-overlay" aria-hidden />
          <div className="cs-hero-text">
            <h1 className="cs-hero-title">Rewards &amp; Recognition</h1>
            <p className="cs-hero-subtitle">
              Designing a culture of visibility for enterprise teams.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className="cs-meta-bar">
          <div className="cs-meta-inner">
            {[
              ["Role",     "Lead Product Designer"],
              ["Duration", "4 months"],
              ["Company",  "ZingHR"],
              ["Team",     "1 designer · 2 engineers · 1 PM"],
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
        {/* ── Challenge ──────────────────────────────────────────────── */}
        <section id="challenge" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Challenge</h2>

            <blockquote className="cs-hook">
              During a site visit to a client office in Pune, I noticed a spiral
              notebook sitting open on an HR manager&rsquo;s desk. Inside, in neat
              handwriting, was a running list: names, dates, a sentence about what
              each person had done. She&rsquo;d been maintaining it for nearly a
              year. There was no field in their existing system to capture this.
              So she kept a notebook.
            </blockquote>

            <p className="cs-section-body">
              ZingHR serves enterprise HR teams across India and Southeast Asia.
              Recognition existed as a feature request across multiple client
              accounts - but what clients actually used were either bolted-on Slack
              bots (informal, ephemeral) or annual award ceremonies (formal,
              infrequent, disconnected from the daily work experience). The middle
              ground - lightweight, meaningful, persistent - was empty.
            </p>

            <p className="cs-section-body">
              For enterprise HR, recognition isn&rsquo;t just a feel-good feature.
              It&rsquo;s a retention mechanism. Research consistently links peer
              recognition to lower voluntary attrition. But available tools forced
              a false choice: either bureaucratic and formal (nobody uses it), or
              casual and disposable (leaves no record, carries no weight).
              ZingHR&rsquo;s clients were losing talent - and the systems they were
              paying for weren&rsquo;t helping.
            </p>
          </Reveal>
        </section>

        {/* ── Process ────────────────────────────────────────────────── */}
        <section id="process" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Process</h2>
          </Reveal>

          {/* Research */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01 - Research</span>
              <h3 className="cs-subsection-heading">
                24 interviews. Three completely different answers.
              </h3>
              <p className="cs-subsection-body">
                We interviewed 24 employees across three org sizes: startups
                (12–80 people), mid-size companies (200–800), and enterprise
                accounts (1,000+). The contrast was stark. At startups, people
                wanted public, spontaneous visibility - something that felt like a
                reply, not an HR form. At mid-size companies, the ask was for
                structure: a way to tie recognition to company values and make it
                trackable over time. At enterprise, the conversation shifted
                entirely toward data - managers wanted to see patterns, flag
                disengagement, and connect recognition to performance reviews.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                This told us we weren&rsquo;t designing one feature. We were
                designing a configurable system that needed to serve three
                fundamentally different cultures without forcing any of them into
                a workflow that didn&rsquo;t fit.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("research.jpg")}
                alt="Research synthesis board"
                description="Affinity map - 24 interviews across 3 org sizes"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </Reveal>

          {/* Competitive Audit */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02 - Competitive Audit</span>
              <h3 className="cs-subsection-heading">
                8 platforms. None did all three things well.
              </h3>
              <p className="cs-subsection-body">
                We audited Bonusly, Lattice, Culture Amp, Achievers, Workday
                Peakon, Kudos, 15Five, and Slack&rsquo;s native reaction system.
                The pattern was consistent: consumer-grade tools had the engagement
                but not the depth; enterprise tools had the depth but killed
                engagement with complexity. No platform delivered low-friction
                interaction, rich analytics, and a customizable rewards catalog
                within a configurable system. That gap was the opportunity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("competitive-audit.jpg")}
                alt="Competitive audit matrix"
                description="Comparison matrix - 8 platforms × 12 criteria"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </Reveal>

          {/* IA */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03 - Information Architecture</span>
              <h3 className="cs-subsection-heading">
                Recognition data had to live where HR already worked.
              </h3>
              <p className="cs-subsection-body">
                We mapped the recognition flow to ZingHR&rsquo;s existing module
                structure: employee profiles, org hierarchy, performance cycles, and
                payroll (for points redemption). The key constraint was that
                recognition data needed to be queryable during performance
                reviews - which meant it couldn&rsquo;t live in a silo. The
                architectural decision that unlocked the rest of the design:
                recognition events are attached to employees, not conversations.
                Historical recognition surfaces in a profile without managers
                having to manually curate it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("ia-diagram.jpg")}
                alt="Information architecture diagram"
                description="IA - recognition module connections to HR data model"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </Reveal>
        </section>

        {/* ── Solution ───────────────────────────────────────────────── */}
        <section id="solution" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Solution</h2>
            <p className="cs-section-body">
              The final system has four interconnected surfaces. Each was designed
              to serve a different actor - peers, managers, HR admins - while
              sharing a single underlying recognition event model.
            </p>
          </Reveal>

          {/* Feature 1 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 01</span>
              <h3 className="cs-feature-title">Peer-to-peer recognition flow</h3>
              <p className="cs-feature-body">
                Three steps maximum: select a recipient, write a message, attach a
                value tag. We tested four- and five-step flows in usability
                sessions - completion rates dropped measurably with each
                additional step. The value tag system is deliberately limited to
                eight company-configurable values. Early designs offered fifteen
                options; testing revealed that too many choices caused hesitation
                and lower completion. Fewer, clearer values also made the analytics
                downstream significantly more meaningful.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("peer-recognition.jpg")}
                  alt="Peer recognition flow"
                  description="Peer recognition flow - composer, value tag picker, confirmation"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  The message field is free-form but has a 280-character soft
                  limit shown as a counter - not enforced, but visible. Enterprise
                  clients wanted recognition to feel personal, not templated.
                  Removing the character limit entirely produced vague, generic
                  messages in testing. The counter nudged specificity without
                  imposing a ceiling.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Feature 2 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 02</span>
              <h3 className="cs-feature-title">Manager dashboard</h3>
              <p className="cs-feature-body">
                The dashboard surfaces team recognition activity, trend lines over
                time, and - most carefully - employees who haven&rsquo;t received
                any recognition in the past 30 days. The disengagement signal was
                the most debated design decision in the project. Early designs
                surfaced it as a prominent alert. After testing with twelve
                managers, we moved it to a separate &ldquo;Attention needed&rdquo;
                tab: visible to the manager but not framed as an alarm.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("manager-dashboard.jpg")}
                  alt="Manager dashboard"
                  description="Manager dashboard - team activity, trends, attention queue"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  We debated whether to show the 30-day flag to managers at all.
                  The HR admins wanted it; several managers in testing were
                  uncomfortable with it. The resolution: the flag is visible by
                  default but HR can disable it per manager role. The goal was to
                  give managers context for one-on-ones without creating a
                  surveillance dynamic or penalizing quiet employees who receive
                  recognition less publicly.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Feature 3 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 03</span>
              <h3 className="cs-feature-title">Leaderboards</h3>
              <p className="cs-feature-body">
                Leaderboards are opt-in by default. This came directly from
                research: several employees, particularly in enterprise accounts,
                expressed anxiety about being ranked publicly. Opting out
                doesn&rsquo;t affect the recognition received - it only removes
                the person from the visible ranking. Leaderboards are also
                configurable at three scopes: team, department, or company-wide.
                A department leaderboard visible only to department members was
                the most common configuration in pilot testing.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("leaderboards.jpg")}
                  alt="Leaderboard views"
                  description="Leaderboard - team, department, and company-wide scopes"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  We considered making leaderboards opt-out (visible by default,
                  with the ability to hide). Two rounds of usability testing with
                  introverted participants changed that. Opt-in produced better
                  engagement overall - employees who chose to participate were
                  more active, and employees who opted out reported higher
                  comfort with the tool in general.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Feature 4 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 04</span>
              <h3 className="cs-feature-title">Rewards marketplace</h3>
              <p className="cs-feature-body">
                The catalog is entirely company-managed. HR admins build and
                maintain the offering - gift cards, experiences, company merch,
                charitable donations, time off. We deliberately avoided locking
                clients into a platform-curated catalog: every enterprise account
                we spoke to had existing vendor relationships and procurement
                policies that a closed catalog would have violated. Points
                accumulate per recognition received and can be redeemed in the
                marketplace. Redemption triggers a lightweight approval flow if
                the item exceeds a configurable threshold.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("marketplace.jpg")}
                  alt="Rewards marketplace"
                  description="Rewards marketplace - catalog, points balance, redemption flow"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  The points-to-currency conversion is shown in the catalog item
                  description, not at checkout. Showing the monetary value
                  earlier - before the employee has decided to redeem - tested
                  better across every user group. It reduced abandoned
                  redemptions by making the perceived value concrete before
                  commitment.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Impact ─────────────────────────────────────────────────── */}
        <section id="impact" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Impact</h2>
            <p className="cs-section-body">
              The following reflects a 90-day pilot with one enterprise client,
              340 employees across two office locations. Projected metrics are
              based on industry benchmarks for sustained adoption at the 12-month
              mark and are labeled clearly below.
            </p>
          </Reveal>

          {/* Real metrics */}
          <Reveal delay={80}>
            <div className="cs-impact-group">
              <p className="cs-impact-group-label">Measured - 90-day pilot</p>
              <div className="cs-metrics">
                {[
                  { value: "87%",  label: "Weekly active users",       context: "After 6 weeks, sustained through week 12"    },
                  { value: "3.2×", label: "Recognition events",        context: "vs. the prior tool over the same period"     },
                  { value: "94",   label: "NPS score",                 context: "Collected at the 30-day mark via in-app survey"},
                  { value: "12.4", label: "Minutes to first kudos",    context: "Median time for a new employee to receive recognition"},
                ].map((m, i) => (
                  <MetricCard key={m.label} metric={m} index={i} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Projected metrics */}
          <Reveal delay={120}>
            <div className="cs-impact-group">
              <p className="cs-impact-group-label">Projected - 12-month outlook</p>
              <div className="cs-metrics">
                {[
                  { value: "−15%", label: "Voluntary attrition",      context: "Based on industry benchmarks for tools with >80% WAU" },
                  { value: "2",    label: "Accounts confirmed for review integration", context: "Pending renewal conversation, not yet live" },
                ].map((m, i) => (
                  <MetricCard key={m.label} metric={m} index={i} projected />
                ))}
              </div>
            </div>
          </Reveal>

          {/* What I'd do differently */}
          <Reveal delay={80}>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">What I&rsquo;d do differently</h3>

              <p className="cs-wid-body">
                <strong>Push for mobile-first earlier.</strong> The initial design
                was desktop-led because the client&rsquo;s IT policy restricted
                native app installs - so we built a responsive web app. Analytics
                from the pilot showed 43% of kudos were written from mobile
                browsers. The responsive experience held up, but it was clearly
                secondary. Starting from mobile would have produced better
                interaction density on the composer and the feed.
              </p>

              <p className="cs-wid-body">
                <strong>Invest more in the blank-state experience.</strong> New
                employees took an average of 12 days to send their first kudos -
                longer than we wanted. The problem: when you join a tool with no
                social graph yet, the right onboarding nudge is non-obvious. We
                shipped a generic empty state. It needed to be contextual -
                surfacing teammates the new employee had already interacted with,
                not a blank canvas.
              </p>

              <p className="cs-wid-body">
                <strong>Involve HR admins in testing earlier.</strong> We spent
                too long designing for end users and brought HR admins into
                testing late. They surfaced catalog management edge cases in
                week 8 that should have been in scope from week 2. Their workflow
                is the backbone of the marketplace - not an afterthought.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
