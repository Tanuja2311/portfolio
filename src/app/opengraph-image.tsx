import { ImageResponse } from "next/og";

// No tb-monogram.png / logo.png exists in public/ (checked first). The
// monogram below reuses the same inline "T" + "B" text mark that icon.tsx
// and apple-icon.tsx already draw, instead of loading an image file.

export const alt = "Tanuja Bodas – Senior Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Instrument Serif (name) and DM Sans (subtitle/footer) are fetched from Google
// Fonts at request/build time (requires network access) so glyph rendering is
// consistent regardless of the runtime's bundled fallback font. If a fetch
// fails for any reason, that text falls back to the system stack instead of
// failing image generation.
async function loadGoogleFont(family: string, weight: number, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl).then((res) => res.text());
  const match = css.match(/src: url\(([^)]+)\) format\('(?:truetype|opentype)'\)/);
  if (!match) return null;

  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) return null;
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const name = "Tanuja Bodas";
  const subtitle = "Senior Product Designer";
  const footer = "TANUJABODAS.COM";

  const [instrumentSerif, dmSans] = await Promise.all([
    loadGoogleFont("Instrument+Serif", 400, name).catch(() => null),
    loadGoogleFont("DM+Sans", 500, subtitle + footer).catch(() => null),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0A0A0A",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
          }}
        >
          <span style={{ color: "#f5f3ee", fontSize: 32, lineHeight: 1, fontWeight: 400 }}>T</span>
          <span style={{ color: "#B794F4", fontSize: 32, lineHeight: 1, fontWeight: 400, marginLeft: -3 }}>B</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            color: "#f5f3ee",
            fontFamily: instrumentSerif ? "Instrument Serif" : "serif",
            marginTop: 40,
          }}
        >
          {name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#B794F4",
            fontFamily: dmSans ? "DM Sans" : "sans-serif",
            letterSpacing: "1px",
            marginTop: 12,
          }}
        >
          {subtitle}
        </div>

        <div style={{ display: "flex", flexGrow: 1 }} />

        <div style={{ display: "flex", width: "100%", height: 1, backgroundColor: "#333029" }} />

        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: "#8a877e",
            fontFamily: dmSans ? "DM Sans" : "sans-serif",
            letterSpacing: "2px",
            marginTop: 24,
          }}
        >
          {footer}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(instrumentSerif
          ? [{ name: "Instrument Serif", data: instrumentSerif, style: "normal" as const, weight: 400 as const }]
          : []),
        ...(dmSans
          ? [{ name: "DM Sans", data: dmSans, style: "normal" as const, weight: 500 as const }]
          : []),
      ],
    },
  );
}
