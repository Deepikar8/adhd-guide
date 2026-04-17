# ADHD Guide

Evidence-based, plain-language education about ADHD — across every life stage, for everyone who lives with it, loves someone who does, or is just finding out.

Built as a companion to [Hormonal Health](https://hormonal-health.vercel.app), using the same architecture and design system.

## Stack

- **Next.js 16** (App Router, fully static)
- **Tailwind CSS 4**
- **TypeScript**
- **Vercel Analytics**

## Pages

| Route | Content |
|---|---|
| `/` | Home — hero, presentations, age group strip, brain chemistry, quick links |
| `/types` | Overview of both ADHD presentations |
| `/types/inattentive` | Inattentive ADHD deep-dive — DSM criteria, who gets missed |
| `/types/combined` | Hyperactive / Combined — criteria, how symptoms shift in adulthood |
| `/age-groups` | ADHD across a lifetime — early childhood through later life |
| `/symptoms` | 8 symptom clusters in plain language (executive dysfunction, attention, emotional dysregulation, RSD, working memory, time blindness, hyperfocus, sleep) |
| `/brain` | Neurotransmitters, brain regions, common myths corrected |
| `/what-helps` | Evidence-rated interventions — medication, therapy, lifestyle, tools |
| `/sources` | 14 peer-reviewed citations organised by category |

## Project Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── page.tsx       # Home
│   ├── types/         # ADHD types + sub-pages
│   ├── age-groups/
│   ├── symptoms/
│   ├── brain/
│   ├── what-helps/
│   └── sources/
├── components/
│   ├── Nav.tsx
│   └── Footer.tsx
└── data/              # All content as typed TypeScript data files
    ├── adhd-types.ts
    ├── age-groups.ts
    ├── brain-chemicals.ts
    ├── symptoms.ts
    ├── interventions.ts
    └── sources.ts
```

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Standards

All factual claims are based on peer-reviewed research, DSM-5-TR diagnostic criteria, and NICE guidelines. The site is educational only — not medical advice. Sources are listed at `/sources`.

## Deploy

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

Built by [Deepika Rudra Murthy](https://www.linkedin.com/in/deepika-rudra-murthy/)
