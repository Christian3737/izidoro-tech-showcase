import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
