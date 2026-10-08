# Mark Bañga — Software Developer Portfolio

A responsive, static engineering portfolio built with React, TypeScript, Vite, Tailwind CSS, and Lucide React. Professional work is presented as sanitized case studies without proprietary assets or implementation details.

## Local development

Requirements: Node.js 20.19+ or 22.12+ and a compatible package manager.

This workspace has been verified using pnpm. The npm commands below are the expected equivalents from `package.json`, but npm has not been experimentally verified in this environment.

Verified commands:

```bash
pnpm install
pnpm run dev
pnpm run typecheck
pnpm run lint
pnpm run build
```

Expected npm workflow:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. The expected npm verification commands are:

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

The static output is written to `dist/`.

## Edit portfolio content

Most content lives in `src/data/portfolio.ts`. Edit that file to update:

- Name, title, location, email, and profile summary
- GitHub and LinkedIn URLs
- Professional case studies and experience
- Skills and methods
- Featured engineering projects and additional project work

For a link to become active, set its `href` and change `configured` to `true`. Unconfigured profile links render as clearly disabled text and never navigate to a fake profile.

## Résumé

Place the public résumé at:

```text
public/Mark_Banga_Resume.pdf
```

The hero button uses that exact filename. Replace the PDF in place when the résumé changes.

## Engineering projects and images

Add featured entries to `engineeringProjects` in `src/data/portfolio.ts`. Each project supports a status, type, role, description, implemented work, engineering challenges, technology stack, architecture, planned work, and optional `githubUrl` / `demoUrl`. Buttons remain hidden when a URL is undefined.

Add smaller entries to `personalProjects`. These cards support a name, description, technologies, image, engineering challenges, and major features.

Put optimized WebP/AVIF project images in `public/projects/`, then use a root-relative path such as `/projects/example.webp`. Aim for images below 200 KB. If the project list is empty, the page displays a neutral “Projects coming soon” state.

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Run `npm install && npm run build` in CI.
3. Publish the `dist` directory with GitHub Pages (GitHub Actions is recommended).
4. Vite uses `base: './'`, so assets work when deployed under a repository subpath.

### Vercel

Production deployment: <https://mark-banga-portfolio.vercel.app/>

- Framework preset: Vite
- Install command: `pnpm install`
- Build command: `pnpm run build`
- Output directory: `dist`
- Project root: repository root

Until a GitHub remote is connected, authenticated CLI releases use:

```bash
pnpm dlx vercel@latest --prod
```

For automatic deployments, push this repository's `main` branch to GitHub and
connect that repository in the Vercel project's Git settings. Future pushes to
`main` will then create production deployments through Vercel's native Git
integration; other branches can produce preview deployments.

The résumé remains at `public/Mark_Banga_Resume.pdf` and is available in
production at `/Mark_Banga_Resume.pdf`.

An eventual custom domain can be added under the Vercel project's Domains
settings. Update the canonical and Open Graph origins in `index.html` after the
custom domain becomes primary.

### Cloudflare Pages

1. Connect the GitHub repository in Cloudflare Pages.
2. Choose the Vite framework preset.
3. Use `npm run build` as the build command.
4. Use `dist` as the build output directory.

No backend, environment variables, redirects, or paid services are required.

## SEO and sharing

Metadata is in `index.html`, including the canonical Vercel production origin. `public/og-placeholder.svg` is still a placeholder; replace it with a production Open Graph image (ideally a 1200×630 PNG or JPG) and update the `og:image` value. Replace `public/favicon.svg` if a custom mark is preferred.

## Architecture

- `src/components/` — reusable UI and case-study components
- `src/data/` — editable portfolio content and link configuration
- `src/hooks/` — persisted system-aware theme handling
- `src/styles/` — design tokens, responsive layout, accessibility states
- `src/types/` — strict content types
- `public/` — résumé and static metadata assets

The site is a single semantic page, so React Router is intentionally omitted.
