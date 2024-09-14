import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <div className="text-white p-8 container my-9">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <motion.img
          src="src/assets/Images/image1.jpg"
          alt="Creative Workspace"
          className="rounded-lg w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="text-center lg:text-left lg:ml-8 mt-6 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Bring your creative ideas into Reality!
          </h1>
          <p className="text-xl mb-4">
            We help creative agencies, designers, and other creative people
            showcase their work and connect with clients.
          </p>
          <div className="mt-4">
            <motion.button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Trusted by 24k+ Customers
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;
