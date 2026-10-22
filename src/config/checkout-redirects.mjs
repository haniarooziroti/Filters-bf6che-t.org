/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  battlefield6:
    'https://levocheats.com/go/HANIA?to=%2Fbattlefield-6-cheats',
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/battlefield-6', CHECKOUT_URLS.battlefield6],
  ['/go/battlefield-6/', CHECKOUT_URLS.battlefield6],
  ['/go/fortnite', CHECKOUT_URLS.battlefield6],
  ['/go/fortnite/', CHECKOUT_URLS.battlefield6],
  ['/go/skin-changer', CHECKOUT_URLS.battlefield6],
  ['/go/skin-changer/', CHECKOUT_URLS.battlefield6],
  ['/go/hwid-spoofer', CHECKOUT_URLS.battlefield6],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.battlefield6],
  ['/go/ugc', CHECKOUT_URLS.battlefield6],
  ['/go/ugc/', CHECKOUT_URLS.battlefield6],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
