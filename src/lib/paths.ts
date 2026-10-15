// The site may be served from a sub-path (GitHub Pages serves it at /tropicalCharters/).
// Every internal link and asset goes through these helpers so moving to a custom domain
// only means changing `base` in astro.config.mjs.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the site's base path. */
export const withBase = (path: string) => (path.startsWith('/') ? `${BASE}${path}` : path);

/** Remove the base path, giving the route as the site sees it ("/es/trips/culebra/"). */
export const stripBase = (path: string) => (BASE && path.startsWith(BASE) ? path.slice(BASE.length) || '/' : path);
