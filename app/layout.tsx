// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fsvberghausen1928.de"),

  title: {
    default: "FSV Berghausen 1928",
    template: "%s | FSV Berghausen 1928",
  },

  description:
    "Offizielle Website des FSV Berghausen 1928. Aktuelle News, Spielpläne, Mannschaften, Galerie, Vereinsgeschichte und mehr.",

  keywords: [
    "FSV Berghausen",
    "Fußball",
    "Berghausen",
    "Fußballverein",
    "Kreisliga",
    "Jugend",
    "Spielplan",
    "Verein",
  ],

  authors: [
    {
      name: "FSV Berghausen 1928",
    },
  ],

  creator: "FSV Berghausen 1928",

  publisher: "FSV Berghausen 1928",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.fsvberghausen1928.de",
    title: "FSV Berghausen 1928",
    description:
      "Tradition. Leidenschaft. Gemeinschaft. Offizielle Website des FSV Berghausen 1928.",

    siteName: "FSV Berghausen 1928",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FSV Berghausen 1928",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FSV Berghausen 1928",
    description:
      "Offizielle Website des FSV Berghausen 1928.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/logos/favicon.ico",
    shortcut: "/logos/favicon.ico",
    apple: "/logos/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#005BAC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navigation />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}