"use client";
import { projects, Category } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const categories: Category[] = [
    "Hardware Programming & Automation",
    "Embedded Systems Development",
    "AI and Software Automation",
    "Cyber Physical Systems",
  ];

  return (
    <div className="w-full flex flex-col pt-32 pb-16 px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto w-full"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h1>
        <p className="text-secondary text-lg mb-16 max-w-2xl">
          A showcase of my recent engineering work divided by technical domain, highlighting embedded hardware, automation software, and integrated cyber-physical networks.
        </p>

        <div className="flex flex-col gap-20">
          {categories.map((category) => {
            const sectionProjects = projects.filter(p => p.category === category);
            if (sectionProjects.length === 0) return null;
            return (
              <section key={category}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-extrabold">{category}</h2>
                  <div className="h-px flex-1 bg-border mt-2"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sectionProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
