"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const experience = [
  {
    company: "Dassault Systèmes",
    role: "SDK Developer — Multiphysics",
    period: "09/2025 – 01/2026",
    tags: ["PhysX (pHYx)", "Node.js", "Unity", "WebSocket", "SIMULIA SDK"],
    bullets: [
      "Built SDK modules for multiphysics simulation coupling within SIMULIA ecosystem.",
      "Integrated NVIDIA PhysX for real-time rigid-body and fluid dynamics feedback.",
      "Node.js middleware services exposing simulation APIs with sub-100 ms WebSocket streaming.",
      "Unity 3D visualisation layer consuming live SDK telemetry for interactive physics inspection.",
    ],
  },
  {
    company: "Fraunhofer IWS",
    role: "Software Developer (Werkstudent)",
    period: "02/2025 – 08/2025",
    tags: ["Python", "C++", "Node.js", "PyQt", "RSF/SEGY", "HPC"],
    bullets: [
      "Built seismic modelling pipelines with Python & Madagascar RSF for 3D wavefield simulations.",
      "Desktop tools in PyQt and C++ for RSF/SEGY conversion, model visualisation, and batch processing.",
      "FMPI-based co-simulations coupling Python engines with external computation models.",
      "Node.js REST APIs syncing scientific Python backends across distributed HPC systems.",
    ],
  },
  {
    company: "SHINING 3D Automation",
    role: "Software Developer Intern",
    period: "05/2024 – 01/2025",
    tags: ["React", "C#", ".NET 8.1", "Azure", "MongoDB"],
    bullets: [
      "Client software via proprietary SDK using React and C# .NET 8.1.",
      "Azure pipeline with MongoDB and SATA to reduce production downtime.",
      "Front-end for in-house C++ software managing host and server administration.",
    ],
  },
  {
    company: "ZF Friedrichshafen AG",
    role: "Software Developer (Werkstudent)",
    period: "08/2023 – 04/2024",
    tags: ["Python", "Asp.NET", "Angular", "Power BI", "JIRA"],
    bullets: [
      "Migrated IMS Client database to EDA Matplus via Asp.NET and Angular.",
      "Extended Python algorithm for API upload and automatic JSON file generation.",
      "Power BI dashboard for magnet list pricing with material properties.",
    ],
  },
];

const skills = [
  { name: "Embedded C / C++", pct: 90 },
  { name: "Python Automation", pct: 92 },
  { name: "MATLAB / Simulink", pct: 85 },
  { name: "UR Robot (RTDE)", pct: 88 },
  { name: "OPC-UA / MQTT", pct: 84 },
  { name: "Next.js / React", pct: 78 },
];

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">

      {/* ── HERO SPLIT ── */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-[300px] md:w-[380px] lg:w-[440px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
                <Image
                  src="/webpage/developer-profile-office.png"
                  alt="Mazidur Rahman"
                  fill
                  className="object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/140770963?v=4";
                  }}
                />
              </div>
              {/* Subtle bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent rounded-b-[2.5rem]" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex-1 flex flex-col gap-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">About Me</p>
            <h1 className="headline-lg">
              Engineer.<br />
              <span style={{ color: "var(--secondary)" }}>Builder.</span><br />
              Problem Solver.
            </h1>
            <p className="text-lg text-secondary leading-relaxed" style={{ fontWeight: 300 }}>
              Passionate software engineer with deep focus on industrial automation, digital twins, and full-stack development. I build robust systems that bridge the gap between hardware functionality and software architecture.
            </p>
            <p className="text-lg text-secondary leading-relaxed" style={{ fontWeight: 300 }}>
              Hands-on experience resolving complex pipeline issues — OPC-UA, lower-level C++ motor controllers, MATLAB simulation, and PolyWorks metrology. My approach always emphasises reliability and efficiency.
            </p>

            {/* Stats */}
            <div className="flex gap-10 pt-4 border-t border-border">
              {[
                { value: "5+", label: "Years Exp." },
                { value: "18+", label: "Projects" },
                { value: "3", label: "Domains" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-bold tracking-tight">{s.value}</div>
                  <div className="text-xs text-secondary mt-1 uppercase tracking-widest font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/projects" className="flex items-center gap-2 text-sm font-semibold w-fit hover:gap-3 transition-all">
              See all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section-alt py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4">Proficiency</p>
            <h2 className="headline-lg mb-14">Core Skills</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-semibold">{s.name}</span>
                  <span className="text-secondary text-sm">{s.pct}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ background: "var(--border)" }}>
                  <motion.div
                    className="h-1.5 rounded-full bg-foreground"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4">Career</p>
            <h2 className="headline-lg mb-14">Experience</h2>
          </motion.div>
          <div className="flex flex-col gap-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex flex-col md:flex-row gap-6 pb-10 border-b border-border last:border-0 last:pb-0"
              >
                <div className="md:w-48 shrink-0">
                  <p className="text-xs font-semibold text-secondary">{e.period}</p>
                  <p className="font-bold mt-1">{e.company}</p>
                  <p className="text-sm text-secondary mt-0.5">{e.role}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {e.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md border border-border text-secondary font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-secondary leading-relaxed flex gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-secondary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME ── */}
      <section className="py-16 px-6 md:px-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/cv"
            target="_blank"
            className="flex items-center gap-3 bg-foreground text-background px-10 py-4 rounded-full font-semibold text-sm hover:opacity-85 transition-opacity"
          >
            <FileText className="w-4 h-4" />
            Resume
          </Link>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="headline-lg mb-6">Let&apos;s build something.</h2>
          <p className="text-secondary text-xl mb-10" style={{ fontWeight: 300 }}>
            Open to freelance, full-time roles, and collaboration on ambitious engineering projects.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm hover:opacity-85 transition-opacity"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
