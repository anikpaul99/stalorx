import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";
import Team from "./components/sections/Team";
import WhyUs from "./components/sections/WhyUs";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <TechStack />
        <Team />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
