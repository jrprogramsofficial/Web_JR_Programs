import Hero from "./Hero";
import Marquee from "./Marquee";
import AppsSection from "./AppsSection";
import FeaturesSection from "./FeaturesSection";
import PlatformsSection from "./PlatformsSection";
import SocialsSection from "./SocialsSection";
import ContactSection from "./ContactSection";

export default function Home() {
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