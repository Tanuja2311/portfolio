"use client";

import { Children, type ReactNode } from "react";
import { m, useReducedMotion, type Variants } from "framer-motion";

export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;
export const REVEAL_DURATION = 0.6;
export const REVEAL_STAGGER = 0.09;
export const REVEAL_VIEWPORT = { once: true, margin: "-80px" } as const;

/** Fade + slide-up variants for a single reveal target. Pass `reduced` from useReducedMotion(). */
export function revealItemVariants(reduced: boolean | null): Variants {
  return {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE },
    },
  };
}

/** Stagger variants for a reveal parent whose children carry revealItemVariants. */
export function revealContainerVariants(reduced: boolean | null): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : REVEAL_STAGGER },
    },
  };
}

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  /**
   * When true, direct children animate in one after another (staggerChildren)
   * instead of as a single block. Use for a handful of small, independent
   * children (e.g. a label + paragraph, or bullet list items) where wrapping
   * each child in its own motion.div won't disturb the layout (CSS grid
   * children in particular should NOT use this - compose with
   * revealItemVariants/revealContainerVariants directly instead).
   */
  stagger?: boolean;
}

export function RevealSection({ children, className, stagger = false }: RevealSectionProps) {
  const reduced = useReducedMotion();
  const itemVariants = revealItemVariants(reduced);

  if (!stagger) {
    return (
      <m.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={REVEAL_VIEWPORT}
        variants={itemVariants}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={REVEAL_VIEWPORT}
      variants={revealContainerVariants(reduced)}
    >
      {Children.map(children, (child) => (
        <m.div variants={itemVariants}>{child}</m.div>
      ))}
    </m.div>
  );
}
