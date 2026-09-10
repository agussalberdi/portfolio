import { getFeaturedProjects } from "@/content";
import { ButtonLink } from "../button-link";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";
import { WorkCarousel } from "../work-carousel";

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
      <WorkCarousel projects={featured} className="mt-12 md:mt-16" />
    </section>
  );
}
