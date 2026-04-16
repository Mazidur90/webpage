"use client";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectClient({ project }: { project: Project }) {
  return (
    <div className="w-full flex flex-col pt-32 pb-16 px-8 min-h-screen max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link href="/projects" className="flex items-center gap-2 text-secondary hover:text-foreground transition-colors mb-8 w-fit">
          <ArrowLeft className="w-5 h-5" /> Back to Projects
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{project.title}</h1>
            <p className="text-xl text-secondary">{project.description}</p>
          </div>
          <div className="flex gap-4">
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity">
                <FaGithub className="w-5 h-5" /> Source
              </Link>
            )}
          </div>
        </div>

        <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-card">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Project Details</h2>
            <p className="text-lg text-secondary leading-relaxed whitespace-pre-line">
              {project.details}
            </p>
          </div>
          <div className="space-y-8 glass-card p-6 rounded-2xl h-fit border border-border">
            <div>
              <h3 className="font-bold text-lg mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-foreground/10 rounded-full text-foreground/80 font-medium text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
               <h3 className="font-bold text-lg mb-3">Applications</h3>
               <ul className="list-disc pl-5 text-secondary space-y-2">
                 {project.applications.map(app => (
                   <li key={app}>{app}</li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
