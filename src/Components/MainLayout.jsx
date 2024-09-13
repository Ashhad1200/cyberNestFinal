import AboutUsSection from "./AboutUsSection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen lg:mx-40">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default MainLayout;
