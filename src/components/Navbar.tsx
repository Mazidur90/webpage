"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-nav fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center"
    >
      <ul className="hidden md:flex space-x-6 font-medium flex-1">
        <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
        <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
        <li><Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link></li>
        <li><Link href="/articles" className="hover:text-secondary transition-colors">Articles</Link></li>
      </ul>
      
      <div className="font-bold text-xl bg-foreground text-background h-10 w-10 flex items-center justify-center rounded-full flex-shrink-0 cursor-pointer">
        CB
      </div>

      <div className="flex space-x-5 items-center flex-1 justify-end">
        <Link href="https://github.com" target="_blank"><FaGithub className="w-5 h-5 hover:text-secondary transition-colors" /></Link>
        <Link href="https://linkedin.com" target="_blank"><FaLinkedin className="w-5 h-5 hover:text-secondary transition-colors" /></Link>
        <Link href="mailto:contact@example.com"><Mail className="w-5 h-5 hover:text-secondary transition-colors" /></Link>
      </div>
    </motion.nav>
  );
}
