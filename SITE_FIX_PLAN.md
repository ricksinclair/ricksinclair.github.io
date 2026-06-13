# ulrictodman.com Style-Fix Plan

**Date:** 2026-06-12 · **Status:** ✅ FIXED — deployed (gh-pages `354ccce`) and verified live

## Symptom

The live site at https://ulrictodman.com renders completely unstyled (raw HTML).

## Root causes (confirmed)

### 1. Missing `.nojekyll` on the `gh-pages` branch — PRIMARY
- GitHub Pages is configured with `build_type: "legacy"` serving the `gh-pages` branch root.
- Legacy Pages runs the output through **Jekyll**, and Jekyll silently drops any
  directory starting with `_` — i.e. the entire `_next/` folder.
- Proof: `_next/static/css/652bf9da59902772.css` **exists on the `gh-pages`
  branch** but returns **404** when fetched from the live site. Same for all
  `_next/static/chunks/*.js`. So zero CSS and zero JS load → unstyled page.
- Fix: add an empty `.nojekyll` file to the root of the deployed output.

### 2. `next/image` optimizer URLs in a static export — SECONDARY
- The exported HTML (both live and in `UlricTodman.com/out/index.html`)
  references `/_next/image?url=...` — a server-side image-optimization endpoint
  that does not exist on GitHub Pages. All images (e.g. the avatar) 404.
- Fix: in `UlricTodman.com/next.config.mjs` add:
  ```js
  images: { unoptimized: true },
  ```
  then rebuild so `<Image>` emits direct static URLs.

## Fix steps

1. [x] Add `images: { unoptimized: true }` to `next.config.mjs`.
2. [ ] Also drop the deprecated `experimental.outputFileTracingIncludes` warning
       if the Next version complains (low priority — build is clean, left as-is).
3. [x] `npm run build` in `UlricTodman.com/` → regenerated `out/` (15 pages,
       zero `/_next/image?url=` references).
4. [x] Verified build output directly (static media URLs, CSS present).
5. [x] Deploy: replaced `gh-pages` root with `out/` + kept `CNAME` + added empty
       `.nojekyll`; committed `354ccce` and pushed.
6. [x] Verified live after Pages build:
       - `curl -I https://ulrictodman.com/_next/static/css/acab2fbd9d9f33c5.css` → 200
       - Avatar `/_next/static/media/avatar.2a5a91c0.jpg` → 200.
7. [x] Committed `master` changes (config + out/ + this plan) locally —
       push to master pending review.

## Longer-term hardening (optional)

- Switch Pages to **GitHub Actions deployment** (`actions/deploy-pages`) so the
  build/deploy is automated and Jekyll is bypassed entirely — eliminates the
  `.nojekyll` foot-gun and manual gh-pages copying.
- Clean up repo noise: `.idea/`, `Header.tsx.backup`, `test-border-radius.html`,
  `.DS_Store` → gitignore.

## Housekeeping done this session

- Pulled latest (`d701c21`); resolved a trivial `.idea/workspace.xml` stash
  conflict by keeping the local version.
