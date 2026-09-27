# Ryan Pratama — Portfolio

Personal portfolio and blog for **Ryan Pratama** (`ryanpratama-portfolio`). A multilingual Next.js site with Sanity CMS for posts, an embedded Studio at `/studio`, and typed RPC for contact email and blog data.

**Live site:** configured via `NEXT_PUBLIC_URL`  
**Contact:** [ryanpratama.dev@gmail.com](mailto:ryanpratama.dev@gmail.com) · [GitHub](https://github.com/ryanpratama14) · [LinkedIn](https://www.linkedin.com/in/ryanpratama14)

---

## About Ryan

Software engineer based in **Jakarta**, working across **frontend and backend**. Ships end-to-end products, integrates AI into applications, and uses AI tools daily (Cursor, Claude Code, Codex, GitHub Copilot) to move faster without cutting corners on quality.

|                      |                                                               |
| -------------------- | ------------------------------------------------------------- |
| **Role**             | Software Engineer                                             |
| **Languages**        | Indonesian, English, Russian, Japanese (JLPT N3)              |
| **Education**        | Kazan Federal University — Bachelor's, Management (2019–2023) |
| **Experience since** | September 2022                                                |

### Path

Started coding in Kazan via a free JavaScript course in a friend's apartment, then co-formed **faoTech** (software house) in 2022. Began on the frontend, grew into backend work, and now builds full-stack products with AI in both the product and the workflow.

### Experience (as shown on the site)

| Period            | Company                                                           | Role                                                                |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- |
| 2024-11 → 2025-10 | [Rave Tech](https://www.rave.tech) (Singapore, remote)            | Front-end Engineer                                                  |
| 2023-08 → 2024-11 | [PT Nutech Integrasi](https://www.nutech-integrasi.com) (Jakarta) | Front-end Engineer — CEISA 4.0 for Indonesian Customs (5000+ users) |
| 2022-09 → 2023-08 | [faoTech](https://faotech.dev) (Kazan, remote)                    | Full-stack Engineer — led small FE teams, APIs, i18n                |

### Featured projects (portfolio)

WaterHub, RYMAL Dubai, Hebronstar, TurunTangan, Pemuda ICMI, Belinsky, Synergy Perdana Mandiri, KIMA — landing sites, CMS-backed content, dashboards, e-commerce, and org platforms. Copy and links live in `src/lib/constants` + dictionaries.

### Stack he works with (site “tech stacks” section)

- **Languages:** TypeScript, JavaScript, PHP, HTML, CSS
- **App:** React / Next.js, React Native / Expo, Laravel / Inertia, TanStack, Node, Bun, Elysia, Hono, Express, tRPC
- **Data:** Drizzle, Prisma, PostgreSQL, MySQL, MongoDB, Redis, Supabase
- **UI / DX:** Tailwind, shadcn/ui, Motion, Sanity, Resend, Stripe, Docker
- **AI tools:** Claude Code, Codex, Cursor, GitHub Copilot
- **Learning:** Swift, Rust, Go

---

## What this repo does

1. **Portfolio home** (`/[lang]`) — profile, about, experience, projects, tech stacks, certifications, contacts, message form
2. **Blog** (`/[lang]/blog`, `/[lang]/blog/[slug]`) — posts from Sanity (Portable Text), draft mode / visual editing
3. **Certifications** (`/[lang]/certification`, `/[lang]/certification/[name]`)
4. **Sanity Studio** (`/studio`) — content admin, separate root layout (no portfolio CSS)
5. **API** — oRPC at `/api/rpc` (posts + email via Resend); draft-mode enable/disable for Sanity Presentation

Site UI languages: **`en`**, **`ja`**, **`ru`** (default `en`). Locale is negotiated in `src/proxy.ts` and stored in a `lang` cookie. Paths without a lang prefix redirect to `/{lang}/...`, except excluded paths (`api`, `_next`, `_vercel`, `studio`, static files).

---

## Architecture

```
src/
  app/
    (studio)/              # Separate root layout (<html>/<body>) for Studio
      layout.tsx
      studio/[[...tool]]/  # → /studio
    [lang]/               # Portfolio root layout (globals, providers, GTM)
      layout.tsx
      (main)/              # Chrome + draft-mode tools
        (home)/            # Home sections
        blog/
        certification/
        [...slug]/         # Catch-all → notFound() (static params)
    api/
      rpc/                 # oRPC handler
      draft-mode/          # Sanity preview
  components/              # Shared UI, emails, shadcn
  internationalization/    # Dictionaries + helpers
  lib/                     # Constants (CV data), utils, React Query
  sanity/                  # Client, schemas, presentation, generated types
  server/                  # oRPC router, auth stub, email
  styles/                  # globals + design tokens
  proxy.ts                 # Locale redirect middleware (Next proxy)
```

**Route groups**

- `(studio)` — minimal document shell so Sanity UI is not broken by portfolio CSS/providers
- `[lang]/(main)` — public site chrome
- Portfolio content aimed at **static generation** where possible (`dynamicParams = false`, lang static params); Studio is `force-static`; draft tools are isolated so they do not force the whole tree dynamic

**Path aliases**

| Alias | Maps to                            |
| ----- | ---------------------------------- |
| `@/*` | `./src/*`                          |
| `#/*` | `./public/*`                       |
| `~/*` | repo root (e.g. `~/sanity.config`) |

---

## Tech stack (this codebase)

| Layer           | Choice                                                |
| --------------- | ----------------------------------------------------- |
| Framework       | Next.js 16 (App Router), React 19, React Compiler     |
| Language        | TypeScript (strict)                                   |
| Styling         | Tailwind CSS 4, shadcn/ui, Motion, Swiper             |
| CMS             | Sanity 6 + `next-sanity` (Presentation, media plugin) |
| API             | oRPC + Valibot, TanStack Query                        |
| Email           | Resend + React Email                                  |
| i18n            | Custom dictionaries (`en` / `ja` / `ru`) + Negotiator |
| Env             | `@t3-oss/env-nextjs` + Valibot                        |
| Lint / format   | oxlint, oxfmt                                         |
| Package manager | Bun                                                   |
| Analytics       | Vercel Analytics, Speed Insights, GTM                 |

---

## Local development

```bash
bun install
bun dev          # http://localhost:3000
bun run build
bun start
```

### Scripts

| Script                                | Purpose                                                 |
| ------------------------------------- | ------------------------------------------------------- |
| `dev` / `build` / `start` / `preview` | Next.js                                                 |
| `lint` / `lint:fix`                   | oxlint                                                  |
| `fmt` / `fmt:check`                   | oxfmt                                                   |
| `typecheck`                           | `tsc --noEmit`                                          |
| `type`                                | Sanity schema extract + typegen → `src/sanity/types.ts` |
| `email`                               | React Email preview on port 4000                        |

### Environment

Validated in `src/env.ts`. Copy from your secrets store; do not commit `.env`.

| Variable                                | Side   | Role                               |
| --------------------------------------- | ------ | ---------------------------------- |
| `NEXT_PUBLIC_URL`                       | client | Canonical site URL                 |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`         | client | Sanity project                     |
| `NEXT_PUBLIC_SANITY_DATASET`            | client | Sanity dataset                     |
| `NEXT_PUBLIC_GTM_ID`                    | client | Google Tag Manager                 |
| `SANITY_API_READ_TOKEN`                 | server | Authenticated Sanity reads / draft |
| `RESEND_API_KEY`                        | server | Contact form sending               |
| `RESEND_EMAIL_TO` / `RESEND_EMAIL_FROM` | server | Mail routing                       |
| `SPOTIFY_TRACK_URL`                     | server | Spotify integration URL            |
| `SKIP_ENV_VALIDATION`                   | either | Skip env checks when needed        |

---

## Content & Studio

- **Config:** `sanity.config.ts` — `basePath: "/studio"`
- **Stega / studio URL:** `src/sanity/lib/client.ts` → `studioUrl: "/studio"`
- **Schemas:** `src/sanity/schema-types` (e.g. post)
- **Presentation:** `src/sanity/presentation/resolve.ts` + draft-mode routes
- Open **`/studio`** locally or in production (proxy must not locale-prefix this path — already excluded)

After schema changes:

```bash
bun run type
```

---

## Internationalization

- Dictionaries: `src/internationalization/dictionaries/{en,ja,ru}.ts`
- CV-ish structured data (experiences, projects, contacts, icons): `src/lib/constants`
- Locale detection / redirect: `src/proxy.ts` + `src/internationalization/functions.ts`
- UI strings and long-form “about / summary” copy live in dictionaries; keep the three langs in sync when changing positioning copy

---

## Backend surface

oRPC router (`src/server/router`):

- **`post`** — blog-related procedures
- **`email`** — contact form → Resend

Mounted at `/api/rpc`. Procedures use Valibot validation; `public` vs `authed` procedure builders live in `src/server/root.ts`.

---

## Design / product notes

- Dark UI with Geist Sans; portfolio chrome under `[lang]/(main)`
- Studio intentionally **outside** `[lang]` so it does not inherit globals, Nuqs, Query providers, GTM, etc.
- Catch-all `[...slug]` under `(main)` returns `notFound()` so unknown paths 404 cleanly with static params

---

## License / privacy

Private personal portfolio (`"private": true`). Resume PDF and personal contact details are part of the public site content; treat credentials and Sanity tokens as secrets.
