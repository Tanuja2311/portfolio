"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: reduced ? 1 : 0 }}
        animate={{ opacity: 1, transition: { duration: reduced ? 0 : 0.3, ease: "easeOut" } }}
        exit={{ opacity: reduced ? 1 : 0, transition: { duration: reduced ? 0 : 0.2, ease: "easeOut" } }}
        style={{ willChange: "opacity" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
