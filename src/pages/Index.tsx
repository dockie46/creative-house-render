import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ForWhoSection from "@/components/ForWhoSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ForWhoSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <PortfolioSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
