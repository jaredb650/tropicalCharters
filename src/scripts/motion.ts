import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// One smooth-scroll instance for the whole page, driven by GSAP's ticker so
// ScrollTrigger and Lenis never disagree about where the page is.
export const lenis = reducedMotion ? null : new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });

if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/** Smooth-scroll in-page anchors. */
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
  if (!a || a.origin !== location.origin || a.pathname !== location.pathname) return;
  const target = a.hash && document.querySelector(a.hash);
  if (!target) return;
  e.preventDefault();
  if (lenis) lenis.scrollTo(target as HTMLElement, { duration: 1.6 });
  else (target as HTMLElement).scrollIntoView();
});

const READY = 'tc:ready';
let isReady = false;

/** Called by the preloader when the page is revealed. */
export function markReady() {
  isReady = true;
  lenis?.start();
  document.dispatchEvent(new Event(READY));
  ScrollTrigger.refresh();
}

/** Run once the preloader has lifted (immediately if it already has). */
export function onReady(fn: () => void) {
  if (isReady) fn();
  else document.addEventListener(READY, fn, { once: true });
}

export { gsap, ScrollTrigger };
