"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = el.animate(
      [
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 380,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards",
      }
    );

    return () => anim.cancel();
  }, [pathname]);

  return (
    <div ref={ref} style={{ willChange: "opacity, transform" }}>
      {children}
    </div>
  );
}
