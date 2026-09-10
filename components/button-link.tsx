import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
  transitionTypes?: string[];
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  transitionTypes,
}: ButtonLinkProps) {
  const classes = cn(
    variant === "primary" ? "btn-primary" : "btn-ghost",
    className,
  );
  const isExternal =
    external ??
    (href.startsWith("http") || href.startsWith("mailto:"));

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} transitionTypes={transitionTypes}>
      {children}
    </Link>
  );
}
