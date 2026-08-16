import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTA SF — Grand Theft Auto: San Francisco",
  description: "Browser-based 3D open-world game built with Three.js. Explore San Francisco in this GTA-inspired experience.",
  keywords: ["GTA SF", "browser game", "Three.js", "3D game", "San Francisco", "open world", "WebGL"],
  authors: [{ name: "Simon Tian" }],
  creator: "Simon Tian",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "GTA SF",
    title: "GTA SF — Grand Theft Auto: San Francisco",
    description: "Browser-based 3D open-world game built with Three.js",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA SF — Browser-based 3D Game",
    description: "Explore San Francisco in this GTA-inspired Three.js experience",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
