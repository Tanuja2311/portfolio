import Link from "next/link";
import { type Episode, episodeLabel, formatDate, getSeries } from "@/lib/side-quests";
import { EpisodeThumb } from "@/components/side-quests/episode-thumb";

// showSeries: false on a series page, where the series name would just repeat.
export function EpisodeRow({ episode, showSeries = true }: { episode: Episode; showSeries?: boolean }) {
  const series = getSeries(episode.series);

  return (
    <Link href={`/side-quests/${episode.slug}`} className={`sq-row${episode.thumb ? " sq-row--thumb" : ""}`}>
      <time className="sq-row-date" dateTime={episode.date}>
        {formatDate(episode.date)}
      </time>

      <div className="sq-row-body">
        <p className="sq-row-meta">
          <span className="sq-chip">{episodeLabel(episode)}</span>
          {showSeries && series && <span>{series.title}</span>}
          {episode.draft && <span className="sq-chip sq-chip--draft">Draft</span>}
        </p>
        <h3 className="sq-row-title">{episode.title}</h3>
        <p className="sq-row-summary">{episode.summary}</p>
      </div>

      {episode.thumb && (
        <span className="sq-row-thumb">
          <EpisodeThumb thumb={episode.thumb} />
        </span>
      )}

      <span className="sq-row-arrow" aria-hidden>↗</span>
    </Link>
  );
}
