import { useInView } from "react-intersection-observer";
import FeaturesSection from "./Features";
import HeroSectionAbout from "./HeroSectionAbout";
import Services from "./Services";
import Story from "./Story";
import MeetTheTeam from "./Team";
import { motion } from "framer-motion"; // Optional: Use framer-motion for better animations

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [storyRef, storyInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col items-center justify-center lg:mx-40">
      <div className="max-w-4xl mx-auto p-8 rounded-lg items-center lg:mt-16 lg:mb-52">
        <h1 className="lg:text-8xl text-6xl font-bold mb-4 text-center">
          About Us
        </h1>
        <p className="text-2xl mb-4 text-center my-9">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          dolores voluptatum delectus sit, minus ab deserunt consequatur
          architecto culpa exercitationem!
        </p>
      </div>
      <div className="container">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HeroSectionAbout />
        </motion.div>

        {/* Story Section */}
        <motion.div
          ref={storyRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: storyInView ? 1 : 0, y: storyInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Story />
        </motion.div>

        {/* Services Section */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Services />
        </motion.div>

        {/* Features Section */}
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FeaturesSection />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
