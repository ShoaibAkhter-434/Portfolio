# Portfolio Project Guide

## Purpose

This repository is a personal portfolio for Shoaib Akhter, a full-stack developer. It is a small, presentation-focused Next.js application with a composed home page, three secondary pages, local image assets, and client-side demo interactions.

## Stack

- Next.js `16.3.3` App Router
- React `19`
- TypeScript `5.7`
- Tailwind CSS `4` through `@tailwindcss/postcss`
- shadcn configuration with the `base-nova` style and Lucide icons
- Base UI for the reusable button primitive
- Vercel Analytics in production
- Package manager convention: `pnpm` (`pnpm-lock.yaml` is committed)

The repository also contains `package-lock.json`. Avoid creating further lockfile churn unless the package manager is intentionally changed.

## Application Architecture

The application uses the App Router. There are no API routes, route handlers, server actions, middleware, database models, authentication integrations, or external content-management layer.

### Root shell

- `app/layout.tsx` is the root layout.
  - Loads Geist and Geist Mono through `next/font/google`.
  - Imports `app/globals.css`.
  - Defines global metadata and the dark viewport theme color.
  - Renders Vercel Analytics only when `NODE_ENV` is `production`.
- `app/globals.css` owns the Tailwind v4 imports, design tokens, dark/light theme variables, keyframes, animation utilities, global background effects, and the custom skills visualization styles.
- `lib/utils.ts` exports `cn()`, the shared `clsx` plus `tailwind-merge` class-name helper.

### Routes

- `/` -> `app/page.tsx`
  - Composes the complete portfolio landing page from shared components.
- `/achievements` -> `app/achievements/page.tsx`
  - Renders a static achievements list from an in-file array.
- `/guestbook` -> `app/guestbook/page.tsx`
  - Client-side guestbook demo. Comments and simulated sign-in state exist only in browser memory and disappear on refresh.
- `/links` -> `app/links/page.tsx`
  - Renders a static list of external links from an in-file array.

The secondary pages currently implement their own header and back link instead of reusing `SiteNav` or `SiteFooter`.

## Home Page Composition

`app/page.tsx` is intentionally an orchestration component. The rendered order is:

1. `components/site-nav.tsx` - fixed navigation, local light-theme toggle, CV download, and a currently non-functional Book a Call button.
2. `components/free-template-popup.tsx` - dismissible desktop-only services prompt linking to the footer.
3. `components/hero.tsx` - avatar, introduction, quick prompts, and a local question/answer interaction.
4. `components/name-banner.tsx` - large responsive name banner.
5. `components/about-cards.tsx` - three presentation cards with hover transitions.
6. `components/craft-section.tsx` - rotating remote image panel, rotating local portrait panel, technology marquee, and location panel.
7. `components/projects-section.tsx` - four static project cards and an unfinished GitHub CTA.
8. `components/skills-section.tsx` - animated technology orbit around a world image.
9. `components/explore-section.tsx` - links to the guestbook, achievements, and links routes.
10. `components/site-footer.tsx` - services, repository placeholders, copyright, and social/contact links.

## Component Responsibilities

- `site-nav.tsx`: client component because it toggles the `light` class on `<html>` with `useEffect`.
- `hero.tsx`: client component because it owns prompt input, answer state, and a short response timer.
- `free-template-popup.tsx`: client component because it owns open/closed state.
- `craft-section.tsx`: client component because it owns two image rotation timers.
- `about-cards.tsx`, `projects-section.tsx`, `skills-section.tsx`, `explore-section.tsx`, `name-banner.tsx`, `site-footer.tsx`: presentational components with data colocated in the file.
- `brand-icons.tsx`: custom GitHub and LinkedIn SVG icon components.
- `components/ui/button.tsx`: Base UI/CVA button abstraction. It is available for reuse but is not currently imported by the application.

When adding a new home section, keep the section component in `components/` and add it to `app/page.tsx` in the intended visual order. Keep page assembly separate from content and interaction logic.

## Styling and Theme Conventions

- Use Tailwind utility classes for component styling.
- Use the CSS variables in `app/globals.css` for semantic colors: `background`, `foreground`, `card`, `primary`, `accent`, `muted`, `border`, `input`, and `ring`.
- The default theme is dark. The light theme is enabled by adding `.light` to the root `<html>` element; `SiteNav` currently controls this state locally and does not persist it.
- Global styles provide the section reveal, floating, marquee, orbit, world-language, and reduced-motion animations.
- Preserve `prefers-reduced-motion` behavior when adding animations.
- Use `next/image` for local images when practical. Existing remote Unsplash backgrounds are rendered as CSS backgrounds or plain `img` elements, and `next.config.mjs` currently disables image optimization.
- Keep responsive layouts mobile-first and preserve the existing dark glass/gradient visual language unless a deliberate redesign is requested.

## Assets

Static assets live in `public/` and are referenced from the site root, for example `/shoaib.png` or `/world.jfif`.

Important assets include:

- `shoaib.png`, `shoaib1.jfif`, `shoaib2.jfif`, `shoaib3.jfif`: portraits and profile imagery
- `world.jfif`: skills visualization background
- `map-dark.png`: location panel background
- `Shoaib_Akhter_Resume.docx.pdf`: downloadable CV
- `front end.jpg`, `software.jfif`: achievement-related imagery

When referencing a file in `public/`, use an absolute root URL beginning with `/`. In particular, the achievement data currently uses relative image paths for local files; verify these paths if that page is changed.

## Data and State Model

There is no shared content model. Arrays for projects, skills, cards, achievements, links, and guestbook seed comments are defined in the files that render them.

- Static content should remain colocated unless it is reused by multiple routes.
- Local UI state should remain in the owning component.
- The guestbook is a demo only: sign-in buttons simulate authentication, and posting updates React state without persistence.
- Do not imply that guestbook messages are permanent or that OAuth is configured without adding a real backend/authentication implementation.

## Development Commands

```bash
pnpm dev
pnpm build
pnpm start
```

There are currently no lint, test, or format scripts. No automated test suite is present. Use the TypeScript/editor diagnostics and a production build as the primary validation checks.

## Configuration Notes

- `tsconfig.json` enables strict TypeScript, bundler module resolution, the `@/*` path alias, and Next's TypeScript plugin.
- `components.json` maps `@/components`, `@/components/ui`, `@/lib`, and `@/hooks` for shadcn-style imports.
- `postcss.config.mjs` enables the Tailwind v4 PostCSS plugin.
- `next.config.mjs` sets `images.unoptimized: true` and currently sets `typescript.ignoreBuildErrors: true`. Treat new TypeScript errors as real defects and validate them even though Next is configured not to fail the build on them.

## Known Incomplete or Placeholder Areas

These are existing limitations, not assumptions to silently expand during unrelated work:

- The Book a Call controls have no action.
- The projects CTA has an empty `href`.
- Footer service and repository links use `#` or placeholder repository names.
- `/links` contains generic GitHub/LinkedIn URLs and a placeholder email address, while the home footer has different personal links.
- The guestbook has no persistence or real authentication.
- Secondary routes do not share the home navigation/theme toggle/footer.
- Some pages are marked `'use client'` even though their current rendering is static; remove that directive only when checking the route's dependencies and behavior.
- Remote Unsplash images make parts of the visual output dependent on network access.

When changing these areas, make the smallest complete change and update this guide if the architecture materially changes.

## Working Rules for Agents

1. Inspect the owning route or component before editing.
2. Prefer existing components, tokens, and utility patterns over new abstractions.
3. Keep content, state, and styling close to the component that owns them unless reuse justifies extraction.
4. Use the `@/*` alias for internal imports.
5. Preserve accessibility basics: meaningful image alt text, labels for form controls, keyboard-accessible buttons/links, and live status text for async-looking UI.
6. Run a focused validation after edits, then run `pnpm build` for changes that affect routes, shared components, configuration, or styling.
7. Do not add a backend or real authentication flow implicitly; those require an explicit product decision and deployment configuration.
