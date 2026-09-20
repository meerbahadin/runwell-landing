"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Fades its children up as they scroll into view, once.
 *
 * Motion reads `prefers-reduced-motion` itself, so a visitor who asks for less
 * motion gets the content placed rather than animated, with no extra handling
 * here.
 */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Keeps the heading levels and landmarks intact. */
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span";
}) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.04, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.62, ease: [0.16, 0.84, 0.24, 1] }}
    >
      {children}
    </Tag>
  );
}
