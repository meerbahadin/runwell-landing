import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Runwell — a macOS battery monitor that admits what it can't see";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The social card. Built rather than screenshotted so the type stays sharp at
 * any preview size, and so the provenance badges — the app's whole argument —
 * are legible in a feed. Satori supports a subset of CSS: flexbox only, and
 * every element with children needs an explicit display value.
 */
export default async function OpengraphImage() {
  const [icon, figtreeRegular, figtreeBold] = await Promise.all([
    readFile(join(process.cwd(), "public", "app-icon-dark.png")),
    readFile(join(process.cwd(), "assets", "Figtree-400.ttf")),
    readFile(join(process.cwd(), "assets", "Figtree-800.ttf")),
  ]);
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  const badges = [
    { label: "Measured", fg: "#1d8a4e", bg: "#e3f5ea" },
    { label: "Derived", fg: "#1d63e6", bg: "#e9f0fe" },
    { label: "Estimated", fg: "#a1631a", bg: "#fbf0df" },
    { label: "Unavailable", fg: "#6b6d75", bg: "#ececee" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f1f2f4",
          padding: 72,
          fontFamily: "Figtree",
        }}
      >
        <img src={iconSrc} width={92} height={92} alt="" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#101114",
              maxWidth: 1000,
            }}
          >
            A battery monitor that admits what it can&apos;t see.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 27,
              color: "#55575e",
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            macOS hides two thirds of the processes on your Mac. Runwell shows
            you the rest — and says so.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {badges.map((b) => (
              <div
                key={b.label}
                style={{
                  display: "flex",
                  background: b.bg,
                  color: b.fg,
                  fontSize: 22,
                  fontWeight: 700,
                  padding: "10px 18px",
                  borderRadius: 10,
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#63656d" }}>
            Free · MIT · macOS 15+
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Figtree", data: figtreeRegular, weight: 400, style: "normal" },
        { name: "Figtree", data: figtreeBold, weight: 800, style: "normal" },
      ],
    },
  );
}
