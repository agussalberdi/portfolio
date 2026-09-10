import { projects } from "./projects";
import { site } from "./site";
import type { Project } from "./types";

export { projects, site };
export type {
  Article,
  Capability,
  CurrentEmployer,
  FaqItem,
  NavItem,
  ProcessStep,
  Project,
  SiteContent,
  Skill,
  SocialLink,
  Stat,
  Testimonial,
} from "./types";

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function mailtoHref(subject?: string): string {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${site.email}${query}`;
}
