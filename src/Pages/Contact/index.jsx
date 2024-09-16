import React from "react";
import CTASection from "../../Components/CTASection";
import LetsTask from "./LetsTask";

// Importing images
import contactImg from "../../assets/Images/contacts01.jpg";
import sectionBgImg from "../../assets/Images/contact-section-bg.jpg";
import image1 from "../../assets/Images/image1.jpg";
import aboutImg from "../../assets/Images/about02.jpg";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mx-40">
      <div className="max-w-4xl mx-auto p-8 rounded-lg items-center lg:mt-16 lg:mb-10 ">
        <h1 className="lg:text-6xl text-6xl font-bold mb-4 text-center ">
          Get In Touch
        </h1>
        <p className="max-w-2xl mb-4 text-center my-9 text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          dolores voluptatum delectus sit, minus ab deserunt consequatur
          architecto culpa exercitationem!
        </p>
      </div>

      {/* Image */}
      <div className="flex flex-col items-center lg:items-center lg:mx-auto mx-3">
        <img
          className="rounded-3xl w-full lg:w-3/4 mb-6"
          src={contactImg} // Use the imported image
          alt="About Bringer"
        />
      </div>

      <div className="container lg:w-3/4 lg:mx-auto py-16">
        {/* First Row - Heading on the left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="space-y-6 flex flex-col justify-between"
            data-unload="fade-left"
          >
            <h2 className="text-4xl font-bold lg:mx-0 mx-5">
              Ready to ignite your brand's fire? 🔥 Let's connect! 🤝
            </h2>
          </div>
        </div>

        {/* Second Row - Content on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div></div>
          <div className="space-y-6 lg:mx-0 mx-5">
            <p className="text-2xl text-white">
              We help creative agencies, designers, and other creative people to
              connect with potential clients. We're not just creatives; we're
              brand-whisperers, storytellers, and digital alchemists.
            </p>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-3/4 lg:mx-0 mx-5">
        <div className="rounded-lg overflow-hidden">
          <img
            src={sectionBgImg} // Use the imported image
            alt="Group working together"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={image1} // Use the imported image
            alt="Team discussion"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={aboutImg} // Use the imported image
            alt="Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <LetsTask />
      <CTASection />
    </div>
  );
};

export default ContactUsPage;
