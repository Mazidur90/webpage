"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactChannels = [
  {
    title: "Email",
    description:
      "carringtonreal@gmail.com",
    href: "mailto:carringtonreal@gmail.com",
    action: "Send Email",
    icon: Mail,
  },
  {
    title: "Phone",
    description:
      "015739651439",
    href: "tel:015739651439",
    action: "Call Now",
    icon: Phone,
  },
  {
    title: "GitHub",
    description: "Code, prototypes, experiments, and engineering work.",
    href: "https://github.com",
    action: "Visit GitHub",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    description: "Professional background, collaboration, and network.",
    href: "https://linkedin.com",
    action: "Visit LinkedIn",
    icon: FaLinkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-16 px-8 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let&apos;s build something tangible
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            I work at the intersection of software, hardware, and intelligent
            systems. If you want to collaborate on embedded AI, robotics, or
            cyber-physical systems, this is the place to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card p-7 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-foreground text-background flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                </div>

                <p className="text-secondary leading-relaxed mb-6 flex-1">
                  {channel.description}
                </p>

                <Link
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center justify-center rounded-xl bg-foreground text-background px-5 py-3 font-semibold hover:scale-[1.02] transition-transform"
                >
                  {channel.action}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
