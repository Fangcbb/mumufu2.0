# Mumufu Studio Website

Phase 2 static structure for a high-end, restrained, immersive showcase site built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint + Prettier

## Scripts

```bash
npm run dev         # start development server
npm run lint        # run eslint
npm run typecheck   # run TypeScript checks
npm run format      # check prettier formatting
npm run build       # production build
```

## Directory Structure

```text
src/
  app/
    layout.tsx           # root layout + metadata + global header/footer
    page.tsx             # home page
    about/page.tsx       # about page
    work/page.tsx        # work index
    work/[slug]/page.tsx # static project detail pages
    contact/page.tsx     # contact page
    not-found.tsx        # 404 page
  components/
    common/              # reusable typography/layout section components
    layout/
      page-shell.tsx     # max-width layout wrapper
  config/
    site.ts              # site settings + navigation config
  content/
    index.ts             # mock data for home/about/work/contact
  lib/
    index.ts             # content query helpers
```

## Phase Status

- ✅ Phase 1: project initialization and baseline design system
- ✅ Phase 2: static page structure (Home / About / Work / Project / Contact / 404)
- ⏳ Phase 3+: motion, polish, and launch prep
