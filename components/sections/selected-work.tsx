import { getFeaturedProjects } from "@/content";
import { ButtonLink } from "../button-link";
import { Container } from "../container";
import { ProjectCard } from "../project-card";
import { SectionHeading } from "../section-heading";

export function SelectedWork() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="01"
            eyebrow="SYS // WORK"
            title="Selected work"
            description="A few surfaces shipped for product, assessments, and brands. More on the work page."
            className="mb-0"
          />
          <ButtonLink href="/work" variant="ghost" className="self-start md:self-auto">
            All projects
          </ButtonLink>
        </div>
      </Container>
      <div className="mt-12 hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mt-16 md:gap-6 md:px-8 lg:px-12">
        {featured.map((project) => (
          <div key={project.slug} className="snap-start">
            <ProjectCard project={project} size="feature" />
          </div>
        ))}
      </div>
    </section>
  );
}
