"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/content";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

type WorkCarouselProps = {
  projects: Project[];
  className?: string;
};

export function WorkCarousel({ projects, className }: WorkCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || projects.length < 2) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const intervalMs = 4200;
    const id = window.setInterval(() => {
      if (pausedRef.current) return;

      const items = Array.from(
        scroller.querySelectorAll<HTMLElement>("[data-carousel-item]"),
      );
      if (items.length === 0) return;

      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const nearEnd = scroller.scrollLeft >= maxScroll - 8;

      if (nearEnd) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      const next = items.find(
        (item) => item.offsetLeft > scroller.scrollLeft + 24,
      );
      if (next) {
        scroller.scrollTo({ left: next.offsetLeft, behavior: "smooth" });
      }
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [projects.length]);

  return (
    <div
      ref={scrollerRef}
      className={cn(
        "hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-8",
        // Wider side inset so cards breathe and peek the next one
        "px-8 md:px-14 lg:px-20 xl:px-28",
        className,
      )}
      onPointerEnter={() => {
        pausedRef.current = true;
      }}
      onPointerLeave={() => {
        pausedRef.current = false;
      }}
      onFocusCapture={() => {
        pausedRef.current = true;
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          pausedRef.current = false;
        }
      }}
    >
      {projects.map((project) => (
        <div key={project.slug} data-carousel-item className="snap-start">
          <ProjectCard project={project} size="feature" />
        </div>
      ))}
    </div>
  );
}
