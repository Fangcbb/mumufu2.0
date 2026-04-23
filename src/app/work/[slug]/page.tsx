import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { projects } from "@/content";
import { getProjectBySlug } from "@/lib";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 py-20 md:py-28">
      <PageShell>
        <article className="max-w-4xl space-y-14">
          <header className="space-y-5">
            <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">
              {project.category} · {project.year}
            </p>
            <h1 className="text-balance text-4xl leading-tight font-medium md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg text-sand-soft">{project.description}</p>
          </header>

          <div
            className="aspect-[16/9] w-full border border-line bg-ink-soft"
            aria-label={project.heroImageAlt}
          />

          <section className="grid gap-10 border-t border-line pt-10 md:grid-cols-[1fr_2fr]">
            <h2 className="text-sm tracking-[0.2em] text-sand-soft uppercase">Scope</h2>
            <ul className="space-y-3 text-lg">
              {project.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>
        </article>
      </PageShell>
    </main>
  );
}
