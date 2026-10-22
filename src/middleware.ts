import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const destination = resolveCheckoutPathRedirect(url.pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }

  if (url.pathname.startsWith('/products/fortnite-cheats')) {
    const rest = url.pathname.replace('/products/fortnite-cheats', '/products/battlefield-6-cheats');
    return context.redirect(rest.endsWith('/') ? rest : `${rest}/`, 301);
  }

  return next();
});
