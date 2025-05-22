"use client"
import Lenis from '@studio-freight/lenis';

let lenis;

if (typeof window !== 'undefined' && !lenis) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export const scrollToId = (id) => {
  const target = document.querySelector(id);
  if (target && lenis) {
    lenis.scrollTo(target);
  }
};