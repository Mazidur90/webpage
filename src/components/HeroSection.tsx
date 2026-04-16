"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">

      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #0071e3 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #bf5af2 0%, transparent 70%)" }} />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-32">

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 flex flex-col gap-7"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
          >
            Embedded Systems · AI · Robotics
          </motion.p>

          <h1 className="headline-xl">
            Architecting<br />
            <span style={{ color: "var(--secondary)" }}>Intelligence.</span><br />
            Coding the<br />Physical World.
          </h1>

          <p className="text-xl text-secondary leading-relaxed max-w-lg" style={{ fontWeight: 300 }}>
            Engineer bridging algorithms and hardware — from autonomous robotics and embedded C++ to AI pipelines and industrial automation.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 pt-2"
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-semibold text-sm hover:opacity-85 transition-opacity"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full border border-border hover:bg-foreground/5 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-10 pt-4 border-t border-border"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "18+", label: "Projects" },
              { value: "3", label: "Domains" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold tracking-tight">{s.value}</div>
                <div className="text-xs text-secondary mt-1 uppercase tracking-widest font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Main photo frame */}
            <div className="relative w-[340px] md:w-[400px] lg:w-[460px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
              <Image
                src="/beach-portrait.jpg"
                alt="Mazidur Rahman"
                fill
                className="object-cover object-center"
                priority
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/140770963?v=4";
                }}
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card px-5 py-3 rounded-2xl shadow-xl"
            >
              <div className="text-xs text-secondary font-medium">Currently working on</div>
              <div className="text-sm font-bold mt-0.5">BMS Simulation · MATLAB</div>
            </motion.div>

            {/* Top badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2.5 rounded-2xl shadow-xl"
            >
              <div className="text-xs font-bold">🤖 UR Robot · C++ · Python</div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-xs text-secondary tracking-widest uppercase font-medium">Scroll</div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-secondary to-transparent"
        />
      </motion.div>

    </section>
  );
}
