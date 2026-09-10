import { site } from "@/content";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="SYS // PROCESS"
          title="How the work moves"
          description="A short loop. Define the outcome, build the slice, ship it into production."
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {site.process.map((step) => (
            <li
              key={step.index}
              className="rounded-2xl border border-border bg-surface p-6 md:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {step.index} / {step.title}
              </p>
              <h3 className="mt-6 text-2xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
