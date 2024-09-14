import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaPatreon,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          {/* Left section */}
          <div className="mb-5">
            <h2 className="text-2xl font-bold">CyberNest.</h2>
            <p className="mt-3 max-w-sm text-gray-400">
              We are a passionate team of developers and designers who believe
              in the power of creativity. We help creative people create a
              strong online presence that shows their work and tells a story.
            </p>
            {/* Social Icons with animation */}
            <div className="mt-5 flex space-x-4">
              <a
                href="#"
                aria-label="Visit us on Facebook"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Visit us on Instagram"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Visit us on Twitter"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Visit us on TikTok"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="#"
                aria-label="Visit us on Patreon"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                <FaPatreon size={20} />
              </a>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-wrap justify-between w-full md:w-auto">
            <div className="mb-5 mx-5 md:mb-0">
              <h3 className="font-semibold">Services</h3>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Branding
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Content Creation
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-5 mx-5 md:mb-0">
              <h3 className="font-semibold">About Us</h3>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-5 mx-5 md:mb-0">
              <h3 className="font-semibold">Resources</h3>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 bg-black p-5">
        <p>Copyright © 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
