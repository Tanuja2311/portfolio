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
