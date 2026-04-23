/**
 * Global site settings used by metadata and shared UI.
 * Keeping these values in one place simplifies future CMS/API integration.
 */
export const siteConfig = {
  name: "Mumufu Studio",
  url: "https://example.com",
  description: "A restrained, immersive showcase website framework built with Next.js.",
  locale: "en_US",
} as const;

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;
