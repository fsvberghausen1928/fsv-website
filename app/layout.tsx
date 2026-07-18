import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "../styles/variables.css";
import "../styles/animations.css";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

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
    "Offizielle Website des FSV Berghausen 1928. News, Spielpläne, Mannschaften, Vereinsgeschichte, Galerie und mehr.",

  applicationName: "FSV Berghausen 1928",

  keywords: [
    "FSV Berghausen",
    "Berghausen",
    "Fußball",
    "Fußballverein",
    "Kreisliga",
    "Spielplan",
    "Jugendfußball",
    "Karlsruhe",
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

    siteName: "FSV Berghausen 1928",

    title: "FSV Berghausen 1928",

    description:
      "Tradition. Leidenschaft. Gemeinschaft.",

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
      "Tradition. Leidenschaft. Gemeinschaft.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/logos/favicon.ico",
    shortcut: "/logos/favicon.ico",
    apple: "/logos/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#005BAC",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />

        <main>{children}</main>

        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}