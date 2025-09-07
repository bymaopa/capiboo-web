# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commonly Used Commands

- `pnpm dev`: Starts the local development server at `localhost:4321`.
- `pnpm build`: Builds the production site to `./dist/`.
- `pnpm preview`: Previews the build locally before deploying.
- `pnpm check`: Runs `astro check` to validate the project.
- `pnpm lefthook`: Installs lefthook git hooks.
- `npx prettier --write .`: Formats the code.
- `npx eslint .`: Lints the code.

## High-level Code Architecture and Structure

This is an Astro project that uses Svelte for components. It also includes the following integrations:

- `@astrojs/sitemap`: For generating a sitemap.
- `astro-expressive-code`: For code highlighting.
- `@astrojs/mdx`: For using MDX pages.
- `tailwindcss`: For styling.

The project uses path aliases for easier imports:

- `@`: `/src`
- `@assets`: `/src/assets`
- `@components`: `/src/components`
- `@layouts`: `/src/layouts`
- `@pages`: `/src/pages`
- `@styles`: `/src/styles`

The main application logic is within the `src` directory. Pages are in `src/pages`, and reusable components are in `src/components`.

