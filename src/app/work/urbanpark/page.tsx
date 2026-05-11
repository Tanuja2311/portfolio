import type { Metadata } from "next";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CaseImage } from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

export const metadata: Metadata = {
  title: "UrbanPark",
  description: "A peer-to-peer marketplace for unused driveways.",
};

const IMG = (name: string) => `/images/urbanpark/${name}`;

const SECTIONS = [
  { id: "challenge",     label: "Challenge"     },
  { id: "research",      label: "Research"      },
  { id: "design-system", label: "Design System" },
  { id: "solution",      label: "Solution"      },
  { id: "reflection",    label: "Reflection"    },
];

export default function UrbanParkCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="cs-hero">
        <StaggerItem className="cs-hero-media" style={{ background: "#0d1a0f" }}>
          <CaseImage
            src={IMG("hero.jpg")}
            alt="UrbanPark app screens"
            description="UrbanPark - key app screens montage, 1440px"
            fill
            priority
            noCurtain
            sizes="100vw"
            className="cs-hero-img"
          />
          <div className="cs-hero-overlay" aria-hidden />
          <div className="cs-hero-text">
            <h1 className="cs-hero-title">UrbanPark</h1>
            <p className="cs-hero-subtitle">
              A peer-to-peer marketplace for unused driveways.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className="cs-meta-bar">
          <div className="cs-meta-inner">
            {[
              ["Role",    "Product Designer"],
              ["Context", "Academic Project · MS Coursework"],
              ["Scope",   "End-to-end design + design system"],
              ["Year",    "2025"],
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
          <ScrollReveal>
            <h2 className="cs-section-heading">Challenge</h2>

            <p className="cs-stat-highlight">
              Drivers spend an average of 17 minutes searching for parking per
              trip in dense urban areas. That circling accounts for roughly 30%
              of downtown traffic - and generates an estimated 900,000 tons of
              CO₂ annually across U.S. cities.
            </p>

            <p className="cs-section-body">
              UrbanPark starts with the other side of that equation: the empty
              driveway. Most homeowners who commute by transit or work from home
              have a concrete pad sitting unused from 8 AM to 6 PM. The
              opportunity is a two-sided marketplace connecting the two - drivers
              who need a reliable, reserved spot, and homeowners with idle space
              and no friction-free way to monetize it.
            </p>

            <p className="cs-section-body">
              The product challenge isn&rsquo;t matching supply to demand. That
              part is a database query. The real challenge is building trust
              between strangers over something as personal as their car and their
              home - in real time, under time pressure, with money changing
              hands.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Research ───────────────────────────────────────────────── */}
        <section id="research" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Research</h2>
          </ScrollReveal>

          {/* Interviews */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01 - User Interviews</span>
              <h3 className="cs-subsection-heading">
                16 interviews. Two completely different definitions of safety.
              </h3>
              <p className="cs-subsection-body">
                We ran 16 interviews split evenly between daily commuters and
                homeowners in neighborhoods with known parking pressure. The
                motivations were immediately asymmetric.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  Drivers:
                </strong>{" "}
                predictability was the core need, not price. &ldquo;I don&rsquo;t
                mind paying more if I know the spot will be there.&rdquo; Drivers
                who&rsquo;d used existing apps cited photos that didn&rsquo;t
                match reality as the primary trust failure.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  Homeowners:
                </strong>{" "}
                the barrier wasn&rsquo;t platform trust - it was stranger trust.
                &ldquo;What if they block my garage?&rdquo; &ldquo;What if
                something happens to my property?&rdquo; Insurance,
                accountability, and cancellation policies surfaced in 7 of 8
                homeowner interviews before we asked about them.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("research-interviews.jpg")}
                alt="Interview synthesis board"
                description="Interview synthesis - affinity map, 16 sessions"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          {/* Competitive Analysis */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02 - Competitive Analysis</span>
              <h3 className="cs-subsection-heading">
                Six apps. None solved the trust handoff.
              </h3>
              <p className="cs-subsection-body">
                We mapped SpotHero, ParkWhiz, Neighbor, JustPark, Parkopedia,
                and Rover (as an analogous trust model). The pattern: apps that
                aggregated parking lots (B2B supply) handled search well but
                didn&rsquo;t need to solve person-to-person trust. Apps with P2P
                supply (JustPark, Neighbor) had the right model but shallow
                verification and no in-app handoff communication. Rover&rsquo;s
                trust architecture - background checks, review systems, in-app
                messaging, and structured meet & greet flows - was the closest
                analogue to what UrbanPark needed.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("competitive-analysis.jpg")}
                alt="Competitive analysis matrix"
                description="Competitive matrix - 6 apps × 10 criteria"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          {/* Personas */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03 - Personas</span>
              <h3 className="cs-subsection-heading">Two users. Opposite anxieties.</h3>
              <p className="cs-subsection-body">
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  Maya, 31
                </strong>{" "}
                - software engineer, commutes to campus three days a week.
                She&rsquo;s used parking apps before and abandoned spots that
                didn&rsquo;t match their photos. Core need: reliability. Willing
                to pay a premium for a guaranteed, confirmed spot.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  David, 55
                </strong>{" "}
                - homeowner, car in the shop two days a week, interested in
                passive income. His driveway sits empty. Core barrier: liability
                and damage. Needs to feel in control of who accesses his
                property and what recourse he has if something goes wrong.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-two-col" style={{ marginTop: "1.5rem" }}>
              <div className="cs-portrait-img">
                <CaseImage
                  src={IMG("persona-maya.jpg")}
                  alt="Maya persona card"
                  description="Maya persona - driver, 31, software engineer"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-portrait-img">
                <CaseImage
                  src={IMG("persona-david.jpg")}
                  alt="David persona card"
                  description="David persona - homeowner, 55, passive income seeker"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Journey Maps */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">04 - Journey Maps</span>
              <h3 className="cs-subsection-heading">
                The trust gap lives at the handoff moment.
              </h3>
              <p className="cs-subsection-body">
                Mapping the full journey for both users surfaced a critical
                insight: the highest-anxiety moment for both sides wasn&rsquo;t
                payment - it was arrival. When a renter shows up and the
                driveway is blocked, or when an owner hears someone on their
                property without warning, neither party has a reliable channel
                to resolve it. That single insight shaped the entire
                verification and communication design.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wide-img">
              <CaseImage
                src={IMG("journey-map.jpg")}
                alt="Journey maps for Maya and David"
                description="Journey maps - Maya (renter) and David (homeowner), end-to-end"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ── Design System ──────────────────────────────────────────── */}
        <section id="design-system" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Design System</h2>
            <p className="cs-section-body">
              Before designing screens, I built the component library. This
              isn&rsquo;t how academic projects typically work - students usually
              skip straight to high-fidelity. I did it first because
              I&rsquo;d learned from a previous project that designing without a
              system produces inconsistent work that&rsquo;s painful to maintain
              and impossible to hand off. The system has six component categories,
              documented with all states, interaction behavior, and edge cases,
              built in Figma with auto-layout, component properties, and a
              token-based color and type system.
            </p>

            <div className="cs-nda-note">
              <span className="cs-nda-note-label">Context</span>
              <p>
                I built a similar enterprise-grade design system at ZingHR for
                their B2B HR platform serving 500,000+ daily transactions - but
                that work is under NDA. UrbanPark demonstrates the same
                methodology: component-level thinking, systematic state
                documentation, and token-based design - applied to a consumer
                product I can show.
              </p>
            </div>
          </ScrollReveal>

          {/* Component grid */}
          <ScrollReveal>
            <div className="cs-ds-grid">

              <div className="cs-ds-group">
                <div className="cs-ds-group-header">
                  <span className="cs-ds-group-name">Buttons</span>
                  <span className="cs-ds-group-spec">Primary · Secondary · Ghost · Disabled · Loading</span>
                </div>
                <div className="cs-ds-group-img">
                  <CaseImage
                    src={IMG("ds-buttons.jpg")}
                    alt="Button component states"
                    description="All button states - 5 variants × 3 sizes"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="cs-hero-img"
                  />
                </div>
              </div>

              <div className="cs-ds-group">
                <div className="cs-ds-group-header">
                  <span className="cs-ds-group-name">Inputs &amp; Fields</span>
                  <span className="cs-ds-group-spec">Default · Focus · Error · Success · Disabled</span>
                </div>
                <div className="cs-ds-group-img">
                  <CaseImage
                    src={IMG("ds-inputs.jpg")}
                    alt="Input field states"
                    description="Input states - with accessible focus rings and validation"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="cs-hero-img"
                  />
                </div>
              </div>

              <div className="cs-ds-group">
                <div className="cs-ds-group-header">
                  <span className="cs-ds-group-name">Form Controls</span>
                  <span className="cs-ds-group-spec">Select · Toggle · Checkbox · Radio · Slider</span>
                </div>
                <div className="cs-ds-group-img">
                  <CaseImage
                    src={IMG("ds-controls.jpg")}
                    alt="Form control components"
                    description="Selects, toggles, checkboxes - all states"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="cs-hero-img"
                  />
                </div>
              </div>

              <div className="cs-ds-group">
                <div className="cs-ds-group-header">
                  <span className="cs-ds-group-name">Cards</span>
                  <span className="cs-ds-group-spec">Listing · Booking · Confirmation · Review</span>
                </div>
                <div className="cs-ds-group-img">
                  <CaseImage
                    src={IMG("ds-cards.jpg")}
                    alt="Card component variants"
                    description="Listing, booking, confirmation cards - hover + selected states"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="cs-hero-img"
                  />
                </div>
              </div>

              <div className="cs-ds-group">
                <div className="cs-ds-group-header">
                  <span className="cs-ds-group-name">Modals</span>
                  <span className="cs-ds-group-spec">Confirmation · Error · Payment · Bottom sheet</span>
                </div>
                <div className="cs-ds-group-img">
                  <CaseImage
                    src={IMG("ds-modals.jpg")}
                    alt="Modal component variants"
                    description="Confirmation, error, payment modals - all states"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="cs-hero-img"
                  />
                </div>
              </div>

              <div className="cs-ds-group">
                <div className="cs-ds-group-header">
                  <span className="cs-ds-group-name">Feedback</span>
                  <span className="cs-ds-group-spec">Toast success/warning/error · Tooltips · Empty states</span>
                </div>
                <div className="cs-ds-group-img">
                  <CaseImage
                    src={IMG("ds-feedback.jpg")}
                    alt="Feedback components"
                    description="Toasts, tooltips, empty states - all variants"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="cs-hero-img"
                  />
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* ── Solution ───────────────────────────────────────────────── */}
        <section id="solution" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Solution</h2>
            <p className="cs-section-body">
              Three distinct flows - homeowner onboarding, renter search and
              booking, and the verification layer that sits beneath both - each
              designed as a standalone journey that shares a common trust
              architecture.
            </p>
          </ScrollReveal>

          {/* Homeowner flow */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Flow 01</span>
              <h3 className="cs-feature-title">Homeowner: List your driveway</h3>
              <p className="cs-feature-body">
                Onboarding is structured as building a listing, not filling a
                form. Four steps: add your address and photos, set your
                available hours (weekly repeating schedule by default, with
                override by date), set your price (with a suggested range
                derived from nearby verified listings), and complete identity
                verification. The listing goes live only after ID verification
                clears - a gate that reduced fraudulent listings in our
                prototype testing to zero.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("homeowner-flow.jpg")}
                  alt="Homeowner listing flow"
                  description="Homeowner flow - address, photos, schedule, pricing, verification"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  The pricing step shows a suggested range before asking the
                  owner to enter a number. Anchoring against real data from
                  nearby listings increased confidence and reduced
                  &ldquo;analysis paralysis&rdquo; in testing - owners who saw
                  the range set a price 40% faster than owners shown a blank
                  input.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Renter flow */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Flow 02</span>
              <h3 className="cs-feature-title">Renter: Search, book, and navigate</h3>
              <p className="cs-feature-body">
                Search is map-first. The filter panel surfaces the three
                criteria our research identified as primary: price range,
                walking distance from destination, and verification status.
                Ratings and amenities are secondary filters collapsed by
                default. The booking confirmation screen is the longest in the
                app - it deliberately surfaces every relevant detail (cancellation
                policy, check-in instructions, owner contact) before payment
                commits, because that&rsquo;s when both sides need the most
                clarity.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("renter-flow.jpg")}
                  alt="Renter search and booking flow"
                  description="Renter flow - map search, listing detail, booking, payment, navigation"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  Navigation on the booking confirmation screen opens the
                  renter&rsquo;s default maps app, not an in-app map. This was
                  a deliberate reduction in scope. Renters already trust their
                  maps app. Building a navigation layer would have added
                  complexity without adding trust, and our research showed
                  that renters switch to their maps app at arrival regardless.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Verification flow */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Flow 03</span>
              <h3 className="cs-feature-title">Verification: Building trust in layers</h3>
              <p className="cs-feature-body">
                Verification has three layers: identity (government ID upload,
                face match), vehicle (plate number, make and model), and
                property (address confirmation via Street View match). None of
                these are novel individually. The design challenge was sequencing
                them so they didn&rsquo;t feel like interrogation - and
                communicating to both sides exactly what the other party has
                verified. A renter seeing a &ldquo;3-layer verified&rdquo; badge
                on a listing knows specifically what that means.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("verification-flow.jpg")}
                  alt="Verification flow screens"
                  description="Verification - ID upload, vehicle registration, property confirmation"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  The verification badge is broken into three visible tiers on
                  the listing page - not a single binary &ldquo;Verified&rdquo;
                  checkmark. Transparency about what each layer verifies
                  increased renter confidence in testing more than the
                  verification itself did. People trust what they understand.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Reflection ─────────────────────────────────────────────── */}
        <section id="reflection" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Reflection</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <h3 className="cs-wid-heading">What I learned</h3>

              <p className="cs-wid-body">
                <strong>Designing for two user types simultaneously teaches you
                that personas are constraints, not portraits.</strong> Every
                feature decision had to hold for both sides. A cancellation
                policy that&rsquo;s generous for renters creates anxiety for
                homeowners. A verification step that builds trust for renters
                feels invasive to homeowners if it&rsquo;s not framed carefully.
                The tension between the two sides was the actual design problem
                - not the individual screens.
              </p>

              <p className="cs-wid-body">
                <strong>Building the design system before the screens fundamentally
                changed the quality of the work.</strong> Working from components
                produces designs that cohere. Working free-form produces screens
                that look fine individually but don&rsquo;t read as a
                product. This was the most transferable lesson from the project.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">What I&rsquo;d change</h3>

              <p className="cs-wid-body">
                <strong>The in-app messaging feature was designed but not
                prototyped.</strong> That was a mistake. In testing, the
                highest-anxiety moment for both sides was the physical
                handoff - the renter arriving, the owner not sure what car to
                expect. A simple message thread with vehicle photo confirmation
                would have addressed this directly. I ran out of time to build
                it properly and shipped the conceptual spec without the
                interaction design. I&rsquo;d go back and do that first.
              </p>

              <p className="cs-wid-body">
                <strong>I&rsquo;d test with actual strangers earlier.</strong>
                Our usability participants were recruited from the university
                community - people who know each other, share campus, and have
                an implicit baseline of trust. The trust barriers for true
                strangers in a dense city are higher. I suspect the verification
                flow would have looked different if we&rsquo;d tested with
                participants who had no social overlap.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">
                How this informed my professional work
              </h3>

              <p className="cs-wid-body">
                UrbanPark was the first time I built a design system from the
                ground up. At ZingHR, I applied the same methodology at
                enterprise scale - systematic tokens, exhaustive state
                documentation, and edge case coverage for a platform handling
                500,000+ HR transactions daily. That system is under NDA, but
                the thinking is the same. Consumer and enterprise design systems
                differ in scope, not philosophy: both require you to think in
                states, not screens.
              </p>

              <p className="cs-wid-body">
                The two-sided marketplace research also shaped how I approach
                stakeholder alignment. Enterprise HR tools are two-sided
                products: HR admins configure them, employees use them. The same
                tension exists. The Rewards & Recognition project at ZingHR
                required the same discipline - designing for the person filling
                in the catalog and the person browsing it simultaneously, with
                genuinely different needs and opposite anxieties.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
