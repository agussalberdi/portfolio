import { site } from "@/content";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="SYS // CAPABILITIES"
          title="What I take on"
          description="Written so a studio name still fits. Frontend-led, full-stack when the product needs it."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {site.capabilities.map((capability, index) => (
            <li
              key={capability.title}
              className="rounded-2xl border border-border bg-surface p-6 md:p-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                0{index + 1}
              </p>
              <h3 className="mt-6 text-2xl font-medium tracking-tight">
                {capability.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                {capability.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
