import { site } from "@/content";
import { Container } from "../container";
import { Marquee } from "../marquee";
import { SectionHeading } from "../section-heading";

export function About() {
  const employer = site.currentEmployer;

  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="SYS // ABOUT"
          title={`Meet ${site.name.split(" ")[0]}`}
        />
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {site.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-lg leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {employer ? (
          <p className="mt-10 text-lg leading-relaxed text-muted">
            {employer.prefix}{" "}
            <a
              href={employer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {employer.company}
            </a>
            .
          </p>
        ) : null}
      </Container>

      <div className="mt-16 border-y border-border py-6">
        <Marquee>
          {site.skills.map((skill) => (
            <span
              key={skill.name}
              className="font-mono text-sm uppercase tracking-[0.18em] text-muted"
            >
              {skill.name}
              {skill.added ? (
                <span className="ml-2 text-[10px] text-accent">+</span>
              ) : null}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
