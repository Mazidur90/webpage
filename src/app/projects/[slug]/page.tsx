import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
