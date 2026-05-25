import { ImageResponse } from "next/og";

export const size        = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        <span style={{ color: "#f0ece4", fontSize: 100, lineHeight: 1, fontWeight: 400 }}>T</span>
        <span style={{ color: "#B794F4", fontSize: 100, lineHeight: 1, fontWeight: 400, marginLeft: -7 }}>B</span>
      </div>
    ),
    { ...size },
  );
}
