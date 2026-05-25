import type { Metadata } from "next";
import { CaseStudyHero }      from "@/components/case-study/hero";
import { CaseStudySummary }   from "@/components/case-study/summary";
import { CsScrollLinks }      from "@/components/case-study/scroll-links";
import { ScrollReveal }       from "@/components/scroll-reveal";
import { BeforeStateDiagram } from "@/components/case-study/before-state-diagram";
import { JuryModelDiagram }   from "@/components/case-study/jury-model-diagram";
import { GroupConfigDiagram } from "@/components/case-study/group-config-diagram";
import { PivotFlowDiagram }   from "@/components/case-study/pivot-flow-diagram";

const SECTIONS = [
  { id: "challenge",  label: "Challenge"  },
  { id: "process",    label: "Process"    },
  { id: "solution",   label: "Solution"   },
  { id: "impact",     label: "Impact"     },
  { id: "reflection", label: "Reflection" },
];

export const metadata: Metadata = {
  title:       "Rewards & Recognition",
  description: "Rewards & Recognition case study by Tanuja Bodas. Designing a scalable award management system for enterprise HR teams.",
  alternates:  { canonical: "/work/rewards-and-recognition" },
  openGraph: {
    type:        "article",
    url:         "/work/rewards-and-recognition",
    description: "Rewards & Recognition case study by Tanuja Bodas. Designing a scalable award management system for enterprise HR teams.",
  },
  twitter: {
    description: "Rewards & Recognition case study by Tanuja Bodas. Designing a scalable award management system for enterprise HR teams.",
  },
};

export default function RRCaseStudy() {
  return (
    <main>
      <CaseStudyHero study={{
        hero:       "/images/rewards-recognition/hero.png",
        coverColor: "#1a1410",
        tags:       ["Product Design", "Enterprise B2B"],
        title:      "Rewards & Recognition.",
        subtitle:   "Building a scalable award management system for enterprise HR teams.",
        meta: {
          role:     "UX Designer, Sole Designer",
          duration: "1.5 months",
          company:  "ZingHR",
        },
      }} />
      <CaseStudySummary summary={{
        problem:  "ZingHR's entire recognition system lived in one admin's phone calendar, a physical diary, and 13 years of memory — one resignation away from total collapse.",
        role:     "Sole UX designer: discovery research, user flows for five distinct roles, information architecture, interaction design, and stakeholder alignment across a 1.5-month engagement.",
        timeline: "1.5 months, running alongside a parallel project, from initial brief through handoff.",
        outcome:  "A structured award management module with 6 award types, 5 user roles, a configurable group-based permission model, and an Award Calendar — adopted across ZingHR's enterprise customer base.",
      }} />

      <CsScrollLinks sections={SECTIONS} />

      <div className="cs-body">

        {/* ── Challenge ──────────────────────────────────────────────── */}
        <section id="challenge" className="cs-section" aria-labelledby="challenge-heading">
          <ScrollReveal>
            <h2 id="challenge-heading" className="cs-section-heading">Challenge</h2>

            <blockquote className="cs-hook">
              ZingHR&rsquo;s recognition system was a single point of failure
              locked inside one person&rsquo;s memory.
            </blockquote>

            <p className="cs-section-body">
              When I began researching the admin workflow, I had to navigate
              internal resistance just to identify who the admin was. The
              admin&rsquo;s identity was deliberately obscured within the company
              for security reasons. After escalating through HR and my manager,
              I finally spoke to the person who had been managing ZingHR&rsquo;s
              internal recognition system for 13 years.
            </p>

            <p className="cs-section-body">
              He opened his phone calendar and a diary. That was the system.
              500 employees, 5 regions, 5 award types, all tracked through
              reminders on a personal phone and notes in a physical diary, with
              the rest held in memory built over 13 years.
            </p>

            <p className="cs-section-body">
              He acknowledged it himself: because he had been present when the
              structure was built, he could hold it all in his head. But if he
              left the company and someone had to replace him, a knowledge
              transfer using a phone calendar, a diary, and memory would be
              impossible.
            </p>

            <p className="cs-section-body">
              This surfaced two distinct problems. On the admin side: no
              structured system to track award timelines, nomination windows,
              deadlines, or responsible nominators across regions. The entire
              operation was undocumented tribal knowledge, one resignation away
              from collapse. On the employee side: because awards had no visible
              structure or timeline, recognition felt arbitrary and random. There
              was no clarity on how awards worked, who could nominate, or when
              decisions were made.
            </p>

            <p className="cs-section-body">
              There was also a competitive problem: ZingHR had no formal
              R&amp;R module while Darwinbox, Keka, Zoho, and GreytHR already had
              structured recognition features, creating a feature parity gap in
              sales conversations.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <BeforeStateDiagram />
          </ScrollReveal>
        </section>

        {/* ── Process ────────────────────────────────────────────────── */}
        <section id="process" className="cs-section" aria-labelledby="process-heading">
          <ScrollReveal>
            <h2 id="process-heading" className="cs-section-heading">Process</h2>
          </ScrollReveal>

          {/* 01 — Primary Research */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01 - Primary Research</span>
              <h3 className="cs-subsection-heading">Finding the admin.</h3>
              <p className="cs-subsection-body">
                I started from scratch with a brief asking me to replicate how
                award functions work in a corporate setting. My first task was
                finding the person who actually ran the system. The admin&rsquo;s
                identity was deliberately obscured within the company for
                security reasons. I had to escalate through HR and my manager
                before I could arrange a conversation.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                That conversation became the most important research session of
                the project. The phone calendar and physical diary revealed that
                there was no system at all in a transferable sense — only
                institutional knowledge accumulated over 13 years. I then mapped
                the workflows of all five user roles (Admin, Regular Employee,
                Nominator, Department Head, CHRO) to understand what each person
                needed the system to do.
              </p>
            </div>
          </ScrollReveal>

          {/* 02 — Secondary Research */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02 - Secondary Research</span>
              <h3 className="cs-subsection-heading">Jury systems and competitive gaps.</h3>
              <p className="cs-subsection-body">
                I studied how real-world corporate award ceremonies and jury
                systems are structured. This became the conceptual foundation
                for the permission model — understanding how recognition
                authority is delegated in practice before designing the digital
                version.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                I also conducted competitive analysis of Darwinbox, Keka, Zoho,
                and GreytHR. A key finding: simpler R&amp;R tools used flat org
                structures for award eligibility. This would not scale for
                ZingHR&rsquo;s enterprise customers with complex org hierarchies.
                The group-based permission model became the direct response to
                that gap.
              </p>
            </div>
          </ScrollReveal>

        </section>

        {/* ── Solution ───────────────────────────────────────────────── */}
        <section id="solution" className="cs-section" aria-labelledby="solution-heading">
          <ScrollReveal>
            <h2 id="solution-heading" className="cs-section-heading">Solution</h2>
            <p className="cs-section-body">
              The module was designed around six award types — nomination-based,
              value-based, behavioral, team-based, CEO On-Spot, and
              tenure-based (triggered automatically by joining date milestones)
              — and five distinct user roles, each with a dedicated interface
              and workflow.
            </p>
          </ScrollReveal>

          {/* Feature 01 — Award Calendar */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 01</span>
              <h3 className="cs-feature-title">The Award Calendar</h3>
              <p className="cs-feature-body">
                The most important design decision came directly from the admin
                interview. The phone calendar and diary were symptoms of a
                system with no structural home. The Award Calendar converted
                undocumented institutional knowledge into a structured,
                transferable admin tool.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "1rem" }}>
                Any future admin could pick up the system without a single
                knowledge transfer conversation. It allowed admins to schedule
                all awards across all regions, set nomination start and end
                dates, assign nominators per award, and send reminders. The
                central insight from the research had a direct structural answer
                in the design.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 02 — Jury Mental Model */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 02</span>
              <h3 className="cs-feature-title">The Jury Mental Model</h3>
              <p className="cs-feature-body">
                The most complex design challenge was making a multi-role
                permission system feel intuitive. The module had five award
                types, three levels of nominators, and a CHRO as the final
                approver.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "1rem" }}>
                I mapped the permission structure onto a jury system: managers,
                product owners, and heads of product act as preliminary judges
                who nominate candidates within their scope. The CHRO acts as
                the final jury. This grounded the hierarchy in a real-world
                analogy rather than an abstract permission tree. For users who
                had never configured an HRIS module before, that mental model
                reduced the cognitive load of understanding a complex multi-role
                workflow.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <JuryModelDiagram />
          </ScrollReveal>

          {/* Feature 03 — Group-Based Award Configuration */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 03</span>
              <h3 className="cs-feature-title">Group-Based Award Configuration</h3>
              <p className="cs-feature-body">
                The admin could create groups sliced any way the organization
                needed: by location, by function, by team, or by any
                combination. Each award could then be assigned to one or more
                groups.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "1rem" }}>
                A location-based group could receive a region-specific award.
                A function-based group like all designers could be scoped to a
                specific nomination. A cross-functional team group could be
                nominated together regardless of reporting lines. Flat org
                structures used by competing tools would have made all of this
                impossible. Group-based configuration was the direct
                differentiator for enterprise customers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <GroupConfigDiagram />
          </ScrollReveal>

          {/* Mid-Project Pivot */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">Mid-Project Pivot</span>
              <h3 className="cs-subsection-heading">Redesigning the nomination flow.</h3>
              <p className="cs-subsection-body">
                The original nomination flow gave all control to the CHRO, who
                was both nominator and approver. Midway through the project, the
                product team identified that this single-actor flow would not
                scale across ZingHR&rsquo;s diverse B2B customer base.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The flow was redesigned to introduce nominators as a separate
                role with three permission levels, each scoped to their relevant
                group. The CHRO was retained as final approver. This change
                added an entire role and permission layer but made the module
                genuinely configurable for varied enterprise org structures.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <PivotFlowDiagram />
          </ScrollReveal>

          {/* Additional Features */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">Additional Features</span>
              <h3 className="cs-subsection-heading">Supporting the full award lifecycle.</h3>
              <p className="cs-subsection-body">
                Beyond the core award management architecture, the module
                included: a multi-step nomination and approval wizard consistent
                across all award types and roles; budget management built into
                the CHRO approval flow with real-time spend tracking; a badge
                and certificate library for visual selection; Advantage Club
                integration for external point redemption; notification
                customization with predefined and personalized templates; and a
                public recognition feed on the company dashboard.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Impact ─────────────────────────────────────────────────── */}
        <section id="impact" className="cs-section" aria-labelledby="impact-heading">
          <ScrollReveal>
            <h2 id="impact-heading" className="cs-section-heading">Impact</h2>
            <p className="cs-section-body">
              The module launched and was adopted across ZingHR&rsquo;s customer
              base, replacing an informal system with a structured, auditable
              recognition workflow.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="cs-section-body">
              The most significant signal came after launch: the R&amp;R module
              was selected as the foundation for a customized engagement with a
              large public sector enterprise client in India, one of the largest
              institutions of its kind in the country. That engagement required
              feature modifications to suit the client&rsquo;s organizational
              structure, but the core architecture, permission model, and design
              system held.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="cs-section-body">
              Quantitative adoption metrics are being sought from the module owners.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Reflection ─────────────────────────────────────────────── */}
        <section id="reflection" className="cs-section" aria-labelledby="reflection-heading">
          <ScrollReveal>
            <h2 id="reflection-heading" className="cs-section-heading">Reflection</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <p className="cs-wid-body">
                The most valuable moment was the admin interview. What started
                as an attempt to understand a configuration workflow turned into
                the central insight of the entire project. The diary and phone
                calendar were not a minor inconvenience. They were the entire
                system, and it was one resignation away from collapse.
              </p>

              <p className="cs-wid-body">
                The Award Calendar is the feature I am most confident had real
                operational impact because it was designed around a documented,
                specific, and urgent problem rather than an assumed one.
              </p>

              <p className="cs-wid-body">
                The jury mental model is the design decision I am most proud of
                conceptually. It required stepping outside the product and
                understanding how recognition works in the real world, then
                translating that into a permission architecture that felt natural
                rather than technical. For users who had never configured an HRIS
                module before, that mental model reduced the cognitive load of
                understanding a complex multi-role workflow.
              </p>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
}
