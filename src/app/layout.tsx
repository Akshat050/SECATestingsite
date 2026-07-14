import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteBasePath = process.env.GITHUB_ACTIONS === "true" ? "/SECATestingsite" : "";

export const metadata: Metadata = {
  title: "SECA — Statutory workflow for GST practice",
  description:
    "Audit GST notices for procedural defects, limitation dates, and pleading grounds with sources shown.",
  openGraph: {
    title: "SECA — Statutory workflow for GST practice",
    description:
      "Audit GST notices for procedural defects, limitation dates, and pleading grounds with sources shown.",
    type: "website",
  },
  icons: {
    icon: `${siteBasePath}/icon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
