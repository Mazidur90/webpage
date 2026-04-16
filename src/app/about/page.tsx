"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-16 px-8 min-h-[calc(100vh-80px)] max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative aspect-square max-w-md rounded-full overflow-hidden border-8 border-foreground/10 shadow-2xl">
          <Image src="/hero_portrait.png" alt="About Me" fill className="object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Me</h1>
          <p className="text-lg text-secondary leading-relaxed">
            I am a passionate software engineer with a deep interest in industrial automation, digital twins, and full-stack development. Throughout my career, I've focused on building robust systems that bridge the gap between hardware functionality and software architecture.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            With hands-on experience in resolving complex pipeline issues, from OPC-UA to lower-level C++ motor controllers, my approach emphasizes reliability and efficiency. I continuously explore tools like Next.js, Framer Motion, and AI frameworks (e.g. Hermes) to bring out the best in both backend stability and frontend aesthetics.
          </p>
          <div className="flex gap-4 mt-4 text-foreground font-semibold">
            <div className="flex flex-col">
               <span className="text-4xl font-black w-12">5+</span>
               <span className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">Years Exp.</span>
            </div>
            <div className="flex flex-col ml-12">
               <span className="text-4xl font-black w-12">15+</span>
               <span className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">Projects</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
