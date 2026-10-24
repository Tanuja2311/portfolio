// ─────────────────────────────────────────────────────────────────────────────
// Side Quests: weekend side projects, published as a weekly mini-series.
//
// LAUNCH DAY: flip SIDE_QUESTS_LIVE to true. That one switch:
//   - shows the Side Quests section on the home page
//   - adds the Side Quests pages to the sitemap
//   - lets search engines index /side-quests (it is noindex until then)
// Until then everything is reachable by direct link only, like Triibe100.
//
// Drafts (draft: true) only render in `npm run dev`, never on Vercel.
// ─────────────────────────────────────────────────────────────────────────────

export const SIDE_QUESTS_LIVE = true;

const SHOW_DRAFTS = process.env.NODE_ENV === "development";

// ─── Content blocks ─────────────────────────────────────────────────────────
// Episodes are written as a list of blocks so each one stays plain data.
export type Block =
  | { type: "p";     text: string }
  | { type: "h2";    text: string }
  | { type: "img";   src: string; alt: string; caption?: string }
  | { type: "list";  items: string[] }
  | { type: "quote"; text: string }
  | { type: "link";  href: string; label: string }
  // A playable prototype from /public. height is the starting height in px; the frame then
  // resizes to fit the prototype. The caption gets an "Open full screen" link automatically.
  | { type: "embed"; src: string; title: string; height: number; caption?: string };

export interface Series {
  slug:    string;
  title:   string;
  tagline: string;
  status:  "running" | "wrapped";
  draft?:  boolean;
}

export interface Episode {
  slug:    string;            // URL: /side-quests/<slug>
  kind:    "episode" | "drop"; // "drop" = one-off (e.g. Midjourney), no series
  series?: string;            // Series slug, for kind "episode"
  number?: number;            // Episode number within its series
  title:   string;
  date:    string;            // Publish date, YYYY-MM-DD
  summary: string;            // One or two lines for the listing
  tags?:   string[];
  body:    Block[];
  nextUp?: string;            // What comes next (what, not when)
  thumb?:  Thumb;             // Preview shown next to the episode in lists
  draft?:  boolean;
}

// A still image, or a short muted loop with the image as its poster.
// The loop only plays for people who haven't asked their device for reduced motion.
export interface Thumb {
  image:  string;             // 16:9, about 640x360
  video?: string;             // .mp4 path; a .webm with the same name is used first if present
}

export interface Question {
  id:       string;
  text:     string;
  addedOn:  string;           // YYYY-MM-DD
  thoughts?: string;          // Optional, for when you have a partial answer
}

// ─── Series ─────────────────────────────────────────────────────────────────
export const SERIES: Series[] = [
  {
    slug:    "monaco-2022",
    title:   "Monaco 2022",
    tagline: "One race, rebuilt from Ferrari's pit wall with real data and interface motion. Could it have been a Ferrari 1-2?",
    status:  "running",
  },
];

// ─── Episodes and drops ─────────────────────────────────────────────────────
export const EPISODES: Episode[] = [
  {
    slug:    "monaco-2022-ep-00-why-monaco",
    kind:    "episode",
    series:  "monaco-2022",
    number:  0,
    title:   "Why Monaco 2022",
    date:    "2026-10-24",
    summary: "One race, one pit wall, and the data that lied to me on day one.",
    tags:    ["F1", "Data", "Interface motion"],
    thumb:   { image: "/side-quests/monaco-2022/thumbs/ep00-why-monaco-thumb.jpg" },
    body: [
      { type: "p", text: "At least one Ferrari made the podium in Monaco in 2022. It could have been two. That sentence is the whole series." },
      { type: "p", text: "For the next few months I'm rebuilding that race as a story told through interface motion: the timing tower, the pit lane panel, the radio cards, the way F1 TV graphics move. Real data, real lap times, real radio moments. I'm building it on weekends and publishing what I have on race weekends, finished or not. This is episode zero: why this race, and what I found when I opened the data." },
      { type: "h2", text: "Why this race" },
      { type: "list", items: [
        "The track. Monaco is one of the most historic tracks in F1, and the hairpin is my favourite corner on any of them. It's the slowest corner on the calendar. Watching twenty cars squeeze through it is lovely. Driving it in the rain must be chaos.",
        "The people. It was Charles's home race, and he started on pole. Carlos is my absolute favourite driver, and he finished second.",
        "The conditions. It rained. When it rains the field levels out, and the race comes down to driver skill and the right strategy. That's the part I want to dig into.",
      ] },
      { type: "h2", text: "Whose side I'm on" },
      { type: "p", text: "I couldn't pick between Charles and Carlos, so I picked Ferrari. You watch this race from the Ferrari pit wall, seeing both cars at once. Carlos is in front by default. Nobody needs to know why." },
      { type: "p", text: "Along the way, a strategist joins the pit wall: Rosso, an AI like Claude. Its job is to find what would have given Ferrari a 1-2 with Carlos winning. It's also allowed to say no. A strategist that only tells you what you want to hear isn't a strategist." },
      { type: "h2", text: "The data lied to me on day one" },
      { type: "p", text: "I pulled the race data with FastF1, a free Python library that reads F1's own timing feed: lap times, tyre stints, pit stops, car positions four times a second, weather, every race control message. Then I started checking it." },
      { type: "p", text: "The weather data says it rained until the end. It didn't. Everyone was on slick tyres from lap 22. So the drying track in my version comes from track temperature, lap times and tyre changes instead of the rain flag." },
      { type: "p", text: "The tyre data disagreed with Pirelli. FastF1 showed both Ferraris changing tyres at the red flag. Pirelli's official chart showed no change at all. I went back to the raw timing feed: \"tyres not changed\", nine laps already on the set. Pirelli was right. FastF1 only opened a new stint because the cars drove through the pit lane during the stoppage." },
      { type: "quote", text: "At the restart, Carlos was on hard tyres with nine laps on them. Pérez, the car he lost to by 1.154 seconds, had just switched to mediums." },
      { type: "p", text: "Red Bull changed under the red flag. Ferrari didn't. That was a decision, not bad luck." },
      { type: "list", items: [
        "Carlos gambled on staying out on full wets while Charles switched to intermediates, and on lap 19 Carlos led the Monaco Grand Prix.",
        "On lap 21 Ferrari brought both cars in on the same lap. Charles spent 28.0 seconds in the pit lane to Carlos's 24.6. About 3.4 seconds of that was waiting behind his teammate.",
        "Pérez's stop a lap later took 24.6 seconds too. Red Bull didn't win in the pit lane. They won on track: one more fast lap on intermediates while Carlos was on his out-lap on cold tyres, stuck behind a lapped Latifi.",
      ] },
      { type: "img", src: "/side-quests/monaco-2022/ep00-tower-lap23-cropped.png", alt: "Timing tower at lap 23 in the series' visual language: 1 Pérez, leader, on hards; 2 Sainz, 2.302 seconds behind; 3 Verstappen at pit exit; 4 Leclerc, 9.810 seconds behind; 8 Alonso, still on wets.", caption: "Lap 23 from the real data, in my own timing tower: Pérez leads, Carlos 2.3 s behind, Verstappen leaving the pits." },
      { type: "h2", text: "What the broadcast didn't connect" },
      { type: "p", text: "I rewatched the highlights and screenshotted the graphics. Six frames from laps 18 to 23 tell exactly how Ferrari lost the lead: Charles pits, Carlos leads, Carlos is in the box while Charles is on the radio, Pérez leads, then Red Bull 1-2 and Ferrari 3-4." },
      { type: "p", text: "Every piece is on screen. Nothing connects them. Nothing says \"Charles is about to queue behind Carlos\" or \"Red Bull is pitting a lap later to jump you.\" That gap is what I'm designing for: the same broadcast language, but showing cause and effect." },
      { type: "h2", text: "What I set up this week" },
      { type: "list", items: [
        "The data, exported for all 20 cars, with my corrections written into the export script so they're never lost.",
        "A visual language: near-black surfaces, Pirelli's tyre colours, F1's timing colours, Titillium Web, and Ferrari red as the only accent. Every team gets its colour plus a three-letter tag, because four teams were blue in 2022 and colour alone isn't enough.",
        "A storyboard and a first prototype of the opening, which you'll see tomorrow.",
      ] },
      { type: "img", src: "/side-quests/monaco-2022/ep00-red-flag-storyboard-cropped.png", alt: "Storyboard frame of the rain loader: a dark, rain-streaked screen reading Monaco Grand Prix, Sunday 29 May 2022, Monte Carlo. A race control banner says red flag, and the race start time 15:16 is crossed out and replaced with SUSPENDED in red.", caption: "A frame from the rain loader storyboard: the moment race control red-flags the start." },
    ],
    nextUp: "The rain loader: an hour of delay, told in six seconds, using only what race control actually said.",
  },
  {
    slug:    "monaco-2022-ep-01-rain-loader",
    kind:    "episode",
    series:  "monaco-2022",
    number:  1,
    title:   "The rain loader",
    date:    "2026-10-25",
    summary: "An hour of rain delay, told in six seconds, using only what race control actually said.",
    tags:    ["F1", "Interface motion", "Loading states"],
    thumb:   {
      image: "/side-quests/monaco-2022/thumbs/ep01-rain-loader-thumb.jpg",
      video: "/side-quests/monaco-2022/thumbs/ep01-rain-loader-thumb.mp4",
    },
    draft:   true, // remove this line on Sun Oct 25
    body: [
      { type: "p", text: "Every race replay needs a way in. My first idea was the obvious one: five red lights, then lights out. Then I checked the data. There was no lights out in Monaco in 2022." },
      { type: "h2", text: "What actually happened" },
      { type: "p", text: "Lights out was due at 15:00, and it was pouring. Race control suspended the start and pushed the formation lap to 15:09, then to 15:16, behind the Safety Car with every car on full wets. Then came the red flag. The race finally got going at 16:05, behind the Safety Car, with a rolling start." },
      { type: "p", text: "So my loader isn't a countdown. It's a countdown that keeps failing. That's more honest to the day, and a lot more fun to design." },
      { type: "embed", src: "/side-quests/monaco-2022/play/ep01-rain-loader.html", title: "The rain loader, Monaco 2022 episode 1", height: 760, caption: "Press Replay to watch it again, or Calm for the version without motion." },
      { type: "h2", text: "Six beats, all real" },
      { type: "p", text: "Every message and every time on screen comes from race control's own log, which I pulled with FastF1. I didn't write a single word of it. The loader has six beats:" },
      { type: "list", items: [
        "15:00. Rain on the lens, the original start time.",
        "Start procedure suspended. 15:00 gets crossed out and 15:09 takes its place.",
        "Formation lap at 15:16, behind the Safety Car, on extreme wets.",
        "Red flag. The clock stops showing a time and says SUSPENDED.",
        "The rain eases. The race will resume at 16:05.",
        "Safety car will enter pits: rolling start. Over to the race.",
      ] },
      { type: "p", text: "The crossed-out times are my favourite part. A loading screen usually hides how long you've been waiting. This one shows you every time it was wrong." },
      { type: "h2", text: "What I threw away" },
      { type: "list", items: [
        "The five red lights. They're iconic, and they never happened that day.",
        "A 3 second version. I built it first, because loaders should be fast. Watching it stressed me out: I couldn't read the messages and my attention went all over the place. Six seconds is slow enough to read and still short enough not to annoy anyone.",
        "Two orange glows for the Safety Car's lights. In my head they were headlights through the rain. On screen they looked like two candles. I deleted them and doubled the rain instead, heaviest at the red flag.",
      ] },
      { type: "h2", text: "Two small details" },
      { type: "list", items: [
        "Calm mode. If your device asks for reduced motion, or you press Calm, the movement goes away and the same six messages appear as a plain text log next to the grid.",
        "Return visits. Nobody wants to sit through an intro twice, so a return visit only plays the last two beats, and there's always a Skip intro button. You can try it with Play as a return visit.",
      ] },
      { type: "p", text: "The rain is a 2D canvas sketch of what the 2022 footage looks like: haze, and drops sitting on the lens. The final build will use a shader for real water distortion." },
      { type: "p", text: "Personal concept. Not affiliated with Formula 1 or Scuderia Ferrari." },
    ],
    nextUp: "The rolling start: laps 1 to 8, all 20 cars behind the Safety Car, and my favourite corner from above.",
  },
];

// ─── What keeps me up at night (standing page) ─────────────────────────────
export const QUESTIONS: Question[] = [
  {
    id:      "b2b-empathy",
    text:    "As a B2B designer, how do I empathize with users who are just another business I know nothing about? Say I'm designing for Caterpillar, with no idea how their employees work and barely any direct access to them.",
    addedOn: "2026-10-15",
  },
  {
    id:      "ai-empathy",
    text:    "Are we losing empathy as we move towards designing with AI?",
    addedOn: "2026-10-15",
  },
  {
    id:      "seniors-juniors",
    text:    "Are we, as senior designers, too harsh on junior designers instead of mentoring them, even though we were once in their place?",
    addedOn: "2026-10-15",
  },
  {
    id:      "candy-cindy",
    text:    "Why is candy pronounced \"kandy\" but Cindy pronounced \"sindy\"?",
    addedOn: "2026-10-15",
  },
  {
    id:      "rendezvous",
    text:    "Why did we have to borrow \"rendezvous\" from French? How do we not have our own English word for it?",
    addedOn: "2026-10-15",
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────
const visible = <T extends { draft?: boolean }>(items: T[]) =>
  items.filter((i) => SHOW_DRAFTS || !i.draft);

export function getSeries(slug?: string): Series | undefined {
  if (!slug) return undefined;
  return visible(SERIES).find((s) => s.slug === slug);
}

export function getCurrentSeries(): Series | undefined {
  return visible(SERIES).find((s) => s.status === "running");
}

/** All series, running ones first. */
export function getAllSeries(): Series[] {
  return visible(SERIES).sort((a, b) => (a.status === b.status ? 0 : a.status === "running" ? -1 : 1));
}

/** One series' episodes in story order (Ep 00 first). */
export function getSeriesEpisodes(slug: string): Episode[] {
  return getEpisodes()
    .filter((e) => e.series === slug)
    .sort((a, b) => (a.number ?? 0) - (b.number ?? 0));
}

/** One-off drops that don't belong to a series, newest first. */
export function getDrops(): Episode[] {
  return getEpisodes().filter((e) => e.kind === "drop");
}

/** Newest first. */
export function getEpisodes(): Episode[] {
  return visible(EPISODES).sort((a, b) => b.date.localeCompare(a.date));
}

export function getEpisode(slug: string): Episode | undefined {
  return getEpisodes().find((e) => e.slug === slug);
}

/** Previous and next episode in the same series, by episode number. */
export function getSeriesNeighbours(ep: Episode) {
  if (!ep.series) return { prev: undefined, next: undefined };
  const inSeries = getEpisodes()
    .filter((e) => e.series === ep.series)
    .sort((a, b) => (a.number ?? 0) - (b.number ?? 0));
  const i = inSeries.findIndex((e) => e.slug === ep.slug);
  return { prev: inSeries[i - 1], next: inSeries[i + 1] };
}

export function episodeLabel(ep: Episode): string {
  if (ep.kind === "drop") return "Drop";
  return ep.number !== undefined ? `Ep ${String(ep.number).padStart(2, "0")}` : "Episode";
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
  });
}
