"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS: { href: string; label: string; external?: true }[] = [
  { href: "/work",          label: "Work" },
  { href: "/built-with-ai", label: "Built with AI" },
  { href: "/about",         label: "About" },
  { href: "/resume.pdf",    label: "Resume", external: true },
];

function isActive(href: string, pathname: string): boolean {
  if (href === "/work") return pathname === "/work" || pathname.startsWith("/work/");
  return pathname === href;
}

export function Nav() {
  const pathname = usePathname();
  const navRef  = useRef<HTMLElement>(null);

  // Manipulate DOM directly on scroll — avoids React re-renders on every scroll event.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    function onScroll() {
      nav!.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync immediately on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} data-scrolled="false" className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        {/* Home mark */}
        <Link href="/" className="nav-home" aria-label="Home">
          <span aria-hidden>✦</span>
        </Link>

        {/* Page links */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({ href, label, external }) => (
            <li key={href}>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {label}
                  <span className="nav-link-arrow" aria-hidden>↗</span>
                </a>
              ) : (
                <Link
                  href={href}
                  className={`nav-link${isActive(href, pathname) ? " nav-link--active" : ""}`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <ThemeToggle className="nav-toggle" />
      </div>
    </nav>
  );
}
