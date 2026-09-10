import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (pkg: string, file: string) =>
  readFile(join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

export default async function Image() {
  const [display, sans, sansBold, mono, portrait] = await Promise.all([
    fontFile("outfit", "outfit-latin-700-normal.woff"),
    fontFile("public-sans", "public-sans-latin-400-normal.woff"),
    fontFile("public-sans", "public-sans-latin-700-normal.woff"),
    fontFile("ibm-plex-mono", "ibm-plex-mono-latin-500-normal.woff"),
    readFile(join(process.cwd(), "public", "photos", "tiktok-shop-office.jpg")),
  ]);

  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F8F5FC",
          color: "#2B2140",
          fontFamily: "Public Sans",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 64px",
          }}
        >
          <div
            style={{
              fontFamily: "IBM Plex Mono",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#8C6FC7",
            }}
          >
            {profile.location}
          </div>
          <div
            style={{
              fontFamily: "Outfit",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              marginTop: 24,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#8C6FC7",
              marginTop: 18,
            }}
          >
            {profile.headline}
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 34,
              fontFamily: "IBM Plex Mono",
              fontSize: 19,
              color: "#71638C",
            }}
          >
            <span>Meta</span>
            <span>·</span>
            <span>Google</span>
            <span>·</span>
            <span>TikTok</span>
            <span>·</span>
            <span>LINE Ads</span>
            <span>·</span>
            <span>GA4</span>
          </div>
        </div>
        <div style={{ display: "flex", width: 420, height: "100%", position: "relative" }}>
          <img
            src={portraitSrc}
            alt=""
            width={420}
            height={630}
            style={{ width: 420, height: 630, objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: display, weight: 700, style: "normal" },
        { name: "Public Sans", data: sans, weight: 400, style: "normal" },
        { name: "Public Sans", data: sansBold, weight: 700, style: "normal" },
        { name: "IBM Plex Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
