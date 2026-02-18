/*
 * FlyGreen24 – Home Page (Onepager)
 * Design: "Atmospheric Altitude" – Aerospace Editorial
 * Colors: Black #000000, Green #7ed957, Gray #575756, Warm White #F8F6F3
 * Fonts: Space Grotesk (display), DM Sans (body), JetBrains Mono (mono)
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import PlatformSection from "@/components/PlatformSection";
import B2BSection from "@/components/B2BSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <PlatformSection />
      <B2BSection />
      <AboutSection />
      <PartnersSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
