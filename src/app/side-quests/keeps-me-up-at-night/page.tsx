import type { Metadata } from "next";
import Link from "next/link";
import { QUESTIONS, formatDate, OG_IMAGES } from "@/lib/side-quests";
import { Reveal } from "@/components/case-study/reveal";

const DESCRIPTION =
  "Questions Tanuja Bodas can't stop thinking about, about design, mentoring, and the English language. Added to over time.";

export const metadata: Metadata = {
  title:       "What keeps me up at night",
  description: DESCRIPTION,
  alternates:  { canonical: "/side-quests/keeps-me-up-at-night" },
  openGraph:   { type: "article", url: "/side-quests/keeps-me-up-at-night", description: DESCRIPTION, images: OG_IMAGES },
  twitter:     { card: "summary_large_image", description: DESCRIPTION, images: OG_IMAGES },
};

export default function KeepsMeUpPage() {
  // Kept in the order they were added; new questions go at the end of QUESTIONS.
  const questions = QUESTIONS;

  return (
    <main className="sq-page sq-page--episode">
      <Link href="/side-quests" className="sq-back">← All side quests</Link>

      <header className="sq-ep-header">
        <p className="sq-kicker">Always open</p>
        <h1 className="sq-ep-title">What keeps me up at night</h1>
        <p className="sq-ep-summary">
          Questions I keep coming back to. No promise of answers. I add to this
          whenever a new one won&apos;t leave me alone.
        </p>
      </header>

      <ol className="sq-questions">
        {questions.map((q, i) => (
          <li key={q.id} className="sq-question-item" id={q.id}>
            <Reveal delay={i * 60} className="sq-question">
              <span className="sq-question-num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="sq-question-text">{q.text}</p>
                {q.thoughts && <p className="sq-question-thoughts">{q.thoughts}</p>}
                <time className="sq-question-date" dateTime={q.addedOn}>
                  Added {formatDate(q.addedOn)}
                </time>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </main>
  );
}
