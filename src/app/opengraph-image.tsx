import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "AutoDay — real AI automation problems, no answers handed over";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f2f5f9",
          padding: "96px",
          fontFamily: "monospace",
          borderTop: "10px solid #4f63d2",
        }}
      >
        <div style={{ fontSize: 44, color: "#4f63d2", letterSpacing: "-1px" }}>
          AutoDay
        </div>
        <div
          style={{
            fontSize: 76,
            color: "#1e293b",
            marginTop: 28,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          One thing worth automating. Work out how.
        </div>
        <div style={{ fontSize: 34, color: "#55647a", marginTop: 36 }}>
          [ real problems ] [ no answers handed over ]
        </div>
      </div>
    ),
    { ...size },
  );
}
