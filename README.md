# Chinwe Uwolloh — Tech Portfolio

A personal portfolio website built and customized by Chinwe Uwolloh. It showcases work across AI engineering, software development, product leadership, data analysis, and competition wins.

**Live site:** [chinwes-portfolio.com](https://chinwes-portfolio.com/)

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Supabase (Edge Functions, DB) |
| AI Chatbot | Claude API via Supabase Edge Function |
| Deployment | GitHub Pages |

---

## Project structure

```
src/
├── components/       # All UI sections (Hero, Navigation, Projects, etc.)
│   └── ui/           # shadcn/ui primitives
├── data/             # Static data — projects, experience entries
├── hooks/            # Custom React hooks
├── integrations/     # Supabase client + generated types
├── pages/            # Route-level components
└── assets/           # Images, logos, project screenshots
supabase/
└── functions/        # Edge functions (AI chatbot)
```

---

## Running locally

```bash
npm install
npm run dev
```

Requires a `.env.local` with your Supabase keys if you want the AI chatbot to work:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

---

## Deployment

The site deploys automatically to GitHub Pages on push to `main` via `.github/workflows/deploy-pages.yml`.

A custom domain is configured via `public/CNAME`.
