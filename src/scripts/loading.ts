import { lenis } from './motion';

// Shared plumbing for the page loaders (Preloader on the home page, BoatLoader on trip pages).

/** Lock the page at the top while a loader is up. */
export function startLoading() {
  document.body.classList.add('is-loading');
  lenis?.stop();
  window.scrollTo(0, 0);
}

/** Remove the loader and unlock the page. */
export function endLoading(root: HTMLElement) {
  document.body.classList.remove('is-loading');
  root.remove();
}

/**
 * Real loading signal: fonts plus every image marked data-preload.
 * `progress()` reports 0–1 as they land; `ready` resolves when all have.
 */
export function trackAssets() {
  const imgs = [...document.querySelectorAll<HTMLImageElement>('img[data-preload]')];
  const jobs: Promise<unknown>[] = [document.fonts.ready, ...imgs.map((img) => img.decode().catch(() => {}))];
  let done = 0;
  jobs.forEach((p) => p.then(() => done++));
  return { progress: () => done / jobs.length, ready: Promise.all(jobs) };
}
