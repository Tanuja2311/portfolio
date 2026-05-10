"use client";

import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
