import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "solarfy",
    name: "Solarfy",
    tagline: "Solar savings, quantified.",
    description:
      "Full-stack estimator for residential solar in Argentina — panels, ROI, and a path to certified installers.",
    role: "Full stack",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    image: "/projects/solarfy.png",
    featured: true,
    body: [
      "Solarfy is a current product: a calculator that turns a household energy bill into a concrete solar plan — panel count, payback, and installer quotes under Argentina’s distributed-generation rules.",
      "The work spans the interface, the estimation model, and the account/admin surfaces. Treat this writeup as a placeholder to tighten once the public launch copy is locked.",
    ],
  },
  {
    slug: "swellsense",
    name: "SwellSense",
    tagline: "Your AI Surf Caddy.",
    description:
      "AI surf companion with real-time vibe scores, forecasts, and board picks for your favourite breaks.",
    role: "Full stack",
    year: "",
    stack: ["Next.js", "TypeScript", "AI SDK", "Drizzle", "Stripe", "Auth.js"],
    image: "/projects/swellsense.png",
    featured: true,
    body: [
      "SwellSense is an AI Surf Caddy: real-time conditions, vibe scores, and board recommendations so you show up when it is pumping.",
    ],
  },
  {
    slug: "mojito",
    name: "Velvet Pour",
    tagline: "Cool. Crisp. Classic.",
    description:
      "Animated cocktail landing page — scroll-driven GSAP motion and a moody Velvet Pour brand experience.",
    role: "Frontend",
    year: "2025",
    stack: ["React", "Vite", "GSAP", "Tailwind"],
    liveUrl: "https://mojito-landing-seven.vercel.app/",
    image: "/projects/mojito.png",
    featured: true,
    body: [
      "A modern animated landing for Velvet Pour. GSAP scroll animations, cocktail hero, and a minimal cocktail-bar aesthetic.",
    ],
  },
  {
    slug: "landa",
    name: "LANDA",
    tagline: "A law studio, on the page.",
    description: "Marketing site for Landa, a law studio.",
    role: "Frontend",
    year: "2020",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    liveUrl: "https://landing-landa.netlify.app",
    repoUrl: "https://github.com/agussalberdi/Landa",
    image: "/projects/landa.png",
    featured: false,
    body: [
      "A focused landing page for a law studio: hierarchy, trust, and a clear path to contact.",
      "HTML, CSS, and JavaScript — no framework for a site that did not need one.",
    ],
  },
  {
    slug: "segumax",
    name: "SEGUMAX",
    tagline: "Insurance, introduced.",
    description: "Marketing site for Segumax, an insurance company.",
    role: "Frontend",
    year: "2020",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    liveUrl: "https://home-seguros.netlify.app",
    repoUrl: "https://github.com/agussalberdi/home-seguros",
    image: "/projects/segumax.png",
    featured: false,
    body: [
      "Homepage for an insurance brand: services, proof, and a conversion path that stays readable on mobile.",
      "Same vanilla stack as LANDA — intentional, not a limitation.",
    ],
  },
];
