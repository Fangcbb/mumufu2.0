import { ProjectCard, SectionHeading } from "@/components/common";
import { PageShell } from "@/components/layout/page-shell";
import { projects } from "@/content";

export default function WorkPage() {
  return (
    <main className="flex-1 py-20 md:py-28">
      <PageShell>
        <section className="space-y-12">
          <SectionHeading
            eyebrow="Work"
            title="Selected projects across editorial, brand, and product contexts."
            description="A curated index of recent website and digital identity collaborations."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </PageShell>
    </main>
  );
}
