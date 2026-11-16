# BF6 Cheats — bf6cheat.org

Battlefield 6 cheats site (Astro static build + Cloudflare Worker `bf6cheat-org`).

## Repository (authorized push target only)

```text
https://github.com/haniarooziroti/Filters-bf6che-t.org.git
```

Cloudflare Workers → Settings → Builds must use **this exact repo** (`Filters-bf6che-t.org`, not `bf6cheat.org` or the old `battlefield-6-hacks-.net` repo). Production branch: `main`.

If Cloudflare shows **“Fetching repository failed”** (clone step, before `npm ci`):

The Git remote and `git ls-remote` from this project are OK when pointed at `Filters-bf6che-t.org.git`; the failure is almost always **Cloudflare ↔ GitHub**, not Astro.

1. **Wrong repo in dashboard** — Worker `bf6cheat-org` → **Settings** → **Build** must show  
   `haniarooziroti/Filters-bf6che-t.org` (not `battlefield-6-hacks-.net`, not a guessed `bf6cheat.org` repo).  
   Production branch: **`main`**.
2. **Private repository** — This repo is not public on github.com without login. On GitHub: **Settings** → **Integrations** → **Applications** → **Cloudflare Workers and Pages** → **Configure** → select **Only select repositories** → add **`Filters-bf6che-t.org`** → Save.
3. **Reconnect** — In Cloudflare Build settings: **Disconnect** GitHub → connect again and pick the repo above.
4. **Verify locally** — `npm run verify:github` then push `main` and **Retry deployment**.

Alternative deploy (bypasses Cloudflare git clone): add GitHub repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, then use the workflow `.github/workflows/deploy-cloudflare.yml` (`gh` not required on your PC for that to run on GitHub).

## Local development

```bash
npm ci
npm run dev
```

If Astro shows **“Tsconfig not found astro/tsconfigs/strict”**, stop the dev server, delete `node_modules`, and run `npm ci` again (a partial install leaves `astro` incomplete).

Frame extraction (`npm run frames:extract`) is optional and needs `npx youtube-dl-exec` when you run that script.

## Build & deploy

```bash
npm ci
npm run build
npm run deploy
```

Build output: `dist/` (served via Worker `ASSETS` binding in `worker.mjs`).

## Verification

```bash
npm run verify:migration
npm run verify:site
```