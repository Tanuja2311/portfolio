export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  coverColor: string;
  stat: string;
  tags: string[];
  href: string;
  role?: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    slug:       "rewards-recognition",
    title:      "Rewards & Recognition",
    thumbnail:  "/images/rewards-recognition/hero.jpg",
    coverColor: "#1a1410",
    stat:       "Designed a recognition system adopted across 3 org sizes.",
    tags:       ["Product Design", "Enterprise", "B2B"],
    href:       "/work/rewards-and-recognition",
    role:       "Product Designer",
  },
  {
    slug:       "urbanpark",
    title:      "UrbanPark",
    thumbnail:  "/images/urbanpark/hero.jpg",
    coverColor: "#0d1a0f",
    stat:       "End-to-end C2C platform with a 12-component design system.",
    tags:       ["UX Design", "Mobile", "Design System"],
    href:       "/work/urbanpark",
    role:       "Product Designer",
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    slug:       "employee-dossier",
    title:      "Employee Dossier",
    thumbnail:  "/images/employee-dossier/hero.jpg",
    coverColor: "#0e1520",
    stat:       "Redesigned ZingHR's centralized employee record into a single, scannable page.",
    tags:       ["Product Design", "Enterprise"],
    href:       "/work/employee-dossier",
    role:       "UX Designer",
  },
  {
    slug:       "st-james-gala",
    title:      "St. James Gala",
    thumbnail:  "/images/st-james-gala/hero.jpg",
    coverColor: "#180e14",
    stat:       "Brand identity and event collateral for a 500-person annual fundraiser.",
    tags:       ["Brand Design", "Print"],
    href:       "/work/st-james-gala",
    role:       "Product Designer",
  },
  {
    slug:       "genai-pharmacy",
    title:      "GenAI for Pharmacy Research",
    thumbnail:  "/images/genai-pharmacy/hero.jpg",
    coverColor: "#12100e",
    stat:       "Investigated pharmacy students' hesitation to use GenAI chatbots for academic research.",
    tags:       ["UX Research", "AI in Education"],
    href:       "/work/genai-for-pharmacy-research",
    role:       "UX Researcher",
  },
  {
    slug:       "corecrush",
    title:      "CoreCrush",
    thumbnail:  "/images/corecrush/hero.jpg",
    coverColor: "#0a1510",
    stat:       "A fitness app for gym beginners, validated through fake front door tests and lean experiments.",
    tags:       ["Product Strategy", "HealthTech", "Mobile"],
    href:       "/work/corecrush",
    role:       "Product Designer",
  },
];
