import Link from "next/link";
import type { Project } from "@/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between border border-line bg-ink-soft/40 p-6 md:p-8">
      <div className="space-y-4">
        <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">
          {project.category} · {project.year}
        </p>
        <h3 className="text-2xl leading-tight md:text-3xl">{project.title}</h3>
        <p className="text-sand-soft">{project.summary}</p>
      </div>
      <Link
        href={`/work/${project.slug}`}
        className="mt-8 text-sm tracking-wide text-sand underline underline-offset-4"
      >
        View project
      </Link>
    </article>
  );
}
