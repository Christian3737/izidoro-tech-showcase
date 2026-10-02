import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <CustomCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <GallerySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
