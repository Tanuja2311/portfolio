import type { Metadata } from "next";
import Link from "next/link";
import { getAllSeries, getDrops, QUESTIONS } from "@/lib/side-quests";
import { EpisodeRow } from "@/components/side-quests/episode-row";
import { SeriesCard } from "@/components/side-quests/series-card";
import { Reveal } from "@/components/case-study/reveal";

const DESCRIPTION =
  "Side Quests by Tanuja Bodas: weekend side projects, published weekly. Half-done is allowed.";

export const metadata: Metadata = {
  title:       "Side Quests",
  description: DESCRIPTION,
  alternates:  { canonical: "/side-quests" },
  openGraph:   { type: "website", url: "/side-quests", description: DESCRIPTION },
  twitter:     { card: "summary_large_image", description: DESCRIPTION },
};

export default function SideQuestsPage() {
  const series = getAllSeries();
  const drops  = getDrops();

  return (
    <main className="sq-page">
      <header className="sq-header">
        <Reveal>
          <p className="sq-kicker">Weekend mode</p>
          <h1 className="sq-title">Side Quests</h1>
          <p className="sq-intro">
            Things I build on weekends because I want to, not because a job
            description asked. A new episode every week. Some of it is
            unfinished, and every episode says what&apos;s next.
          </p>
        </Reveal>
      </header>

      <section aria-labelledby="sq-series-label">
        <p className="section-label" id="sq-series-label">Series</p>

        {series.length === 0 ? (
          <p className="sq-empty">The first episode drops soon. Snacks recommended.</p>
        ) : (
          <div className="sq-series-grid">
            {series.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <SeriesCard series={s} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {drops.length > 0 && (
        <section className="sq-section" aria-labelledby="sq-drops-label">
          <p className="section-label" id="sq-drops-label">One-off drops</p>
          <div className="sq-list">
            {drops.map((ep, i) => (
              <Reveal key={ep.slug} delay={i * 60}>
                <EpisodeRow episode={ep} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="sq-section" aria-labelledby="sq-standing-label">
        <p className="section-label" id="sq-standing-label">Always open</p>
        <Link href="/side-quests/keeps-me-up-at-night" className="sq-standing">
          <span>
            <span className="sq-standing-title">What keeps me up at night</span>
            <span className="sq-standing-desc">
              {`${QUESTIONS.length} questions I can't stop thinking about. Some about design, some about why English is like this.`}
            </span>
          </span>
          <span className="sq-row-arrow" aria-hidden>↗</span>
        </Link>
      </section>
    </main>
  );
}
