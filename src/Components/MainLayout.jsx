import { motion } from "framer-motion";
import AboutUsSection from "./AboutUsSection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import TestimonialsSection from "./TestimonialsSection";
import Services from "./Services";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:mx-40">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <HeroSection />
      </motion.div>

      {/* About Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <AboutUsSection />
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Services />
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <PortfolioSection />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <TestimonialsSection />
      </motion.div>

      {/* Call To Action Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <CTASection />
      </motion.div>
    </div>
  );
};

export default MainLayout;
