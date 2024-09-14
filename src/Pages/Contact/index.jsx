import { motion } from "framer-motion";
import CTASection from "../../Components/CTASection";
import LetsTask from "./LetsTask";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mx-40">
      {/* Hero Section */}
      <motion.div
        className="max-w-4xl mx-auto p-8 rounded-lg items-center lg:mt-16 lg:mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="lg:text-6xl text-6xl font-bold mb-4 text-center">
          Get In Touch
        </h1>
        <p className="max-w-2xl mb-4 text-center my-9 text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          dolores voluptatum delectus sit, minus ab deserunt consequatur
          architecto culpa exercitationem!
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex flex-col items-center lg:items-center lg:mx-auto mx-3"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          className="rounded-3xl w-full lg:w-3/4 mb-6"
          src="src/assets/Images/contacts01.jpg"
          alt="About Bringer"
        />
      </motion.div>

      {/* Content Section */}
      <div className="container lg:w-3/4 lg:mx-auto py-16">
        {/* First Row - Heading on the left */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6 flex flex-col justify-between">
            <h2 className="text-4xl font-bold">
              Ready to ignite your brand's fire? 🔥 Let's connect! 🤝
            </h2>
          </div>
        </motion.div>

        {/* Second Row - Content on the right */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div></div> {/* Empty column for alignment */}
          <div className="space-y-6">
            <p className="text-2xl text-white">
              We help creative agencies, designers, and other creative people to
              connect with potential clients. We're not just creatives; we're
              brand-whisperers, storytellers, and digital alchemists.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Images Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-3/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="rounded-lg overflow-hidden">
          <img
            src="src/assets/Images/image1.jpg"
            alt="Group working together"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="src/assets/Images/image1.jpg"
            alt="Team discussion"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="src/assets/Images/image1.jpg"
            alt="Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <LetsTask />
      <CTASection />
    </div>
  );
};

export default ContactUsPage;
