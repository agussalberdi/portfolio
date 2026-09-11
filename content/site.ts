import type { SiteContent } from "./types";

export const site: SiteContent = {
  name: "Agustin Alberdi",
  shortName: "AA",
  role: "Full Stack Engineer",
  location: "Buenos Aires, Argentina",
  availability: "Agustin Alberdi",
  email: "agustinalberdi1@icloud.com",
  url: "https://agustinalberdi.vercel.app/",
  headline: "Engineering that holds up.",
  subhead: "I help teams turn product problems into software that ships.",
  bio: [
    "Full stack engineer with a frontend-first background in large data-flow applications. I spent years shipping production UIs in Angular, RxJS, and TypeScript, and I also work in React and Next.js when the product calls for it.",
    "Now I take work from first pixel to production: interfaces, APIs, and the product decisions in between. I care about performance, reusable architecture, and making complex flows feel simple.",
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
  currentEmployer: {
    prefix: "Currently building digital products at",
    company: "DEPT®",
    href: "https://www.deptagency.com/latam/",
  },
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
  testimonials: [
    {
      name: "David Cano Nieto",
      role: "Senior Frontend Developer · Colleague",
      quote:
        "I had the pleasure of working alongside Agustin as a fellow front-end developer on a highly complex Angular project focused on bond pricing. From the start, Agustin impressed me with his technical depth, attention to detail, and ability to break down sophisticated requirements into clean, maintainable code.\n\nTogether, we delivered a high-performing, feature-rich application that was not only technically challenging but also critical for the business. Agustin was instrumental in shaping the architecture and ensuring best practices were followed throughout. Beyond his technical skills, he’s a great collaborator—easy to work with, proactive in tackling challenges, and always willing to help others on the team.\n\nAnyone would be lucky to have Agustin on their team. I hope we get to work together again in the future.",
    },
    {
      name: "Martin Cormier",
      role: "Senior Manager · Colleague",
      quote:
        "I had the pleasure of hiring Agustin as a Senior Frontend Developer, specializing in Angular. From day one, he brought not only strong technical expertise but also a positive and collaborative energy that greatly benefited the team.\n\nAgustin is a problem-solver at heart. His open-minded attitude allows him to focus on solutions rather than obstacles, making him a key player in any development team. He is also highly adaptable, time and time again, he stepped outside his comfort zone to tackle new challenges successfully. One great example of this was his ability to go beyond frontend development, learning to interact with serverless backend endpoints and even contributing to their implementation.\n\nBeyond his technical skills, working with Agustin is a truly enjoyable experience. His professionalism, flexibility, and charming personality make him a valuable asset to any team. I highly recommend him to any organization looking for a talented and versatile developer.",
    },
    {
      name: "Konstantin Gindemit",
      role: "Full stack Engineer · Colleague",
      quote:
        "I had the pleasure of working with Agustin at PLAY, and I can confidently say he is an exceptional Front-End Developer. His expertise in Angular, NgRx, and RxJS is truly impressive, and he consistently delivers high-quality applications. Whenever I had a question about Angular, Agustin was always my go-to person.\n\nBeyond his technical skills, Agustin is a fantastic teammate—approachable, friendly, and always eager to collaborate. He has a strong problem-solving mindset and a passion for continuous learning, making him a valuable asset to any development team.\n\nIf you're looking for a dedicated and highly skilled Angular developer who combines technical excellence with a great attitude, I sincerely recommend Agustin!",
    },
    {
      name: "Loren Grixti",
      role: "Senior Frontend Developer · Colleague",
      quote:
        "I had the pleasure of working with Agustin on the frontend development team, and he was a truly valuable colleague. Agustin's key strength lies in his exceptional troubleshooting skills. He possesses a remarkable ability to persevere and find solutions to even the most complex problems.\n\nBeyond his technical abilities, Agustin was a fantastic team player. He has excellent collaboration skills and always contributed positively to the team dynamic. I particularly remember during our off-site event, he was great company and kept everyone's spirits high. He also had a habit of giving genuine compliments, which made everyone feel appreciated and valued.\n\nI highly recommend him for any team looking for a skilled and positive front-end developer.",
    },
  ],
  faq: [],
  seo: {
    title: "Agustin Alberdi | Full Stack Engineer",
    description:
      "Full stack engineer based in Argentina. Product interfaces, data-heavy web apps, and the systems behind them.",
  },
};
