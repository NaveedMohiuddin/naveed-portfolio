"use client";

import { Download, Mail, Linkedin, Github } from "lucide-react";
import { PERSONAL } from "@/data/portfolio-data";
import FadeIn from "./FadeIn";

export default function CtaBanner() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <FadeIn>
        <div className="bg-gradient-to-br from-sky-500/[0.08] to-indigo-500/[0.08] border border-white/[0.06] rounded-3xl px-8 py-14 text-center">
          <h2 className="text-[clamp(22px,3.5vw,32px)] font-bold tracking-tight mb-3">
            Interested in discussing data engineering opportunities?
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto mb-7">
            I&apos;m actively looking for Data Engineer roles. Let&apos;s talk
            about how I can contribute to your team.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={PERSONAL.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-shadow"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-accent border border-accent/25 hover:bg-accent/[0.08] transition-all"
            >
              <Mail size={16} /> Email Me
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-accent border border-accent/25 hover:bg-accent/[0.08] transition-all"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-accent border border-accent/25 hover:bg-accent/[0.08] transition-all"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
