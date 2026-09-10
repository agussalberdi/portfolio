"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content";
import { cn } from "@/lib/utils";
import { ProjectCover } from "./project-cover";

type ProjectCardProps = {
  project: Project;
  size?: "feature" | "grid";
};

export function ProjectCard({ project, size = "grid" }: ProjectCardProps) {
  const feature = size === "feature";

  return (
    <Link
      href={`/work/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className={cn(
        "group relative block shrink-0 overflow-hidden rounded-2xl border border-border bg-surface",
        feature
          ? "h-[28rem] w-[min(85vw,32rem)] md:h-[34rem] md:w-[38rem]"
          : "w-full",
      )}
    >
      <ProjectCover
        slug={project.slug}
        src={project.image}
        alt={project.name}
        className={cn(
          "transition-transform duration-700 ease-out group-hover:scale-[1.04]",
          feature ? "h-full" : "aspect-[16/11]",
        )}
        sizes={
          feature
            ? "(max-width: 768px) 85vw, 38rem"
            : "(max-width: 768px) 100vw, 50vw"
        }
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {project.year} · {project.role}
        </p>
        <div className="mt-2 flex items-end justify-between gap-3">
          <div>
            <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-muted md:text-base">
              {project.tagline}
            </p>
          </div>
          <span className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-foreground sm:inline-flex">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
