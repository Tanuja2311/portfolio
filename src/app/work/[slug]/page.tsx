import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) notFound();

  return (
    <main>
      <h1>{slug}</h1>
    </main>
  );
}
