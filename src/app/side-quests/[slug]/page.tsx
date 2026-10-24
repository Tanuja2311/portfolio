import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Block,
  type Series,
  getAllSeries,
  getSeriesEpisodes,
  getEpisode,
  getEpisodes,
  getSeries,
  getSeriesNeighbours,
  episodeLabel,
  formatDate,
} from "@/lib/side-quests";
import { EmbedFrame } from "@/components/side-quests/embed-frame";
import { EpisodeRow } from "@/components/side-quests/episode-row";
import { Reveal } from "@/components/case-study/reveal";

// One route for two kinds of page: /side-quests/<series slug> lists that series' episodes,
// and /side-quests/<episode slug> is an episode. Series and episode slugs never overlap.
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [
    ...getAllSeries().map((s) => ({ slug: s.slug })),
    ...getEpisodes().map((ep) => ({ slug: ep.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeries(slug);
  if (series) {
    return {
      title:       series.title,
      description: series.tagline,
      alternates:  { canonical: `/side-quests/${series.slug}` },
      openGraph:   { type: "website", url: `/side-quests/${series.slug}`, description: series.tagline },
    };
  }
  const ep = getEpisode(slug);
  if (!ep) return { title: "Not Found" };
  return {
    title:       ep.title,
    description: ep.summary,
    alternates:  { canonical: `/side-quests/${ep.slug}` },
    openGraph:   { type: "article", url: `/side-quests/${ep.slug}`, description: ep.summary },
  };
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="sq-p">{block.text}</p>;
    case "h2":
      return <h2 className="sq-h2">{block.text}</h2>;
    case "img":
      return (
        <figure className="sq-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} className="sq-img" loading="lazy" />
          {block.caption && <figcaption className="sq-caption">{block.caption}</figcaption>}
        </figure>
      );
    case "list":
      return (
        <ul className="sq-ul">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    case "embed":
      return (
        <figure className="sq-embed">
          <EmbedFrame src={block.src} title={block.title} height={block.height} />
          <figcaption className="sq-caption">
            {block.caption && <>{block.caption}{" "}</>}
            <a href={block.src} target="_blank" rel="noopener noreferrer" className="sq-link">
              Open full screen&nbsp;&#8599;
            </a>
          </figcaption>
        </figure>
      );
    case "quote":
      return <blockquote className="sq-quote">{block.text}</blockquote>;
    case "link":
      return (
        <p className="sq-p">
          <a href={block.href} target="_blank" rel="noopener noreferrer" className="sq-link">
            {block.label}&nbsp;&#8599;
          </a>
        </p>
      );
  }
}

function SeriesView({ series }: { series: Series }) {
  const episodes = getSeriesEpisodes(series.slug);
  const latest   = [...episodes].sort((a, b) => b.date.localeCompare(a.date))[0];

  return (
    <main className="sq-page">
      <Link href="/side-quests" className="sq-back">← All side quests</Link>

      <header className="sq-ep-header">
        <p className="sq-row-meta">
          <span className="sq-chip">{series.status === "running" ? "Running" : "Wrapped"}</span>
          <span>{episodes.length === 1 ? "1 episode" : `${episodes.length} episodes`}</span>
        </p>
        <h1 className="sq-ep-title">{series.title}</h1>
        <p className="sq-ep-summary">{series.tagline}</p>
        {series.status === "running" && latest?.nextUp && (
          <p className="sq-next">
            <span className="sq-next-label">Next up</span>
            {latest.nextUp}
          </p>
        )}
      </header>

      <section className="sq-section" aria-labelledby="sq-series-episodes">
        <p className="section-label" id="sq-series-episodes">Episodes</p>
        {episodes.length === 0 ? (
          <p className="sq-empty">The first episode drops soon. Snacks recommended.</p>
        ) : (
          <div className="sq-list">
            {episodes.map((ep, i) => (
              <Reveal key={ep.slug} delay={i * 60}>
                <EpisodeRow episode={ep} showSeries={false} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default async function SideQuestPage({ params }: Props) {
  const { slug } = await params;
  const asSeries = getSeries(slug);
  if (asSeries) return <SeriesView series={asSeries} />;

  const ep = getEpisode(slug);
  if (!ep) notFound();

  const series = getSeries(ep.series);
  const { prev, next } = getSeriesNeighbours(ep);

  return (
    <main className="sq-page sq-page--episode">
      {series ? (
        <Link href={`/side-quests/${series.slug}`} className="sq-back">← {series.title}</Link>
      ) : (
        <Link href="/side-quests" className="sq-back">← All side quests</Link>
      )}

      <header className="sq-ep-header">
        <p className="sq-row-meta">
          <span className="sq-chip">{episodeLabel(ep)}</span>
          {series && <span>{series.title}</span>}
          <span aria-hidden>·</span>
          <time dateTime={ep.date}>{formatDate(ep.date)}</time>
          {ep.draft && <span className="sq-chip sq-chip--draft">Draft</span>}
        </p>
        <h1 className="sq-ep-title">{ep.title}</h1>
        <p className="sq-ep-summary">{ep.summary}</p>
        {ep.tags && ep.tags.length > 0 && (
          <div className="feat-card-tags" aria-label="Tags">
            {ep.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
      </header>

      <article className="sq-body">
        {ep.body.map((block, i) => <BlockView key={i} block={block} />)}
      </article>

      {ep.nextUp && (
        <aside className="sq-next sq-next--box" aria-label="Next up">
          <span className="sq-next-label">Next up</span>
          {ep.nextUp}
        </aside>
      )}

      {(prev || next) && (
        <nav className="sq-ep-nav" aria-label="More from this series">
          {prev ? (
            <Link href={`/side-quests/${prev.slug}`} className="sq-ep-nav-link">
              <span className="sq-ep-nav-dir">← {episodeLabel(prev)}</span>
              <span>{prev.title}</span>
            </Link>
          ) : <span />}
          {next && (
            <Link href={`/side-quests/${next.slug}`} className="sq-ep-nav-link sq-ep-nav-link--next">
              <span className="sq-ep-nav-dir">{episodeLabel(next)} →</span>
              <span>{next.title}</span>
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}
