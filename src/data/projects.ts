export type Category = "Embedded Systems Development" | "AI and Software Automation" | "Cyber Physical Systems" | "Hardware Programming & Automation";

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: Category;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  details: string;
  applications: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Path Planning with UR Robots",
    slug: "ur-robot-path-planning",
    category: "Hardware Programming & Automation",
    description: "Complete automation for defect detection of tiles using a UR UE05 robot, programmed in Python with rtde controller and C++ for point cloud generation.",
    tags: ["Python", "C++", "Robotics", "Automation"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/PathPlannig-with-UR-Rpobots-and-Automation-with-Scanner-for-defect-detection",
    details: `PROBLEM STATEMENT:
• Manual tile inspection is too slow and error-prone for modern manufacturing timelines. A physical robotic mechanism combined with software processing was needed.

WHERE IT IS USED:
• Manufacturing floors prioritizing automated quality assurance.
• Industrial tile production environments requiring high-speed defect detection.

WHAT IT DOES:
• Integrates a hardware UR UE05 robotic arm utilizing Python and an RTDE controller for precise spatial path planning.
• Controls a hardware scanner via C++ to synthesize point clouds representing the tile surface.
• Leverages the Control X software SDK through a command-line pipeline to parse the point cloud and automatically flag physical defects.`,
    applications: ["Industrial Automation", "Defect Detection", "Robotics Path Planning"]
  },
  {
    id: "2",
    title: "Pothole Segmentation for Self-Driving",
    slug: "pothole-segmentation",
    category: "AI and Software Automation",
    description: "Pothole segmentation system for self-driving cars to detect road hazards and enable collaborative mapping.",
    tags: ["Jupyter", "Computer Vision", "Self-Driving", "AI"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/pot_hole_segmentation",
    details: `PROBLEM STATEMENT:
• Self-driving frameworks struggle to identify road irregularities like potholes seamlessly due to unoptimized image segmentation models.

WHERE IT IS USED:
• Autonomous vehicle perception engines.
• Smart city road maintenance mapping and fleet logging systems.

WHAT IT DOES:
• Uses advanced deep learning segmentation methodologies inside Jupyter Notebooks to partition road artifacts from dashcam/LiDAR visual feeds.
• Enables a self-driving car to collaboratively report coordinate points of dangerous road hazards.
• Automates the avoidance trajectory calculations by identifying the physical bounds of the potholes in real-time.`,
    applications: ["Autonomous Vehicles", "Road Maintenance Systems", "Smart City Infrastructure"]
  },
  {
    id: "3",
    title: "Bugtracker Delay Avoidance API",
    slug: "bugtracker-api",
    category: "AI and Software Automation",
    description: "Algorithm for internal C# and C++ threads to avoid multi-call API overlap delays in fast-paced DevOps environments.",
    tags: ["C#", "C++", "DevOps", "Multithreading"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Bugtracker",
    details: `PROBLEM STATEMENT:
• Multi-call APIs in intensive DevOps environments often suffer from severe overlap delays, crashing internal software pipelines completely.

WHERE IT IS USED:
• Heavy backend enterprise infrastructures.
• Asynchronous microservices processing parallel data queries.

WHAT IT DOES:
• Employs a sophisticated internal C# and C++ algorithm explicitly dedicated to parsing parallel threads.
• Buffers and systematically pipelines overlapping API calls, avoiding memory deadlocks.
• Accelerates raw software deployment tracking by eliminating typical blocking behaviors in multi-threaded workflows.`,
    applications: ["DevOps Infrastructure", "API Rate Management", "Thread Scheduling"]
  },
  {
    id: "4",
    title: "Cancer & Tumor Cell Segmentation",
    slug: "cancer-cell-segmentation",
    category: "AI and Software Automation",
    description: "An object segmentation model dedicated to detecting cancer and tumor cells from distinct medical imagery.",
    tags: ["Jupyter", "Medical Imaging", "AI", "Segmentation"],
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Object_segmentation_with-simple-for-cancer-abd-tumar-cell-detection",
    details: `PROBLEM STATEMENT:
• Manual pathological reviews of tumor cell imagery are extremely tedious and subjective, requiring a reliable automated software baseline.

WHERE IT IS USED:
• Radiological research laboratories.
• Hospitals relying on software-accelerated medical scan diagnostics.

WHAT IT DOES:
• Ingests pure medical imagery and pushes it through optimized Computer Vision models to identify distinct malignant tissue structures.
• Highlights specific regions of interest autonomously on standard 2D scans.
• Produces quantitative structural data about cell distributions, aiding doctors in rapidly determining tumor severity.`,
    applications: ["Healthcare Tech", "Pathology Automation", "Bioinformatics"]
  },
  {
    id: "5",
    title: "IoT Dashboard Integration",
    slug: "iot-integration-webapp",
    category: "Hardware Programming & Automation",
    description: "System to integrate generic IoT modules with a standard functional dashboard web application.",
    tags: ["Python", "IoT", "Web App"],
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/IOt-intigration-with-webapp",
    details: `PROBLEM STATEMENT:
• Hardware microcontrollers frequently lack a unified interface for non-technical users to review physical environment telemetry interactively.

WHERE IT IS USED:
• Smart home centralized management systems.
• Industrial factory floors for live device health monitoring.

WHAT IT DOES:
• Bridges physical IoT sensor pipelines utilizing a robust Python backend architecture.
• Feeds persistent environmental metrics (like temperature, vibration) directly to an interactive visual web dashboard.
• Synchronizes cloud data packets to represent actionable physical alerts on screen for immediate hardware control mapping.`,
    applications: ["Smart Homes", "Industrial Telemetry", "Connected Devices"]
  },
  {
    id: "6",
    title: "MQTT Internal File Sharing",
    slug: "mqtt-file-sharing",
    category: "Hardware Programming & Automation",
    description: "A robust server connection utilizing MQTT protocols for lightning-fast internal file sharing and live production simulation.",
    tags: ["C#", "MQTT", "Networking", "Protocol"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/MQtt-Protocol-for-internal-file-sharing",
    details: `PROBLEM STATEMENT:
• Traditional HTTP file sharing processes are excessively heavy and slow down mission-critical physical production simulations executing on local servers.

WHERE IT IS USED:
• Live-stream factory pipelines simulating structural integrity imagery.
• Decentralized internal networks functioning entirely off grid protocols.

WHAT IT DOES:
• Employs a low-latency MQTT architecture across C# environments securely tunneling local connection nodes.
• Rapidly streams and handles localized file drops alongside live production telemetry without payload distortion.
• Connects distinct hardware computers seamlessly for instantaneous local multi-node synchronizations.`,
    applications: ["Live Production Systems", "Internal Cloud Networks", "Data Streaming"]
  },
  {
    id: "7",
    title: "CNC Stepper Motor EEPROM",
    slug: "cnc-stepper-motor",
    category: "Hardware Programming & Automation",
    description: "A low-level C++ motor controller utilizing robust EEPROM operations for state persistence across power cycles.",
    tags: ["C++", "Embedded Systems", "Hardware", "EEPROM"],
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/CNC_Steppermotor",
    details: `PROBLEM STATEMENT:
• Traditional CNC stepper motors lose internal coordinate states aggressively during arbitrary power cycling, causing major calibration failures.

WHERE IT IS USED:
• Robotic manipulation arms subject to arbitrary power offs.
• 3D Printing setups and ultra-precise industrial milling beds.

WHAT IT DOES:
• Interfaces with specific microchip architectures via low-level C++ instructions to directly commit physical position coordinates to persistent EEPROM hardware logic.
• Resolves hierarchy collisions across Master/Slave node deployments inside mechanical CNC routers.
• Allows devices to immediately resume their previous states directly upon startup without requiring mechanical recalibration.`,
    applications: ["Robotics", "3D Printing Systems", "Precision Milling"]
  },
  {
    id: "8",
    title: "DC Motor PID Virtual Controller",
    slug: "dc-motor-pid-control",
    category: "Embedded Systems Development",
    description: "Design and performance evaluation of virtual PID controllers for DC motors using Matlab constraints.",
    tags: ["Matlab", "Control Systems", "PID", "Engineering"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Design-and-performance-evaluation-of-PID-control-using-Matlab",
    details: `PROBLEM STATEMENT:
• Finding the optimal stabilization metrics for real-world DC motors is complex inherently; hardware controllers commonly over-correct leading to dangerous oscillatory states.

WHERE IT IS USED:
• Tuning parameters for heavy-duty electric vehicle drivetrains.
• Educational benchmarks evaluating core physical embedded controls mathematically.

WHAT IT DOES:
• Implements a comprehensive mathematical digital twin structure modeling physical DC motor kinematics dynamically.
• Adjusts simulated Proportional, Integral, and Derivative (PID) parameters algorithmically, aggressively targeting zero steady-state error.
• Visualizes transient bounds inside theoretical Matlab plots, permitting engineers to copy exact configurations securely to actual physical microcontrollers.`,
    applications: ["Mechatronics", "Motor Tuning", "Academic Engineering"]
  },
  {
    id: "9",
    title: "Industrial Data Analysis (IIoT)",
    slug: "data-analysis-iiot",
    category: "Cyber Physical Systems",
    description: "Deep aggregation, analysis and visualization framework for Industrial IoT telemetry.",
    tags: ["Python", "IIoT", "Data Science", "Analytics"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Data-analysis-for-IIOT",
    details: `PROBLEM STATEMENT:
• Massive raw data streams produced by physical industrial sensors (IIoT) are completely unreadable out of the box, obscuring immediate systemic errors.

WHERE IT IS USED:
• Connected factory environments tracking millions of operational data points safely.
• Oil drilling or physical pipeline rigs forecasting predictive hardware maintenance schedules locally.

WHAT IT DOES:
• Ingests and cleans multi-faceted streaming databases via Python data visualization architectures locally.
• Establishes baseline predictions highlighting which physical assets are likely to undergo degradation before they fail completely.
• Aggregates visual representations mapping entire physical networks conceptually back to operational dashboard handlers automatically.`,
    applications: ["Predictive Maintenance", "Factory Optimization", "Heavy Machinery Analytics"]
  },
  {
    id: "10",
    title: "MediaPipe LiDAR Color Analysis",
    slug: "color-analysis-lidar",
    category: "AI and Software Automation",
    description: "Applying Google's MediaPipe for detailed spatial analysis mapped against raw LiDAR point clouds.",
    tags: ["Python", "MediaPipe", "LiDAR", "Vision"],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Colour_analysi_with_mediaPipe_for_Lidar",
    details: `PROBLEM STATEMENT:
• Pure point cloud topologies gathered from physical LiDAR lack color-context definitions, severely limiting structural image recognition reliability contextually.

WHERE IT IS USED:
• Precision mapping algorithms requiring textural details for autonomous drones heavily.
• AR/VR overlay engines blending real environments into 3D structural meshes.

WHAT IT DOES:
• Uses Google's MediaPipe framework algorithmically to stitch raw 2D pixel camera arrays securely against pure dimensional distances natively.
• Analyzes exact object bounding boxes synthetically derived from deep color recognition thresholds globally.
• Generates hybridized geometric outputs correctly layering visual texture on entirely blank LiDAR topologies perfectly.`,
    applications: ["Spatial Computing", "Depth Mapping", "AR/VR Overlay Systems"]
  },
  {
    id: "11",
    title: "Traffic Signal Object Detection",
    slug: "traffic-signal-detection",
    category: "AI and Software Automation",
    description: "Real-time AI recognition algorithm capable of filtering active objects within dense traffic intersections.",
    tags: ["Jupyter", "AI", "Traffic Systems", "Detection"],
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Objects_in_traffic_signal_detection",
    details: `PROBLEM STATEMENT:
• Existing civil traffic cameras manually parse static feeds poorly; smart traffic grids distinctly require autonomous counting software immediately.

WHERE IT IS USED:
• Automated intersection routing controllers adjusting signal intervals globally.
• Urban planning intelligence pipelines.

WHAT IT DOES:
• Ingests pure dynamic video data and pushes bounding box detection explicitly targeted at distinguishing distinct passenger vehicles against raw pedestrians securely.
• Filters artifacts gracefully mapping dense overlapping structures uniquely frame by frame automatically.
• Produces reliable software telemetry to dictate future city light timings efficiently.`,
    applications: ["Smart Traffic Management", "Intersection Law Enforcement", "Urban Planning"]
  },
  {
    id: "12",
    title: "Employee Management CUDA",
    slug: "employee-management-cuda",
    category: "AI and Software Automation",
    description: "Parametric C# software utilizing CUDA optimization for querying large-scale datasets rapidly.",
    tags: ["C#", "CUDA", "GPU Processing", "Database"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/employee-management-cuda",
    details: `PROBLEM STATEMENT:
• Centralized relational databases executing gigantic query joins over millions of legacy software employee records sequentially slow down HR architectures critically.

WHERE IT IS USED:
• Internal deployment environments for massive enterprise corporate hubs globally.
• Centralized database processing centers relying on parallel GPU workloads explicitly. 

WHAT IT DOES:
• Replaces traditional CPU-bound loop arrays securely with high-performance Nvidia CUDA GPU computations locally.
• Dispatches multi-threaded tasks handling heavy C# pipeline logic completely to discrete graphical memory arrays instantly.
• Accomplishes enormous data sorting and validation filters entirely in fractions of legacy architectural time limits significantly.`,
    applications: ["Enterprise Infrastructure", "Data Acceleration", "High-Performance Computing"]
  },
  {
    id: "13",
    title: "Kubernetes Infrastructure Automation",
    slug: "kubernetes-automation",
    category: "Cyber Physical Systems",
    description: "Shell-based Kubernetes cluster automation scripts for container orchestration, deployment pipelines, and infrastructure management.",
    tags: ["Kubernetes", "Shell", "DevOps", "Containers"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Kubernatics",
    details: `PROBLEM STATEMENT:
• Manual Kubernetes cluster management is error-prone and doesn't scale across multi-node production deployments.

WHERE IT IS USED:
• Cloud-native production environments running containerized microservices.
• DevOps pipelines requiring automated cluster provisioning and rollback.

WHAT IT DOES:
• Automates Kubernetes cluster setup, pod scheduling, and service mesh configuration via shell scripts.
• Manages deployment rollouts, scaling policies, and namespace isolation for multi-tenant workloads.
• Integrates health checks and automated recovery procedures to maintain cluster uptime.`,
    applications: ["Cloud Infrastructure", "Container Orchestration", "CI/CD Pipelines"]
  },
  {
    id: "14",
    title: "Battery Management System Simulation",
    slug: "battery-management-system",
    category: "Embedded Systems Development",
    description: "MATLAB and Simulink Battery Management System with protection logic, SOC/SOH/SOP estimation, thermal supervision, and Modbus models for lithium-ion cells.",
    tags: ["MATLAB", "Simulink", "Embedded Systems", "Energy"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Battery-managment-System-Simulation-eith-discharge-state-and-modbus-Modesl-___MATALB",
    details: `PROBLEM STATEMENT:
• Lithium-ion battery systems require precise state estimation and protection logic to prevent thermal runaway and premature degradation.

WHERE IT IS USED:
• Electric vehicle battery packs requiring real-time SOC/SOH monitoring.
• Industrial energy storage systems with Modbus communication interfaces.

WHAT IT DOES:
• Implements full BMS logic in MATLAB/Simulink including State of Charge (SOC), State of Health (SOH), and State of Power (SOP) estimation algorithms.
• Simulates discharge curves and thermal behaviour under varying load conditions.
• Generates Modbus-compatible system-level models for integration with industrial PLCs and SCADA systems.
• Applies protection logic for over-voltage, under-voltage, over-temperature, and short-circuit conditions.`,
    applications: ["Electric Vehicles", "Industrial Energy Storage", "Battery Research"]
  },
  {
    id: "15",
    title: "Sensor Testing Digital Twin",
    slug: "sensor-digital-twin",
    category: "Cyber Physical Systems",
    description: "Scilab-based digital twin framework for testing and validating physical sensor behaviour in a virtual environment before hardware deployment.",
    tags: ["Scilab", "Digital Twin", "Simulation", "Sensors"],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Sensor_Testing_Digital_twin",
    details: `PROBLEM STATEMENT:
• Physical sensor validation on real hardware is costly and slow — faults discovered late in deployment cause expensive redesigns.

WHERE IT IS USED:
• Pre-deployment validation of industrial IoT sensor arrays.
• Research environments simulating sensor fusion before physical prototype construction.

WHAT IT DOES:
• Creates a virtual replica of physical sensor systems in Scilab, mirroring real-world signal characteristics and noise profiles.
• Runs exhaustive fault injection and boundary condition tests without risking physical hardware.
• Validates sensor calibration algorithms and data pipelines against simulated ground truth values.`,
    applications: ["Industrial IoT Validation", "Sensor Fusion Research", "Embedded Prototyping"]
  },
  {
    id: "16",
    title: "Fault Detection via Image Technique",
    slug: "fault-detection-image",
    category: "AI and Software Automation",
    description: "Python-based visual fault detection system using image processing techniques to identify defects in physical components.",
    tags: ["Python", "Computer Vision", "Fault Detection", "Inspection"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/fault_detection_image-_technique",
    details: `PROBLEM STATEMENT:
• Manual visual inspection of manufactured parts misses micro-defects and is inconsistent across operators and shifts.

WHERE IT IS USED:
• Quality control stations on manufacturing production lines.
• Automated inspection systems for precision-machined components.

WHAT IT DOES:
• Applies image processing and computer vision algorithms to identify surface defects, cracks, and dimensional anomalies.
• Processes raw camera feeds in real-time and flags non-conforming parts with bounding box annotations.
• Generates inspection reports with defect classification and confidence scores for downstream quality systems.`,
    applications: ["Quality Assurance", "Manufacturing Inspection", "Automated Vision Systems"]
  },
  {
    id: "17",
    title: "Virtual RCP with MATLAB Simulink",
    slug: "virtual-rcp-matlab-simulink",
    category: "Embedded Systems Development",
    description: "Virtual Rapid Control Prototyping environment using MATLAB/Simulink to design, simulate, and validate control algorithms before hardware deployment.",
    tags: ["MATLAB", "Simulink", "Control Systems", "Prototyping"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/Virtual-Rapid-Control-Prototyping-RCP-with-MATLAB-SIMULINK-using-Matlab",
    details: `PROBLEM STATEMENT:
• Testing control algorithms directly on hardware is risky and time-consuming — errors can damage actuators or require full system resets.

WHERE IT IS USED:
• Automotive ECU control algorithm development and validation.
• Aerospace and robotics control loop prototyping.

WHAT IT DOES:
• Builds a complete virtual RCP pipeline in MATLAB/Simulink allowing control engineers to iterate on algorithms in simulation before touching hardware.
• Supports hardware-in-the-loop (HIL) configurations for progressive validation.
• Auto-generates deployable C code from validated Simulink models for direct microcontroller flashing.`,
    applications: ["Automotive Control", "Aerospace Systems", "Robotics Prototyping"]
  },
  {
    id: "18",
    title: "Sensor Data Visualization PyQt5",
    slug: "sensor-data-visualization-pyqt5",
    category: "Cyber Physical Systems",
    description: "Real-time sensor data visualization desktop application built with Python and PyQt5, displaying live telemetry from connected hardware.",
    tags: ["Python", "PyQt5", "Visualization", "Sensors"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    githubUrl: "https://github.com/Mazidur90/sensor-data-visualiation-with-pyqt5",
    details: `PROBLEM STATEMENT:
• Raw sensor output is unreadable in terminal logs — engineers need real-time graphical dashboards to monitor live hardware behaviour.

WHERE IT IS USED:
• Lab bench monitoring of microcontroller sensor arrays.
• Industrial equipment health dashboards for on-site technicians.

WHAT IT DOES:
• Renders live sensor streams (temperature, pressure, accelerometer) in real-time plots using PyQt5 and matplotlib.
• Supports configurable sampling rates and multi-channel display layouts.
• Logs timestamped data to CSV for post-session analysis and trend reporting.`,
    applications: ["Lab Instrumentation", "Industrial Monitoring", "Embedded Debugging"]
  }
];
