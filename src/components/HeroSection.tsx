"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-16 pb-12 px-8 overflow-hidden relative">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[45%] flex justify-center"
        >
          <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden glass-card p-2 shadow-xl">
             <Image
               src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800&q=90"
               alt="Developer Portrait"
               fill
               className="object-cover rounded-[1.5rem]"
               priority
             />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[55%] flex flex-col space-y-8 relative"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Architecting Intelligence. Coding the Physical World.
          </h1>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-xl">
            Bridging the gap between pure algorithms and physical hardware. I specialize in advanced Embedded Systems, AI, and Autonomous Robotics.
          </p>
          <div className="flex items-center space-x-6 pt-2">
            <Link href="/resume" className="bg-foreground text-background px-7 py-3.5 rounded-xl font-semibold flex items-center space-x-2 hover:scale-105 transition-all shadow-lg">
              <span>Resume</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-6 py-3.5 font-semibold underline underline-offset-8 decoration-2 hover:text-secondary transition-colors">
              Contact
            </Link>
          </div>
          
          <motion.div 
             animate={{ y: [0, -15, 0] }} 
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             className="absolute -top-10 -right-8 md:-bottom-20 md:top-auto md:right-10 opacity-70"
          >
             <Lightbulb className="w-16 h-16 md:w-20 md:h-20 text-yellow-500 drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
