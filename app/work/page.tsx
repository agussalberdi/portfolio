import type { Metadata } from "next";
import { projects } from "@/content";
import { Container } from "@/components/container";
import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product, frontend, and marketing work.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <Container className="py-20 md:py-28">
        <SectionHeading
          index="01"
          eyebrow="SYS // WORK"
          title="All projects"
          description="Featured first, then the rest. Covers morph into the case study."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
