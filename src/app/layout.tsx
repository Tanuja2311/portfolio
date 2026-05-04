import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s — Portfolio",
    default: "Portfolio",
  },
  description: "Designer and developer building thoughtful digital experiences.",
};

// Runs synchronously before first paint — prevents flash of wrong theme.
const themeScript = `
(function () {
  try {
    var ls = localStorage.getItem("theme");
    var ck = document.cookie.split(";").reduce(function (acc, c) {
      var p = c.trim().split("=");
      return p[0] === "theme" ? p[1] : acc;
    }, "");
    var theme = ls || ck || "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (_) {}
})();
`.trim();

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const theme = (cookieStore.get("theme")?.value ?? "dark") as "dark" | "light";

  return (
    <html lang="en" data-theme={theme} suppressHydrationWarning>
      <head>
        {/* Inline script runs before CSS paints — eliminates theme flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
