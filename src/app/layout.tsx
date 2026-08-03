import type { Metadata } from "next";
import { Anton, Caveat, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/config";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "Pranav Jha",
    "Applied AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/artwork/hero.png", width: 1672, height: 940, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/artwork/hero.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The font variables must live on :root — Tailwind's @theme resolves
    // `--font-display` there, and it cannot see variables set further down.
    <html
      lang="en"
      className={`${anton.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <body className="bg-bg text-ink font-sans">
        {/* Reveals and blur entrances start hidden. Without JS they must not stay that way. */}
        <noscript>
          <style>{`
            [data-reveal]{opacity:1!important;transform:none!important}
            [data-artwork]{filter:none!important;transform:none!important}
          `}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
