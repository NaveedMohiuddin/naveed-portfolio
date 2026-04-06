"use client";

import { ChevronRight, Github } from "lucide-react";
import { PROJECTS } from "@/data/portfolio-data";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[2px] uppercase text-accent font-mono mb-2">
          Projects
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-4">
          Engineering projects, not just exercises.
        </h2>
        <p className="text-[17px] text-slate-400 max-w-xl leading-relaxed mb-12">
          Each project solves a real data engineering problem end-to-end.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {PROJECTS.map((proj, i) => (
          <FadeIn key={proj.title} delay={i * 0.1}>
            <div className="flex flex-col h-full bg-[rgba(15,20,40,0.7)] border border-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm hover:border-accent/20 hover:bg-[rgba(20,28,58,0.85)] transition-all">
              {/* Gradient top bar */}
              <div className="h-1.5 bg-gradient-to-r from-sky-500 to-indigo-500" />

              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{proj.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  {proj.summary}
                </p>

                {/* Problem */}
                <div className="text-[13px] bg-cyan-400/[0.06] border border-cyan-400/10 rounded-xl px-4 py-2.5 mb-4">
                  <span className="font-semibold text-accent">Problem: </span>
                  <span className="text-slate-400">{proj.problem}</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4 flex-1">
                  {proj.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-[13px] leading-snug text-slate-400"
                    >
                      <ChevronRight
                        size={14}
                        className="text-indigo-400 shrink-0 mt-0.5"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium font-mono bg-indigo-400/10 text-indigo-400 border border-indigo-400/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold text-accent border border-accent/25 hover:bg-accent/[0.08] hover:border-accent transition-all"
                >
                  <Github size={14} /> View on GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
