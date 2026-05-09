"use client";

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
  if (href === "/built-with-ai") return pathname === "/built-with-ai" || pathname.startsWith("/built-with-ai/");
  return pathname === href;
}

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        {/* Name / home link */}
        <Link href="/" className="nav-name">
          Tanuja Bodas
        </Link>

        {/* Right side: page links + theme toggle */}
        <div className="nav-right">
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
          <ThemeToggle className="nav-toggle" />
        </div>
      </div>
    </nav>
  );
}
