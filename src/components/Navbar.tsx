"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import EICMonogram from "@/components/EICMonogram";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/matlab-polyworks", label: "MATLAB & Polyworks" },
  { href: "/hardware-automation", label: "Hardware" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-nav fixed top-0 w-full z-50 px-6 py-2 md:px-10 flex flex-col gap-1"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <EICMonogram size={60} />
        </Link>

        {/* Desktop nav — centered */}
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-1.5 rounded-full hover:bg-foreground/8 transition-colors text-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons + mobile nav */}
        <div className="flex items-center gap-3">
          <Link href="https://github.com/Mazidur90" target="_blank" className="text-secondary hover:text-foreground transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/mazidur-rahman-85661422a/" target="_blank" className="text-secondary hover:text-foreground transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:carringtonreal@gmail.com" className="text-secondary hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Mobile nav row */}
      <ul className="flex lg:hidden items-center gap-1.5 overflow-x-auto pb-1 text-xs font-medium max-w-full">
        {navItems.map((item) => (
          <li key={item.href} className="shrink-0">
            <Link
              href={item.href}
              className="block rounded-full border border-border px-3 py-1.5 text-secondary hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
