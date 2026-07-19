"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS: { href: string; label: string; external?: true }[] = [
  { href: "/work",          label: "Work" },
  { href: "/built-with-ai", label: "Built with AI" },
  { href: "/about",         label: "About" },
  { href: "/resume.pdf",    label: "Resume", external: true },
];

function isActive(href: string, pathname: string): boolean {
  if (href === "/work") return pathname === "/work" || pathname.startsWith("/work/");
  if (href === "/built-with-ai") return pathname === "/built-with-ai" || pathname.startsWith("/built-with-ai/");
  return pathname === href;
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      {open ? (
        <>
          <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          <line x1="16" y1="4" x2="4"  y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="17" y2="6"  stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        </>
      )}
    </svg>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Lock body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-name">
            <span className="nav-logo" aria-hidden="true">
              <span className="nav-logo-t">T</span><span className="nav-logo-b">B</span>
            </span>
            <span className="nav-logo-wordmark">Tanuja Bodas</span>
          </Link>

          {/* Right side */}
          <div className="nav-right">
            {/* Desktop links */}
            <ul className="nav-links" role="list">
              {NAV_LINKS.map(({ href, label, external }) => (
                <li key={href}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" download="Tanuja-Bodas-Resume.pdf"
                      className="nav-link" aria-label={`${label} (opens in new tab)`}>
                      {label}
                      <span className="nav-link-arrow" aria-hidden>↗</span>
                    </a>
                  ) : (
                    <Link href={href}
                      className={`nav-link${isActive(href, pathname) ? " nav-link--active" : ""}`}
                      aria-current={isActive(href, pathname) ? "page" : undefined}>
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <ThemeToggle className="nav-toggle" />

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setIsOpen(o => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="nav-mobile-overlay"
            >
              <HamburgerIcon open={isOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-mobile-overlay"
            className="nav-mobile-overlay"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <ul className="nav-mobile-links" role="list">
              {NAV_LINKS.map(({ href, label, external }, i) => (
                <motion.li key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.22, ease: "easeOut" }}
                >
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" download="Tanuja-Bodas-Resume.pdf"
                      className="nav-mobile-link"
                      aria-label={`${label} (opens in new tab)`}
                      onClick={() => setIsOpen(false)}>
                      {label}
                      <span className="nav-link-arrow" aria-hidden>↗</span>
                    </a>
                  ) : (
                    <Link href={href}
                      className={`nav-mobile-link${isActive(href, pathname) ? " nav-mobile-link--active" : ""}`}
                      aria-current={isActive(href, pathname) ? "page" : undefined}
                      onClick={() => setIsOpen(false)}>
                      {label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
