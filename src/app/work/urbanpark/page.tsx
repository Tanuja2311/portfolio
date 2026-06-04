import type { Metadata } from "next";
import { CaseStudyHero }    from "@/components/case-study/hero";
import { CaseStudySummary } from "@/components/case-study/summary";
import { CsScrollLinks }    from "@/components/case-study/scroll-links";
import { ScrollReveal }     from "@/components/scroll-reveal";
import { CaseImage }        from "@/components/case-study/case-image";
import { TestingCollapsible }      from "@/components/case-study/testing-collapsible";
import { DesignSystemCarousel }    from "@/components/case-study/design-system-carousel";

export const metadata: Metadata = {
  title:       "UrbanPark",
  description: "UrbanPark case study by Tanuja Bodas. A C2C platform where homeowners rent driveways to drivers, including a dedicated design system.",
  alternates:  { canonical: "/work/urbanpark" },
  openGraph: {
    type:        "article",
    url:         "/work/urbanpark",
    description: "UrbanPark case study by Tanuja Bodas. A C2C platform where homeowners rent driveways to drivers, including a dedicated design system.",
  },
  twitter: {
    description: "UrbanPark case study by Tanuja Bodas. A C2C platform where homeowners rent driveways to drivers, including a dedicated design system.",
  },
};

const IMG = (name: string) => `/images/urbanpark/${name}`;

const SECTIONS = [
  { id: "background",    label: "Background"    },
  { id: "research",      label: "Research"      },
  { id: "problem",       label: "Problem"       },
  { id: "design-system", label: "Design System" },
  { id: "solution",      label: "Solution"      },
  { id: "reflection",    label: "Reflection"    },
];

export default function UrbanParkCaseStudy() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <CaseStudyHero study={{
        hero:         IMG("hero.jpg"),
        coverColor:   "#0d1a0f",
        containHero:  true,
        tags:         ["0 to 1 Product", "C2C Product"],
        title:        "UrbanPark.",
        subtitle:     "Most driveway rental platforms optimize for bookings. UrbanPark was designed around what homeowners actually fear.",
        meta: {
          role: "Product Designer",
          items: [
            { label: "Role",    value: "Product Designer" },
            { label: "Context", value: "Academic Project · MS Thesis" },
            { label: "Scope",   value: "End-to-end design + design system" },
          ],
        },
      }} />

      {/* ── Summary cards + scroll CTA ──────────────────────────────── */}
      <CaseStudySummary summary={{
        problem:  "Homeowners renting driveways had no reliable way to verify renters or vehicles, leaving them exposed to fraud, overstays, and high-risk situations with no platform support.",
        role:     "Sole product designer: end-to-end research, pivot from wrong users to right users, information architecture, UI design, pretotyping experiments, and usability testing.",
        timeline: "34 weeks as an MS thesis project, from initial observation through validated prototype.",
        outcome:  "A 0 to 1 C2C platform combining a mobile app with camera-based verification, validated through pretotyping and usability testing with experienced homeowners.",
      }} />

      {/* ── Pill bar navigation ─────────────────────────────────────── */}
      <CsScrollLinks sections={SECTIONS} />

      <div className="cs-body">

        {/* ── Background ──────────────────────────────────────────────── */}
        <section id="background" className="cs-section" aria-labelledby="background-heading">
          <ScrollReveal>
            <h2 id="background-heading" className="cs-section-heading">Background</h2>

            <blockquote className="cs-hook">
              A parking problem I could not ignore
            </blockquote>

            <p className="cs-section-body">
              Drivers circle neighborhoods looking for parking while residential
              driveways sit empty a few feet away. The mismatch was obvious.
              What was not obvious was why no platform had actually solved it.
              That question is what started this project.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Research ───────────────────────────────────────────────── */}
        <section id="research" className="cs-section" aria-labelledby="research-heading">
          <ScrollReveal>
            <h2 id="research-heading" className="cs-section-heading">Research</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01 - Initial interviews</span>
              <h3 className="cs-subsection-heading">
                I started with the wrong users
              </h3>
              <p className="cs-subsection-body">
                I began by talking to both renters and homeowners to understand
                the parking problem from both sides. Renters confirmed the
                frustration of circling neighborhoods and worrying about theft.
                But the homeowners I spoke to had never actually rented their
                space. Their feedback was hypothetical, based on assumptions,
                not lived experience. I realized I was talking to the wrong
                group entirely. This was my first major pivot.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02 - Targeted recruitment</span>
              <h3 className="cs-subsection-heading">
                Finding the right homeowners took real effort
              </h3>
              <p className="cs-subsection-body">
                I shifted focus to homeowners who had actually rented out their
                driveways or garages. I contacted roughly 150 homeowners across
                Neighbor, CurbFlip, Facebook groups, and Reddit. 20 responded.
                8 met my criteria and agreed to in depth interviews. These 8
                became the foundation of the entire project. From their stories
                I built interview debriefs, ran affinity mapping, mapped the
                homeowner journey end to end, and used 5 Whys to trace each
                major pain point back to its root cause.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-metrics cs-metrics--3col" style={{ marginTop: "2.5rem" }}>
              <div className="cs-metric">
                <p className="cs-metric-label">No renter verification</p>
                <p className="cs-metric-context">
                  Homeowners had no reliable way to confirm who was parking on
                  their property or what vehicle was being left.
                </p>
              </div>
              <div className="cs-metric">
                <p className="cs-metric-label">Unreliable notifications</p>
                <p className="cs-metric-context">
                  Missed alerts meant missed bookings, overstays, and situations
                  homeowners only discovered after damage was done.
                </p>
              </div>
              <div className="cs-metric">
                <p className="cs-metric-label">No platform support</p>
                <p className="cs-metric-context">
                  When things went wrong, homeowners were left to handle fraud,
                  disputes, and law enforcement on their own.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Problem ────────────────────────────────────────────────── */}
        <section id="problem" className="cs-section" aria-labelledby="problem-heading">
          <ScrollReveal>
            <h2 id="problem-heading" className="cs-section-heading">Problem</h2>

            <h3 className="cs-subsection-heading" style={{ marginBottom: "1.25rem" }}>
              The real problem was not parking
            </h3>

            <p className="cs-section-body">
              Existing platforms treat driveway rentals as a listings problem.
              But homeowners are not afraid of empty driveways. They are afraid
              of who shows up to fill them. When things go wrong, they absorb
              the emotional, legal, and logistical burden alone.
            </p>

            <blockquote className="cs-hook">
              How might we reduce high risk situations for homeowners by
              verifying renters and vehicles before they arrive and confirming
              them when they do?
            </blockquote>
          </ScrollReveal>
        </section>

        {/* ── Design System ──────────────────────────────────────────── */}
        <section id="design-system" className="cs-section" aria-labelledby="design-system-heading">
          <ScrollReveal>
            <h2 id="design-system-heading" className="cs-section-heading">Design System</h2>
            <p className="cs-section-body">
              Before designing a single screen, I built the token foundation.
              Most student projects skip this entirely.
            </p>
            <p className="cs-section-body" style={{ marginTop: "1rem" }}>
              The system uses a two-tier architecture: 95 color primitive tokens
              across nine ramps, each on a consistent 10 to 100 scale, and 29
              semantic tokens that alias directly to those primitives. Changing
              one primitive value propagates across the entire system
              automatically.
            </p>
            <p className="cs-section-body" style={{ marginTop: "1rem" }}>
              I learned this methodology independently after ZingHR, where
              Figma&rsquo;s variable system did not yet exist at this level.
              UrbanPark is where I applied it properly for the first time.
            </p>
          </ScrollReveal>

          {/* Design system carousel */}
          <DesignSystemCarousel />

          <ScrollReveal>
            <div className="cs-nda-note">
              <span className="cs-nda-note-label">Context</span>
              <p>
                A more comprehensive enterprise design system was built at ZingHR
                for a B2B platform serving 500,000 daily users, but that work is
                under NDA. UrbanPark demonstrates the same foundational
                methodology applied to a product I can show.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Solution ───────────────────────────────────────────────── */}
        <section id="solution" className="cs-section" aria-labelledby="solution-heading">
          <ScrollReveal>
            <h2 id="solution-heading" className="cs-section-heading">Solution</h2>

            <div style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}>
              <h3
                className="cs-subsection-heading"
                style={{ marginBottom: "0.75rem" }}
              >
                Designing for the person with more to lose
              </h3>
              <p className="cs-section-body">
                Both homeowners and renters use UrbanPark, but the product is
                designed homeowner first. Homeowners carry more risk. A bad
                booking affects their property, safety, and peace of mind. A bad
                parking spot is an inconvenience for a renter. That asymmetry
                shaped every decision.
              </p>
            </div>

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
                  src={IMG("bookings-flow.jpg")}
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
              <div style={{ display: "flex", gap: "24px", margin: "1.5rem auto", maxWidth: "900px" }}>
                {[
                  { src: "/images/urbanpark/verification-flow.gif", label: "Camera Setup"      },
                  { src: "/images/urbanpark/notification-screen.jpg", label: "Verified on Arrival" },
                ].map(({ src, label }) => (
                  <div
                    key={src}
                    style={{
                      flex: 1,
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.75rem",
                      overflow: "hidden",
                      padding: "1rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.09em",
                        color: "var(--text-muted)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {label}
                    </p>
                    <img
                      src={src}
                      alt={label}
                      style={{ maxHeight: "500px", width: "auto", display: "block", borderRadius: "0.5rem", margin: "0 auto" }}
                    />
                  </div>
                ))}
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

        {/* ── Testing (collapsible) ───────────────────────────────────── */}
        <div className="cs-section">
          <TestingCollapsible />
        </div>

        {/* ── Reflection ─────────────────────────────────────────────── */}
        <section id="reflection" className="cs-section" aria-labelledby="reflection-heading">
          <ScrollReveal>
            <h2 id="reflection-heading" className="cs-section-heading">Reflection</h2>
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
                tension exists. The Rewards &amp; Recognition project at ZingHR
                required the same discipline - designing for the person filling
                in the catalog and the person browsing it simultaneously, with
                genuinely different needs and opposite anxieties.
              </p>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
}
