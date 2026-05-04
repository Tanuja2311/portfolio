import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Built with AI",
};

export default function BuiltWithAIPage() {
  return (
    <main style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "4rem var(--gutter)" }}>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1 }}>
        Built with AI
      </h1>
    </main>
  );
}
