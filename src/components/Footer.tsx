"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import EICMonogram from "@/components/EICMonogram";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto glass-nav relative z-10 py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link href="/" className="flex items-center gap-3 group">
        <EICMonogram size={36} />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary group-hover:text-foreground transition-colors">
          Mazidur Rahman
        </span>
      </Link>

      <div className="flex gap-5 items-center text-secondary">
        <Link href="https://github.com/Mazidur90" target="_blank" className="hover:text-foreground transition-colors">
          <FaGithub className="w-5 h-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/mazidur-rahman-85661422a/" target="_blank" className="hover:text-foreground transition-colors">
          <FaLinkedin className="w-5 h-5" />
        </Link>
        <Link href="mailto:carringtonreal@gmail.com" className="hover:text-foreground transition-colors">
          <Mail className="w-5 h-5" />
        </Link>
      </div>
    </footer>
  );
}
