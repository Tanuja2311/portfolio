import type { MetadataRoute } from "next";
import { SIDE_QUESTS_LIVE, getAllSeries, getEpisodes } from "@/lib/side-quests";

const SITE = "https://www.tanujabodas.com";

function sideQuestEntries(): MetadataRoute.Sitemap {
  if (!SIDE_QUESTS_LIVE) return [];
  return [
    { url: `${SITE}/side-quests`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/side-quests/keeps-me-up-at-night`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...getAllSeries().map((s) => ({
      url:             `${SITE}/side-quests/${s.slug}`,
      lastModified:    new Date(),
      changeFrequency: "weekly" as const,
      priority:        0.7,
    })),
    ...getEpisodes().map((ep) => ({
      url:             `${SITE}/side-quests/${ep.slug}`,
      lastModified:    new Date(`${ep.date}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority:        0.6,
    })),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:             `${SITE}/`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        1.0,
    },
    {
      url:             `${SITE}/work/myrcloud`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE}/work/rewards-and-recognition`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE}/work/employee-dossier`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE}/work/urbanpark`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE}/built-with-ai/wren-gala`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE}/about`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.6,
    },
    ...sideQuestEntries(),
  ];
}
