# Portfolio

A minimal personal portfolio built with Next.js.

## Highlights
- Scroll‑driven hero animation with Motion.
- Staggered, in‑view reveal animations for profile and about sections.
- Data‑driven sections for Projects, Experience, and Tech Stack.
- GitHub contribution graph with caching and graceful fallback.
- Dark mode toggle and responsive layout.

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Motion (animations)
- Tabler Icons
- Radix UI + shadcn/ui primitives

## Project Structure
- `src/app` App Router entry, layout, and global styles
- `src/components` UI sections, cards, and reusable primitives
- `src/lib` Content data and helpers
- `src/config` Small site config values
- `public` Static assets (icons, images)

## Key Sections
- `Header` Hero + navigation with scroll‑based transforms
- `About` Narrative highlights + GitHub contributions graph
- `Stack` Tech stack grid with tooltips and staggered animation
- `Experience` Collapsible experience timeline
- `Projects` Collapsible project cards with highlights and tags

## Data Sources (Edit These)
- Projects: `src/lib/projects.ts`
- Experience: `src/lib/experiences.ts`
- Tech Stack: `src/lib/tech-stack.ts`
- UTM config: `src/config/site.ts`

## GitHub Contributions
- Data is fetched from a public contributions API and cached via `unstable_cache`.
- Source: `src/lib/github-contributions.ts`
- UI: `src/components/about/github-contributions/`

## Development
Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts
- `npm run dev` Start development server
- `npm run build` Build for production
- `npm run start` Run production server
- `npm run lint` Lint the codebase

## Notes
- The app uses client components where Motion or interactive UI is needed.
- Content is mostly data‑driven for easy updates.
