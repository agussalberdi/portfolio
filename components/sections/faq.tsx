import { site } from "@/content";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

export function Faq() {
  if (site.faq.length === 0) return null;

  return (
    <section id="faq" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="SYS // FAQ"
          title="Answers"
          description="The usual questions before a first email."
        />
        <div className="divide-y divide-border border-y border-border">
          {site.faq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg md:text-xl">
                {item.question}
                <span className="font-mono text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
