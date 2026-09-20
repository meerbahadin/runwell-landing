"use client";

import { useEffect } from "react";

/**
 * Adds `is-visible` to every [data-reveal] element once it scrolls into view.
 * A failsafe reveals anything still hidden, so content can never be stranded
 * if the observer never fires.
 */
export function Reveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const show = (n: HTMLElement) => n.classList.add("is-visible");

    if (reduced) {
      nodes.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
    );

    nodes.forEach((n) => io.observe(n));
    const failsafe = setTimeout(() => nodes.forEach(show), 2600);

    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  return null;
}
