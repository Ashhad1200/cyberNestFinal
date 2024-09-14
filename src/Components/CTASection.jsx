import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CTASection = () => {
  const [formResponse, setFormResponse] = useState("");
  
  // IntersectionObserver hook to track when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // triggers animation once
    threshold: 0.1,    // triggers when 10% of the section is in view
  });

  // Framer motion controls for the form and text sections
  const controls = useAnimation();

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    }
  }, [inView, controls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormResponse("Thank you! We will contact you soon.");
  };

  return (
    <section ref={ref} className="py-16 my-28">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Form Section */}
        <motion.div
          className="lg:w-4/5 flex justify-center"
          initial={{ opacity: 0, x: -100 }} // Initial state before scrolling into view
          animate={controls}                // Animation controlled by IntersectionObserver
        >
          <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Get a FREE Quote
              </button>
              <div className="text-green-500 mt-4">{formResponse}</div>
            </form>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-white lg:mx-0 mx-5"
          initial={{ opacity: 0, x: 100 }} // Initial state before scrolling into view
          animate={controls}                // Animation controlled by IntersectionObserver
        >
          <h2 className="text-4xl font-bold mb-4">
            Let’s discuss your next creative project.
          </h2>
          <p className="text-gray-400 mb-8">
            We help creative agencies, designers, and other creative people
            showcase their perfect work.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {/* Counter Item */}
            <div className="text-center">
              <div className="text-5xl font-bold">420</div>
              <div className="text-gray-400">Projects Done</div>
            </div>
            {/* Counter Item */}
            <div className="text-center">
              <div className="text-5xl font-bold">8K+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            {/* Counter Item */}
            <div className="text-center">
              <div className="text-5xl font-bold">12+</div>
              <div className="text-gray-400">Years in Work</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
