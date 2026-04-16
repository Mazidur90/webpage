"use client";

import Link from "next/link";
import { ArrowUpRight, Bot, Cpu, Microscope, Radio } from "lucide-react";
import { motion } from "framer-motion";

const articleGroups = [
  {
    title: "Seminal Papers",
    description:
      "Papers that changed how we think about scaling, perception, and decision-making in intelligent machines.",
    icon: Microscope,
    items: [
      {
        title: "Attention Is All You Need",
        blurb:
          "The transformer paper that redefined sequence modeling and opened the door to modern foundation models.",
        href: "https://arxiv.org/abs/1706.03762",
        label: "arXiv",
      },
      {
        title: "DQN: Human-Level Control Through Deep Reinforcement Learning",
        blurb:
          "A landmark deep RL paper showing how neural networks and value learning could solve complex control tasks.",
        href: "https://www.nature.com/articles/nature14236",
        label: "Nature",
      },
      {
        title: "ResNet: Deep Residual Learning for Image Recognition",
        blurb:
          "A core vision paper that made very deep neural networks practical and shaped modern perception stacks.",
        href: "https://arxiv.org/abs/1512.03385",
        label: "arXiv",
      },
    ],
  },
  {
    title: "Hardware And Edge AI",
    description:
      "Excellent reading for engineers who care about real-time systems, efficient compute, and silicon-aware design.",
    icon: Cpu,
    items: [
      {
        title: "NVIDIA Jetson Orin Developer Guide",
        blurb:
          "A practical reference for building edge AI systems that mix GPU acceleration, robotics, and embedded deployment.",
        href: "https://docs.nvidia.com/jetson/",
        label: "NVIDIA Docs",
      },
      {
        title: "Google TPU v4 Architecture",
        blurb:
          "A look at large-scale accelerator design, interconnect strategy, and system-level thinking for ML hardware.",
        href: "https://arxiv.org/abs/2304.01433",
        label: "arXiv",
      },
      {
        title: "Efficient Processing of Deep Neural Networks",
        blurb:
          "A broad survey on hardware acceleration techniques for neural networks, from dataflow to memory bottlenecks.",
        href: "https://arxiv.org/abs/1703.09039",
        label: "arXiv",
      },
    ],
  },
  {
    title: "Robotics And Autonomy",
    description:
      "Papers and references that connect sensing, planning, and machine intelligence to physical systems.",
    icon: Bot,
    items: [
      {
        title: "Probabilistic Robotics",
        blurb:
          "Still one of the best foundations for localization, mapping, and uncertainty-aware robotics.",
        href: "https://mitpress.mit.edu/9780262201629/probabilistic-robotics/",
        label: "MIT Press",
      },
      {
        title: "RRT-Connect: An Efficient Approach to Single-Query Path Planning",
        blurb:
          "A classic motion-planning paper that remains deeply relevant in robotic manipulation and navigation.",
        href: "https://ieeexplore.ieee.org/document/844730",
        label: "IEEE",
      },
      {
        title: "ROS 2 Documentation",
        blurb:
          "The working reference for modern robot software stacks, distributed nodes, and middleware-based integration.",
        href: "https://docs.ros.org/en/rolling/",
        label: "ROS Docs",
      },
    ],
  },
  {
    title: "Signals, Wireless, And Systems",
    description:
      "Useful resources for engineers building robust interfaces between embedded hardware and the outside world.",
    icon: Radio,
    items: [
      {
        title: "LoRa: Long Range, Low Power Wireless Platform",
        blurb:
          "A foundational paper for understanding long-range, low-power communication tradeoffs in distributed devices.",
        href: "https://ieeexplore.ieee.org/document/7460875",
        label: "IEEE",
      },
      {
        title: "The Datacenter as a Computer",
        blurb:
          "System design at warehouse scale, with lessons that translate surprisingly well to distributed edge systems.",
        href: "https://www.morganclaypool.com/doi/abs/10.2200/S00516ED2V01Y201306CAC024",
        label: "Morgan Claypool",
      },
      {
        title: "Open Compute Project",
        blurb:
          "A strong source of ideas around efficient hardware infrastructure, power, cooling, and large-scale deployment.",
        href: "https://www.opencompute.org/",
        label: "OCP",
      },
    ],
  },
];

export default function ArticlesPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-16 px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary mb-4">
            Reading Stack
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Articles, papers, and hardware references worth your time
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            A curated set of research papers and technical references spanning
            AI, embedded systems, robotics, accelerators, and real-world
            machine intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {articleGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.section
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                className="glass-card p-8"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-foreground text-background flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{group.title}</h2>
                    <p className="text-secondary leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {group.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-3xl border border-border px-5 py-5 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold leading-snug">
                          {item.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 shrink-0 mt-0.5" />
                      </div>
                      <p className="text-secondary leading-relaxed mb-3">
                        {item.blurb}
                      </p>
                      <span className="text-xs uppercase tracking-[0.3em] text-secondary">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
