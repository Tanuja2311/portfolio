import type { Metadata } from "next";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CaseImage }      from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

const SECTIONS = [
  { id: "context",    label: "Context"    },
  { id: "process",    label: "Process"    },
  { id: "findings",   label: "Findings"   },
  { id: "reflection", label: "Reflection" },
];

export const metadata: Metadata = {
  title:       "GenAI in Pharmacy Research",
  description: "GenAI in Pharmacy Research case study by Tanuja Bodas. Investigating pharmacy students' hesitation to use GenAI chatbots for academic research.",
  alternates:  { canonical: "/work/genai-pharmacy-research" },
  openGraph: {
    type:        "article",
    url:         "/work/genai-pharmacy-research",
    description: "GenAI in Pharmacy Research case study by Tanuja Bodas. Investigating pharmacy students' hesitation to use GenAI chatbots for academic research.",
  },
  twitter: {
    card: "summary_large_image",
    description: "GenAI in Pharmacy Research case study by Tanuja Bodas. Investigating pharmacy students' hesitation to use GenAI chatbots for academic research.",
  },
};

const IMG = (name: string) => `/images/genai-pharmacy/${name}`;

export default function GenAIPharmacyPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="cs-hero">
        <StaggerItem className="cs-hero-media" style={{ background: "#12100e" }}>
          <CaseImage
            src={IMG("hero.jpg")}
            alt="GenAI in Pharmacy Research"
            description="GenAI in Pharmacy Research — hero image"
            fill
            priority
            noCurtain
            sizes="100vw"
            className="cs-hero-img"
          />
          <div className="cs-hero-overlay" aria-hidden />
          <div className="cs-hero-text">
            <h1 className="cs-hero-title">GenAI in Pharmacy Research</h1>
            <p className="cs-hero-subtitle">
              Investigating why pharmacy students hesitate to use generative AI
              for academic research, and what it would take to change that.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className="cs-meta-bar">
          <div className="cs-meta-inner">
            {[
              ["Role",     "UX Researcher"],
              ["Duration", "18 weeks (Jan 2024 – May 2024)"],
              ["Team",     "4 researchers"],
              ["Methods",  "Interviews · Survey · Desk Research · Competitor Scan"],
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

        {/* ── Context ──────────────────────────────────────────────────── */}
        <section id="context" className="cs-section" aria-labelledby="context-heading">
          <ScrollReveal>
            <h2 id="context-heading" className="cs-section-heading">Context</h2>

            <p className="cs-section-body">
              Pharmacy students at Thomas Jefferson University use generative AI
              tools in their research workflows. They summarize papers with it,
              rephrase drafts, and occasionally explore literature. But they do
              not trust it.
            </p>

            <p className="cs-section-body">
              The gap is not awareness or access. Students know these tools
              exist and have tried them. The hesitation sits deeper: concerns
              about accuracy, plagiarism risk, data privacy, and whether
              AI-generated output holds up to academic scrutiny. Faculty share
              similar concerns, particularly around critical thinking erosion
              and student dependency.
            </p>

            <p className="cs-section-body">
              This project set out to answer three questions:
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-questions">
              {[
                "How do pharmacy students currently use GenAI chatbots in their research workflows?",
                "What unmet needs exist in balancing speed, accuracy, and academic integrity?",
                "What would increase trust and adoption of GenAI tools in academic research?",
              ].map((q, i) => (
                <div key={i} className="cs-questions-item">
                  <span className="cs-questions-num">{i + 1}.</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="cs-section-body">
              The goal was not to design a product. It was to build a research
              foundation that could inform one: a clear map of behaviors, pain
              points, and opportunities grounded in primary data from the people
              who would actually use these tools.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Process ──────────────────────────────────────────────────── */}
        <section id="process" className="cs-section" aria-labelledby="process-heading">
          <ScrollReveal>
            <h2 id="process-heading" className="cs-section-heading">Process</h2>
          </ScrollReveal>

          {/* 01 — Desk Research */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01</span>
              <h3 className="cs-subsection-heading">Desk Research</h3>
              <p className="cs-subsection-body">
                The first step was establishing what was already known. The team
                analyzed 30+ scholarly papers, articles, and reports covering AI
                in education, AI in healthcare, and AI-assisted research
                workflows.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                This phase surfaced recurring themes: accuracy anxiety,
                plagiarism detection gaps, inconsistent citation behavior from
                AI tools, and a general lack of institutional guidance on
                acceptable use. It also revealed that most existing research
                focused on AI in classroom instruction, not on AI as a research
                tool for students conducting their own literature reviews and
                analysis.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                That gap shaped the rest of the study. The question was not
                whether AI belongs in education broadly, but whether it can be
                trusted to support the specific, high-stakes work of pharmacy
                research.
              </p>
            </div>
          </ScrollReveal>

          {/* 02 — Competitor Scan */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02</span>
              <h3 className="cs-subsection-heading">Competitor Scan</h3>
              <p className="cs-subsection-body">
                I evaluated five tools that sit at the intersection of AI and
                academic or healthcare research: DiagnaMed&rsquo;s Dr. GenAI,
                Novo Nordisk&rsquo;s Sophia, Grammarly, Research Rabbit, and
                Tutor.ai.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The scan focused on three dimensions: what research tasks each
                tool supported, how it handled source attribution and accuracy,
                and where it fell short for pharmacy-specific use cases.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Key patterns emerged. Most tools treated &ldquo;research
                assistance&rdquo; as summarization or writing support. None
                offered meaningful integration with trusted databases like
                PubMed, NIH, or ScienceDirect. None addressed the plagiarism
                concern directly. And none allowed students to upload non-text
                assets like PDFs, images, or datasets for analysis, a
                limitation that came up repeatedly in later interviews.
              </p>
            </div>
          </ScrollReveal>

          {/* 03 — Survey */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03</span>
              <h3 className="cs-subsection-heading">Survey</h3>
              <p className="cs-subsection-body">
                I designed and ran a survey to establish baseline data on
                chatbot usage frequency, preferred research tools, and initial
                attitudes toward AI in academic work.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The survey confirmed what the desk research suggested: students
                were experimenting with AI tools, but usage was shallow. Most
                interactions were limited to rephrasing sentences or generating
                rough summaries. Few students used AI for substantive research
                tasks like literature discovery, data analysis, or citation
                management.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The survey also identified a clear split in attitudes. Students
                who had tried AI tools were cautiously interested but lacked
                confidence in output quality. Students who had not tried them
                cited plagiarism and accuracy as the primary barriers.
              </p>
            </div>
          </ScrollReveal>

          {/* 04 — Interviews */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">04</span>
              <h3 className="cs-subsection-heading">Interviews</h3>
              <p className="cs-subsection-body">
                The team conducted 12 semi-structured interviews with pharmacy
                students at Thomas Jefferson University. I personally conducted
                3 of those interviews. Separately, I led the stakeholder
                interview with the Department Chair of Pharmacy, with the rest
                of the team taking notes.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The student interviews followed a consistent protocol designed
                to surface actual behavior, not hypothetical preferences.
                Questions focused on current research workflows, specific moments
                where AI was used or considered and rejected, and the criteria
                students applied when deciding whether to trust a source.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The stakeholder interview added an institutional lens. Faculty
                valued innovation but worried about three things: students losing
                the ability to critically evaluate sources on their own,
                sensitive research data being exposed to third-party AI
                platforms, and the lack of clear institutional policies on AI
                use in academic work.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                After all interviews, the team used card sorting to cluster
                findings into four categories: Needs, Goals, Pain Points, and
                Key Insights.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Findings ─────────────────────────────────────────────────── */}
        <section id="findings" className="cs-section" aria-labelledby="findings-heading">
          <ScrollReveal>
            <h2 id="findings-heading" className="cs-section-heading">Findings</h2>
          </ScrollReveal>

          {/* Finding 01 */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Finding 01</span>
              <h3 className="cs-feature-title">How students actually use AI</h3>
              <p className="cs-feature-body">
                Students rely on established, peer-reviewed databases for
                primary research: PubMed, NIH, ScienceDirect, and Google
                Scholar. AI tools are used at the margins, primarily for
                rephrasing and summarization. Students do not use AI for source
                discovery or literature review because they cannot verify whether
                AI-surfaced sources are real, current, or peer-reviewed.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                The trust issue is not abstract. Students described specific
                experiences where AI-generated citations turned out to be
                fabricated or pointed to retracted papers. That was enough to
                push AI into a supplementary role rather than a primary one.
              </p>
            </div>
          </ScrollReveal>

          {/* Finding 02 */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Finding 02</span>
              <h3 className="cs-feature-title">What is not working</h3>
              <p className="cs-feature-body">
                Three structural barriers surfaced consistently across
                interviews:
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                First, free-tier AI tools impose significant limitations.
                Students cannot upload PDFs, images, or datasets, which means
                the tools cannot engage with the actual materials students work
                with daily.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                Second, data privacy is a real concern, not a hypothetical one.
                Students working with sensitive health-related research data have
                no clarity on whether their inputs are stored, used for training,
                or accessible to third parties.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                Third, the plagiarism risk is unresolved. AI tools do not flag
                when their output overlaps with existing published work. Students
                are left to run separate plagiarism checks manually, which
                creates friction and erodes trust.
              </p>
            </div>
          </ScrollReveal>

          {/* Finding 03 */}
          <ScrollReveal>
            <div className="cs-feature">
              <span className="cs-feature-name">Finding 03</span>
              <h3 className="cs-feature-title">What would build trust</h3>
              <p className="cs-feature-body">
                Students articulated a clear wish list, and it was more specific
                than &ldquo;make AI better.&rdquo; They want AI tools that pull
                from verified, peer-reviewed databases (PubMed, NIH) rather than
                general internet sources. They want built-in plagiarism detection
                so they can trust the output without a separate verification
                step. They want the ability to upload PDFs, images, and datasets
                for analysis, not just text input. And they want explicit data
                privacy guarantees: confirmation that their queries are not
                stored or used for model training.
              </p>
            </div>
          </ScrollReveal>

          {/* Stakeholder Perspective */}
          <ScrollReveal>
            <div className="cs-feature-decision" style={{ marginTop: "2.5rem" }}>
              <span className="cs-feature-decision-label">Stakeholder Perspective</span>
              <p className="cs-feature-decision-text">
                The Department Chair reinforced several student-side findings
                but added a critical institutional dimension. Faculty are not
                opposed to AI adoption. They are opposed to unguided AI
                adoption. Without clear policies, training, and tools that
                preserve critical thinking rather than replace it, faculty see
                AI as a risk to academic rigor rather than an accelerant.
              </p>
            </div>
          </ScrollReveal>

          {/* Problem Definition */}
          <ScrollReveal>
            <div className="cs-problem-stmt">
              <span className="cs-problem-stmt-label">Problem Definition</span>
              <p className="cs-problem-stmt-text">
                Pharmacy students hesitate to adopt GenAI chatbots for research
                because existing tools fail on the three dimensions that matter
                most in academic work: accuracy verification, data privacy, and
                plagiarism prevention.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Reflection ───────────────────────────────────────────────── */}
        <section id="reflection" className="cs-section" aria-labelledby="reflection-heading">
          <ScrollReveal>
            <h2 id="reflection-heading" className="cs-section-heading">Reflection</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <h3 className="cs-wid-heading">What I learned</h3>

              <p className="cs-wid-body">
                This project reinforced that the most useful research output is
                often a well-defined problem, not a solution. The instinct in UX
                work is to push toward design recommendations and prototypes. But
                the value here was in documenting the trust gap with enough
                specificity that a product team could act on it without repeating
                the discovery work.
              </p>

              <p className="cs-wid-body">
                I also learned the practical difference between leading an
                interview and observing one. Conducting the stakeholder interview
                with the Department Chair required real-time judgment about when
                to probe deeper and when to let a response sit. That is a
                different skill from synthesizing transcripts after the fact.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">What I&rsquo;d do differently</h3>

              <p className="cs-wid-body">
                The study included only pharmacy students at one university. A
                stronger study would recruit across multiple institutions and
                include graduate researchers alongside undergraduates, since
                their AI usage patterns and risk tolerances likely differ.
              </p>

              <p className="cs-wid-body">
                The project stopped at problem definition. If I were to continue,
                the next step would be a concept validation phase: low-fidelity
                prototypes of a research-specific AI tool tested against the
                specific trust barriers identified in the findings. The research
                laid the groundwork for that, but the work itself remains undone.
              </p>

              <p className="cs-wid-body">
                I would also push for a diary study component alongside the
                interviews. Interviews capture recalled behavior, but a diary
                study would surface in-the-moment decisions about when students
                reach for AI and when they pull back. That real-time data would
                add a layer the interview data could not.
              </p>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
}
