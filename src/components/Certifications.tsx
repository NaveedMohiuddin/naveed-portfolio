"use client";

import { CERTIFICATIONS } from "@/data/portfolio-data";
import FadeIn from "./FadeIn";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[2px] uppercase text-accent font-mono mb-2">
          Certifications
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-4">
          AWS Certified, production validated.
        </h2>
        <p className="text-[17px] text-slate-400 max-w-xl leading-relaxed mb-12">
          Industry-recognized credentials demonstrating cloud architecture and data engineering depth.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <FadeIn key={cert.title} delay={i * 0.1}>
            <div className="flex gap-5 items-start bg-[rgba(15,20,40,0.7)] border border-white/[0.06] rounded-2xl p-7 backdrop-blur-sm hover:border-accent/20 hover:bg-[rgba(20,28,58,0.85)] transition-all">
              {/* Badge icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-sky-500/15 to-indigo-500/15 border border-accent/20 font-mono font-bold text-base text-accent shrink-0">
                {cert.badge}
              </div>
              <div>
                <h3 className="font-semibold text-[17px] mb-2">{cert.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  {cert.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-accent/10 text-accent border border-accent/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
