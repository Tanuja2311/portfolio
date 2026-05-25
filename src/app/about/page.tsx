import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/case-study/reveal";
import { CaseImage } from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

export const metadata: Metadata = {
  title:       "About",
  description: "About Tanuja Bodas. Senior product designer with 3.5 years at ZingHR, specializing in enterprise B2B design and design systems. Based in Philadelphia.",
  alternates:  { canonical: "/about" },
  openGraph: {
    type:        "website",
    url:         "/about",
    description: "About Tanuja Bodas. Senior product designer with 3.5 years at ZingHR, specializing in enterprise B2B design and design systems. Based in Philadelphia.",
  },
  twitter: {
    description: "About Tanuja Bodas. Senior product designer with 3.5 years at ZingHR, specializing in enterprise B2B design and design systems. Based in Philadelphia.",
  },
};

const EXPERIENCE = [
  {
    company: "Triibe",
    role: "Product Designer",
    duration: "Mar 2025 – Present",
    description:
      "Mentoring designers, managing client stakeholders, and leading design for the annual Wren Gala project for American Friends of St James.",
    href: "/built-with-ai/wren-gala",
  },
  {
    company: "ZingHR",
    role: "UX Designer",
    duration: "Jan 2020 – Aug 2023",
    description:
      "Sole designer on the Rewards & Recognition module and Employee Dossier, serving 200+ enterprise clients. Built the component library and design system for the HR platform.",
    href: "/work/rewards-and-recognition",
  },
];

const PERSONAL_PHOTOS = [1, 2, 3, 4, 5] as const;

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ── Intro ───────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="about-intro">
        <StaggerItem>
          <div className="about-photo-wrap">
            <CaseImage
              src="/images/about/portrait.jpeg"
              alt="Photo of Tanuja Bodas"
              description="Professional portrait of Tanuja Bodas"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="about-bio">
            <h1 className="about-name">Tanuja Bodas</h1>
            <p className="about-bio-text">
              I&apos;m a product designer who&apos;s spent the last few years
              making enterprise software feel less like enterprise software. At
              ZingHR, I found an admin running a 500-person recognition system
              out of a phone calendar and a diary. I turned that into a
              structured platform that scaled across regions, roles, and award
              types. That&apos;s the kind of problem I gravitate toward: messy
              operational reality that needs a system, not just a screen.
            </p>
            <p className="about-bio-text">
              I work at the intersection of research, systems thinking, and
              craft. I&apos;ve designed enterprise HR modules used by 200+
              companies, built consumer mobile apps from scratch, and shipped
              websites entirely with AI tooling. I hold an MS in User Experience
              and Interaction Design from Thomas Jefferson University.
            </p>
            <div className="about-contact-inline">
              <a
                href="mailto:tanuja375@gmail.com"
                className="about-contact-link"
              >
                tanuja375@gmail.com
              </a>
              <span className="about-contact-sep" aria-hidden>·</span>
              <a
                href="https://www.linkedin.com/in/tanujabodas23/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-contact-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>

      {/* ── Experience ──────────────────────────────────────────────── */}
      <section className="about-section">
        <Reveal>
          <h2 className="about-section-title">Experience</h2>
        </Reveal>

        <div className="about-timeline">
          {EXPERIENCE.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 80}>
              <div className="about-timeline-entry">
                <div className="about-timeline-dot" aria-hidden />
                <div className="about-timeline-content">
                  <div className="about-timeline-header">
                    <div className="about-timeline-left">
                      <Link
                        href={entry.href}
                        className="about-timeline-company"
                      >
                        {entry.company}
                        <span className="about-timeline-arrow" aria-hidden>
                          ↗
                        </span>
                      </Link>
                      <span className="about-timeline-role">{entry.role}</span>
                    </div>
                    <span className="about-timeline-duration">
                      {entry.duration}
                    </span>
                  </div>
                  <p className="about-timeline-desc">{entry.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Personal ────────────────────────────────────────────────── */}
      <section className="about-section about-personal">
        <Reveal>
          <h2 className="about-personal-title">Beyond work</h2>
        </Reveal>
        <Reveal delay={40}>
          <p className="about-personal-blurb">
            When I&apos;m not designing, I&apos;m probably planning my next
            trip, watching an F1 race with way too much emotional investment,
            or hiking somewhere with a good view and bad cell service.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="about-personal-grid">
            {PERSONAL_PHOTOS.map((n) => (
              <div key={n} className="about-personal-photo-wrap">
                <CaseImage
                  src={`/images/about/personal-${n}.jpg`}
                  alt={`Personal photo ${n}`}
                  description="Photo coming soon"
                  fill
                  noCurtain
                  sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section className="about-section about-contact">
        <Reveal>
          <h2 className="about-section-title">Get in touch</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="about-contact-blurb">
            Whether it&apos;s a role, a project, or just a good design
            conversation - my inbox is open.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="about-contact-actions">
            <a
              href="mailto:tanuja375@gmail.com"
              className="about-cta about-cta--primary"
            >
              Send an email
            </a>
            <a
              href="https://www.linkedin.com/in/tanujabodas23/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta about-cta--secondary"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="about-cta about-cta--secondary"
            >
              Download resume
            </a>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
