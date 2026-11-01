/** Static path redirects (301). Keys are pathname without query/hash. */
const BF6_HUB = '/products/battlefield-6-cheats/';
const BF6_COMPLETE = '/products/battlefield-6-cheats/complete/';

export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', BF6_HUB],
  ['/cheats/', BF6_HUB],
  ['/cheats/lite', BF6_HUB],
  ['/cheats/lite/', BF6_HUB],
  ['/cheats/pro', BF6_HUB],
  ['/cheats/pro/', BF6_HUB],
  ['/cheats/elite', BF6_COMPLETE],
  ['/cheats/elite/', BF6_COMPLETE],
  ['/cheats/compare', '/forum/'],
  ['/cheats/compare/', '/forum/'],
  ['/products/fortnite-cheats', BF6_HUB],
  ['/products/fortnite-cheats/', BF6_HUB],
  ['/products/dota-2-cheats', BF6_HUB],
  ['/products/dota-2-cheats/', BF6_HUB],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
