"use client";

import { Database, Cloud, Cpu, Workflow, Code2, BarChart3 } from "lucide-react";
import { SKILLS } from "@/data/portfolio-data";
import FadeIn from "./FadeIn";

const ICONS: Record<string, React.ReactNode> = {
  "Data Engineering": <Database size={20} />,
  "Cloud Platforms": <Cloud size={20} />,
  "Big Data": <Cpu size={20} />,
  "Orchestration & DevOps": <Workflow size={20} />,
  Programming: <Code2 size={20} />,
  "Analytics & BI": <BarChart3 size={20} />,
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[2px] uppercase text-accent font-mono mb-2">
          Tech Stack
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-4">
          Tools I work with daily.
        </h2>
        <p className="text-[17px] text-slate-400 max-w-xl leading-relaxed mb-12">
          Production-tested across AWS, Azure, and open-source data ecosystems.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.07}>
            <div className="h-full bg-[rgba(15,20,40,0.7)] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm hover:border-accent/20 hover:bg-[rgba(20,28,58,0.85)] transition-all hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5 text-accent mb-4">
                {ICONS[group.category]}
                <span className="font-semibold text-[15px]">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md text-xs font-medium font-mono bg-indigo-400/10 text-indigo-400 border border-indigo-400/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
