import { ImageResponse } from "next/og";

export const alt = "Egi Chandra Pratama — Backend Engineer (Java & Go)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#4ade80",
            letterSpacing: 2,
            marginBottom: 24,
          }}
        >
          {"<DoWithLogic />"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          Egi Chandra Pratama
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#a3a3a3",
            marginBottom: 32,
          }}
        >
          Backend Engineer · Java &amp; Go
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#737373" }}>
          Distributed systems for telecom, fintech, and gov-tech · Jakarta
        </div>
      </div>
    ),
    { ...size }
  );
}
