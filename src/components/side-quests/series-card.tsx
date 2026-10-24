import Link from "next/link";
import { type Series, getSeriesEpisodes, formatDate } from "@/lib/side-quests";

// One card per series on the Side Quests page and the home page. Its episodes live on the
// series page (/side-quests/<series slug>), so more series can sit side by side here.
export function SeriesCard({ series }: { series: Series }) {
  const episodes = getSeriesEpisodes(series.slug);
  const latest   = [...episodes].sort((a, b) => b.date.localeCompare(a.date))[0];
  const count    = episodes.length;

  return (
    <Link href={`/side-quests/${series.slug}`} className="sq-series-card">
      <span className="sq-series-top">
        <span className="sq-chip">{series.status === "running" ? "Running" : "Wrapped"}</span>
        <span>
          {count === 1 ? "1 episode" : `${count} episodes`}
          {latest && <> · latest {formatDate(latest.date)}</>}
        </span>
      </span>
      <span className="sq-series-title">{series.title}</span>
      <span className="sq-series-tagline">{series.tagline}</span>
      {series.status === "running" && latest?.nextUp && (
        <span className="sq-series-next">
          <span className="sq-next-label">Next up</span>
          <span>{latest.nextUp}</span>
        </span>
      )}
      <span className="sq-row-arrow" aria-hidden>↗</span>
    </Link>
  );
}
