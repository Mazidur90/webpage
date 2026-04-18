"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const hardwareProjects = [
  {
    title: "Path Planning with UR Robots",
    description: "Complete automation for defect detection of tiles using UR UE05 robot, programmed in Python with RTDE controller and C++ for point cloud generation.",
    tags: ["Python", "C++", "UR Robot", "RTDE", "Automation"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    github: "https://github.com/Mazidur90/PathPlannig-with-UR-Rpobots-and-Automation-with-Scanner-for-defect-detection",
  },
  {
    title: "CNC Stepper Motor EEPROM",
    description: "Low-level C++ motor controller using EEPROM operations for state persistence across power cycles. Resolves Master/Slave node collisions in CNC routers.",
    tags: ["C++", "EEPROM", "CNC", "Embedded", "Motor Control"],
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80",
    github: "https://github.com/Mazidur90/CNC_Steppermotor",
  },
  {
    title: "IoT Dashboard Integration",
    description: "Bridges physical IoT sensor pipelines via Python backend to an interactive web dashboard. Live telemetry, cloud sync, and hardware control mapping.",
    tags: ["Python", "IoT", "Web App", "Sensors", "Dashboard"],
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
    github: "https://github.com/Mazidur90/IOt-intigration-with-webapp",
  },
  {
    title: "MQTT Internal File Sharing",
    description: "Low-latency MQTT architecture in C# tunnelling local connection nodes. Streams files and live production telemetry across hardware computers.",
    tags: ["C#", "MQTT", "Networking", "Protocol", "Real-time"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    github: "https://github.com/Mazidur90/MQtt-Protocol-for-internal-file-sharing",
  },
  {
    title: "Sensor Testing Digital Twin",
    description: "Scilab digital twin framework for validating physical sensor behaviour virtually before hardware deployment. Fault injection and boundary testing.",
    tags: ["Scilab", "Digital Twin", "Simulation", "Sensor Validation"],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
    github: "https://github.com/Mazidur90/Sensor_Testing_Digital_twin",
  },
  {
    title: "Sensor Data Visualization PyQt5",
    description: "Real-time desktop app rendering live sensor streams (temperature, pressure, accelerometer) with configurable multi-channel display and CSV logging.",
    tags: ["Python", "PyQt5", "Real-time", "Visualization"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "https://github.com/Mazidur90/sensor-data-visualiation-with-pyqt5",
  },
  {
    title: "Kubernetes Infrastructure Automation",
    description: "Shell-based Kubernetes cluster automation for container orchestration, deployment pipelines, health checks, and automated recovery procedures.",
    tags: ["Kubernetes", "Shell", "DevOps", "Containers"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    github: "https://github.com/Mazidur90/Kubernatics",
  },
];

const skills = [
  { name: "UR Robots (RTDE / URScript)", level: 90 },
  { name: "C++ Embedded / Low-level", level: 88 },
  { name: "MQTT / OPC-UA Protocols", level: 85 },
  { name: "C# Industrial Software", level: 82 },
  { name: "IoT Sensor Integration", level: 87 },
  { name: "Kubernetes / DevOps", level: 75 },
  { name: "Digital Twin (Scilab / Simulink)", level: 80 },
  { name: "Python Automation", level: 92 },
];

const tools = [
  "UR Robots", "RTDE Controller", "OPC-UA", "MQTT", "Modbus",
  "C++", "C#", "Python", "Shell / Bash", "Kubernetes",
  "Scilab", "PyQt5", "ControlX SDK", "Raspberry Pi", "Arduino",
];

export default function HardwareAutomationPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-20 px-8 min-h-screen max-w-7xl mx-auto">

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">Specialist Domain</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hardware<br />Programming &<br />Automation
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-xl">
              Low-level embedded systems, industrial robot programming, real-time sensor networks, and factory automation pipelines — from bare-metal C++ motor controllers to full Kubernetes-orchestrated production infrastructure.
            </p>
          </div>
          <div className="w-full md:w-[45%] relative aspect-video rounded-3xl overflow-hidden glass-card">
            <Image
              src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80"
              alt="Hardware Automation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { value: "7+", label: "Hardware Projects" },
          { value: "5+", label: "Years Experience" },
          { value: "UR5/UR10", label: "Robot Platforms" },
          { value: "Real-time", label: "Sensor Pipelines" },
        ].map((s) => (
          <div key={s.label} className="glass-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-black mb-1">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-secondary font-semibold">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-extrabold">Projects</h2>
          <div className="h-px flex-1 bg-border mt-1" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hardwareProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden flex flex-col group"
            >
              <div className="relative w-full h-44">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <Link href={p.github} target="_blank" className="text-secondary hover:text-foreground shrink-0">
                    <FaGithub className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-secondary text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
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

      {/* Skill Bars */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-extrabold">Proficiency</h2>
          <div className="h-px flex-1 bg-border mt-1" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.06 }}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-sm">{s.name}</span>
                <span className="text-secondary text-sm">{s.level}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <motion.div
                  className="bg-foreground h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${s.level}%` }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tools Strip */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-extrabold">Tools & Protocols</h2>
          <div className="h-px flex-1 bg-border mt-1" />
        </div>
        <div className="flex flex-wrap gap-3">
          {tools.map((t) => (
            <span key={t} className="glass-card px-4 py-2 rounded-full text-sm font-semibold border border-border">{t}</span>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="glass-card rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-extrabold mb-2">Building something physical?</h3>
          <p className="text-secondary">Robot automation, embedded controllers, industrial IoT — let&apos;s engineer it.</p>
        </div>
        <Link href="/contact" className="bg-foreground text-background px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0">
          Get in Touch <ExternalLink className="w-4 h-4" />
        </Link>
      </motion.div>

    </div>
  );
}
