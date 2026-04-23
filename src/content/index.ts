export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  services: string[];
  heroImageAlt: string;
};

export const homeContent = {
  hero: {
    eyebrow: "Independent Digital Studio",
    title: "Designing quiet, high-impact digital experiences.",
    blurb:
      "Mumufu Studio builds editorial-grade websites that balance clarity, narrative, and craft.",
  },
  manifesto: {
    title: "Manifesto",
    body: [
      "We believe premium digital work is defined less by decoration and more by intent.",
      "Every line, margin, and word should support a clear story and a confident point of view.",
    ],
  },
  aboutPreview: {
    title: "About Mumufu",
    body: "A compact, multidisciplinary studio working with founders, cultural institutions, and product teams that value sharp positioning and elegant execution.",
  },
  cta: {
    title: "Start a project",
    body: "Currently accepting a small number of collaborations for Q3 2026.",
    actionLabel: "Get in touch",
    actionHref: "/contact",
  },
} as const;

export const aboutContent = {
  title: "About",
  intro:
    "Mumufu Studio is a small practice focused on narrative-driven digital design with a restrained visual language.",
  paragraphs: [
    "Our approach blends strategy, copy, and interface design into cohesive systems that feel intentional from first impression to final interaction.",
    "We work best with teams who value quality over volume and long-term brand equity over short-term trends.",
    "From early positioning workshops to production-ready interface systems, we shape digital spaces that are calm, legible, and distinct.",
  ],
} as const;

export const contactContent = {
  title: "Contact",
  intro: "For new projects, partnerships, or press, reach out directly.",
  email: "hello@mumufu.studio",
  location: "New York, NY",
} as const;

export const projects: Project[] = [
  {
    slug: "northbound-journal",
    title: "Northbound Journal",
    category: "Editorial Platform",
    year: "2026",
    summary: "A premium reading experience for long-form stories and field notes.",
    description:
      "We designed a modular editorial system with generous rhythm, disciplined typography, and a publishing flow optimized for thoughtful storytelling.",
    services: ["Positioning", "Art Direction", "Interface Design"],
    heroImageAlt: "Abstract placeholder representing Northbound Journal",
  },
  {
    slug: "auric-capital",
    title: "Auric Capital",
    category: "Corporate Website",
    year: "2025",
    summary: "A confident digital identity for a next-generation investment firm.",
    description:
      "The site uses a concise information architecture and refined spacing strategy to communicate credibility, discretion, and long-term vision.",
    services: ["Information Architecture", "Visual Design", "Frontend Build"],
    heroImageAlt: "Abstract placeholder representing Auric Capital",
  },
  {
    slug: "atelier-mori",
    title: "Atelier Mori",
    category: "Portfolio Experience",
    year: "2025",
    summary: "A minimal showcase for contemporary interiors and objects.",
    description:
      "We translated the studio's tactile material language into a digital format that highlights imagery while keeping navigation precise and understated.",
    services: ["Content Direction", "UX Design", "Design System"],
    heroImageAlt: "Abstract placeholder representing Atelier Mori",
  },
];
