import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

/** Newest first, then prompt list order when dates match. */
export const BLOG_LIST_ORDER = [
  'best-battlefield-6-cheats',
  'battlefield-6-aimbot-esp-features',
  'battlefield-6-cheat-pricing',
  'battlefield-6-esp-wallhack-explained',
  'battlefield-6-cheat-setup-guide',
  'battlefield-6-ban-risk-explained',
  'how-to-choose-a-battlefield-6-cheat-provider',
  'battlefield-6-config-presets',
  'battlefield-6-hwid-reset-guide',
  'battlefield-6-cheat-troubleshooting-faq',
  'battlefield-6-bot-lobbies-and-casual-play',
  'battlefield-6-free-vs-paid-cheats',
] as const;

export const BLOG_PAGE_SIZE = 12;

export async function getAllBlogPosts(): Promise<BlogEntry[]> {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => {
    const dateDiff = b.data.date.getTime() - a.data.date.getTime();
    if (dateDiff !== 0) return dateDiff;
    const ai = BLOG_LIST_ORDER.indexOf(a.id as (typeof BLOG_LIST_ORDER)[number]);
    const bi = BLOG_LIST_ORDER.indexOf(b.id as (typeof BLOG_LIST_ORDER)[number]);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}

export function blogPageCount(total: number): number {
  return Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE));
}

export function paginateBlogPosts(posts: BlogEntry[], page: number): BlogEntry[] {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return posts.slice(start, start + BLOG_PAGE_SIZE);
}

const BLOG_READ_LABELS: Record<string, string> = {
  'best-battlefield-6-cheats': 'Read buyer guide',
  'battlefield-6-aimbot-esp-features': 'Read settings guide',
  'battlefield-6-cheat-pricing': 'Read pricing guide',
  'battlefield-6-esp-wallhack-explained': 'Read ESP guide',
  'battlefield-6-cheat-setup-guide': 'Read setup guide',
  'battlefield-6-ban-risk-explained': 'Read ban risk guide',
  'how-to-choose-a-battlefield-6-cheat-provider': 'Read provider checklist',
  'battlefield-6-config-presets': 'Read preset guide',
  'battlefield-6-hwid-reset-guide': 'Read HWID guide',
  'battlefield-6-cheat-troubleshooting-faq': 'Read troubleshooting FAQ',
  'battlefield-6-bot-lobbies-and-casual-play': 'Read casual play guide',
  'battlefield-6-free-vs-paid-cheats': 'Read free vs paid guide',
};

/** Unique card CTA per post (not "read more"). */
export function blogReadGuideLabel(slug: string, title: string): string {
  return BLOG_READ_LABELS[slug] ?? `Read ${title.split(':')[0]?.trim() ?? 'guide'}`;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogEntry | undefined> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.id === slug);
}

export function blogPostPath(slug: string): string {
  return `/blog/${slug}/`;
}

export function formatBlogDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.round(words / 220));
}

export function getRelatedBlogPosts(post: BlogEntry, all: BlogEntry[], limit = 3): BlogEntry[] {
  const others = all.filter((p) => p.id !== post.id);
  const sameCategory = others.filter((p) => p.data.category === post.data.category);
  const pool = sameCategory.length >= limit ? sameCategory : others;
  return pool.slice(0, limit);
}
