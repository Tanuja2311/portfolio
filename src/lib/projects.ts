export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  coverColor: string;
  stat: string;
  tags: string[];
  href: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    slug:        "rewards-recognition",
    title:       "Rewards & Recognition",
    thumbnail:   "/images/rewards-recognition/hero.jpg",
    coverColor:  "#1a1410",
    stat:        "Designed a recognition system adopted across 3 org sizes.",
    tags:        ["Product Design", "Enterprise", "Figma"],
    href:        "/work/rewards-and-recognition",
  },
  {
    slug:        "urbanpark",
    title:       "Urban Park",
    thumbnail:   "/images/urbanpark/hero.jpg",
    coverColor:  "#0d1a0f",
    stat:        "End-to-end C2C platform with a 12-component design system.",
    tags:        ["UX Design", "Mobile", "Design System"],
    href:        "/work/urbanpark",
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    slug:        "st-james-gala",
    title:       "St. James Gala",
    thumbnail:   "/images/st-james-gala/hero.jpg",
    coverColor:  "#180e14",
    stat:        "Brand identity and event collateral for a 500-person annual fundraiser.",
    tags:        ["Brand Design", "Print"],
    href:        "/work/st-james-gala",
  },
  {
    slug:        "rise-n-shine",
    title:       "Rise & Shine",
    thumbnail:   "/images/rise-n-shine/hero.jpg",
    coverColor:  "#1a1208",
    stat:        "Mobile-first nutrition platform for first-generation college students.",
    tags:        ["Mobile", "UX Research"],
    href:        "/work/rise-n-shine",
  },
];
