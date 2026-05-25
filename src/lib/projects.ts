export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  thumbnailAlt?: string;
  coverColor: string;
  stat: string;
  tags: string[];
  href: string;
  role?: string;
  hidden?: boolean;
  homepageHidden?: boolean;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    slug:       "rewards-recognition",
    title:      "Rewards & Recognition",
    thumbnail:  "/images/rewards-recognition/hero.png",
    coverColor: "#1a1410",
    stat:       "Built a scalable award management system for enterprise HR teams.",
    tags:       ["Product Design", "Enterprise", "B2B"],
    href:       "/work/rewards-and-recognition",
    role:       "UX Designer, Sole Designer",
  },
  {
    slug:       "myrcloud",
    title:      "MyRCloud",
    thumbnail:  "/images/myrcloud/hero.png",
    coverColor: "#0d1118",
    stat:       "Recruitment marketplace replacing Google Sheets for 600+ partners.",
    tags:       ["Enterprise", "Recruitment", "Marketplace"],
    href:       "/work/myrcloud",
    role:       "Solo UX Designer",
  },
];

export const AI_PROJECTS: Project[] = [
  {
    slug:       "wren-gala",
    title:      "The Wren Gala",
    thumbnail:  "/images/wren-gala/hero.png",
    coverColor: "#100d14",
    stat:       "Luxury charity event website designed and shipped in under a week.",
    tags:       ["AI Workflow", "Client Work"],
    href:       "/built-with-ai/wren-gala",
    role:       "Lead Designer & Developer",
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    slug:       "urbanpark",
    title:      "UrbanPark",
    thumbnail:  "/images/urbanpark/hero.jpg",
    coverColor: "#0d1a0f",
    stat:       "End-to-end C2C platform with a 12-component design system.",
    tags:       ["UX Design", "Mobile", "Design System"],
    href:       "/work/urbanpark",
    role:       "Product Designer",
    homepageHidden: true,
  },
  {
    slug:       "employee-dossier",
    title:      "Employee Dossier",
    thumbnail:    "/images/employee-dossier/hero.png",
    thumbnailAlt: "Employee Dossier — project thumbnail",
    coverColor: "#0e1520",
    stat:       "Redesigned ZingHR's centralized employee record into a single, scannable page.",
    tags:       ["Product Design", "Enterprise"],
    href:       "/work/employee-dossier",
    role:       "UX Designer",
  },
  {
    slug:       "wren-gala",
    title:      "The Wren Gala",
    thumbnail:  "/images/wren-gala/hero.png",
    coverColor: "#100d14",
    stat:       "Luxury charity event website designed and shipped in under a week.",
    tags:       ["AI Workflow", "Client Work"],
    href:       "/built-with-ai/wren-gala",
    role:       "Lead Designer & Developer",
  },
  {
    slug:       "genai-pharmacy",
    title:      "GenAI in Pharmacy Research",
    thumbnail:  "/images/genai-pharmacy/hero.jpg",
    coverColor: "#12100e",
    stat:       "Investigated pharmacy students' hesitation to use GenAI chatbots for academic research.",
    tags:       ["UX Research", "AI in Education"],
    href:       "/work/genai-pharmacy-research",
    role:       "UX Researcher",
    homepageHidden: true,
  },
  {
    slug:       "google-drive-emerging",
    title:      "Google Drive for Emerging Interfaces",
    thumbnail:  "/images/google-drive-emerging/hero.jpg",
    coverColor: "#0e1018",
    stat:       "Adapting cloud file management for a Tesla in-car display and a Smart TV.",
    tags:       ["Speculative Design", "Multimodal", "Emerging Interfaces"],
    href:       "/work/google-drive-emerging-interfaces",
    role:       "UX Designer",
    hidden:     true,
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
    hidden:     true,
  },
];
