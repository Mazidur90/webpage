"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

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
                  src="/beach-portrait.jpg"
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
