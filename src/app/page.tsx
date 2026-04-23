import { PageShell } from "@/components/layout/page-shell";

export default function Home() {
  return (
    <main className="flex-1 py-24 md:py-32">
      <PageShell>
        <section className="max-w-3xl space-y-8">
          <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">Phase 1</p>
          <h1 className="text-balance text-4xl leading-[1.05] font-medium md:text-6xl">
            Foundation initialized for a refined, production-ready showcase website.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-sand-soft md:text-lg">
            Core architecture, typography system, color tokens, spacing scale, linting, and
            formatting have been established. Next step will build all static pages and route
            structure before motion enhancements.
          </p>
        </section>
      </PageShell>
    </main>
  );
}
