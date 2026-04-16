"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto glass-nav relative z-10 py-8 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
      <div className="font-semibold text-foreground flex items-center">
        <span className="bg-foreground text-background h-8 w-8 flex items-center justify-center rounded-full mr-3 text-xs">
          CB
        </span>
        (c) {new Date().getFullYear()} Modern Portfolio
      </div>
      <div className="flex gap-6">
        <Link
          href="https://github.com/Mazidur90"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mazidur-rahman-85661422a/"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </Link>
      </div>
    </footer>
  );
}
