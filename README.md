# Agustin Alberdi — Portfolio

Personal site for a full stack engineer. Portfolite-inspired layout (dark, editorial, oversized type) with a restrained AI visual language. No chat backend.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. All copy and projects live in `content/` so you can update the site without touching UI.

Design tokens, section map, and agent rules: **[AGENTS.md](./AGENTS.md)**.

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is already taken (for example by another local app), run:

```bash
npx next dev -p 3010
```

```bash
npm run build   # production build
npm run lint    # eslint
```

## Edit your content

You should not need to redesign the site to add a job, a project, or a skill.

| What | File |
| --- | --- |
| Name, role, headline, bio, email, nav, skills, experience, process, capabilities, FAQ, SEO | [`content/site.ts`](content/site.ts) |
| Projects and case studies | [`content/projects.ts`](content/projects.ts) |

### Agency rename later

Change `site.name` (and `shortName`, `seo`) in `content/site.ts`. Capabilities, process, and FAQ are already written so a studio name still fits.

### Add a project

1. Drop a cover image in `public/projects/` (PNG/JPG, or SVG with `unoptimized` on `next/image`).
2. Append an object to `projects` in `content/projects.ts`:
   - `slug` — URL at `/work/[slug]`
   - `featured: true` — also shows on the home strip
   - `body` — paragraphs for the case study
3. Empty `testimonials` (and empty `articles` / `stats` if you clear them) hide those blocks automatically.

Experience dates and the Solarfy writeup are placeholders — tighten them when you have the real copy.

## Routes

- `/` — long-scroll home (hero, work, about, process, capabilities, proof, FAQ, contact)
- `/work` — all projects
- `/work/[slug]` — case study (shared-element transition from the cover)

## Stack notes

- Forced dark theme, one cyan accent, Geist Sans + Geist Mono
- View Transitions for home → case study
- Primary CTA is email (`agustinalberdi1@gmail.com` today)
- Seeded from the old [react-portfolio](https://github.com/agussalberdi/react-portfolio)

## Deploy

Preview on Vercel when you are ready (do not push production until you ask). Point `site.url` in `content/site.ts` at the real domain (`agustinalberdi.com` is the value from the old README).
