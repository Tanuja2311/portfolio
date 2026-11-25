export interface CaseImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Metric {
  value: string;
  label: string;
  context?: string;
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
    team?: string;
    company?: string;
    tools: string[];
  };
  summary?: {
    problem:  string;
    role:     string;
    timeline: string;
    outcome:  string;
  };
  challenge: { body: string };
  process:   { body: string; images: CaseImage[] };
  solution:  { body: string; images: CaseImage[] };
  impact:    { body: string; metrics: Metric[] };
}
