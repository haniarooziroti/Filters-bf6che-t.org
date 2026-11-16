/**
 * Serves static dist/ via ASSETS and applies noindex on Cloudflare preview hostnames only.
 */
export default {
  /** @param {Request} request @param {{ ASSETS: { fetch: (r: Request) => Promise<Response> } }} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const isPreview = host.endsWith('.workers.dev') || host.endsWith('.pages.dev');

    const assetResponse = await env.ASSETS.fetch(request);
    if (!isPreview) {
      return assetResponse;
    }

    const headers = new Headers(assetResponse.headers);
    headers.set('X-Robots-Tag', 'noindex, nofollow');

    const contentType = assetResponse.headers.get('content-type') ?? '';
    if (!contentType.includes('text/html')) {
      return new Response(assetResponse.body, {
        status: assetResponse.status,
        statusText: assetResponse.statusText,
        headers,
      });
    }

    let html = await assetResponse.text();
    if (!/<meta\s+name=["']robots["']/i.test(html)) {
      html = html.replace(/<head(\s[^>]*)?>/i, (match) => `${match}\n    <meta name="robots" content="noindex,nofollow">`);
    }

    return new Response(html, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers,
    });
  },
};