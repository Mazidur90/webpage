"use client";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden flex flex-col group relative"
    >
      <div className="relative w-full h-48">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link href={`/projects/${project.slug}`} className="bg-white text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            View Case Study <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 z-10 bg-background/50">
        <div className="flex justify-between items-start mb-4 gap-4">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl font-bold hover:text-secondary transition-colors">{project.title}</h3>
          </Link>
          <div className="flex gap-2 shrink-0 text-secondary">
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" className="hover:text-foreground">
                 <FaGithub className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        <p className="text-secondary text-sm mb-6 flex-1 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold px-2 py-1 bg-foreground text-background/90 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
