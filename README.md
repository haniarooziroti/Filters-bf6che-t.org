# BF6 Cheats — bf6cheat.org

Battlefield 6 cheats site (Astro static build + Cloudflare Worker `bf6cheat-org`).

## Repository (authorized push target only)

```text
https://github.com/haniarooziroti/Filters-bf6che-t.org.git
```

Cloudflare Workers → Settings → Builds must use **this exact repo** (`Filters-bf6che-t.org`, not `bf6cheat.org` or the old `battlefield-6-hacks-.net` repo). Production branch: `main`.

If Cloudflare shows **“Fetching repository failed”**:

1. Reconnect GitHub under Cloudflare (Workers & Pages → your worker → Settings → Build).
2. Grant the Cloudflare GitHub App access to `haniarooziroti/Filters-bf6che-t.org`.
3. Confirm the repo name spelling includes `bf6che-t` (typo in repo name is intentional).
4. Retry deploy after a successful push to `main`.

## Local development

```bash
YOUTUBE_DL_SKIP_PYTHON_CHECK=1 npm ci
npm run dev
```

## Build & deploy

```bash
YOUTUBE_DL_SKIP_PYTHON_CHECK=1 npm ci
npm run build
npm run deploy
```

Build output: `dist/` (served via Worker `ASSETS` binding in `worker.mjs`).

## Verification

```bash
npm run verify:migration
npm run verify:site
```