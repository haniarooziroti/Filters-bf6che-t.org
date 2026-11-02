export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Battlefield 6 Hacks | Aimbot, ESP & Wallhack — Buy PC Cheats',
    description:
      'Buy Battlefield 6 hacks with aimbot, ESP wallhack, and 29 modules. $15 week, $35 month, instant key, free updates. Windows PC — EA App & Steam.',
  },
  '/products/battlefield-6-cheats/': {
    title: 'Cheats – Battlefield 6 Complete, Aimbot & ESP Plans',
    description:
      'Compare Battlefield 6 cheat tiers: 29-module Complete suite, Aimbot-only, or ESP wallhack. Pricing, setup steps, plan table, and FAQs before checkout on.',
  },
  '/products/battlefield-6-cheats/complete/': {
    title: 'Battlefield 6 Complete Cheats | Full Aimbot & ESP Suite',
    description:
      'Battlefield 6 complete cheat suite: 29 modules including aimbot, ESP, wallhack, crosshair tools and cloud configs. Built for large-scale BF6 matches on PC.',
  },
  '/products/battlefield-6-cheats/aimbot/': {
    title: 'Battlefield 6 Aimbot | Smooth FOV & Bone Selection',
    description:
      'Battlefield 6 aimbot with smoothness sliders, FOV limits, bone selection and visible checks. Pair with ESP or grab the full BF6 cheat package.',
  },
  '/products/battlefield-6-cheats/esp-wallhack/': {
    title: 'Battlefield 6 ESP & Wallhack | Player & Bot Overlays',
    description:
      'Battlefield 6 ESP and wallhack with boxes, skeletons, health bars, snaplines and distance readouts. Tune colors and range before you queue Conquest.',
  },
  '/blog/': {
    title: 'Battlefield 6 Cheats Blog | Aimbot, ESP & Setup Guides',
    description:
      'Battlefield 6 cheats blog with aimbot guides, ESP wallhack tips, pricing comparisons, and loader setup for PC players before checkout.',
  },
  '/reviews/': {
    title: 'Battlefield 6 Hacks Reviews | 127+ PC Player Ratings',
    description:
      'Read Battlefield 6 hacks reviews from PC players—aimbot tuning, ESP clarity, loader setup, and honest notes on patch-day downtime.',
  },
  '/forum/': {
    title: 'Battlefield 6 Cheats Forum | Setup, Aimbot & ESP Talk',
    description:
      'Battlefield 6 cheats forum for aimbot settings, ESP layout tips, loader setup and patch-day questions from real PC players.',
  },
  '/faq/': {
    title: 'FAQ | Battlefield 6 Hacks Setup, Plans & Ban Risk PC',
    description:
      'Battlefield 6 hacks FAQ: Windows requirements, aimbot and ESP basics, $15–$150 plans, HWID reset, loader setup, and what to check after every BF6 patch.',
  },
  '/terms/': {
    title: 'Terms | Battlefield 6 Cheats License & Refunds',
    description:
      'Terms for buying Battlefield 6 cheats on battlefield6hacks.net — license use, delivery, refunds and account risk on PC.',
  },
  '/privacy/': {
    title: 'Privacy – cookies and contact data when you browse',
    description:
      'Privacy: How battlefield6hacks.net uses analytics, cookies and contact data when you browse Battlefield 6 cheat pages on this site.',
  },
  '/about/': {
    title: 'Battlefield 6 – forums and checkout paths for PC players',
    description:
      'About this Battlefield 6 resource: aimbot and ESP module guides, forum threads, checkout paths, plan comparisons, and FAQs for PC players on Windows.',
  },
  '/support/': {
    title: 'Battlefield 6 Cheats Support | Loader & Checkout Help',
    description:
      'Support for Battlefield 6 cheats: loader setup, HWID resets, billing help, ticket checklist, and FAQs. Email and Discord help for PC players after.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
