import { PageShell } from "@/components/layout/page-shell";
import { aboutContent } from "@/content";

export default function AboutPage() {
  return (
    <main className="flex-1 py-20 md:py-28">
      <PageShell>
        <article className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-5">
            <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">Studio Profile</p>
            <h1 className="text-balance text-5xl leading-[1.04] font-medium md:text-7xl">
              {aboutContent.title}
            </h1>
            <p className="max-w-3xl text-xl text-sand-soft">{aboutContent.intro}</p>
          </header>

          <div className="space-y-7 border-t border-line pt-10 text-lg leading-relaxed text-sand-soft md:text-xl">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </PageShell>
    </main>
  );
}
