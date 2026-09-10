import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Public_Sans } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baitoeypetcharoen.vercel.app"),
  title: `${profile.name} — ${profile.headline}`,
  description: profile.intro,
  openGraph: {
    type: "profile",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.intro,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.intro,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
