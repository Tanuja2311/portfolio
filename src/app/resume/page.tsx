import type { Metadata } from "next";

export const metadata: Metadata = {
  title:       "Resume",
  description: "Resume of Tanuja Bodas, product designer.",
  alternates:  { canonical: "/resume" },
  openGraph: {
    type:        "website",
    url:         "/resume",
    description: "Resume of Tanuja Bodas, product designer.",
  },
  twitter: {
    card:        "summary_large_image",
    description: "Resume of Tanuja Bodas, product designer.",
  },
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <object
        data="/resume.pdf"
        type="application/pdf"
        className="resume-embed"
        aria-label="Tanuja Bodas resume"
      >
        <p className="resume-fallback">
          Your browser can&rsquo;t display embedded PDFs.{" "}
          <a href="/resume.pdf" className="resume-fallback-link">
            Open the resume PDF directly
          </a>
          .
        </p>
      </object>
    </main>
  );
}
