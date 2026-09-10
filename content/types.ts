export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  /** Set true for stacks added in this rebuild that were not on the old site. */
  added?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
};

export type Capability = {
  title: string;
  description: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Article = {
  title: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
  featured: boolean;
  body: string[];
};

export type SiteContent = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  url: string;
  headline: string;
  subhead: string;
  bio: string[];
  nav: NavItem[];
  socials: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  process: ProcessStep[];
  capabilities: Capability[];
  stats: Stat[];
  articles: Article[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  seo: {
    title: string;
    description: string;
  };
};
