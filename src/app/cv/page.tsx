"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Printer, ArrowLeft, Github, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const experience = [
  {
    role: "Automation & Robotics Engineer",
    company: "Industrial Automation Projects",
    period: "2021 – Present",
    bullets: [
      "Programmed UR UE05 robotic arm in Python (RTDE) for automated tile defect detection pipeline",
      "Built C++ point cloud generation pipeline integrated with Control X SDK for dimensional inspection",
      "Developed OPC-UA and MQTT communication layers between PLCs and supervisory control systems",
      "Implemented digital twin architectures for real-time process monitoring and fault detection",
    ],
  },
  {
    role: "Embedded Systems Developer",
    company: "Embedded & Cyber-Physical Projects",
    period: "2020 – Present",
    bullets: [
      "Designed and deployed STM32 / Arduino firmware in C/C++ for sensor interfacing and motor control",
      "Built complete Battery Management System (BMS) simulation in MATLAB/Simulink — SOC, SOH, SOP, thermal supervision",
      "Developed PID and bang-bang control systems with MATLAB mathematical modelling and system identification",
      "Prototyped Rapid Control Prototyping (RCP) pipeline with auto-generated deployable C code from Simulink",
    ],
  },
  {
    role: "AI & Software Automation Engineer",
    company: "AI / Software Projects",
    period: "2022 – Present",
    bullets: [
      "Built pothole segmentation system for autonomous vehicles using deep learning in Python/Jupyter",
      "Developed multi-agent reinforcement learning simulation for autonomous intersection navigation",
      "Implemented Kubernetes cluster orchestration and CI/CD automation pipelines",
      "Created PyQt5 real-time sensor visualisation dashboards for embedded data streams",
    ],
  },
];

const education = [
  {
    degree: "B.Eng. / B.Sc. Engineering",
    institution: "Engineering University",
    period: "2019 – 2023",
    detail: "Focus: Embedded Systems, Control Theory, Robotics, Industrial Automation",
  },
];

const skills = [
  { category: "Languages", items: ["C / C++", "Python", "MATLAB", "JavaScript / TypeScript"] },
  { category: "Robotics & Automation", items: ["UR Robot (RTDE)", "ROS", "OPC-UA", "MQTT", "PLC"] },
  { category: "Simulation & Metrology", items: ["MATLAB / Simulink", "PolyWorks Inspector", "GD&T", "Point Cloud"] },
  { category: "Web & Software", items: ["Next.js / React", "Node.js", "Kubernetes", "Docker", "Git"] },
  { category: "Hardware", items: ["STM32", "Arduino", "Raspberry Pi", "Sensor Fusion", "Motor Control"] },
  { category: "AI / Data", items: ["Computer Vision", "Deep Learning", "Reinforcement Learning", "Jupyter"] },
];

const projects = [
  { name: "UR Robot Path Planning & Defect Detection", tags: ["Python", "C++", "RTDE", "Robotics"] },
  { name: "Battery Management System Simulation", tags: ["MATLAB", "Simulink", "BMS", "Modbus"] },
  { name: "Digital Twin Sensor Framework", tags: ["Python", "OPC-UA", "Digital Twin"] },
  { name: "DC Motor PID Virtual Controller", tags: ["MATLAB", "PID", "Control Systems"] },
  { name: "Pothole Segmentation for Self-Driving", tags: ["Python", "Computer Vision", "AI"] },
  { name: "Multi-Agent Reinforcement Learning (Traffic)", tags: ["Python", "RL", "Simulation"] },
  { name: "Kubernetes Infrastructure Automation", tags: ["Kubernetes", "Docker", "DevOps"] },
  { name: "Virtual Rapid Control Prototyping", tags: ["MATLAB", "Simulink", "Code Generation"] },
];

export default function CVPage() {
  return (
    <>
      {/* Print styles injected via global style tag */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .cv-root { padding: 0 !important; background: white !important; }
          .cv-page { box-shadow: none !important; border-radius: 0 !important; padding: 32px !important; max-width: 100% !important; }
        }
      `}</style>

      <div className="cv-root min-h-screen py-16 px-4 md:px-8" style={{ background: "var(--section-alt)" }}>

        {/* Top bar */}
        <div className="no-print max-w-4xl mx-auto flex items-center justify-between mb-8">
          <Link href="/about" className="flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to About
          </Link>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-85 transition-opacity"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
        </div>

        {/* CV Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cv-page max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-14"
        >

          {/* Header */}
          <div className="border-b border-border pb-8 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-1">Mazidur Rahman</h1>
            <p className="text-lg text-secondary font-medium mb-5">
              Embedded Systems · Industrial Automation · Robotics · AI
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-secondary">
              <a href="mailto:carringtonreal@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail className="w-3.5 h-3.5" /> carringtonreal@gmail.com
              </a>
              <a href="https://github.com/Mazidur90" target="_blank" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Github className="w-3.5 h-3.5" /> github.com/Mazidur90
              </a>
              <a href="https://www.linkedin.com/in/mazidur-rahman-85661422a/" target="_blank" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <FaLinkedin className="w-3.5 h-3.5" /> linkedin.com/in/mazidur-rahman
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Profile</h2>
            <p className="text-base leading-relaxed text-secondary" style={{ fontWeight: 300 }}>
              Software and automation engineer with 5+ years of hands-on experience across embedded systems, industrial robotics, MATLAB simulation, and full-stack development. Built production pipelines integrating UR robotic arms, OPC-UA/MQTT data layers, C++ point cloud processing, and AI-based defect detection. Strong focus on reliability, efficiency, and bridging hardware functionality with software architecture.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Experience</h2>
            <div className="flex flex-col gap-8">
              {experience.map((e) => (
                <div key={e.role}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-base">{e.role}</h3>
                      <p className="text-secondary text-sm">{e.company}</p>
                    </div>
                    <span className="text-xs text-secondary font-medium shrink-0">{e.period}</span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-secondary leading-relaxed flex gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Education</h2>
            {education.map((e) => (
              <div key={e.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-bold text-base">{e.degree}</h3>
                  <p className="text-secondary text-sm">{e.institution}</p>
                  <p className="text-secondary text-sm mt-0.5">{e.detail}</p>
                </div>
                <span className="text-xs text-secondary font-medium shrink-0">{e.period}</span>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {skills.map((s) => (
                <div key={s.category}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">{s.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <span key={item} className="text-xs font-medium px-2.5 py-1 rounded-md bg-foreground text-background">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Selected Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((p) => (
                <div key={p.name} className="rounded-xl border border-border px-4 py-3">
                  <p className="font-semibold text-sm mb-1.5">{p.name}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs text-secondary font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-border pt-6 flex items-center justify-between">
            <p className="text-xs text-secondary">Updated April 2026 · mazidur90.github.io/webpage</p>
            <p className="text-xs text-secondary no-print">Print or Cmd+P to save as PDF</p>
          </div>

        </motion.div>
      </div>
    </>
  );
}
