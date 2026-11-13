# sitebyzeb.com

Zeb Goriely's personal site — self-coded with [Astro](https://astro.build),
rebuilt from the original site project. Served by GitHub Pages at
[sitebyzeb.com](https://sitebyzeb.com).

## Editing content

Almost everything lives in `src/data/`:

| File | Controls |
|---|---|
| `src/data/films.ts` | Short films page (titles, descriptions, stills, laurels, watch links) |
| `src/data/clients.ts` | Freelance client cards + video embeds |
| `src/data/content.ts` | Creative content page (banner slideshow, PhD Grind, vlogs, TikTok) |
| `src/data/research.ts` | Research bio, themes, papers, teaching, presentations |
| `src/data/info.ts` | Info page bio paragraphs + bio links |
| `src/data/site.ts` | Email + social links |

Add an image by dropping the file in `src/assets/` and importing it in the
relevant data file. Pages live in `src/pages/`, shared components in
`src/components/`, design tokens in `src/styles/global.css`.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static build to dist/
npm run preview   # serve dist/ locally
```

## Fonts (licensing)

The design font is **Coolvetica Rg** (Typodermic). The desktop licence that
ships with the free download does **not** cover webfont use — buy the
webfont licence (~$20, typodermicfonts.com) for this domain. The font files
are **gitignored** (no redistribution):

1. Put `Coolvetica Rg.woff2` at `public/fonts/coolvetica-rg.woff2`
   (a copy already exists on Zeb's machine — `fonts/` folder, gitignored).
2. CSS picks it up via the `@font-face` rule in `src/styles/global.css`.

Without the file the site falls back to Helvetica Neue — nothing breaks.

## Deploying

Deploy is a **local build** (so the licensed font never enters the source
repo):

```sh
git push            # save source to GitHub (main)
npm run deploy      # build + push dist/ to the gh-pages branch
```

One-time GitHub setup:

1. Create the public repo `codebyzeb/sitebyzeb`, add as remote:
   `git remote add origin git@github.com:codebyzeb/sitebyzeb.git`
2. Settings → Pages → Source: **Deploy from a branch** → `gh-pages` / `/ (root)`
3. Settings → Pages → Custom domain: `sitebyzeb.com`, enforce HTTPS.

One-time DNS (Squarespace registrar):

- `sitebyzeb.com` A records → `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- `www.sitebyzeb.com` CNAME → `codebyzeb.github.io`

Keep the previous-site site published until you've verified the new site at the
domain, then unpublish.

## Repo layout

```
src/
  pages/       one .astro file per URL (work, shorts, freelance, …)
  components/  header/footer, slideshow, video embeds
  data/        ← the content you'll edit most
  layouts/     base layout (meta, nav, footer, reveal animation)
  assets/      site images (committed)
  styles/      design tokens + base CSS
public/        favicon + fonts (fonts gitignored — see above)
legacy-export/   captured source-of-truth from the old site
  page-widgets.json, snippets/, screenshots/, content-sheets/  (committed)
  assets/      90MB of original-resolution exports (gitignored — archive externally!)
fonts/         licensed Coolvetica files (gitignored)
```

## Notes

- `legacy-export/assets/` (originals, gitignored) is the only copy of the
  full-resolution previous-site exports — back it up (cloud drive / external disk).
- The old `/content-draft/` URL is intentionally not built; its content is
  preserved in `legacy-export/` (page `content-draft`).
- Custom cursor from the original was dropped by decision; scroll-reveal
  animations kept (respecting `prefers-reduced-motion`).
