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
