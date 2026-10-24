import type { Metadata } from "next";
import { SIDE_QUESTS_LIVE } from "@/lib/side-quests";

// Every page under /side-quests inherits this. Until launch day the whole
// section is unlisted: reachable by direct link, kept out of search results.
export const metadata: Metadata = SIDE_QUESTS_LIVE
  ? {}
  : { robots: { index: false, follow: false } };

export default function SideQuestsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
