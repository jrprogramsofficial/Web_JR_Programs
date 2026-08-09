import { SEO } from "../utils/seo.jsx";
import { SEO_CONFIG } from "../data/seo.js";
import Hero from "./Hero";
import Marquee from "./Marquee";
import AppsSection from "./AppsSection";
import FeaturesSection from "./FeaturesSection";
import PlatformsSection from "./PlatformsSection";
import SocialsSection from "./SocialsSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <>
      <SEO {...SEO_CONFIG.home} />
      <main>
        <Hero />
        <Marquee />
        <AppsSection />
        <FeaturesSection />
        <PlatformsSection />
        <SocialsSection />
        <ContactSection />
      </main>
    </>
  );
}