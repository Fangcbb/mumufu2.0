# Mumufu Studio Website

Phase 1 foundation for a high-end, restrained, immersive showcase site built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

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

## Directory Structure (Phase 1)

```text
src/
  app/
    globals.css          # global tokens, baseline styles
    layout.tsx           # root layout + base metadata
    page.tsx             # temporary phase entry page
  components/
    common/              # shared presentational components (planned)
    layout/
      page-shell.tsx     # reusable max-width layout wrapper
  config/
    site.ts              # centralized site settings + navigation config
  content/               # content-layer files (planned)
  lib/                   # reusable utils/helpers (planned)
```

## Phase Status

- ✅ Phase 1: project initialization and baseline design system
- ⏳ Phase 2: static page structure (Home / About / Work / Project / Contact / 404)
- ⏳ Phase 3+: motion, polish, and launch prep

## Repository Asset Policy (Current PR)

This PR is intentionally **text-only/source-only** and does not include favicon or other binary/static media assets.

