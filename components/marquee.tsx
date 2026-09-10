import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("marquee", className)}>
      <div className="marquee-track">
        <div className="flex items-center gap-10 pr-10">{children}</div>
        <div className="flex items-center gap-10 pr-10" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
