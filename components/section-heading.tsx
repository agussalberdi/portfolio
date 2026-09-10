import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {index ? <span className="mr-3 text-muted">{index}</span> : null}
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
