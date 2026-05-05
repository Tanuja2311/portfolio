const SOCIAL_LINKS = [
  { href: "mailto:tanuja375@gmail.com",                        label: "Email" },
  { href: "https://www.linkedin.com/in/tanujabodas23/",        label: "LinkedIn" },
  { href: "https://github.com/Tanuja2311",                     label: "GitHub" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

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
          <span className="footer-copy">© {year}</span>
          <span className="badge-available">
            <span className="badge-dot" aria-hidden />
            Available for work
          </span>
        </div>
      </div>
    </footer>
  );
}
