export interface CaseImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Metric {
  value: string;
  label: string;
  context: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  hero: string;
  coverColor: string;
  tags?: string[];
  meta: {
    role: string;
    duration: string;
    year?: string;
    team: string;
    tools: string[];
  };
  challenge: { body: string };
  process:   { body: string; images: CaseImage[] };
  solution:  { body: string; images: CaseImage[] };
  impact:    { body: string; metrics: Metric[] };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "rewards-recognition",
    title: "Rewards & Recognition",
    subtitle: "Redesigning how teams celebrate each other at scale.",
    hero: "/images/rewards-recognition/hero.jpg",
    coverColor: "#1a1410",
    tags: ["Product Design", "Enterprise", "B2B"],
    meta: {
      role:     "Product Designer",
      duration: "3 months",
      year:     "2024",
      team:     "4 people",
      tools:    ["Figma", "Protopie", "Notion"],
    },
    challenge: {
      body: "Teams lacked a meaningful way to acknowledge contributions beyond formal reviews. Existing tools felt transactional and saw low adoption. We needed a lightweight ritual that fit naturally into daily workflows without adding friction.",
    },
    process: {
      body: "We ran discovery interviews with 18 employees across 6 departments, mapped current recognition touchpoints, and completed a competitive audit of 8 peer tools. Three design sprints followed, each closing with a 4-person usability session to pressure-test assumptions.",
      images: [
        { src: "/images/rewards-recognition/process-1.jpg", alt: "Affinity mapping session", caption: "Synthesis from 18 discovery interviews" },
        { src: "/images/rewards-recognition/process-2.jpg", alt: "Wireframe explorations",   caption: "Low-fi flow explorations, sprint 2"  },
      ],
    },
    solution: {
      body: "A lightweight recognition layer integrated directly into the company's existing Slack workspace. Employees send kudos cards with a custom tag and emoji - the card lands in a shared #recognition channel and gets stored in the recipient's personal highlights feed.",
      images: [
        { src: "/images/rewards-recognition/solution-1.jpg", alt: "Recognition card UI",      caption: "Kudos card composer"      },
        { src: "/images/rewards-recognition/solution-2.jpg", alt: "Highlights feed",          caption: "Personal highlights feed" },
        { src: "/images/rewards-recognition/solution-3.jpg", alt: "Analytics dashboard",      caption: "Team analytics view"      },
      ],
    },
    impact: {
      body: "Launched to 340 employees across two offices. Adoption exceeded projections within the first month and sustained through the quarter.",
      metrics: [
        { value: "87%",  label: "Weekly active users",        context: "Within 6 weeks of launch"             },
        { value: "3.2×", label: "Engagement vs. prior tool",  context: "Measured by kudos sent per employee"  },
        { value: "94",   label: "NPS score",                  context: "Collected at the 30-day mark"         },
        { value: "340",  label: "Employees onboarded",        context: "Across two office locations"          },
      ],
    },
  },
  {
    slug: "urbanpark",
    title: "Urban Park",
    subtitle: "A digital layer for discovering city green spaces.",
    hero: "/images/urbanpark/hero.jpg",
    coverColor: "#0d1a0f",
    tags: ["UX Design", "Mobile", "Design System"],
    meta: {
      role:     "Lead Designer",
      duration: "5 months",
      year:     "2024",
      team:     "3 people",
      tools:    ["Figma", "Mapbox", "Framer"],
    },
    challenge: {
      body: "City parks are underutilized because residents don't know what's happening in them. There was no unified way to discover events, check amenity availability, or plan visits - leaving valuable green infrastructure invisible to the people it serves.",
    },
    process: {
      body: "Contextual research in 5 parks, intercept interviews with 24 visitors, and a content audit of existing city apps. We prototyped three distinct navigation paradigms and tested them with participants across different age groups and mobility levels.",
      images: [
        { src: "/images/urbanpark/process-1.jpg", alt: "Field research notes",     caption: "On-site contextual research" },
        { src: "/images/urbanpark/process-2.jpg", alt: "Navigation prototypes",    caption: "Three nav paradigm tests"    },
      ],
    },
    solution: {
      body: "An interactive park map with a live events layer, amenity status indicators, and a route planner optimized for accessibility. A 'Nearby now' feed surfaces time-sensitive information - open tennis courts, farmers markets, live music - within a configurable radius.",
      images: [
        { src: "/images/urbanpark/solution-1.jpg", alt: "Park map interface",    caption: "Interactive map with event layer" },
        { src: "/images/urbanpark/solution-2.jpg", alt: "Nearby now feed",       caption: "Time-sensitive discovery feed"    },
        { src: "/images/urbanpark/solution-3.jpg", alt: "Accessibility routing", caption: "Accessible route planner"         },
      ],
    },
    impact: {
      body: "Piloted with the city parks department across 12 locations. Measured over a 90-day period post-launch.",
      metrics: [
        { value: "41%",  label: "Increase in park visits",   context: "Compared to same period prior year"  },
        { value: "12",   label: "Parks in pilot program",    context: "Across three city districts"          },
        { value: "4.8★", label: "App store rating",          context: "Based on 1,200+ reviews"             },
        { value: "28k",  label: "Monthly active users",      context: "At end of 90-day pilot"              },
      ],
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug);
}
