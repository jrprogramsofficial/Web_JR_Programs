import { useSEO, SEO_CONFIG } from "../utils/seo.jsx";
import Hero from "./Hero";
import Marquee from "./Marquee";
import AppsSection from "./AppsSection";
import FeaturesSection from "./FeaturesSection";
import PlatformsSection from "./PlatformsSection";
import SocialsSection from "./SocialsSection";
import ContactSection from "./ContactSection";

export default function Home() {
  useSEO(SEO_CONFIG.home);
  return (
    <main>
      <Hero />
      <Marquee />
      <AppsSection />
      <FeaturesSection />
      <PlatformsSection />
      <SocialsSection />
      <ContactSection />
    </main>
  );
}