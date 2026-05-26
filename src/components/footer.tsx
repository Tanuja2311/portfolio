const SOCIAL_LINKS = [
  { href: "mailto:tanuja375@gmail.com",                        label: "Email" },
  { href: "https://www.linkedin.com/in/tanujabodas23/",        label: "LinkedIn" },
  { href: "https://github.com/Tanuja2311",                     label: "GitHub" },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top row */}
        <div className="footer-top">
          <p className="footer-display">
            Let&rsquo;s make something<br />
            worth remembering.
          </p>

          <nav aria-label="Social and contact links">
            <ul className="footer-links" role="list">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="footer-link"
                    aria-label={href.startsWith("mailto") ? label : `${label} (opens in new tab)`}
                  >
                    {label}
                    {!href.startsWith("mailto") && (
                      <span className="footer-link-arrow" aria-hidden>↗</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <div className="footer-bottom-meta">
            <span className="footer-copy">© 2026. Designed in Figma. Built with Next.js and Claude Code.</span>
            <span className="footer-meta-sep" aria-hidden>·</span>
            <span className="footer-location">
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden
                stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
                <path d="M4.5 0.5A3.5 3.5 0 0 0 1 4c0 2.5 3.5 6.5 3.5 6.5S8 6.5 8 4A3.5 3.5 0 0 0 4.5 0.5Z"/>
                <circle cx="4.5" cy="4" r="1.2"/>
              </svg>
              Based in the United States
            </span>
          </div>
          <span className="badge-available">
            <span className="badge-dot" aria-hidden />
            Available for work
          </span>
        </div>
      </div>
    </footer>
  );
}
