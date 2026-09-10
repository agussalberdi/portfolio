import type { SiteContent } from "./types";

export const site: SiteContent = {
  name: "Agustin Alberdi",
  shortName: "AA",
  role: "Full Stack Engineer",
  location: "Argentina",
  availability: "Let's talk",
  email: "agustinalberdi1@icloud.com",
  url: "https://agustinalberdi.vercel.app/",
  headline: "Engineering you can ship.",
  subhead:
    "I build data-heavy products end to end — the interface people touch and the systems that keep it running.",
  bio: [
    "Full stack engineer with a frontend-first background in large data-flow applications. I spent years shipping production UIs in Angular, RxJS, and TypeScript, and I also work in React and Next.js when the product calls for it.",
    "Now I take work from first pixel to production: interfaces, APIs, and the product decisions in between. I care about performance, reusable architecture, and a user journey that feels inevitable rather than clever.",
  ],
  nav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Process", href: "/#process" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Contact", href: "/#contact" },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/agustinalberdi/",
    },
    { label: "GitHub", href: "https://github.com/agussalberdi" },
    { label: "Email", href: "mailto:agustinalberdi1@icloud.com" },
  ],
  skills: [
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Angular" },
    { name: "RxJS" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Next.js", added: true },
    { name: "Node", added: true },
    { name: "Tailwind", added: true },
    { name: "Supabase", added: true },
    { name: "Firebase" },
    { name: "Vercel", added: true },
    { name: "Git" },
  ],
  experience: [
    {
      role: "Front End Engineer",
      company: "Origin Markets",
      period: "2022 — Present",
      current: true,
      summary:
        "Shipped and evolved frontend surfaces for a fully digital debt capital markets platform. Focus on scalable UI architecture, performance, and translating complex financial flows into clear product.",
    },
    {
      role: "Frontend engineering",
      company: "Product & assessments",
      period: "2018 — 2022",
      summary:
        "Built production-style apps and take-home products across iGaming, health, and marketing sites — Angular, React, and vanilla stacks with an emphasis on reusable components.",
    },
  ],
  process: [
    {
      index: "01",
      title: "Define",
      description:
        "Lock the outcome, the constraints, and the user path before a line of code. Scope that can actually ship.",
    },
    {
      index: "02",
      title: "Build",
      description:
        "End-to-end delivery across interface, data, and infrastructure, with reusable architecture and measurable performance.",
    },
    {
      index: "03",
      title: "Ship",
      description:
        "Production, not a prototype graveyard. Observability, iteration, and a handoff you can keep building on.",
    },
  ],
  capabilities: [
    {
      title: "Product frontend",
      description:
        "Data-heavy interfaces in React and Angular, with a focus on performance and a user journey that stays fast on real devices.",
    },
    {
      title: "Full-stack apps",
      description:
        "Next.js, APIs, and data models that match the UI, with one engineer who can own the vertical slice.",
    },
    {
      title: "Design systems",
      description:
        "Reusable components and tokens so the product stays coherent as it grows, reducing the cost of design changes and content updates.",
    },
    {
      title: "Performance",
      description:
        "Lazy loading, lean bundles, and layouts that hold up. Fast because it was designed that way, not patched later.",
    },
  ],
  stats: [
    { value: "7+", label: "Years shipping large scale applications" },
    { value: "Full stack", label: "From design to deployment" },
    { value: "UTC−3", label: "Argentina · remote-friendly" },
  ],
  articles: [
    {
      title: "Communication between components in Angular applications",
      href: "https://www.linkedin.com/pulse/communication-between-components-angular-applications-agustin-1f/",
    },
    {
      title: "Angular lazy loading your feature modules",
      href: "https://www.linkedin.com/pulse/angular-lazy-loading-your-feature-modules-agustin-alberdi-hernandez/",
    },
  ],
  testimonials: [],
  faq: [
    {
      question: "What do you actually build?",
      answer:
        "Product interfaces and the stack behind them. Most of my production work has been data-heavy frontends (Angular, React, TypeScript). I also take full-stack slices in Next.js when the product needs it.",
    },
    {
      question: "How do we start?",
      answer:
        "Email me with the problem, the constraints, and a rough timeline. If it is a fit, we define a first slice and start there — not a 40-page proposal.",
    },
    {
      question: "How long does a project take?",
      answer:
        "A focused landing or UI slice can land in days. A production product surface is usually weeks, not months of theatre. I will tell you if the ask does not match the calendar.",
    },
    {
      question: "Do you work remotely?",
      answer:
        "Yes. I am based in Argentina (UTC−3) and work with teams in other timezones. Overlap hours are part of how I run an engagement.",
    },
    {
      question: "Contract, freelance, or full-time?",
      answer:
        "Open to the shape that fits the work: contract, freelance, or a full-time role. Say what you need in the first email.",
    },
    {
      question: "Can you join an existing codebase?",
      answer:
        "That is most of the job. I am used to large Angular and React apps, design systems already in flight, and shipping inside constraints rather than greenfield demos.",
    },
  ],
  seo: {
    title: "Agustin Alberdi | Full Stack Engineer",
    description:
      "Full stack engineer based in Argentina. Product interfaces, data-heavy web apps, and the systems behind them.",
  },
};
