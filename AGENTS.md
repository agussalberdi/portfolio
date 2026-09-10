# Portfolio — agent guide

Source of truth for how this site is built and how it should look. Humans: see [README.md](README.md) for setup. Agents: read this before changing UI, content, or structure.

This is a **Portfolite-inspired** personal site (dark, editorial, oversized type) with a restrained AI aesthetic. It is **not** a Framer remix and **not** a chat product.

---

## Stack

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4
- Content lives in `content/` — components must not hardcode copy, projects, skills, or links
- Native View Transitions via React `<ViewTransition>` and `next/link` `transitionTypes` (Next 16). Do not add an invalid `experimental.viewTransition` key — it is not in this Next config schema.
- CSS for marquees, glow, and scroll motion — do not add Framer Motion unless CSS cannot do the job
- `site.name` is the public brand. A later agency rename is a content change, not a redesign

---

## Content model

| File | Owns |
| --- | --- |
| `content/site.ts` | Name, role, headline, bio, nav, socials, skills, experience, process, capabilities, stats, articles, FAQ, SEO |
| `content/projects.ts` | All case studies |
| `content/types.ts` | Shared types |
| `content/index.ts` | Re-exports + `getProject`, `getFeaturedProjects`, `mailtoHref` |

Rules:

- Optional blocks (`testimonials`, `articles`, `stats`) **must not render** when their arrays are empty
- Skills with `added: true` were not on the old site — keep them easy to delete
- Experience dates and new projects are expected to be edited by the owner; do not invent testimonials or fake metrics
- Primary CTA is always email (`site.email` / `mailtoHref()`)

---

## Sections (home, in order)

Use these `id`s. Nav hrefs in `site.nav` must stay in sync.

| Order | `id` | Purpose |
| --- | --- | --- |
| 0 | (nav) | Sticky. Brand = `site.shortName` / `site.name`. Links + Email CTA |
| 1 | `hero` | Status pill, oversized headline, subhead, Email + See work, scroll hint |
| 2 | `work` | Featured project strip → `/work/[slug]` |
| 3 | `about` | Bio, skills marquee, experience timeline |
| 4 | `process` | Three numbered steps (Define / Build / Ship) |
| 5 | `capabilities` | Four service-shaped cards (agency-ready) |
| 6 | `proof` | Stats and/or articles if content exists |
| 7 | `faq` | Accordion (`<details>` preferred) |
| 8 | `contact` | Availability line, mailto, socials |

Other routes:

- `/work` — full grid
- `/work/[slug]` — case study; shared-element morph from the cover (`project-${slug}`)

Do not add an LLM chat, API keys, or a fake terminal dump.

---

## Color tokens

Forced dark. Do not introduce a light theme or extra accent hues.

Defined in `app/globals.css` and mapped into Tailwind (`bg-background`, `text-foreground`, `text-muted`, `bg-surface`, `border-border`, `text-accent`).

| Token | Hex / value | Use |
| --- | --- | --- |
| `--background` | `#070708` | Page canvas |
| `--foreground` | `#f4f4f1` | Headlines and primary text |
| `--muted` | `#9a9a94` | Body, captions, nav idle |
| `--surface` | `#101012` | Cards, FAQ rows, elevated panels |
| `--surface-2` | `#17171b` | Hover / nested surface |
| `--border` | `rgba(244, 244, 241, 0.08)` | Hairlines, card edges |
| `--accent` | `#7dd3fc` | Labels, status, links, focus |
| `--accent-strong` | `#38bdf8` | Stronger hover |
| `--glow` | `rgba(125, 211, 252, 0.28)` | Button glow, cursor wash |

One accent only (cool cyan). No rainbow gradients, no purple+pink AI clichés.

---

## Typography

| Role | Font | Tailwind | Notes |
| --- | --- | --- | --- |
| UI / headlines / body | Geist Sans | `font-sans` | `--font-geist-sans` |
| Labels, status, stack, indexes | Geist Mono | `font-mono` | `--font-geist-mono` |

Scale (clamp, tracking tight on display):

- **Hero headline:** `text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] tracking-[-0.04em] font-medium`
- **Section title:** `text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.04em] font-medium`
- **Body:** `text-base` or `text-lg` / `leading-relaxed` / `text-muted`
- **Eyebrow / index:** `font-mono text-xs uppercase tracking-[0.2em] text-accent`

Agent chrome (allowed): small mono labels such as `SYS // WORK` or `01 / Define`. Do not fake a running agent transcript.

---

## Motion

- Marquees: CSS only; pause on hover; stop under `prefers-reduced-motion`
- Cursor glow: fine pointers only; disabled on coarse pointer and reduced motion
- Route transitions: `<ViewTransition>` with `default="none"` unless a trigger is explicit
- Shared covers: `name={\`project-${slug}\`}` and `share="morph"`
- Hierarchical nav: `transitionTypes={['nav-forward']}` (and `nav-back` when linking home)
- Do not wrap `{children}` in the root layout with a ViewTransition if pages have their own
- Nav may use `name="persistent-nav"` so it does not crossfade

---

## Layout

- Max content width ~ `80rem` (`max-w-7xl`), horizontal padding `px-5 md:px-8 lg:px-12`
- Section vertical rhythm `py-24 md:py-32`
- Cards: `rounded-2xl`, `bg-surface`, `border border-border`
- Primary button: filled foreground (or accent glow), pill or `rounded-full`
- Secondary button: hairline border, transparent fill

---

## Conventions

- Server Components by default. Client JS only for nav menu, cursor glow, and anything ViewTransition cannot do on the server
- Import icons from `lucide-react` named exports; do not create barrel files in this repo
- Images through `next/image` (SVGs: `unoptimized`)
- Keep components composition-friendly (section shell, card, marquee) so an agency pass is tokens + `content/site.ts`
- Match existing file names and section `id`s rather than renaming for taste
