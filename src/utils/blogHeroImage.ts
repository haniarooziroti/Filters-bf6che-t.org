import { webpSrc } from './responsiveImage';

/** Old blog frontmatter .jpg paths → current gameplay PNG masters. */
const LEGACY_HERO_MAP: Record<string, string> = {
  '/images/gameplay/best-battlefield-6-cheats.jpg': '/images/gameplay/bf6-conquest-esp.png',
  '/images/gameplay/battlefield-6-aimbot-esp.jpg': '/images/gameplay/bf6-aimbot.png',
  '/images/gameplay/battlefield-6-cheat-pricing.jpg': '/images/gameplay/battlefield-6-config-presets.png',
  '/images/gameplay/battlefield-6-esp-wallhack.jpg': '/images/gameplay/bf6-esp-wallhack.png',
  '/images/gameplay/battlefield-6-cheat-setup.jpg': '/images/gameplay/bf6-vehicle-esp.png',
  '/images/gameplay/battlefield-6-ban-risk.jpg': '/images/gameplay/battlefield-6-troubleshooting.png',
  '/images/gameplay/battlefield-6-cheat-provider.jpg': '/images/gameplay/battlefield-6-cheat-provider.png',
  '/images/gameplay/battlefield-6-config-presets.jpg': '/images/gameplay/bf6-skeleton-esp.png',
  '/images/gameplay/battlefield-6-hwid-reset.jpg': '/images/gameplay/battlefield-6-hwid-reset.png',
  '/images/gameplay/battlefield-6-troubleshooting.jpg': '/images/gameplay/bf6-radar.png',
  '/images/gameplay/battlefield-6-bot-lobbies.jpg': '/images/gameplay/battlefield-6-bot-lobbies.png',
  '/images/gameplay/battlefield-6-free-vs-paid.jpg': '/images/gameplay/battlefield-6-free-vs-paid.png',
};

export function resolveBlogHeroSource(heroImage: string): string {
  return LEGACY_HERO_MAP[heroImage] ?? heroImage;
}

export function blogCardImageSrc(heroImage: string, _slug: string, width = 640): string {
  return webpSrc(resolveBlogHeroSource(heroImage), width);
}
