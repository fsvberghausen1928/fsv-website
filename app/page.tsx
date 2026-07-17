// app/page.tsx

import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import MatchCenter from "@/components/sections/MatchCenter";
import LatestNews from "@/components/sections/LatestNews";
import Sponsors from "@/components/sections/Sponsors";
import GalleryPreview from "@/components/sections/GalleryPreview";
import ClubHistory from "@/components/sections/ClubHistory";
import CTASection from "@/components/sections/CTASection";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to the official website of FSV Berghausen 1928. Stay up to date with fixtures, results, news, teams, sponsors and club history.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <MatchCenter />

      <LatestNews />

      <Sponsors />

      <GalleryPreview />

      <ClubHistory />

      <CTASection />

      <Newsletter />
    </>
  );
}