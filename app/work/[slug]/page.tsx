import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/content";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageTransition } from "@/components/page-transition";
import { ProjectCover } from "@/components/project-cover";

type WorkCaseParams = {
  slug: string;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkCaseParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function WorkCasePage({
  params,
}: {
  params: Promise<WorkCaseParams>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <PageTransition>
      <Container className="py-16 md:py-24">
        <Link
          href="/work"
          transitionTypes={["nav-back"]}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.year} · {project.role}
        </p>
        <h1 className="mt-4 text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
          {project.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {project.tagline}
        </p>

        <ProjectCover
          slug={project.slug}
          src={project.image}
          alt={project.name}
          className="mt-12 aspect-[16/9] rounded-2xl border border-border"
          sizes="(max-width: 1280px) 100vw, 80rem"
          priority
        />

        <dl className="mt-12 grid gap-8 border-y border-border py-8 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Role
            </dt>
            <dd className="mt-2">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Stack
            </dt>
            <dd className="mt-2">{project.stack.join(" · ")}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Year
            </dt>
            <dd className="mt-2">{project.year}</dd>
          </div>
        </dl>

        <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
          {project.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl}>
              Live project
              <ArrowUpRight size={16} />
            </ButtonLink>
          ) : null}
          {project.repoUrl ? (
            <ButtonLink href={project.repoUrl} variant="ghost">
              Repository
              <ArrowUpRight size={16} />
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </PageTransition>
  );
}
