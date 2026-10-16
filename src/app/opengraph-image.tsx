import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role} à Nantes`;
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
          justifyContent: "space-between",
          background: "#f6f1e8",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 460,
            height: 460,
            borderRadius: 460,
            background: "#be5a45",
            opacity: 0.14,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "#2b5b82",
            opacity: 0.1,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 16,
              background: "#be5a45",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#2b5b82",
              fontWeight: 700,
            }}
          >
            Psychomotricité · Nantes
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#1d2a33",
            }}
          >
            Manuela Edom
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 40,
              color: "#47565f",
            }}
          >
            Psychomotricienne diplômée d&apos;État
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #d9cdb9",
            paddingTop: 26,
            fontSize: 24,
            color: "#47565f",
          }}
        >
          <div style={{ display: "flex" }}>
            2 rue d&apos;Allonville, 44000 Nantes
          </div>
          <div style={{ display: "flex" }}>06 84 74 96 70</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
