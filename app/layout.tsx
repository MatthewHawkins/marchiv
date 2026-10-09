import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Jost } from "next/font/google";
import { isPreviewDeploy } from "@/lib/asset";
import "./tokens.css";
import "./globals.css";

/* next/font is a compile-time transform, so every option must be a literal —
   no shared constants, no spread. `latin-ext` carries the Czech diacritics
   (č ř ž ě ů ť ď ň) the brand needs once the CZ copy lands; without it they
   fall back to a system face and break the setting. */

const bodoni = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bodoni",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marchiv — Borrowed, beautifully.",
    template: "%s · Marchiv",
  },
  description:
    "A lending house in Prague. Authenticated Hermès, Chanel and Dior, lent by the month from a vaulted salon in Malá Strana — and sent across Europe in linen.",
  // The preview is a public URL for an unlaunched brand. Drop this once the
  // real site launches, or it will quietly stay out of Google.
  ...(isPreviewDeploy && { robots: { index: false, follow: false } }),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Marchiv",
    title: "Marchiv — Borrowed, beautifully.",
    description:
      "A lending house in Prague. Authenticated designer bags, lent by the month from a vaulted salon in Malá Strana.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3ede4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
