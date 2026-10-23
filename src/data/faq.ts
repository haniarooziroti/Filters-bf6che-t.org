import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const complete = link('Complete plan', productPath('complete'));
const aimbotPlan = link('Aimbot plan', productPath('aimbot'));
const espPlan = link('ESP / wallhack plan', productPath('esp-wallhack'));
const productsHub = link('Battlefield 6 products', ROUTES.products);
const faqPage = link('full FAQ', ROUTES.faq);
const forum = link('community forum', ROUTES.forum);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Battlefield 6 hacks are online?',
    a: a(
      'Use the live status banner on battlefield6hacks.net and the Discord #status channel. Always confirm after a Battlefield 6 client patch or Javelin anti-cheat update before you launch.',
    ),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a(
      'Checkout unlocks your operator portal with the loader, setup guide, and config library. Follow the portal steps before opening Battlefield 6 through EA App or Steam.',
    ),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using Battlefield 6 hacks?',
    a: a(
      'Yes—any third-party modification carries risk. Javelin, EA Terms of Service, and player reports can lead to account action. Read live status and accept the risk before use.',
    ),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a(
      'Battlefield 6 on Windows 10 or Windows 11 64-bit via EA App or Steam only. Console, macOS, and Linux are not supported.',
    ),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a(
      'Yes—start an HWID reset from your operator portal or Discord with your order email. How often you can move a key depends on your plan tier and recent resets.',
    ),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are Battlefield 6 cheat plans listed?',
    a: `${productsHub} lists ${complete}, ${aimbotPlan}, and ${espPlan} with module breakdowns and secure checkout links.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Battlefield 6 ESP and wallhack?',
    a: `Player ESP and wallhack overlays show infantry positions, health, skeletons, and distance through smoke and cover on Conquest and Breakthrough. ${espPlan} covers the visual suite; ${complete} adds aimbot and misc tools on the same license.`,
    scopes: ['esp-wallhack', 'complete'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP wallhack and aimbot?',
    a: `ESP and wallhack are information overlays—they do not move your crosshair. Aimbot modules on ${aimbotPlan} and ${complete} handle smooth tracking, FOV, and bone priority. You can stay awareness-only on ${espPlan}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which plan do I need for ESP wallhack only?',
    a: `${espPlan} includes player and bot ESP, boxes, skeletons, snaplines, health bars, names, distance, and max range—no aimbot automation. ${complete} adds all twelve aimbot modules plus config and crosshair tools.`,
    scopes: ['esp-wallhack'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which plan includes aimbot?',
    a: `${aimbotPlan} ships every aimbot module: smoothness, FOV, bone selection, visible check, team and bot filters, and FOV drawing. ${complete} includes the same aimbot stack plus the full ESP suite. ${espPlan} has no aimbot.`,
    scopes: ['aimbot'],
  },
  {
    id: 'rank-plans',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do Complete, Aimbot, and ESP / wallhack compare?',
    a: `Map awareness only → ${espPlan}. Infantry tracking without full ESP → ${aimbotPlan}. All 29 modules on one key → ${complete}. Compare tables on each product page or the ${faqPage}.`,
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS or Discord capture my overlay?',
    a: a(
      'Stream-capture modes hide overlays from OBS Game Capture and Discord screen share on supported builds. Record a local test clip before you stream or share your desktop.',
    ),
  },
  {
    id: 'live-status',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What does the live status banner mean?',
    a: a(
      'Status reflects the current build against Javelin and recent Battlefield 6 patches—it is not a permanent guarantee. Do not launch while the banner shows updating, testing, or offline.',
    ),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP wallhack lower profile than aimbot?',
    a: a(
      'ESP can look quieter in spectator replay than obvious snap aim, but it is still third-party software. Javelin does not ignore overlays because you left aimbot disabled.',
    ),
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Does the loader install into my Battlefield 6 game folder?',
    a: `The loader runs external with cloud config sync—nothing is injected into EA App or Steam game directories. Anti-cheat risk still applies. See ${productsHub} for requirements.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each product page includes a feature list and compare context. The ${faqPage} collects setup, safety, and plan answers—or browse ${forum} for mode-specific tips.`,
  },
  {
    id: 'who-esp',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should buy ESP / wallhack?',
    a: `Players who want Conquest and Breakthrough awareness—boxes, skeletons, health, distance—and will not use aimbot. If you need smooth aim modules, choose ${aimbotPlan} or ${complete} instead.`,
    scopes: ['esp-wallhack'],
  },
  {
    id: 'who-aimbot',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Aimbot?',
    a: `PC players who want smooth tracking, FOV limits, bone priority, and visible checks without paying for the full visual suite. Pair with ${espPlan} or upgrade to ${complete} when you want every module.`,
    scopes: ['aimbot'],
  },
  {
    id: 'who-complete',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Complete?',
    a: `Operators who want aimbot, ESP wallhack, crosshair tools, and cloud configs on one license for combined-arms modes and large maps.`,
    scopes: ['complete'],
  },
  {
    id: 'javelin-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after a Javelin or Battlefield 6 update?',
    a: a(
      'Check battlefield6hacks.net status and Discord #status. Wait until the banner shows online, then reload portal presets instead of reusing old smoothness or ESP range values from before the patch.',
    ),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a(
      'Open Discord after purchase with your order email, Windows version, and whether you use EA App or Steam. Staff walk through loader setup and conservative presets live.',
    ),
  },
  {
    id: 'modes-ranked',
    topic: 'plans',
    icon: 'faqZoomRanked',
    q: 'Do plans work in Conquest, Breakthrough, and REDSEC?',
    a: `Yes—${complete}, ${aimbotPlan}, and ${espPlan} include mode presets in the portal. Tune ESP max distance and aimbot smoothness in a custom or low-pressure match before 64-player queues.`,
  },
  {
    id: 'radar-context',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which plan includes 2D radar?',
    a: `${complete} bundles the full cheat suite including radar-style awareness tools with ESP. ${espPlan} focuses on world overlays; see each product page for the current module list.`,
    scopes: ['complete'],
  },
  {
    id: 'aimbot-modules',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which aimbot options ship on the Aimbot plan?',
    a: `Toggle and hold modes, head/neck/body/pelvis bones, smoothness, FOV, distance caps, bot and team filters, visible check, and FOV border drawing—all on ${aimbotPlan} and ${complete}.`,
    scopes: ['aimbot', 'complete'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Battlefield 6 hacks?',
    a: a(
      'Private means per-user keys and maintained builds delivered through the portal—not public zip packs. Plans cover ESP wallhack, aimbot, or the full Complete suite for PC.',
    ),
  },
  {
    id: 'checkout-portal',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'Where do I download the loader?',
    a: a(
      'Only from your operator portal after checkout completes—never from random Discord DMs or comment links. The portal also hosts HWID reset and config backup.',
    ),
  },
  {
    id: 'forum-guides',
    topic: 'products',
    icon: 'faqMore',
    q: 'Where are setup and mode guides?',
    a: `${forum} hosts patch-day notes, OBS capture threads, and Conquest tuning tips. Product pages remain authoritative for checkout and module lists.`,
  },
  {
    id: 'upgrade-path',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Can I upgrade from Aimbot or ESP to Complete?',
    a: `Compare module lists on ${productsHub}, then move to ${complete} through checkout when you want every aimbot, visual, and misc tool on one license.`,
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Landing pages show quick answers; the ${faqPage} lists every topic. For long-form threads on smoothness, vehicle awareness, and stream capture, visit the ${forum}.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Battlefield 6 hacks FAQ',
  subtitle: 'Filter by plans, ESP wallhack, aimbot, products, setup, and safety.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Cheat FAQ',
  title: 'Battlefield 6 questions',
  subtitle: 'Straight answers on aimbot, ESP, Javelin risk, and setup — see the full FAQ for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-plans', 'compare-plans', 'live-status', 'javelin-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

export const compareRows = [
  {
    feature: 'Player & bot ESP (box, name, distance)',
    icon: 'comparePlayerEsp' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': true,
  },
  {
    feature: 'Skeleton & snapline overlays',
    icon: 'compareRadarHack' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': true,
  },
  {
    feature: 'Health bar & max distance',
    icon: 'compareWardLocator' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': true,
  },
  {
    feature: 'Stream-capture testing modes',
    icon: 'compareStreamproof' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': true,
  },
  {
    feature: 'Toggle aimbot & aim bind',
    icon: 'compareAutoCombo' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': false,
  },
  {
    feature: 'Smoothness, FOV & bone priority',
    icon: 'compareSmoothAim' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': false,
  },
  {
    feature: 'Visible check & team / bot filters',
    icon: 'compareTargetSelector' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': false,
  },
  {
    feature: 'FOV border & background drawing',
    icon: 'compareAbilityRadius' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': false,
  },
  {
    feature: 'Crosshair styling',
    icon: 'compareHotkeyMacros' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': false,
  },
  {
    feature: 'Config save, load & share',
    icon: 'compareCloudBackup' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': false,
  },
  {
    feature: 'Menu language & FPS limit',
    icon: 'comparePriorityPatch' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': false,
  },
  {
    feature: 'Full 29-module suite',
    icon: 'compareFullMapHack' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': false,
  },
];
