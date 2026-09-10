import { site } from "@/content";
import { Container } from "../container";
import { Marquee } from "../marquee";
import { SectionHeading } from "../section-heading";

export function About() {
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

      <Container className="mt-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Experience
        </p>
        <ol className="mt-8 divide-y divide-border border-y border-border">
          {site.experience.map((item) => (
            <li
              key={`${item.company}-${item.role}`}
              className="grid gap-4 py-8 md:grid-cols-[12rem_1fr_8rem] md:items-start"
            >
              <div>
                <p className="font-medium">{item.role}</p>
                <p className="mt-1 text-muted">{item.company}</p>
              </div>
              <p className="text-muted leading-relaxed">{item.summary}</p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted md:text-right">
                {item.current ? "Currently · " : null}
                {item.period}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
