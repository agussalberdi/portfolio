import { ArrowUpRight } from "lucide-react";
import { site } from "@/content";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

export function Proof() {
  const hasStats = site.stats.length > 0;
  const hasArticles = site.articles.length > 0;
  const hasTestimonials = site.testimonials.length > 0;

  if (!hasStats && !hasArticles && !hasTestimonials) {
    return null;
  }

  return (
    <section id="proof" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="SYS // PROOF"
          title="Signal, not theatre"
        />

        {hasStats ? (
          <ul className="grid gap-4 sm:grid-cols-3">
            {site.stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl border border-border bg-surface p-6 md:p-8"
              >
                <p className="text-3xl font-medium tracking-tight md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {hasArticles ? (
          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Writing
            </p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {site.articles.map((article) => (
                <li key={article.href}>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent"
                  >
                    <span className="text-lg md:text-xl">{article.title}</span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasTestimonials ? (
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {site.testimonials.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-border bg-surface p-6 md:p-8"
              >
                <p className="text-lg leading-relaxed">“{item.quote}”</p>
                <p className="mt-6 font-medium">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}
