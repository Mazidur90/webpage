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
      className="glass-nav fixed top-0 w-full z-50 px-4 py-4 md:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <ul className="hidden md:flex space-x-6 font-medium flex-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/" className="flex-shrink-0">
            <EICMonogram size={68} />
          </Link>

          <div className="flex space-x-4 md:space-x-5 items-center flex-1 justify-end">
            <Link href="https://github.com/Mazidur90" target="_blank">
              <FaGithub className="w-5 h-5 hover:text-secondary transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mazidur-rahman-85661422a/"
              target="_blank"
            >
              <FaLinkedin className="w-5 h-5 hover:text-secondary transition-colors" />
            </Link>
            <Link href="mailto:carringtonreal@gmail.com">
              <Mail className="w-5 h-5 hover:text-secondary transition-colors" />
            </Link>
          </div>
        </div>

        <ul className="flex md:hidden items-center justify-between gap-2 overflow-x-auto pb-1 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className="block rounded-full border border-border px-3 py-1.5 hover:text-secondary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
