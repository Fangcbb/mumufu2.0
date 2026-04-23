import { projects } from "@/content";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getSelectedProjects(limit = 2) {
  return projects.slice(0, limit);
}
