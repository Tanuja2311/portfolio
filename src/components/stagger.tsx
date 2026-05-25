"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerContainer({
  children,
  className,
  as = "div",
}: BaseProps & { as?: "div" | "section" }) {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  if (as === "section") {
    return (
      <m.section
        className={className}
        variants={container}
        initial={initial}
        animate="visible"
      >
        {children}
      </m.section>
    );
  }
  return (
    <m.div
      className={className}
      variants={container}
      initial={initial}
      animate="visible"
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: BaseProps & { style?: React.CSSProperties }) {
  return (
    <m.div className={className} style={style} variants={item}>
      {children}
    </m.div>
  );
}
