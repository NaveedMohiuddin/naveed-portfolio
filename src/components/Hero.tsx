"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Download, Mail, Layers, BriefcaseBusiness } from "lucide-react";
import { PERSONAL } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
        }}
      />
      {/* Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,rgba(99,102,241,0.04)_40%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/15">
              <Award size={12} /> AWS Certified Data Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/15">
              <Award size={12} /> AWS Certified Solutions Architect
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/15">
              <MapPin size={12} /> {PERSONAL.location}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-[clamp(40px,6vw,68px)] font-extrabold tracking-[-2px] leading-[1.05] mb-3">
            {PERSONAL.name}
          </h1>

          {/* Title */}
          <p className="text-[clamp(20px,3vw,28px)] font-semibold tracking-tight bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent mb-5">
            {PERSONAL.title}
          </p>

          {/* Summary */}
          <p className="text-[17px] text-slate-400 max-w-[620px] leading-relaxed mb-2">
            {PERSONAL.heroSummary}
          </p>

          {/* Terminal snippet */}
          <div className="inline-block font-mono text-[13px] text-accent bg-[rgba(15,20,40,0.8)] border border-white/[0.06] rounded-lg px-4 py-3 mb-7 max-w-full overflow-x-auto">
            <span className="text-cyan-400">$</span> naveed
            <span className="text-slate-500">.skills</span>
            <span className="text-indigo-400">(</span>
            <span className="text-amber-400">&quot;PySpark&quot;</span>,{" "}
            <span className="text-amber-400">&quot;AWS&quot;</span>,{" "}
            <span className="text-amber-400">&quot;Azure&quot;</span>,{" "}
            <span className="text-amber-400">&quot;Airflow&quot;</span>
            <span className="text-indigo-400">)</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all"
            >
              <BriefcaseBusiness size={16} /> View Experience
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all"
            >
              <Layers size={16} /> View Projects
            </a>
            
            <a
              href={PERSONAL.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-accent border border-accent/25 hover:bg-accent/[0.08] hover:border-accent transition-all"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-accent border border-accent/25 hover:bg-accent/[0.08] hover:border-accent transition-all"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            {[
              { val: "3+", label: "Years Experience" },
              { val: "2", label: "AWS Certifications" },
              { val: "MS", label: "Computer Science" },
              { val: "AWS + Azure", label: "Multi-Cloud" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  {s.val}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
