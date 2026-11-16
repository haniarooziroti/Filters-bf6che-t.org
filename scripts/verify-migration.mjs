import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { resolveDistDir } from './dist-dir.mjs';
import { CHECKOUT_URLS } from '../src/config/checkout-redirects.mjs';
const SITE = 'https://bf6cheat.org';
const dist = resolveDistDir();
const root = process.cwd();

const failures = [];

function fail(msg) {
  failures.push(msg);
}

function readDist(rel) {
  const file = path.join(dist, rel);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}

// Git remote
try {
  const remote = execSync('git remote get-url origin', { cwd: root, encoding: 'utf8' }).trim();
  if (!remote.includes('Filters-bf6che-t.org.git')) {
    fail(`Git origin should be Filters-bf6che-t.org.git (got ${remote})`);
  }
  if (remote.includes('battlefield-6-hacks-.net.git')) {
    fail('Git origin still points at the old source repository');
  }
} catch {
  fail('Could not read git remote');
}

if (!fs.existsSync(dist)) {
  fail('dist/ missing — run npm run build');
} else {
  const home = readDist('index.html');
  if (home) {
    if (!home.includes('<title>Battlefield 6 Cheats for PC | ESP &amp; Aimbot Features</title>')) {
      fail('Homepage title does not match required SEO title');
    }
    if (!home.includes('Explore Battlefield 6 cheats for PC, compare ESP and aimbot features')) {
      fail('Homepage meta description mismatch');
    }
    if ((home.match(/Battlefield 6 Cheats for PC/g) ?? []).length < 1) {
      fail('Homepage missing required H1 text');
    }
    const canonical = home.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    if (canonical !== `${SITE}/`) fail(`Home canonical expected ${SITE}/ got ${canonical}`);
    if (home.includes('battlefield6hacks.net')) fail('Homepage still references old domain');
    if (/\$\d+/.test(home)) fail('Homepage still shows dollar pricing');
  }

  const robots = fs.existsSync(path.join(dist, 'robots.txt'))
    ? fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8')
    : '';
  if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt sitemap URL incorrect');

  const sitemap = fs.existsSync(path.join(dist, 'sitemap-index.xml'))
    ? fs.readFileSync(path.join(dist, 'sitemap-index.xml'), 'utf8')
    : '';
  if (sitemap.includes('battlefield6hacks.net')) fail('Sitemap contains old domain');
  if (sitemap.includes('workers.dev') || sitemap.includes('pages.dev')) fail('Sitemap contains preview hosts');

  const complete = readDist('products/battlefield-6-cheats/complete/index.html');
  if (complete) {
    if (complete.includes('cloud-dma') && complete.includes('hwid-spoofer')) {
      /* addon section present */
    } else if (!complete.includes('Cloud DMA') || !complete.includes('HWID Spoofer')) {
      fail('Product page missing Cloud DMA or HWID Spoofer cards');
    }
    if (/\$\d+/.test(complete)) fail('Product detail page still shows dollar pricing');
    if (!complete.includes(CHECKOUT_URLS.battlefield6)) fail('Main BF6 affiliate URL missing on product page');
  }
}

// Wrangler worker name
const wrangler = fs.readFileSync(path.join(root, 'wrangler.toml'), 'utf8');
if (!wrangler.includes('name = "bf6cheat-org"')) fail('wrangler.toml worker name should be bf6cheat-org');
if (!wrangler.includes('main = "worker.mjs"')) fail('wrangler.toml should use worker.mjs for preview noindex');

console.log('\n=== Migration verification ===\n');
if (failures.length) {
  failures.forEach((f) => console.log(`FAIL: ${f}`));
  process.exit(1);
}
console.log('All migration checks passed.\n');