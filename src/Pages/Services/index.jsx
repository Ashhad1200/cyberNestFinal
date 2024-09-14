import { motion } from "framer-motion";
import HeroSectionServices from "./HeroSectionServices";
import Services from "./Services";
import WhatMakesUsBest from "./MakeUsBest";

const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mx-40">
      {/* Hero Section */}
      <motion.div
        className="max-w-4xl mx-auto p-8 rounded-lg lg:mt-16 lg:mb-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="lg:text-8xl text-6xl font-bold mb-4 text-center">
          Our Services
        </h1>
        <p className="mb-4 text-center my-9 text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          dolores voluptatum delectus sit, minus ab deserunt consequatur
          architecto culpa exercitationem!
        </p>
      </motion.div>

      {/* Animated Sections */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <HeroSectionServices />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Services />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <WhatMakesUsBest/>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
