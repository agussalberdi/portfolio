"use client";

import { ViewTransition } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  slug: string;
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
};

export function ProjectCover({
  slug,
  src,
  alt,
  className,
  sizes,
  priority,
}: ProjectCoverProps) {
  return (
    <ViewTransition name={`project-${slug}`} share="morph">
      <div className={cn("relative overflow-hidden bg-surface-2", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized={src.endsWith(".svg")}
          className="object-cover"
          sizes={sizes}
        />
      </div>
    </ViewTransition>
  );
}
