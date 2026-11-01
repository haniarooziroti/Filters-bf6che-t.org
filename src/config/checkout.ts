import { CHECKOUT_URLS } from './checkout-redirects.mjs';

export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  battlefield6: 'battlefield-6',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Direct Zadeyo affiliate checkout — use on all purchase buttons and CTAs. */
export function affiliateCheckoutUrl(product: CheckoutProduct = 'battlefield6'): string {
  return CHECKOUT[product];
}

export const PRIMARY_CHECKOUT_PATH = affiliateCheckoutUrl('battlefield6');

/** Internal path; middleware and `_redirects` 302 to affiliate (blog / legacy links). */
export function checkoutPath(product: CheckoutProduct = 'battlefield6'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

export function checkoutForSlug(_slug: string): string {
  return affiliateCheckoutUrl('battlefield6');
}

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return affiliateCheckoutUrl(product);
    }
  }

  return affiliateCheckoutUrl('battlefield6');
}
