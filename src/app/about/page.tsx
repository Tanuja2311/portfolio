import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/case-study/reveal";
import { CaseImage } from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

export const metadata: Metadata = {
  title: "About - Tanuja Bodas",
  description:
    "Senior Product Designer making enterprise software feel less like enterprise software.",
};

const EXPERIENCE = [
  {
    company: "Triibe",
    role: "Product Designer",
    duration: "Mar 2025 – Present",
    description:
      "Mentoring designers, managing client stakeholders, and leading continuous improvement of the Triibe website. Currently leading design and requirements for the annual Wren Gala project for American Friends of St James.",
    href: null,
  },
  {
    company: "ZingHR",
    role: "UX Designer",
    duration: "Jan 2020 – Aug 2023",
    description:
      "Redesigned the recognition and performance modules used by HR teams across 200+ enterprise clients.",
    href: "/work/rewards-and-recognition",
  },
];

const TOOLS = [
  {
    category: "Design",
    items: [
      { name: "Figma",   icon: "figma"   },
      { name: "Framer",  icon: "framer"  },
      { name: "Miro",    icon: "miro"    },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "VS Code",  icon: "vscode"  },
      { name: "React",    icon: "react"   },
      { name: "Tailwind", icon: "tailwind"},
    ],
  },
  {
    category: "AI",
    items: [
      { name: "Claude",   icon: "claude"  },
      { name: "Lovable",  icon: "lovable" },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Notion",   icon: "notion"  },
      { name: "Linear",   icon: "linear"  },
      { name: "Slack",    icon: "slack"   },
    ],
  },
];

const TOOL_ICONS: Record<string, string> = {
  figma:    "F",
  framer:   "Fr",
  miro:     "Mi",
  vscode:   "</>",
  react:    "Re",
  tailwind: "Tw",
  claude:   "Cl",
  lovable:  "Lv",
  notion:   "No",
  linear:   "Li",
  slack:    "Sk",
};

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ── Intro ───────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="about-intro">
        <StaggerItem>
          <div className="about-photo-wrap">
            <CaseImage
              src="/images/about/portrait.jpg"
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
              making enterprise software feel less like enterprise software. I
              care about the moment a user stops thinking about the tool and
              just does their work - that invisible threshold is where good
              design lives.
            </p>
            <p className="about-bio-text">
              I work best at the intersection of research, systems thinking,
              and craft. I&apos;ve designed end-to-end for HR platforms,
              built consumer mobile apps from scratch, and shipped websites
              entirely with AI tooling. Currently open to remote roles where
              the problems are genuinely hard.
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
                      {entry.href ? (
                        <Link
                          href={entry.href}
                          className="about-timeline-company"
                        >
                          {entry.company}
                          <span className="about-timeline-arrow" aria-hidden>
                            ↗
                          </span>
                        </Link>
                      ) : (
                        <span className="about-timeline-company about-timeline-company--plain">
                          {entry.company}
                        </span>
                      )}
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

      {/* ── Skills & Tools ──────────────────────────────────────────── */}
      <section className="about-section">
        <Reveal>
          <h2 className="about-section-title">Skills &amp; Tools</h2>
        </Reveal>

        <div className="about-tools-grid">
          {TOOLS.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 60}>
              <div className="about-tool-group">
                <span className="about-tool-category">{group.category}</span>
                <div className="about-tool-items">
                  {group.items.map((tool) => (
                    <div key={tool.name} className="about-tool-item">
                      <div className="about-tool-icon" aria-hidden>
                        {TOOL_ICONS[tool.icon] ?? tool.name.slice(0, 2)}
                      </div>
                      <span className="about-tool-name">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
