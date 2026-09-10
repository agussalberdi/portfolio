import { ArrowDown } from "lucide-react";
import { mailtoHref, site } from "@/content";
import { ButtonLink } from "../button-link";
import { Container } from "../container";
import { StatusPill } from "../status-pill";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Container className="flex min-h-[calc(100svh-4.25rem)] flex-col justify-between py-16 md:py-20">
        <div className="flex items-center justify-between gap-4">
          <StatusPill />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            SYS // {site.location}
          </p>
        </div>

        <div className="max-w-5xl py-16 md:py-0">
          <h1 className="text-[clamp(3rem,10vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.04em]">
            {site.headline}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {site.subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={mailtoHref("Let’s work together")}>
              Get started
            </ButtonLink>
            <ButtonLink href="/#work" variant="ghost">
              See work
            </ButtonLink>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <p className="max-w-xs font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {site.role}
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
          >
            Scroll to work
            <ArrowDown size={14} />
          </a>
        </div>
      </Container>
    </section>
  );
}
