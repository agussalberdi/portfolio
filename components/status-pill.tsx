import { site } from "@/content";

export function StatusPill({ label }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:tracking-[0.18em]">
      <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--glow)]" />
      {label ?? site.availability}
    </span>
  );
}
