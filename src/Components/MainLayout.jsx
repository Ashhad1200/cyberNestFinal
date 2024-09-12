import AboutUsSection from "./AboutUsSection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";

const MainLayout = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default MainLayout;
