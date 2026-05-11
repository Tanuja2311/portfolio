import type { Metadata } from "next";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CaseImage }      from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";
import { AnimatedNumber } from "@/components/animated-number";

const SECTIONS = [
  { id: "challenge",  label: "Challenge"  },
  { id: "process",    label: "Process"    },
  { id: "validation", label: "Validation" },
  { id: "reflection", label: "Reflection" },
];

export const metadata: Metadata = {
  title: "CoreCrush",
  description:
    "Validating a fitness app for gym beginners through lean experiments, not assumptions.",
};

const IMG = (name: string) => `/images/corecrush/${name}`;

export default function CoreCrushPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="cs-hero">
        <StaggerItem className="cs-hero-media" style={{ background: "#0a1510" }}>
          <CaseImage
            src={IMG("hero.jpg")}
            alt="CoreCrush fitness app"
            description="CoreCrush - fitness app for gym beginners"
            fill
            priority
            noCurtain
            sizes="100vw"
            className="cs-hero-img"
          />
          <div className="cs-hero-overlay" aria-hidden />
          <div className="cs-hero-text">
            <h1 className="cs-hero-title">CoreCrush</h1>
            <p className="cs-hero-subtitle">
              Validating a fitness app for gym beginners through lean
              experiments, not assumptions.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className="cs-meta-bar">
          <div className="cs-meta-inner">
            {[
              ["Role",     "Product Designer"],
              ["Duration", "8 weeks"],
              ["Context",  "MS Coursework (Solo)"],
              ["Tags",     "Product Thinking · HealthTech · Mobile"],
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

            <p className="cs-section-body">
              Most fitness apps are built for people who already know what
              they&rsquo;re doing. They assume users can distinguish a Romanian
              deadlift from a conventional one, know how to structure a
              push-pull-legs split, and have the confidence to walk into a
              weight room without hesitation.
            </p>

            <p className="cs-section-body">
              Beginners have none of that. They face a different problem
              entirely: not knowing where to start, feeling judged by more
              experienced gym-goers, and losing motivation when early progress
              is invisible. The dropout rate for new gym members is
              well-documented, and the products meant to help them rarely
              address the psychological barriers that drive it.
            </p>

            <p className="cs-section-body">
              CoreCrush started with a question: could a mobile app reduce the
              anxiety and inconsistency that cause beginners to quit within the
              first 60 days?
            </p>

            <p className="cs-section-body">
              The project was scoped as an 8-week solo sprint. The goal was not
              to build a polished product. It was to validate whether the core
              value proposition had demand before investing in design execution.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("competitive-landscape.jpg")}
                alt="Competitive landscape overview"
                description="Competitive landscape - fitness app market overview"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ── Process ────────────────────────────────────────────────── */}
        <section id="process" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Process</h2>
          </ScrollReveal>

          {/* 01 - Competitive Analysis */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01 - Competitive Analysis</span>
              <h3 className="cs-subsection-heading">
                Five apps analyzed. None designed for true beginners.
              </h3>
              <p className="cs-subsection-body">
                I analyzed five existing fitness apps to understand how the
                market was and wasn&rsquo;t serving beginners.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The pattern was consistent. Most apps optimized for breadth of
                content: hundreds of exercises, customizable splits, social
                features. That depth serves intermediate and advanced users
                well. For beginners, it creates the same overwhelm they already
                feel walking into a gym. The onboarding flows assumed baseline
                knowledge. None of the five addressed gym anxiety directly.
                None offered structured plans simple enough that a complete
                beginner could follow them on day one without googling
                terminology.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The gap was clear: beginners needed less choice, not more.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("competitive-matrix.jpg")}
                  alt="Competitive analysis matrix"
                  description="Competitive analysis matrix - five fitness apps evaluated"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* 02 - User Research */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02 - User Research</span>
              <h3 className="cs-subsection-heading">
                8 interviews. Three patterns that shaped every decision after.
              </h3>
              <p className="cs-subsection-body">
                I interviewed 8 gym beginners (0&ndash;6 months of experience)
                to understand their relationship with fitness, their attempts to
                build consistency, and where those attempts broke down.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Three patterns repeated across nearly every conversation.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                First, the knowledge gap was paralyzing. Participants described
                arriving at the gym without a plan and spending more time
                watching others than working out. Two participants admitted to
                leaving within 15 minutes on multiple occasions because they
                didn&rsquo;t know what to do next.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Second, social anxiety was a real barrier, not a minor
                discomfort. Participants used language like &ldquo;being
                watched,&rdquo; &ldquo;doing it wrong in front of
                people,&rdquo; and &ldquo;looking stupid.&rdquo; This
                wasn&rsquo;t vanity. It was a genuine obstacle to showing up
                at all.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Third, motivation decay was predictable. Every participant
                described a pattern: high enthusiasm in week one, declining
                attendance by week three, full dropout by week six. The absence
                of visible progress was the most-cited reason.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("research-synthesis.jpg")}
                  alt="Research synthesis and personas"
                  description="User research synthesis - patterns and personas from 8 interviews"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* 03 - Hypothesis Formation and Business Strategy */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03 - Hypothesis Formation and Business Strategy</span>
              <h3 className="cs-subsection-heading">
                Two hypotheses. Two experiments. One budget of zero.
              </h3>
              <p className="cs-subsection-body">
                Before testing anything, I built a business model canvas to
                pressure-test whether CoreCrush could be viable beyond the
                research. The model identified a freemium structure (free
                structured plans, paid personalization and progress analytics)
                and mapped the cost structure, revenue streams, and key
                partnerships required. I also defined OKRs to give the
                validation phase measurable targets.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                From the research, two hypotheses emerged.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Hypothesis 1: A structured workout plan will reduce anxiety and
                improve consistency for gym beginners. If true, at least 10% of
                people who see a landing page describing this value proposition
                will provide their email address.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Hypothesis 2: Gamification elements (progress tracking, badges,
                streaks) will boost retention. If true, at least 40% of users
                will engage with the app 5 times per week.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Each hypothesis was paired with a lean experiment designed to
                test it cheaply and quickly, before writing a single line of
                product code.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("business-model-canvas.jpg")}
                  alt="Business Model Canvas"
                  description="Business Model Canvas - CoreCrush viability mapping"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("okrs.jpg")}
                  alt="OKRs table"
                  description="OKRs table - validation phase measurable targets"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Validation ─────────────────────────────────────────────── */}
        <section id="validation" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Validation</h2>
          </ScrollReveal>

          {/* 04 - Fake Front Door Test */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">04 - Experiment 1: Fake Front Door Test</span>
              <h3 className="cs-subsection-heading">
                A landing page with no product behind it. 18.75% signed up
                anyway.
              </h3>
              <p className="cs-subsection-body">
                To test Hypothesis 1, I built a landing page describing
                CoreCrush&rsquo;s value proposition: structured workout plans
                for beginners, designed to reduce gym anxiety. The page had one
                call to action: enter your email to get early access.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                No product existed behind the page. That was the point. If
                people would give their email for a product that didn&rsquo;t
                exist yet, the value proposition had real pull.
              </p>
              <div className="cs-metrics">
                <div className="cs-metric">
                  <span className="cs-metric-value"><AnimatedNumber value={96} /></span>
                  <span className="cs-metric-label">Page views</span>
                  <span className="cs-metric-context">Total traffic to the landing page</span>
                </div>
                <div className="cs-metric">
                  <span className="cs-metric-value"><AnimatedNumber value={18} /></span>
                  <span className="cs-metric-label">Email signups</span>
                  <span className="cs-metric-context">Unique early access requests</span>
                </div>
                <div className="cs-metric">
                  <span className="cs-metric-value"><AnimatedNumber value={18.75} suffix="%" decimals={2} /></span>
                  <span className="cs-metric-label">Conversion rate</span>
                  <span className="cs-metric-context">Nearly double the 10% target</span>
                </div>
              </div>
              <p className="cs-subsection-body" style={{ marginTop: "1.5rem" }}>
                The target was 10%. The actual conversion rate nearly doubled
                it. For a landing page with no brand recognition, no paid
                promotion, and no social proof, 18.75% was a strong signal that
                the core problem resonated.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                This validated Hypothesis 1.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("landing-page.jpg")}
                  alt="CoreCrush landing page screenshot"
                  description="Fake front door landing page - CoreCrush early access page"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("analytics.jpg")}
                  alt="Analytics results"
                  description="Landing page analytics - 96 views, 18 signups, 18.75% conversion"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* 05 - Mechanical Turk Test */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">05 - Experiment 2: Mechanical Turk Test</span>
              <h3 className="cs-subsection-heading">
                The hypothesis was disproven. That was the point.
              </h3>
              <p className="cs-subsection-body">
                To test Hypothesis 2, I ran a Mechanical Turk experiment.
                Participants were asked to engage with gamification elements
                over a short trial period. The success threshold was 40% of
                participants engaging at least 5 times per week.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Result: 20% engagement. Half the target. The hypothesis was
                disproven.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                This is the most important finding in the project. Participants
                found the photo-sharing requirement tedious rather than
                motivating. The gamification elements that were supposed to
                drive retention actually created friction. Users wanted simple
                structure and clear guidance. They did not want to perform their
                progress for an audience.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The instinct would be to bury this result or spin it as a
                partial success. The experiment did exactly what it was supposed
                to do: it prevented me from building features that users
                didn&rsquo;t want. That&rsquo;s the entire value of lean
                validation.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("mechanical-turk.jpg")}
                  alt="Mechanical Turk experiment"
                  description="Mechanical Turk test setup and results - 20% engagement vs 40% target"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* 06 - Prioritization and Wireframes */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">06 - Prioritization and Wireframes</span>
              <h3 className="cs-subsection-heading">
                Scope shaped by evidence, not assumptions.
              </h3>
              <p className="cs-subsection-body">
                With one hypothesis validated and one disproven, I used MoSCoW
                prioritization to scope what a first version of CoreCrush would
                include.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Must-have features centered on the validated value proposition:
                structured beginner workout plans, clear daily guidance, and
                simple progress tracking. Gamification features moved to
                &ldquo;Could have&rdquo; or &ldquo;Won&rsquo;t have&rdquo; for
                V1, pending redesigned experiments.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The wireframes reflect this prioritization. They show a focused
                onboarding flow, a daily workout view with step-by-step exercise
                instructions, and a minimal progress dashboard. No badges. No
                social features. No photo sharing.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("moscow-matrix.jpg")}
                  alt="MoSCoW prioritization matrix"
                  description="MoSCoW matrix - V1 feature prioritization based on validation results"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("wireframes.jpg")}
                  alt="CoreCrush wireframe screens"
                  description="Wireframes - onboarding flow, daily workout view, progress dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
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
                Validation is more valuable than execution when the question is
                &ldquo;should this exist?&rdquo; The fake front door test cost
                almost nothing to run and produced a clear answer. The
                Mechanical Turk test prevented a feature investment that would
                have underperformed. Together, they replaced weeks of
                speculative design with evidence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">What I&rsquo;d do differently</h3>

              <p className="cs-wid-body">
                The Mechanical Turk experiment was too aggressive in what it
                asked participants to do. Daily photo-sharing is a high-friction
                behavior to test on people who are already anxious about being
                at the gym. A better experiment would have isolated the variable
                more carefully: test streak tracking alone, then add social
                elements incrementally. The experiment design conflated
                &ldquo;gamification&rdquo; with &ldquo;social performance,&rdquo;
                and the failure may reflect the mechanic, not the category.
              </p>

              <p className="cs-wid-body">
                I would also expand the sample size for the fake front door
                test. 96 page views is enough to indicate interest, but not
                enough to draw conclusions about conversion by segment. A larger
                sample with UTM-tagged traffic sources would have made the
                signal more actionable.
              </p>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </>
  );
}
