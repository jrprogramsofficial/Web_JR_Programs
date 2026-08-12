import { SEO } from "../utils/seo.jsx";
import { useI18n } from "../i18n/context.js";
import Hero from "./Hero";
import Marquee from "./Marquee";
import ProblemsSection from "./ProblemsSection";
import AppsSection from "./AppsSection";
import FeaturesSection from "./FeaturesSection";
import PlatformsSection from "./PlatformsSection";
import SocialsSection from "./SocialsSection";
import ContactSection from "./ContactSection";

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <SEO {...t.seo.home} />
      <main>
        <Hero />
        <Marquee />
        <ProblemsSection />
        <AppsSection />
        <FeaturesSection />
        <PlatformsSection />
        <SocialsSection />
        <ContactSection />
      </main>
    </>
  );
}