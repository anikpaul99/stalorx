import ConstellationBackground from "./components/ConstellationBackground";
import ParticleField from "./components/ParticleField";
import GlowOrbs from "./components/GlowOrbs";
import HeaderPremium from "./components/layout/HeaderPremium";
import FooterPremium from "./components/layout/FooterPremium";
import ScrollToTopPremium from "./components/layout/ScrollToTopPremium";
import HeroPremium from "./components/sections/HeroPremium";
import ServicesPremium from "./components/sections/ServicesPremium";
import TechStackPremium from "./components/sections/TechStackPremium";
import TeamPremium from "./components/sections/TeamPremium";
import WhyUsPremium from "./components/sections/WhyUsPremium";
import ContactPremium from "./components/sections/ContactPremium";

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <ConstellationBackground />
      <ParticleField />
      <GlowOrbs />

      {/* Layout */}
      <HeaderPremium />
      <main className="relative z-10">
        <HeroPremium />
        <ServicesPremium />
        <TechStackPremium />
        <TeamPremium />
        <WhyUsPremium />
        <ContactPremium />
      </main>
      <FooterPremium />
      <ScrollToTopPremium />
    </>
  );
}
