"use client";

import { Linkedin, Github, Mail } from "lucide-react";
import { PERSONAL } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 text-center text-slate-500 text-[13px]">
      <div className="flex gap-5 justify-center mb-3">
        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
          <Linkedin size={16} />
        </a>
        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
          <Github size={16} />
        </a>
        <a href={`mailto:${PERSONAL.email}`} className="text-slate-500 hover:text-accent transition-colors">
          <Mail size={16} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {PERSONAL.name}. Built with purpose.</p>
    </footer>
  );
}
