# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

One-page marketing site for a med-aesthetics clinic (Rabat, Morocco), built with Next.js (App Router), TypeScript, and Tailwind CSS. All UI copy is in French. There is no backend, database, or API — it's a static/client-rendered brochure site with external links to a booking platform and Google Maps.

## Commands

```powershell
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm start        # serve the production build (run build first)
npm run lint     # eslint via next lint
```

There is no test suite configured.

## Architecture

`src/app/page.tsx` renders the entire site as one page by stacking section components in order: `Header`, `Hero`, `About`, `Treatments`, `Booking`, `Contact`, `Footer`. Each section is a self-contained component in `src/components/`; there is no routing beyond in-page anchor links (`#accueil`, `#apropos`, `#traitements`, `#rendez-vous`, `#contact`) that both `Header` nav and `Hero` CTAs point to. When adding a new section, add its id/anchor to `navLinks` in `Header.tsx` for the scroll-spy nav to pick it up.

**Site-wide config lives in `src/config/site.ts`** (`siteConfig`): the booking platform URL/name and Google Maps links. `Booking.tsx` checks `bookingPlatformUrl.startsWith("http")` to decide whether to render a live "book online" button or a "link not configured yet" placeholder — the booking URL is a placeholder (`"#"`) until a real platform is wired up.

**Reusable presentational components:**
- `ScrollReveal` — client component wrapping children in an `IntersectionObserver`-driven fade/slide-in (`direction`: up/left/right/scale, `delay` in ms). Used throughout section components to stagger content on scroll. Respects `prefers-reduced-motion`.
- `SoftImage` — wraps `next/image` with a shimmering placeholder shown until `onLoad` fires, plus a hover zoom. Used for in-page content photos (`aspect`: video/square/wide).
- `HeroBackground` — hero-specific full-bleed blurred background photo with its own placeholder/overlay/glow, using a plain `<img>` (not `next/image`) with `fetchPriority="high"` since it's the LCP element.
- `MapQrCode` — QR code (via `qrcode.react`) linking to `siteConfig.mapsUrl`, used in the footer.

**Styling conventions:** Tailwind utility classes are used inline in JSX for one-off layout; recurring visual patterns (buttons, cards, section chrome, hero animations) are extracted as `@apply`-based classes in `src/app/globals.css` under `@layer components` (e.g. `.btn-appointment`, `.btn-discover`, `.card-base`, `.section-title`/`.section-subtitle`/`.section-eyebrow`, `.hero-*` animation classes, `.nav-link*`). Prefer reusing these existing classes over inventing new inline styles when a similar UI element already exists elsewhere in the site. Brand colors are defined in `tailwind.config.ts` as `slate.blue` (#5B788E, primary) and `gold` (#D1B78D, accent) with `-dark`/`-light` variants — don't hardcode these hex values in new code.

The site intentionally forces light mode only (`color-scheme: light only` in `layout.tsx` and `globals.css`, plus a `prefers-color-scheme: dark` override block) to prevent OS dark-mode from recoloring the brand palette. Keep this in mind when touching `layout.tsx` or `globals.css`.

Images live in `public/images/` (content photos referenced via `SoftImage`/`next/image`) and `public/` (logo files). `next.config.ts` allows remote images only from `images.unsplash.com`; local images must go through `public/`.

Section components are server components by default; only components needing browser APIs or interactivity (`useState`, `IntersectionObserver`, form handlers) are marked `"use client"` (`Header`, `Contact`, `ScrollReveal`, `SoftImage`, `HeroBackground`, `MapQrCode`).

The contact form in `Contact.tsx` has no backend wired up — `handleSubmit` just shows a local "message sent" confirmation and resets after a timeout; it does not actually send anything.
