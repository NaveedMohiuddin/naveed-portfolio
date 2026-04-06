"use client";

import {
  Briefcase, Award, Layers, Zap, GitBranch, GraduationCap,
} from "lucide-react";
import { WHY_HIRE } from "@/data/portfolio-data";
import FadeIn from "./FadeIn";

const ICONS = [
  <Briefcase key="b" size={22} />,
  <Award key="a" size={22} />,
  <Layers key="l" size={22} />,
  <Zap key="z" size={22} />,
  <GitBranch key="g" size={22} />,
  <GraduationCap key="gr" size={22} />,
];

export default function WhyHireMe() {
  return (
    <section id="whyme" className="max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[2px] uppercase text-accent font-mono mb-2">
          Why Hire Me
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-4">
          What I bring to your team.
        </h2>
        <p className="text-[17px] text-slate-400 max-w-xl leading-relaxed mb-12">
          Not just skills on paper — here&apos;s why it translates to real value.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHY_HIRE.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06}>
            <div className="h-full bg-[rgba(15,20,40,0.7)] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm hover:border-accent/20 hover:bg-[rgba(20,28,58,0.85)] transition-all hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-sky-500/12 to-indigo-500/12 border border-accent/15 text-accent mb-4">
                {ICONS[i]}
              </div>
              <h4 className="font-semibold text-[15px] mb-1.5">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
