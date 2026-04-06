"use client";

import { CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio-data";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[2px] uppercase text-accent font-mono mb-2">
          Experience
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-4">
          Where I&apos;ve built things that matter.
        </h2>
        <p className="text-[17px] text-slate-400 max-w-xl leading-relaxed mb-12">
          Production systems, real data, measurable outcomes.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.1}>
            <div className="bg-[rgba(15,20,40,0.7)] border border-white/[0.06] rounded-2xl p-7 backdrop-blur-sm hover:border-accent/20 transition-colors">
              <div className="flex justify-between flex-wrap gap-2 mb-1">
                <h3 className="font-bold text-lg">{exp.role}</h3>
                <span className="font-mono text-[13px] text-accent">
                  {exp.dates}
                </span>
              </div>
              <p className="text-sm text-indigo-400 mb-1">
                {exp.company}
                {exp.client ? ` · Client: ${exp.client}` : ""} —{" "}
                {exp.location}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-medium font-mono bg-indigo-400/10 text-indigo-400 border border-indigo-400/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
