# Mikael ja Mikker — podcast website

Landing page for the [Mikael ja Mikker](https://www.mikaeljamikker.ee) Estonian podcast. Listeners submit voice messages with their stories and dilemmas via SpeakPipe; episodes are published on Spotify and YouTube.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- Tailwind CSS + CSS Modules
- `@next/third-parties` for Google Analytics 4
- `react-icons` for Spotify / YouTube icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env` and fill in your values (`.env` is gitignored):

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |

## External integrations

All external IDs and URLs live in [`src/lib/config.ts`](src/lib/config.ts):

- **SpeakPipe** — voice message widget
- **YouTube** — playlist embed (uses `youtube-nocookie.com` for privacy)
- **Spotify** — show link

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server on port 8080 |
| `npm run lint` | Run ESLint |

## Deployment

The server runs behind a reverse proxy:

```bash
npm run build
npm run start  # binds to 127.0.0.1:8080
```
