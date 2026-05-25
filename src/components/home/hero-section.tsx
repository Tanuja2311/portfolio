"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const CARDS = [
  {
    id: "myrcloud",
    name: "MyRCloud",
    tag: "Enterprise",
    desc: "Recruitment marketplace",
    href: "/work/myrcloud",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 55%, #0f3460 100%)",
    pos: { top: 0, left: 0 },
    rotate: -4,
    zIndex: 3,
    delay: 0.30,
  },
  {
    id: "rr",
    name: "Rewards & Recognition",
    tag: "B2B SaaS",
    desc: "HR award management",
    href: "/work/rewards-and-recognition",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #2d1b69 55%, #11998e 100%)",
    pos: { top: 50, right: -10 },
    rotate: 2.5,
    zIndex: 4,
    delay: 0.45,
  },
  {
    id: "ed",
    name: "Employee Dossier",
    tag: "Redesign",
    desc: "Employee record page",
    href: "/work/employee-dossier",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1e3a5f 55%, #2a5298 100%)",
    pos: { bottom: 0, left: 20 },
    rotate: 1,
    zIndex: 2,
    delay: 0.60,
  },
] as const;

const STATS = [
  { value: "3.5+",  label: "Years enterprise" },
  { value: "6",     label: "Shipped products"  },
  { value: "166K+", label: "Users impacted"    },
  { value: "B2B",   label: "Focus area"        },
];

const CONTACTS = [
  { Icon: Mail,          label: "Email",    href: "mailto:tanuja375@gmail.com",                 external: false },
  { Icon: LinkedInIcon,  label: "LinkedIn", href: "https://www.linkedin.com/in/tanujabodas23/", external: true  },
  { Icon: FileText,      label: "Resume",   href: "/resume.pdf",                                external: true  },
];

// Per-element fade-and-slide-up for the left column
const leftItem = (i: number) => ({
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    delay: i * 0.1,
  },
});

export function HeroSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <section className="hero-v2" aria-label="Introduction">
      {/* Decorative glow */}
      <div className="hero-v2-glow" aria-hidden />

      <div className="hero-v2-inner">
        {/* ── Main two-column area ───────────────────────── */}
        <div className="hero-v2-main">

          {/* Left column */}
          <div className="hero-v2-left">

            {/* Available badge */}
            <motion.div
              {...(reduced ? {} : leftItem(0))}
            >
              <div className="hero-v2-badge" aria-label="Availability status">
                <span className="hero-v2-badge-dot" aria-hidden />
                Available for work
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="hero-v2-name"
              {...(reduced ? {} : leftItem(1))}
            >
              Tanuja Bodas
            </motion.h1>

            {/* Title */}
            <motion.p
              className="hero-v2-title"
              {...(reduced ? {} : leftItem(2))}
            >
              Senior Product Designer
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="hero-v2-tagline"
              {...(reduced ? {} : leftItem(3))}
            >
              I turn complex enterprise problems into intuitive workflows
              that people actually want to use.
            </motion.p>

            {/* Contact links */}
            <motion.div
              className="hero-v2-links"
              {...(reduced ? {} : leftItem(4))}
            >
              {CONTACTS.map(({ Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  className="hero-v2-link"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${label} (opens in new tab)` }
                    : {}
                  )}
                >
                  <Icon size={16} aria-hidden />
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column: floating cards (decorative, duplicates work section links) */}
          <div className="hero-v2-right" aria-hidden="true">
            {CARDS.map((card, i) => (
              <div
                key={card.id}
                style={{
                  position: "absolute",
                  ...(card.pos as Record<string, number>),
                  zIndex: hoveredIdx === i ? 10 : card.zIndex,
                  opacity: hoveredIdx !== null && hoveredIdx !== i ? 0.5 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <motion.a
                  href={card.href}
                  className="hero-v2-card"
                  tabIndex={-1}
                  initial={reduced ? false : { opacity: 0, y: 40, rotate: 0 }}
                  animate={reduced ? {} : { opacity: 1, y: 0, rotate: card.rotate }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: card.delay }}
                  whileHover={reduced ? {} : {
                    y: -8,
                    rotate: 0,
                    scale: 1.03,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  }}
                  onHoverStart={() => setHoveredIdx(i)}
                  onHoverEnd={() => setHoveredIdx(null)}
                >
                  {/* Card image area */}
                  <div style={{ position: "relative", height: 120, background: card.gradient }}>
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
                    <span className="hero-v2-card-tag">{card.tag}</span>
                  </div>
                  {/* Card info */}
                  <div className="hero-v2-card-body">
                    <p className="hero-v2-card-name">{card.name}</p>
                    <p className="hero-v2-card-desc">{card.desc}</p>
                  </div>
                </motion.a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats strip ───────────────────────────────── */}
        <dl className="hero-v2-stats">
          {STATS.map(({ value, label }) => (
            <div key={label} className="hero-v2-stat">
              <dt className="hero-v2-stat-label">{label}</dt>
              <dd className="hero-v2-stat-value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
