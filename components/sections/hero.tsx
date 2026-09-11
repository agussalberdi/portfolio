import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { mailtoHref, site } from "@/content";
import { ButtonLink } from "../button-link";
import { Container } from "../container";
import { StatusPill } from "../status-pill";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="hero-orb-layer pointer-events-none absolute -right-8 top-[-4%] size-[18rem] sm:-right-10 sm:size-[22rem] md:right-[-2%] md:top-[12%] md:size-[min(38vw,28rem)] lg:size-[min(34vw,30rem)]"
      >
        <Image
          src="/hero-orb.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 22rem, 38vw"
          className="hero-orb object-cover object-right"
        />
      </div>
      <Container className="relative flex min-h-0 flex-col justify-start gap-12 py-10 md:min-h-[calc(100svh-4.25rem)] md:justify-between md:gap-0 md:py-20">
        <div className="flex items-center justify-between gap-4">
          <StatusPill />
          <p className="relative z-10 hidden shrink-0 rounded-full border border-border bg-background/75 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground backdrop-blur-md md:inline-flex">
            {site.location}
          </p>
        </div>

        <div className="max-w-5xl">
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
