"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Compass, Shield, Code, Rocket, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-28 md:pt-24 md:pb-36 overflow-hidden bg-grid-pattern">
      {/* 21st.dev Soft Radial Mesh Orbs */}
      <div className="gradient-orb w-[650px] h-[650px] bg-indigo-600/25 -top-44 -left-44 animate-pulse-glow"></div>
      <div className="gradient-orb w-[550px] h-[550px] bg-cyan-500/20 top-10 -right-20 animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
      <div className="gradient-orb w-[450px] h-[450px] bg-teal-500/15 bottom-0 left-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* 21st.dev Glowing Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold glass-pill text-cyan-300 border border-cyan-400/30 shadow-xl shadow-cyan-500/10 hover:border-cyan-400/60 transition-all cursor-default"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="tracking-wide">AI CAREER INTELLIGENCE PLATFORM</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">2026 EDITION</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.08]"
          >
            Discover Your True Potential in{" "}
            <span className="text-gradient">Technology, Engineering</span> &{" "}
            <span className="text-gradient-cyan">Aviation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Navigate your academic and professional future with AI precision. Uncover high-growth career paths, local vs international salary benchmarks, and tailored skill gap roadmaps.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/career-compass" className="w-full sm:w-auto">
              <Button size="lg" className="gradient-btn text-white font-semibold text-base px-8 py-6 rounded-2xl shadow-2xl shadow-cyan-500/30 w-full">
                <Sparkles className="w-5 h-5 mr-2.5 text-cyan-200 animate-spin" style={{ animationDuration: "8s" }} />
                Launch Career Compass AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <Link href="/fields" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="glass-card text-white hover:bg-white/10 font-medium text-base px-8 py-6 rounded-2xl border-white/20 hover:border-cyan-400/40 w-full transition-all">
                <Compass className="w-5 h-5 mr-2 text-teal-400" />
                Explore 12+ Fields
              </Button>
            </Link>
          </motion.div>

          {/* Feature Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 border-t border-white/10 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>South Asia & Global Benchmarks</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-indigo-400" />
              <span>Real-World Skill Roadmaps</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-teal-400" />
              <span>Zero Login Required</span>
            </div>
          </motion.div>

        </div>

        {/* 21st.dev Floating Preview Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/* Card 1 */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-cyan-400/20 shadow-xl relative group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">Technology</span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">Software & Cloud AI</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">Full-stack, LLMs, DevOps & MLOps infrastructure</p>
            <div className="text-xs text-cyan-300 font-semibold flex items-center justify-between border-t border-white/10 pt-3">
              <span>PKR 100K - 1.2M+/mo</span>
              <span className="text-teal-400 flex items-center gap-1">$80K+ Remote <ChevronRight className="w-3 h-3" /></span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-indigo-400/20 shadow-xl relative group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/30">Engineering</span>
              <Zap className="w-4 h-4 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">Robotics & Electrical</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">Microchip design, smart energy & mechatronics</p>
            <div className="text-xs text-indigo-300 font-semibold flex items-center justify-between border-t border-white/10 pt-3">
              <span>PEC Recognized Paths</span>
              <span className="text-cyan-400 flex items-center gap-1">High Growth <ChevronRight className="w-3 h-3" /></span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-teal-400/20 shadow-xl relative group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-400/30">Aviation</span>
              <Zap className="w-4 h-4 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">Commercial Piloting & Space</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">Airline flying, satellite systems & airspace ATC</p>
            <div className="text-xs text-teal-300 font-semibold flex items-center justify-between border-t border-white/10 pt-3">
              <span>Global Shortage</span>
              <span className="text-sky-300 flex items-center gap-1">PKR 250K - 3.5M+ <ChevronRight className="w-3 h-3" /></span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
