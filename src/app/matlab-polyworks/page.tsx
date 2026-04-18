"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const matlabProjects = [
  {
    title: "Battery Management System Simulation",
    description: "Full BMS in MATLAB/Simulink — SOC, SOH, SOP estimation, thermal supervision, protection logic, and Modbus models for lithium-ion cells.",
    tags: ["MATLAB", "Simulink", "BMS", "Modbus", "Lithium-Ion"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    github: "https://github.com/Mazidur90/Battery-managment-System-Simulation-eith-discharge-state-and-modbus-Modesl-___MATALB",
  },
  {
    title: "DC Motor PID Virtual Controller",
    description: "Mathematical digital twin of DC motor kinematics. Adjusts PID parameters algorithmically targeting zero steady-state error with Matlab plots.",
    tags: ["MATLAB", "PID", "Control Systems", "Digital Twin"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80",
    github: "https://github.com/Mazidur90/Design-and-performance-evaluation-of-PID-control-using-Matlab",
  },
  {
    title: "Virtual Rapid Control Prototyping",
    description: "Full virtual RCP pipeline in MATLAB/Simulink — iterate on control algorithms in simulation before hardware. Auto-generates deployable C code.",
    tags: ["MATLAB", "Simulink", "RCP", "Code Generation"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    github: "https://github.com/Mazidur90/Virtual-Rapid-Control-Prototyping-RCP-with-MATLAB-SIMULINK-using-Matlab",
  },
  {
    title: "DC Motor Modelling & Identification",
    description: "System identification and modelling of DC motor dynamics using MATLAB — parameter estimation from step response data.",
    tags: ["MATLAB", "System ID", "Motor Modelling", "Jupyter"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    github: "https://github.com/Mazidur90/-Modelling-and-Identification-of-a-DC-Motor-using-MAtlab",
  },
  {
    title: "Temperature Bang-Bang Controller",
    description: "Bang-bang (on/off) temperature control system designed and simulated in MATLAB — hysteresis tuning and thermal response analysis.",
    tags: ["MATLAB", "Control Systems", "Thermal", "Simulation"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    github: "https://github.com/Mazidur90/temperature-control-with-a-bang-bang-controller",
  },
];

const polywirksCapabilities = [
  {
    title: "3D Scan Alignment & Registration",
    description: "Align multiple scan positions into a unified point cloud using best-fit and reference-based methods.",
    icon: "🔬",
  },
  {
    title: "GD&T Dimensional Inspection",
    description: "Full GD&T analysis — flatness, roundness, parallelism, profile tolerances — against CAD nominal data.",
    icon: "📐",
  },
  {
    title: "Point Cloud to CAD Comparison",
    description: "Colour deviation maps comparing physical scanned surfaces to engineering CAD models for defect detection.",
    icon: "🎨",
  },
  {
    title: "Automated Inspection Reporting",
    description: "Generate standardised PDF inspection reports with pass/fail results and deviation statistics.",
    icon: "📋",
  },
  {
    title: "Robot-Guided Scanning Integration",
    description: "Integrate PolyWorks with UR robot path planning for automated, repeatable scan coverage of complex parts.",
    icon: "🤖",
  },
  {
    title: "Reverse Engineering",
    description: "Convert raw scan data into editable CAD surfaces for parts with no original drawings.",
    icon: "⚙️",
  },
];

export default function MatlabPolywirksPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-20 px-8 min-h-screen max-w-7xl mx-auto">

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">Specialist Tools</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              MATLAB &<br />PolyWorks
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-xl">
              Advanced engineering simulation with MATLAB/Simulink for control systems and digital twins — combined with PolyWorks metrology for 3D inspection, GD&T analysis, and robot-guided scanning workflows.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black mb-1">5+</div>
              <div className="text-xs uppercase tracking-widest text-secondary font-semibold">MATLAB Projects</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black mb-1">3D</div>
              <div className="text-xs uppercase tracking-widest text-secondary font-semibold">Metrology</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black mb-1">GD&T</div>
              <div className="text-xs uppercase tracking-widest text-secondary font-semibold">Inspection</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black mb-1">BMS</div>
              <div className="text-xs uppercase tracking-widest text-secondary font-semibold">Simulation</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MATLAB Projects */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-extrabold">MATLAB / Simulink Projects</h2>
          <div className="h-px flex-1 bg-border mt-1" />
        </div>
        <div className="flex flex-col gap-6">
          {matlabProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card tilt-card overflow-hidden flex flex-col md:flex-row group"
              style={{ transition: "transform 0.12s ease, box-shadow 0.12s ease" }}
            >
              <div className="relative w-full md:w-72 lg:w-96 h-52 md:h-auto shrink-0">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <Link href={p.github} target="_blank" className="text-secondary hover:text-foreground shrink-0">
                      <FaGithub className="w-5 h-5" />
                    </Link>
                  </div>
                  <p className="text-secondary leading-relaxed mb-4">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs font-semibold px-2 py-1 bg-foreground text-background/90 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PolyWorks Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-extrabold">PolyWorks Metrology</h2>
          <div className="h-px flex-1 bg-border mt-1" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
          <div className="flex-1">
            <p className="text-lg text-secondary leading-relaxed mb-6">
              PolyWorks Inspector and Modeler used for industrial 3D metrology — point cloud acquisition from CMM and structured-light scanners, CAD comparison, and GD&T reporting integrated directly into robot-guided inspection workflows.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Applied in the UR Robot tile defect detection project, where PolyWorks-compatible point cloud outputs from the C++ scanner pipeline fed downstream into dimensional analysis and automated pass/fail classification.
            </p>
          </div>
          <div className="w-full lg:w-96 relative aspect-video rounded-2xl overflow-hidden glass-card">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
              alt="3D Metrology Scanning"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {polywirksCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="text-3xl mb-3">{cap.icon}</div>
              <h3 className="font-bold text-lg mb-2">{cap.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="glass-card rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-extrabold mb-2">Need simulation or metrology work?</h3>
          <p className="text-secondary">Control systems, BMS modelling, 3D inspection pipelines — let&apos;s talk.</p>
        </div>
        <Link href="/contact" className="bg-foreground text-background px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0">
          Get in Touch <ExternalLink className="w-4 h-4" />
        </Link>
      </motion.div>

    </div>
  );
}
