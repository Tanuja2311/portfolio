// WCAG 2.1 AA compliance applied 2026-05-25
import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { cookies } from "next/headers";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight:   "400",
  subsets:  ["latin"],
  variable: "--font-serif",
  display:  "swap",
});

const dmSans = DM_Sans({
  weight:   ["400", "500"],
  subsets:  ["latin"],
  variable: "--font-sans",
  display:  "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-olive-ten-27.vercel.app"),
  title: {
    template: "%s | Tanuja Bodas",
    default:  "Tanuja Bodas | Senior Product Designer",
  },
  description:
    "Tanuja Bodas is a senior product designer specializing in enterprise B2B platforms, design systems, and complex workflow design. View selected work including MyRCloud, Rewards & Recognition, and more.",
  openGraph: {
    siteName: "Tanuja Bodas",
    type:     "website",
    locale:   "en_US",
    images: [
      {
        url:    "/images/og-default.png",
        width:  1200,
        height: 630,
        alt:    "Tanuja Bodas – Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Runs synchronously before first paint - prevents flash of wrong theme.
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
    <html
      lang="en"
      data-theme={theme}
      className={`${dmSerif.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav />
        <div id="main-content" tabIndex={-1} style={{ outline: "none" }}>
          <PageTransition>
            {children}
          </PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
