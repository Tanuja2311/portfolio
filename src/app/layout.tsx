// WCAG 2.1 AA compliance applied 2026-05-25
import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Instrument_Serif } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { MotionProvider } from "@/components/motion-provider";
import { Analytics } from "@vercel/analytics/react";
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

const instrumentSerif = Instrument_Serif({
  weight:   "400",
  subsets:  ["latin"],
  variable: "--font-instrument",
  display:  "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tanujabodas.com"),
  icons: {
    icon: "/icon.svg",
  },
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
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Tanuja Bodas | Senior Product Designer",
    description:
      "Tanuja Bodas is a senior product designer specializing in enterprise B2B platforms, design systems, and complex workflow design. View selected work including MyRCloud, Rewards & Recognition, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${dmSerif.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }} suppressHydrationWarning={true}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <MotionProvider>
          <Nav />
          <div id="main-content" tabIndex={-1} style={{ outline: "none" }}>
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
