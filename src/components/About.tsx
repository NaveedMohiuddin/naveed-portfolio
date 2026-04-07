"use client";

import { GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <h2 className="font-semibold tracking-[2px] uppercase text-accent font-mono mb-2">
          About Me
        </h2>
        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-4">
          Engineer, not just a resume.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="max-w-3xl space-y-5">
          <p className="text-base leading-7 text-slate-400">
            I&apos;m a Data Engineer with experience building cloud-native data platforms that
            serve real business needs — from policy and claims pipelines at GEICO to serverless
            lakehouse architectures on AWS. My work sits at the intersection of software
            engineering and data infrastructure: I design ETL systems, optimize distributed
            processing, model dimensional data, and automate everything I can.
          </p>
          <p className="text-base leading-7 text-slate-400">
            I hold a Master&apos;s in Computer Science from Illinois Institute of Technology and
            a Bachelor&apos;s from Osmania University. I&apos;m AWS certified in both Solutions
            Architecture and Data Engineering, and I&apos;ve worked across AWS and Azure stacks
            in production settings. I care about building systems that are reliable,
            cost-efficient, and maintainable — not just technically interesting.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {[
              {
                degree: "MS Computer Science",
                school: "Illinois Institute of Technology",
              },
              {
                degree: "BE Computer Science",
                school: "Osmania University",
              },
            ].map((edu) => (
              <div
                key={edu.school}
                className="flex-1 min-w-[220px] flex items-center gap-3 bg-[rgba(15,20,40,0.7)] border border-white/[0.06] rounded-2xl px-5 py-4 backdrop-blur-sm hover:border-accent/20 transition-colors"
              >
                <GraduationCap
                  size={20}
                  className="text-accent shrink-0"
                />
                <div>
                  <div className="font-semibold text-sm">{edu.degree}</div>
                  <div className="text-[13px] text-slate-500">{edu.school}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
