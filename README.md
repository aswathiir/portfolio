# Aswathi Ranjith · AI Engineer Portfolio

Interactive portfolio for Aswathi Ranjith, a final-year B.Tech AI student building **LLM, multi-agent and voice AI systems**.

**Live:** https://portfolio-sandy-six-30.vercel.app

## What's inside

- **3D interactive keyboard** (Spline): hover or press a key to see how each tool is used
- **Full toolkit** explorer: tabbed, categorised view of the complete tech stack
- **Experience timeline**: internship, degree, publications, awards and certifications
- **Projects** with category filters, tilt-on-hover cards and case-study modals
- **Contact form** (Resend), live visitor cursors, dark/light mode, and a devtools easter egg
- Responsive from 360px phones up to wide desktops

## Highlights

| | |
|---|---|
| **Experience** | Backend AI/ML Intern, i-Xceed Technology Solutions (Apr–Jun 2026): multilingual banking voice assistant |
| **Education** | B.Tech Artificial Intelligence, Amrita Vishwa Vidyapeetham, Coimbatore (2027), CGPA 7.86 |
| **Publications** | ZELIA (ICDAM 2026), NutriGuard AI (COMSYS 2026), both Springer LNNS |
| **Awards** | 2nd Prize, Siemens Student Competition 2026 · 1st Runner-Up, Altair RapidMiner Hackathon 2025 |

### Featured projects

- **SAHAi**: GRPO + LoRA fine-tuned LLM tutor for code-mixed DSA interview prep
- **VoiceRAG**: multi-tenant voice AI agent platform (Vapi, Groq Llama 3.3, Pinecone, n8n)
- **MoA-CAS**: adapter fine-tuning for code-switched Hindi-English ASR
- **ZELIA**: voice-first welfare eligibility assistant for zero-literacy users
- **NutriGuard AI**: personalised food-label analysis with a LoRA-tuned Donut model
- **Multi-Agent Commerce (A2A)**: Gemini agents on Google's Online Boutique microservices
- Plus: Neuromarketing (EEG + sentiment), Road Surface Perception (ROS 2), AirScript, SpotiGPT, WorkSync Plus

## Tech stack (site)

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP · Spline · shadcn/ui · Resend

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

### Environment variables (optional)

| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Enables the contact form (`/api/send`). Without it the form returns 503. |
| `NEXT_PUBLIC_WS_URL` | Socket server for live cursors / chat (optional) |
| `UMAMI_DOMAIN`, `UMAMI_SITE_ID` | Analytics (optional) |

## Editing content

All content lives in `src/data/`:

| File | What it controls |
|---|---|
| `config.ts` | Name, title, SEO, email, social links |
| `constants.ts` | Keyboard keycap labels, toolkit, experience, publications, awards, certifications |
| `projects.tsx` | Project cards and case studies (add `src` for a screenshot; otherwise a cover is generated) |

> **Keyboard keycaps:** the icons are baked into `public/assets/skills_keyboard_updated.spline`.
> The `SkillNames` values in `constants.ts` must match the Spline object names exactly
> (for example, `"computer vision "` has a trailing space). To change an icon, edit the scene in Spline.

The resume is served from `public/assets/resume.pdf`.

## Acknowledgments

Originally based on the open-source portfolio template by Naresh Khatri. 3D keyboard built with [Spline](https://spline.design), UI from [shadcn/ui](https://ui.shadcn.com).
