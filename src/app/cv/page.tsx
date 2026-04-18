"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Printer, ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const experience = [
  {
    company: "Dassault Systèmes",
    role: "SDK Developer — Multiphysics",
    location: "Remote / Germany",
    period: "09/2025 – 01/2026",
    bullets: [
      "Developed SDK modules for multiphysics simulation coupling within Dassault Systèmes' SIMULIA ecosystem.",
      "Integrated NVIDIA PhysX (pHYx) rigid-body and fluid dynamics solvers into the SDK pipeline for real-time physics feedback.",
      "Built Node.js middleware services to expose simulation APIs and stream live physics state data to external clients.",
      "Implemented Unity-based visualisation layer consuming SDK telemetry for interactive 3D multiphysics inspection.",
      "Designed event-driven architecture bridging Node.js backend with Unity frontend via WebSocket for sub-100 ms latency.",
      "Authored SDK documentation and example projects covering pHYx, Node.js, and Unity integration workflows.",
    ],
  },
  {
    company: "Fraunhofer IWS",
    role: "Software Developer (Werkstudent)",
    location: "Bremen, Germany",
    period: "02/2025 – 08/2025",
    bullets: [
      "Implemented advanced seismic modelling pipelines with Python and Madagascar RSF for 3D wavefield simulations, FD modelling and automatic generation of acquisition geometries.",
      "Built desktop tools in Python (PyQt) and C++ for RSF/SEGY conversion, model visualisation and batch data processing.",
      "Introduced FMPI-based co-simulations (CSim) to couple Python simulation engines with external computation models.",
      "Developed full-stack applications with Node.js backend and modern JavaScript frontends for real-time simulation monitoring and control dashboards.",
      "Optimised Python data pipelines for HPC, reducing pre-processing time by 35%.",
      "Integrated Node.js REST APIs with scientific Python backends to synchronise simulation data across distributed systems.",
      "Built robust database interfaces (SQLite / MySQL) for storage and versioning of simulation data.",
      "Integrated visualisation libraries (Plotly, Matplotlib) for graphical preparation of modelling and simulation data.",
    ],
  },
  {
    company: "SHINING 3D Automation",
    role: "Software Developer Intern",
    location: "Stuttgart, Germany",
    period: "05/2024 – 01/2025",
    bullets: [
      "Developed client software with proprietary SDK using React and C# (.NET 8.1).",
      "Built client pipeline in Microsoft Azure to reduce downtime using MongoDB and SATA.",
      "Part of front-end development team for in-house C++ software managing host and server administration via C# with MongoDB.",
    ],
  },
  {
    company: "ZF Friedrichshafen AG",
    role: "Software Developer (Werkstudent)",
    location: "Schweinfurt, Germany",
    period: "08/2023 – 04/2024",
    bullets: [
      "Migrated data from IMS Client database to EDA Matplus database using Asp.NET and Angular.",
      "Extended Python algorithm for API upload and automatic JSON file generation.",
      "Executed full project lifecycle with agile methods (JIRA and Confluence).",
      "Structured Python code development for uploaded material standards.",
      "Created PowerBI dashboard for magnet list pricing with material properties.",
    ],
  },
  {
    company: "Technische Hochschule Würzburg Schweinfurt (THWS)",
    role: "Research Assistant (Hilfskraft Wissenschaftler)",
    location: "Schweinfurt, Germany",
    period: "04/2023 – 09/2023",
    bullets: [
      "Extracted data from STEP files and programmed robot path planning algorithms.",
      "Responsible for full algorithm development under Prof. Dr. Norbert Strobel (Digital & Microcomputer Technology).",
    ],
  },
  {
    company: "Institute Digital Engineering (IDEE) – Centre Robotics",
    role: "Research Assistant (Hilfskraft Wissenschaftler)",
    location: "Schweinfurt, Germany",
    period: "04/2022 – 09/2022",
    bullets: [
      "R-Viz coding for LiDAR sensors and Turtle-Bots.",
      "Simulation and odometry measurements in Opti-Track simulation.",
      "Backend programming in Python and C++ for laboratory assistant software.",
    ],
  },
];

const education = [
  {
    degree: "B.Eng. Mechatronics",
    school: "Technische Hochschule Würzburg Schweinfurt (THWS)",
    location: "Schweinfurt, Germany",
    period: "10/2021 – Present",
    detail: "Specialisation: Robotics & Production · Human-Machine Interaction",
  },
  {
    degree: "B.Sc. Software Engineering",
    school: "Ahsanullah University of Science & Technology",
    location: "Dhaka, Bangladesh",
    period: "2012 – 2016",
    detail: "",
  },
];

const skillGroups = [
  { label: "Languages", items: ["C / C++", "C#", "Python", "Java", "JavaScript / TypeScript", "SQL"] },
  { label: "Robotics & Automation", items: ["UR Robot (RTDE)", "ROS", "OPC-UA", "MQTT", "PLC", "Ladder Programming (Siemens)", "IEC 61131-3 (CODESYS)", "IEC 61499"] },
  { label: "Simulation & Metrology", items: ["MATLAB / Simulink", "PolyWorks Inspector", "GD&T", "Point Cloud", "FEM / NVH", "CODESYS"] },
  { label: "AI & Data", items: ["PyTorch", "TensorFlow", "Computer Vision", "Deep Learning", "Reinforcement Learning", "LangChain", "LLM", "Power BI", "Pandas", "Jupyter"] },
  { label: "Web & DevOps", items: ["React", "Node.js", "Next.js", "Asp.NET", "Angular", "Docker", "Kubernetes", "MongoDB", "SQLite", "MySQL", "Azure", "Git", "GitHub", "GitLab", "JIRA", "Confluence"] },
  { label: "Hardware & EDA", items: ["Arduino", "STM32", "Raspberry Pi", "Altium Designer", "Autodesk Inventor", "Fusion 360", "Creo", "Signal Processing", "Radar"] },
];

const languages = [
  { lang: "German", level: "Fluent", dots: 4 },
  { lang: "English", level: "Native", dots: 5 },
];

const certifications = [
  { name: "Generative AI", issuer: "Google Inc, USA" },
  { name: ".NET Framework", issuer: "FreeCode.Org, USA" },
  { name: "MATLAB", issuer: "LinkedIn, USA" },
  { name: "Power BI", issuer: "LinkedIn, USA" },
  { name: "Java", issuer: "Meta, USA" },
  { name: "Machine Learning", issuer: "FreeCode.Org, USA" },
  { name: "Deep Learning", issuer: "FreeCode.Org, USA" },
];

const achievements = [
  { title: "Go Green Award", detail: "Formula One Student India (ISCE) — Hybrid Vehicle" },
  { title: "Best Innovative Business Idea", detail: "British American Tobacco (BAT)" },
];

const freelanceProjects = [
  {
    title: "Software Bug Detection Algorithm",
    tags: "C# · C++",
    github: "https://github.com/Mazidur90/Bugtracker",
    bullets: [
      "Tool for finding dependencies in legacy code and defining call functions.",
      "Dependency recognition and multi-thread splitter to identify source/target code mismatches.",
    ],
  },
  {
    title: "Employee Management System (.NET 3.1)",
    tags: "C# · SQL · MongoDB",
    github: "https://github.com/Mazidur90/employee-management-cuda",
    bullets: [
      "Internal server on local machine with simple SQL and a UI for registering employees and initiating API calls.",
    ],
  },
  {
    title: "Cancer Cell Segmentation from X-Rays",
    tags: "Python · TensorFlow · OpenCV",
    github: "https://github.com/Mazidur90/Object_segmentation_with-simple-for-cancer-abd-tumar-cell-detection",
    bullets: [
      "X-ray images fed into architecture for training; system detects and segments tumour cells.",
    ],
  },
  {
    title: "MQTT Multi-User File Sharing",
    tags: "Python · C# · MQTT · MongoDB",
    github: "https://github.com/Mazidur90/MQtt-Protocol-for-internal-file-sharing",
    bullets: [
      "GUI with C# WinForm for subscribing and publishing messages on central server using MQTT and SQL.",
    ],
  },
  {
    title: "Pothole Segmentation for Autonomous Vehicles",
    tags: "Python · PyTorch · YOLO V8",
    github: "https://github.com/Mazidur90/pot_hole_segmentation",
    bullets: [
      "Segmentation of potholes for self-driving cars; collaborative hazard mapping.",
    ],
  },
  {
    title: "Colour Analysis with MediaPipe for LiDAR",
    tags: "Python · MediaPipe · PyTorch",
    github: "https://github.com/Mazidur90/Colour_analysi_with_mediaPipe_for_Lidar",
    bullets: [
      "Voice-controlled system usable for media players, presentations and gesture-based interactive input.",
    ],
  },
  {
    title: "YouTube Statistics Analysis",
    tags: "Python · Pandas · Keras · Power BI",
    github: "https://github.com/Mazidur90/youtube-statistics-analysis",
    bullets: [
      "Power BI Python shell operations to handle dirty data and floating point issues.",
    ],
  },
];

const uniProjects = [
  {
    title: "Wearable Jacket for Autistic Children (Heart Rate & Body State Monitoring)",
    tags: "Python · Socket · Arduino",
    client: "LebensHilfe GmbH, Germany",
    bullets: [
      "Pump mechanism via Arduino and pressure bag to signal when pulse exceeds 130 bpm.",
      "IoT device forwarding signal via Bluetooth; GUI for process management and emergency stop.",
    ],
  },
];

function Dots({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <span className="flex gap-1 items-center">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full"
          style={{ background: i < count ? "var(--foreground)" : "var(--border)" }}
        />
      ))}
    </span>
  );
}

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .cv-root { padding: 0 !important; background: white !important; }
          .cv-page { box-shadow: none !important; border-radius: 0 !important; padding: 32px 40px !important; max-width: 100% !important; }
          section { break-inside: avoid; }
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cv-page max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-14 flex flex-col gap-10"
        >

          {/* ── HEADER ── */}
          <div className="flex flex-col items-center text-center gap-4 border-b border-border pb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/webpage/developer-profile-office.png"
                alt="Mazidur Rahman"
                width={96}
                height={96}
                className="object-cover object-top w-full h-full"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/140770963?v=4"; }}
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">MAZIDUR RAHMAN</h1>
              <p className="text-secondary font-medium mt-1">Robotics · Computer Vision · Asp.NET · Generative AI</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-secondary">
              <a href="tel:015739651439" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Phone className="w-3.5 h-3.5" /> 015739651439
              </a>
              <a href="mailto:carringtonreal@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail className="w-3.5 h-3.5" /> carringtonreal@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/mazidur-rahman-85661422a/" target="_blank" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <FaLinkedin className="w-3.5 h-3.5" /> linkedin.com/in/mazidur-rahman
              </a>
              <a href="https://github.com/Mazidur90" target="_blank" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <FaGithub className="w-3.5 h-3.5" /> github.com/Mazidur90
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Almandring 1 22C, 70569, Germany
              </span>
            </div>
          </div>

          {/* ── EXPERIENCE ── */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 pb-2 border-b border-border">Professional Experience</h2>
            <div className="flex flex-col gap-7">
              {experience.map((e) => (
                <div key={e.company}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-bold">{e.company}</h3>
                      <p className="text-secondary text-sm font-medium">{e.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-semibold text-secondary">{e.location}</p>
                      <p className="text-xs text-secondary">{e.period}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-1 mt-2">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-secondary leading-relaxed flex gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-secondary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── EDUCATION ── */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 pb-2 border-b border-border">Education</h2>
            <div className="flex flex-col gap-5">
              {education.map((e) => (
                <div key={e.school} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <h3 className="font-bold">{e.school}</h3>
                    <p className="text-secondary text-sm font-medium">{e.degree}</p>
                    {e.detail && <p className="text-secondary text-sm">{e.detail}</p>}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-semibold text-secondary">{e.location}</p>
                    <p className="text-xs text-secondary">{e.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 pb-2 border-b border-border">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">{g.label}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span key={item} className="text-xs font-medium px-2.5 py-1 rounded-md bg-foreground text-background">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── LANGUAGES ── */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 pb-2 border-b border-border">Languages</h2>
            <div className="flex gap-10">
              {languages.map((l) => (
                <div key={l.lang} className="flex items-center gap-3">
                  <span className="font-semibold text-sm">{l.lang}</span>
                  <span className="text-secondary text-xs">{l.level}</span>
                  <Dots count={l.dots} />
                </div>
              ))}
            </div>
          </section>

          {/* ── ACHIEVEMENTS ── */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 pb-2 border-b border-border">Awards & Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((a) => (
                <div key={a.title} className="flex gap-3">
                  <span className="text-lg">🏆</span>
                  <div>
                    <p className="font-semibold text-sm">{a.title}</p>
                    <p className="text-secondary text-xs">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CERTIFICATIONS ── */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 pb-2 border-b border-border">Certifications</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {certifications.map((c) => (
                <div key={c.name} className="rounded-xl border border-border px-3 py-2.5">
                  <p className="font-semibold text-sm">{c.name}</p>
                  <p className="text-secondary text-xs mt-0.5">{c.issuer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FREELANCE PROJECTS ── */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 pb-2 border-b border-border">Freelance Projects</h2>
            <div className="flex flex-col gap-5">
              {freelanceProjects.map((p) => (
                <div key={p.title}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-bold text-sm">{p.title}</h3>
                      <span className="text-xs text-secondary italic">{p.tags}</span>
                    </div>
                    <a href={p.github} target="_blank" className="text-xs text-secondary hover:text-foreground transition-colors shrink-0 font-mono">
                      {p.github.replace("https://", "")}
                    </a>
                  </div>
                  {p.bullets.map((b, i) => (
                    <p key={i} className="text-sm text-secondary leading-relaxed flex gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-secondary shrink-0" />
                      {b}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* ── UNIVERSITY PROJECTS ── */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6 pb-2 border-b border-border">University Projects</h2>
            {uniProjects.map((p) => (
              <div key={p.title}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-bold text-sm">{p.title}</h3>
                    <span className="text-xs text-secondary italic">{p.tags}</span>
                  </div>
                  <span className="text-xs text-secondary shrink-0">{p.client}</span>
                </div>
                {p.bullets.map((b, i) => (
                  <p key={i} className="text-sm text-secondary leading-relaxed flex gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-secondary shrink-0" />
                    {b}
                  </p>
                ))}
              </div>
            ))}
          </section>

          {/* Footer */}
          <div className="border-t border-border pt-6 flex items-center justify-between">
            <p className="text-xs text-secondary">Updated April 2026 · mazidur90.github.io/webpage/cv</p>
            <p className="text-xs text-secondary no-print">Ctrl+P or ⌘P to save as PDF</p>
          </div>

        </motion.div>
      </div>
    </>
  );
}
