# Naveed Mohiuddin — Data Engineer Portfolio

A premium, recruiter-focused portfolio website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Open [https://naveedmohiuddin.vercel.app/](https://naveedmohiuddin.vercel.app/).

## Customization

All content lives in **one file**: `src/data/portfolio-data.ts`

- Update `PERSONAL.resumeUrl` with your actual resume PDF link
- Update GitHub links in `PROJECTS` to point to specific repos
- Add/remove skills, experience, projects as needed


The `next.config.js` is already set to `output: 'export'` for static hosting.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + font imports
│   ├── layout.tsx       # Root layout with SEO metadata
│   └── page.tsx         # Main page (composes all sections)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── WhyHireMe.tsx
│   ├── CtaBanner.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ScrollToTop.tsx
│   └── FadeIn.tsx       # Reusable scroll-reveal animation
└── data/
    └── portfolio-data.ts  # ← All content lives here
```

