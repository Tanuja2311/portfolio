import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllSlugs } from "@/lib/case-studies";
import { CaseStudyHero }     from "@/components/case-study/hero";
import { CaseStudySummary } from "@/components/case-study/summary";
import { PillTOC }           from "@/components/case-study/pill-toc";
import { Reveal }        from "@/components/case-study/reveal";
import { ImageGrid }     from "@/components/case-study/image-grid";
import { MetricCard }    from "@/components/case-study/metric-card";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Not Found" };
  return { title: study.title, description: study.subtitle };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyHero study={study} />
      {study.summary && <CaseStudySummary summary={study.summary} />}
      <PillTOC />

      <div className="cs-body">
        {/* ── Challenge ───────────────────────────────────────── */}
        <section id="challenge" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Challenge</h2>
            <p className="cs-section-body">{study.challenge.body}</p>
          </Reveal>
        </section>

        {/* ── Process ─────────────────────────────────────────── */}
        <section id="process" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Process</h2>
            <p className="cs-section-body">{study.process.body}</p>
          </Reveal>
          {study.process.images.length > 0 && (
            <Reveal delay={120}>
              <ImageGrid images={study.process.images} />
            </Reveal>
          )}
        </section>

        {/* ── Solution ────────────────────────────────────────── */}
        <section id="solution" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Solution</h2>
            <p className="cs-section-body">{study.solution.body}</p>
          </Reveal>
          {study.solution.images.length > 0 && (
            <Reveal delay={120}>
              <ImageGrid images={study.solution.images} />
            </Reveal>
          )}
        </section>

        {/* ── Impact ──────────────────────────────────────────── */}
        <section id="impact" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Impact</h2>
            <p className="cs-section-body">{study.impact.body}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="cs-metrics">
              {study.impact.metrics.map((metric, i) => (
                <MetricCard key={metric.label} metric={metric} index={i} />
              ))}
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
