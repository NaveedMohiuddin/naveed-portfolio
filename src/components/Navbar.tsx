"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/portfolio-data";

const sectionId = (s: string) => s.toLowerCase().replace(/\s/g, "");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const ids = NAV_ITEMS.map((n) => sectionId(n));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0a0e1a]/80 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
        >
          Naveed
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${sectionId(item)}`}
              className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                active === sectionId(item)
                  ? "text-accent bg-accent/10"
                  : "text-slate-400 hover:text-accent hover:bg-accent/[0.06]"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-lg text-[13px] font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-shadow"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden flex flex-col gap-1 px-6 py-4 border-t border-white/[0.06]"
          style={{ background: "rgba(10,14,26,0.98)" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${sectionId(item)}`}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm text-slate-400 hover:text-sky-400 hover:bg-sky-400/10 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
