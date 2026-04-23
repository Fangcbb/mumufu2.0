import Link from "next/link";
import { ProjectCard, SectionHeading } from "@/components/common";
import { PageShell } from "@/components/layout/page-shell";
import { homeContent } from "@/content";
import { getSelectedProjects } from "@/lib";

export default function Home() {
  const selectedProjects = getSelectedProjects(2);

  return (
    <main className="flex-1 py-20 md:py-28">
      <PageShell>
        <div className="space-y-[var(--space-section)]">
          <section className="max-w-4xl space-y-8">
            <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">
              {homeContent.hero.eyebrow}
            </p>
            <h1 className="text-balance text-5xl leading-[1.02] font-medium md:text-7xl">
              {homeContent.hero.title}
            </h1>
            <p className="max-w-2xl text-lg text-sand-soft">{homeContent.hero.blurb}</p>
          </section>

          <section className="border-t border-line pt-14 md:pt-20">
            <SectionHeading title={homeContent.manifesto.title} />
            <div className="mt-8 grid max-w-4xl gap-6 text-lg text-sand-soft md:text-xl">
              {homeContent.manifesto.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>

          <section className="border-t border-line pt-14 md:pt-20">
            <SectionHeading
              title="Selected Work"
              description="A concise selection of recent engagements."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {selectedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <Link
              href="/work"
              className="mt-8 inline-block text-sm text-sand underline underline-offset-4"
            >
              View all work
            </Link>
          </section>

          <section className="border-t border-line pt-14 md:pt-20">
            <SectionHeading
              title={homeContent.aboutPreview.title}
              description={homeContent.aboutPreview.body}
            />
            <Link
              href="/about"
              className="mt-8 inline-block text-sm text-sand underline underline-offset-4"
            >
              Read studio profile
            </Link>
          </section>

          <section className="border-t border-line pt-14 md:pt-20">
            <SectionHeading title={homeContent.cta.title} description={homeContent.cta.body} />
            <Link
              href={homeContent.cta.actionHref}
              className="mt-8 inline-block border border-sand px-6 py-3 text-sm tracking-wide uppercase"
            >
              {homeContent.cta.actionLabel}
            </Link>
          </section>
        </div>
      </PageShell>
    </main>
  );
}
