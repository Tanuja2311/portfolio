import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    { id: "32", size: { width: 32, height: 32 }, contentType: "image/png" as const },
    { id: "16", size: { width: 16, height: 16 }, contentType: "image/png" as const },
  ];
}

export default function Icon({ id }: { id: string }) {
  const dim    = id === "16" ? 16 : 32;
  const fSize  = id === "16" ? 10 : 18;
  const nudge  = id === "16" ? -1 : -2;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "#f0ece4", fontSize: fSize, lineHeight: 1, fontWeight: 400 }}>T</span>
        <span style={{ color: "#B794F4", fontSize: fSize, lineHeight: 1, fontWeight: 400, marginLeft: nudge }}>B</span>
      </div>
    ),
    { width: dim, height: dim },
  );
}
