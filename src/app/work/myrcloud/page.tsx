import type { Metadata } from "next";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { ScrollReveal }  from "@/components/scroll-reveal";
import { CaseImage }     from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

const SECTIONS = [
  { id: "challenge", label: "Challenge" },
  { id: "process",   label: "Process"   },
  { id: "solution",  label: "Solution"  },
  { id: "impact",    label: "Impact"    },
];

export const metadata: Metadata = {
  title: "MyRCloud",
  description:
    "Designing a recruitment marketplace from scratch, replacing a Google Sheets operation with a multi-sided platform serving 100+ clients and 600+ recruiting partners.",
};

const IMG = (name: string) => `/images/myrcloud/${name}`;

export default function MyRCloudCaseStudy() {
  return (
    <div className="myrcloud-study">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="cs-hero">
        <StaggerItem className="cs-hero-media" style={{ background: "#0d1118" }}>
          <CaseImage
            src={IMG("hero.jpg")}
            alt="MyRCloud recruitment marketplace"
            description="MyRCloud - recruitment marketplace dashboard"
            fill
            priority
            noCurtain
            sizes="100vw"
            className="cs-hero-img"
          />
          <div className="cs-hero-overlay" aria-hidden />
          <div className="cs-hero-text">
            <h1 className="cs-hero-title">MyRCloud.</h1>
            <p className="cs-hero-subtitle">
              Designing a recruitment marketplace from scratch, replacing a
              Google Sheets operation with a multi-sided platform serving 100+
              clients and 600+ recruiting partners.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className="cs-meta-bar">
          <div className="cs-meta-inner">
            {[
              ["Role",     "Solo UX Designer"],
              ["Duration", "8 months"],
              ["Company",  "ZingHR (technology partner for MyRCloud)"],
              ["Status",   "Shipped. Live at myrcloud.com"],
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

            <blockquote className="cs-hook">
              When I joined the project, their entire operation ran on Google
              Sheets. Account managers tracked requisitions in spreadsheets.
              Partner assignments were managed through email. Candidate progress
              through interview stages existed in someone&rsquo;s head or in a
              shared document that was always out of date.
            </blockquote>

            <p className="cs-section-body">
              MyRCloud (Reccloud Technologies Private Limited) is a recruitment
              agency that connects corporate clients with recruiting partners to
              fill open positions. They partnered with EMA Partners and ZingHR
              to build a digital platform for their operations.
            </p>

            <p className="cs-section-body">
              The core challenge was not just putting spreadsheets into a web
              app. It was understanding how an entire recruitment operation works
              across multiple people with different roles, permissions, and
              goals, and then translating that into a coherent digital system.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("challenge-before-after.jpg")}
                alt="Before/after: Google Sheets workflow vs MyRCloud dashboard"
                description="Before/after - Google Sheets operation vs MyRCloud platform"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="cs-section-body">
              The platform needed to serve six distinct user types
              simultaneously: Corporate Clients who create requisitions and hire
              candidates. Recruiting Partners (independent recruiters or
              agencies) who source and submit candidates. Candidates whose
              profiles and interview progress are tracked through the system.
              Client Success Managers (CSMs) who manage client relationships and
              oversee candidate movement. Partner Success Managers (PSMs) who
              onboard, verify, and manage recruiting partners. And a Quality
              Check (QC) Team who screen candidates before they reach clients.
            </p>

            <p className="cs-section-body">
              Each persona needed a different dashboard, different navigation,
              and different available actions, but their workflows were deeply
              interconnected. A requisition created by a CSM gets published to
              Partners, who submit candidates that are screened by QC, reviewed
              by the Client, and tracked by the CSM throughout.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("challenge-persona-ecosystem.jpg")}
                alt="Persona ecosystem diagram showing how all six roles connect"
                description="Persona ecosystem - six roles and how their workflows interconnect"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="cs-section-body">
              The business had never been digitized before. The people running
              it understood their workflows intuitively but had never had to
              articulate them as structured processes. Translating this tribal
              knowledge into explicit system logic was the central design
              challenge.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Process ────────────────────────────────────────────────── */}
        <section id="process" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Process</h2>
          </ScrollReveal>

          {/* Research Through Workshops */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01 - Research</span>
              <h3 className="cs-subsection-heading">
                Research Through Workshops
              </h3>
              <p className="cs-subsection-body">
                I did not have the luxury of a traditional research phase with
                user interviews and surveys. The research happened through
                intensive workshops at the MyRCloud office, where the operations
                team showed me how everything was managed with Google Sheets. We
                mapped flows on whiteboards in the conference room, tracing how
                each persona&rsquo;s actions triggered work for another persona.
                These sessions produced the foundational flow diagrams and
                sitemaps that guided the entire design process.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                When the project manager&rsquo;s briefs were not enough to
                understand the business logic, I got on calls directly with the
                COO and CFO. There were sessions that lasted 4 hours, where a
                CXO would explain a flow and I would design screens live on
                screenshare. This eliminated weeks of back-and-forth and ensured
                the designs reflected how the business actually worked, not how
                someone summarized it in a document.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("process-sitemaps.jpg")}
                alt="Persona-wise sitemaps for CSM, PSM, and Partner"
                description="Sitemaps - CSM, PSM, and Partner portal information architecture"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("process-flow-diagram.jpg")}
                alt="End-to-end product flow diagram"
                description="Product flow - how requisitions, partners, candidates, and CSMs connect"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          {/* Uncovering Missing Flows */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02 - Uncovering Missing Flows</span>
              <h3 className="cs-subsection-heading">
                Uncovering Missing Flows
              </h3>
              <p className="cs-subsection-body">
                In the early workshops, stakeholders described the system as if
                partners and clients would simply exist in it. In the real
                world, onboarding happened informally. Someone knew someone, the
                HR team handled paperwork, and people just started working. But
                a digital system cannot work that way.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                I asked: how does a partner actually get into the system? That
                single question generated multiple flows that had not been
                scoped. The recruiter self sign-up process. The PSM verification
                workflow with pending, verified, and rejected states. The admin
                employee management system. The CSM client creation flow with
                its six-step process covering primary information, business
                details, SPOC contacts, contract information, documents, and a
                preview.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                This pattern repeated throughout the project. Questions I asked
                during design kept uncovering flows and edge cases that nobody
                had considered because the manual process handled them
                implicitly. The original timeline was three months. The project
                shipped six months later than planned, directly because of this
                uncovered complexity. This was not a failure of planning. It was
                the design process doing its job.
              </p>
            </div>
          </ScrollReveal>

          {/* Defining Business Logic */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03 - Defining Business Logic</span>
              <h3 className="cs-subsection-heading">
                Defining Business Logic
              </h3>
              <p className="cs-subsection-body">
                Designing the dashboards required more than layout decisions.
                Every metric needed a definition that the business had never
                formalized.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                When stakeholders asked for a position priority view, I had to
                surface the fact that priority is a relative term. Is it based
                on seniority of the role? How long the position has been open?
                The client&rsquo;s importance? After extensive brainstorming
                with the MyRCloud team, we settled on a time-based definition:
                if a position has been open longer than a certain threshold, it
                escalates to the highest priority. This was not a design
                decision I made in isolation. It required facilitating a
                conversation where the business had to confront and resolve an
                ambiguity in their own operations.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                When MyRCloud established their brand identity with three
                colors, red, yellow, and green, they asked us to incorporate
                all three throughout the product interface. I pushed back. In
                standard UX conventions, red signals danger and yellow signals
                warnings. Using these as default interface colors would create
                confusion. Beyond the usability issue, the combination looked
                chaotic. I demonstrated the visual problems and convinced
                stakeholders to use green as the primary brand color while
                reserving red and yellow for their conventional semantic
                meanings.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("process-dashboard-priority.jpg")}
                alt="Dashboard priority-wise view and ageing heatmap"
                description="Dashboard - priority view and ageing heatmap with design rationale"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ── Solution ───────────────────────────────────────────────── */}
        <section id="solution" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Solution</h2>
          </ScrollReveal>
        </section>

        {/* ── Impact ─────────────────────────────────────────────────── */}
        <section id="impact" className="cs-section">
          <ScrollReveal>
            <h2 className="cs-section-heading">Impact</h2>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
