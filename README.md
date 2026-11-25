# PomoJI — Landing Page

The official marketing and informational landing page for **PomoJI**, a web-based
productivity and student wellness application. Built as a fast, responsive,
single-page React application.

> PomoJI combines focus sessions, productivity tracking, and an optional
> DASS-21 self-assessment to help students stay productive while looking after
> their well-being.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Accessibility](#accessibility)
- [License](#license)

---

## Overview

This repository contains **only the landing page**. It is a standalone
single-page application that introduces the product and routes visitors to the
main PomoJI application.

- **Production app:** <https://software-engineering1-pomoji.web.app/welcome>
- All "Get Started" and "Sign In" calls-to-action link to the URL above.

The page is composed of the following sections, rendered in order by
`src/App.tsx`:

| Section      | Anchor             | Purpose                                        |
| ------------ | ------------------ | ---------------------------------------------- |
| Hero         | —                  | Headline, value proposition, primary CTAs      |
| About        | `#about`           | Product introduction                           |
| Features     | `#features`        | Core feature highlights                        |
| How It Works | `#how-it-works`    | Step-by-step usage flow                        |
| App Preview  | `#preview`         | Interactive phone mockups of the app           |
| Use Cases    | `#use-cases`       | Target audience scenarios                      |
| Wellness     | `#wellness`        | DASS-21 / well-being messaging                 |
| Privacy      | `#privacy`         | Privacy and data-handling notes                |
| Final CTA    | `#get-started`     | Closing call to action                         |

---

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Sticky navigation bar with mobile hamburger menu
- Scroll-reveal animations via IntersectionObserver
- Interactive phone mockups for the Home, Focus Timer, and DASS-21 screens
- Centralized route configuration — all outbound links managed in one file
- Single-file production build (all assets inlined into `index.html`)
- Accessibility: skip-to-content link, semantic landmarks, ARIA labels,
  keyboard-navigable mobile menu

---

## Tech Stack

| Category       | Technology                                  |
| -------------- | ------------------------------------------- |
| UI framework   | React 19                                    |
| Language       | TypeScript 5.9 (strict mode)                |
| Build tool     | Vite 7                                      |
| Styling        | Tailwind CSS 4 (`@tailwindcss/vite`)        |
| Bundling       | `vite-plugin-singlefile` (inlined assets)   |
| Linting        | ESLint                                      |
| Fonts          | Bricolage Grotesque (Google Fonts)          |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18 (developed on Node 22)
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-app

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The dev server starts at <http://localhost:5173/> with hot module replacement.

### Production build

```bash
npm run build
```

Outputs a fully self-contained `dist/index.html` — no separate asset files are
emitted, so the build can be hosted anywhere static hosting is supported.

### Preview the production build

```bash
npm run preview
```

---

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR   |
| `npm run build`   | Type-check-free production build     |
| `npm run preview` | Serve the production build locally   |

> There is no `npm run web` script — use `npm run dev` for local development.

---

## Project Structure

```
my-app/
├── index.html                  # Entry HTML, meta tags, font loading
├── vite.config.ts              # Vite config: React, Tailwind, singlefile, "@" alias
├── tsconfig.json               # Base TypeScript config (strict)
├── tsconfig.app.json           # App TS config incl. "@/*" path mapping
├── tsconfig.node.json          # Config for vite.config.ts
├── eslint.config.js            # ESLint flat config
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.tsx                # React entry point
    ├── App.tsx                 # Section composition + skip link
    ├── index.css               # Tailwind directives + theme tokens
    ├── App.css                 # Legacy template styles
    ├── assets/                 # Static images (hero, logos)
    ├── config/
    │   ├── routes.ts           # APP_ROUTES + in-page section anchors
    │   └── screenshots.ts      # App preview screen metadata
    ├── utils/
    │   └── cn.ts               # clsx + tailwind-merge helper
    ├── components/
    │   ├── Navbar.tsx          # Sticky header + mobile menu
    │   ├── Footer.tsx
    │   ├── Logo.tsx
    │   ├── icons.tsx           # Inline SVG icon set
    │   ├── mockups/            # PhoneFrame + Home/Timer/DASS screens
    │   ├── sections/           # One component per page section
    │   └── ui/                 # Button, Reveal, SectionHeader primitives
    └── ...
```

---

## Configuration

### Outbound links — `src/config/routes.ts`

All links that leave the landing page are defined in `APP_ROUTES`. Currently,
`register` and `login` both point to the production app welcome page:

```ts
export const APP_ROUTES = {
  register: "https://software-engineering1-pomoji.web.app/welcome",
  login: "https://software-engineering1-pomoji.web.app/welcome",
  terms: null,          // rendered only when set
  privacyPolicy: null,  // rendered only when set
};
```

In-page navigation anchors live in the `SECTIONS` export of the same file.

### App preview screens — `src/config/screenshots.ts`

Each preview screen (`home`, `timer`, `dass`) supports an optional `image`
field. Drop a real screenshot into `public/screenshots/` and set
`image: "/screenshots/<file>.png"` — otherwise an illustrative CSS mockup is
rendered automatically.

### Path alias

`@/*` resolves to `src/*` in both Vite (`vite.config.ts`) and TypeScript
(`tsconfig.app.json`), so imports like `@/components/ui/Button` work.

---

## Deployment

The production build is a **single HTML file** (`dist/index.html`) because
`vite-plugin-singlefile` inlines all JS, CSS, and assets. This makes deployment
to any static host trivial:

- **Firebase Hosting** (recommended, matches the app domain):
  ```bash
  npm run build
  firebase deploy --only hosting
  ```
  with `"public": "dist"` in `firebase.json`.
- **Netlify / Vercel / GitHub Pages / S3**: point the host at the `dist/`
  directory; no additional configuration is required.

---

## Accessibility

- Skip-to-content link for keyboard users
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- ARIA labels on navigation and the mobile menu toggle
- `prefers-reduced-motion` respected by scroll-reveal animations
- Minimum 44px touch targets on interactive elements
- Descriptive `alt` text for all imagery and mockups

---

## License

Proprietary — © PomoJI. All rights reserved.
