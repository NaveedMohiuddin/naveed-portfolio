"use client";

import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { PERSONAL } from "@/data/portfolio-data";
import FadeIn from "./FadeIn";

const LINKS = [
  { icon: <Mail size={18} />, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: <Linkedin size={18} />, label: "LinkedIn", value: "naveed-mohiuddin", href: PERSONAL.linkedin },
  { icon: <Github size={18} />, label: "GitHub", value: "NaveedMohiuddin", href: PERSONAL.github },
  { icon: <MapPin size={18} />, label: "Location", value: PERSONAL.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[2px] uppercase text-accent font-mono mb-2">
          Contact
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-4">
          Let&apos;s connect.
        </h2>
        <p className="text-[17px] text-slate-400 max-w-xl leading-relaxed mb-12">
          I&apos;m actively open to Data Engineer opportunities. If my background
          aligns with your team&apos;s needs, I&apos;d love to hear from you.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact cards */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4">
            {LINKS.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3.5 bg-[rgba(15,20,40,0.7)] border border-white/[0.06] rounded-2xl px-5 py-4 backdrop-blur-sm hover:border-accent/20 transition-colors"
              >
                <div className="text-accent">{c.icon}</div>
                <div>
                  <div className="text-xs text-slate-500">{c.label}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-200 hover:text-accent transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="text-sm">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Contact form */}
        <FadeIn delay={0.2}>
          <div className="bg-[rgba(15,20,40,0.7)] border border-white/[0.06] rounded-2xl p-7 backdrop-blur-sm">
            <h4 className="font-semibold mb-5">Send a message</h4>
            <div className="flex flex-col gap-3.5">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-[rgba(15,20,40,0.6)] text-slate-200 text-sm font-[Outfit] outline-none focus:border-accent/50 transition-colors placeholder:text-slate-500"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-[rgba(15,20,40,0.6)] text-slate-200 text-sm font-[Outfit] outline-none focus:border-accent/50 transition-colors placeholder:text-slate-500"
              />
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-[rgba(15,20,40,0.6)] text-slate-200 text-sm font-[Outfit] outline-none focus:border-accent/50 transition-colors placeholder:text-slate-500 resize-y"
              />
              <button className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-shadow cursor-pointer border-none font-[Outfit]">
                <Send size={16} /> Send Message
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
