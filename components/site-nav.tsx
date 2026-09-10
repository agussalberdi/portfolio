"use client";

import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mailtoHref, site } from "@/content";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button-link";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <ViewTransition name="persistent-nav" default="none">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.25rem] md:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center"
            transitionTypes={["nav-back"]}
            onClick={() => setOpen(false)}
            aria-label={site.name}
          >
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className="size-9 object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href={mailtoHref("Project inquiry")}
              className="hidden sm:inline-flex"
            >
              Email me
            </ButtonLink>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "border-t border-border bg-background lg:hidden",
            open ? "block" : "hidden",
          )}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href={mailtoHref("Project inquiry")}
              className="mt-3"
            >
              Email me
            </ButtonLink>
          </nav>
        </div>
      </header>
    </ViewTransition>
  );
}
