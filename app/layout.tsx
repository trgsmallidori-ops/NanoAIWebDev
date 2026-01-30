import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-display" });
const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Spaxio — Luxe-grade web builds at honest prices",
  description: "Spaxio crafts luxury-inspired websites at a fraction of typical agency cost. Get a quote in minutes and receive a free mock site.",
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}



