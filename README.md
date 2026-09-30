# AVO — Golden Hour Creative Developer Portfolio

The portfolio runs as a Next.js App Router application. The existing page markup remains in `index.html` and is rendered by the server route; its browser interactions are initialized in the client shell.

## ✨ What's Included

- **Sticky Glassmorphic Navigation**: With active indicators, responsive mobile hamburger drawer, and interactive rotating sun/moon warm theme toggle.
- **Warm Dark Mode**: Custom warm palette without clinical grays or harsh pure blacks, persisted via `localStorage`.
- **Hero Section**: Animated organic sun-glow gradient orbs, interactive mouse parallax follow, word-by-word reveal typography, and tactile CTA buttons.
- **About Me**: 3 sticker-style floating cards with 3D tilt effects on hover (`card-tilt`).
- **Infinite Skills Marquee**: Seamless continuous scrolling pills featuring Next.js, React, Tailwind CSS, TypeScript, and more.
- **The Lab (Experiments)**: 4 detailed prototype showcase cards (Solaris Sound, Pebble UI, WarmType, ChromaHour) + 1 wide "Currently Building" card with roadmap progress bar.
- **Workflow & Philosophy**: 3-step visual sequence (*Listen*, *Design*, *Build*) connected by a curvy dashed SVG path.
- **Interactive Contact Card**: Big friendly CTA with copy-to-clipboard email feedback and social links.
- **Custom Warm Cursor**: Fluid lerp follower that scales gracefully on interactive elements.

## Run Locally

Install dependencies and start the Next.js development server:
```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. To create and run a production build:
```bash
npm run build
npm start
```

The home page uses the markup in `index.html`; app routing, metadata, and compiled Tailwind styles live in `app/` and the root Tailwind configuration.

---

## 🎨 Design System
For design tokens, typography specifications, and color values, see [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).
