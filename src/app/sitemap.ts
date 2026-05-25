import type { MetadataRoute } from "next";

const SITE = "https://portfolio-olive-ten-27.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:             `${SITE}/`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        1.0,
    },
    {
      url:             `${SITE}/work`,
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
      url:             `${SITE}/work/genai-pharmacy-research`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE}/built-with-ai`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.6,
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
  ];
}
