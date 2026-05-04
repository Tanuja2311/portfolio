import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "4rem var(--gutter)" }}>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1 }}>
        Work
      </h1>
    </main>
  );
}
