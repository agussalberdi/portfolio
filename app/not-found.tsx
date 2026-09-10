import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageTransition } from "@/components/page-transition";

export default function NotFound() {
  return (
    <PageTransition>
      <Container className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          SYS // 404
        </p>
        <h1 className="mt-4 text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
          This route does not exist.
        </h1>
        <div className="mt-10">
          <ButtonLink href="/" transitionTypes={["nav-back"]}>
            Back home
          </ButtonLink>
        </div>
      </Container>
    </PageTransition>
  );
}
