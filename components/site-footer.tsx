import { ArrowUpRight } from "lucide-react";
import { mailtoHref, site } from "@/content";
import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { StatusPill } from "./status-pill";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border">
      <Container className="py-24 md:py-32">
        <StatusPill />
        <h2 className="mt-8 max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
          Curious what we can ship together?
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.role} · {site.location}. Send the problem, the constraints, and
          a timeline.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href={mailtoHref("Let’s work together")}>
            {site.email}
            <ArrowUpRight size={16} />
          </ButtonLink>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted">
          <p>
            {site.name} · {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap gap-5">
            {site.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="transition-colors hover:text-accent"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
