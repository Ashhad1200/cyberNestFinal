const HeroSectionAbout = () => {
  return (
    <section className="relative text-white">
      {/* Image Section */}
      <div className="flex flex-col items-center lg:items-center lg:mx-auto mx-3">
        <img
          className="rounded-lg w-full  lg:w-3/4 mb-6"
          src="src/assets/Images/image1.jpg"
          alt="About Bringer"
        />
      </div>

      {/* Content Section */}
      <div className="container lg:w-3/4 lg:mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 mx-6">
        {/* Left Column */}
        <div
          className="space-y-6 flex flex-col justify-between "
          data-unload="fade-left"
        >
          <h2 className="text-5xl font-bold" data-split-appear="fade-up">
            Igniting brands that spark movements.
          </h2>
        </div>

        {/* Right Column */}
        <div
        className="space-y-6"
        data-appear="fade-left"
        data-unload="fade-right"
        data-delay="100"
      >
        <p className="text-2xl text-white">
          We help creative agencies, designers, and other creative people to
          connect with potential clients.
        </p>
        <p className="text-gray-400">
          We're not just creatives; we're brand-whisperers, storytellers, and
          digital alchemists. We take your vision, infuse it with our spark,
          and craft unforgettable experiences that ignite imaginations and
          leave audiences begging for more. At Bringer, we don't just build
          brands, we build movements.
        </p>
        <p className="text-gray-400">
          We are a team of passionate and experienced designers, developers,
          and marketers who specialize in helping businesses of all sizes
          achieve their goals. We believe that creativity is the key to
          success, and we are committed to helping our clients unleash their
          full potential.
        </p>
        <p className="text-gray-400">
          We believe in the power of creativity. We help creative
          professionals create a strong online presence that showcases their
          work and tells their story.
        </p>
      </div>
      </div>
    </section>
  );
};

export default HeroSectionAbout;
