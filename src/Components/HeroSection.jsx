const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-white p-8 container my-9">
        <div className="flex flex-col items-center lg:items-center mx-auto">
          {/* Image with hover animation */}
          <img
            src="src/assets/Images/image1.jpg"
            alt="Creative Workspace"
            className="rounded-lg w-full lg:w-3/4 mb-6 transition-transform transform hover:scale-105 duration-500 ease-in-out"
          />

          {/* Awards Info */}
          <div className="lg:text-center items-baseline">
            <p className="text-lg mb-4">
              8 awards won &nbsp;&nbsp; | &nbsp;&nbsp; From 2020 &nbsp;&nbsp; |
              &nbsp;&nbsp; 420 portfolios Done
            </p>
          </div>

          {/* Heading and Profile Images */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full lg:w-auto">
            {/* Heading with animation */}
            <div className="text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
              <h1 className="lg:text-7xl text-4xl font-bold mb-4 transition-opacity duration-700 ease-in-out  animate-fadeIn">
                Bring your creative ideas <br /> into Reality!
              </h1>
              <p className="text-xl mb-4 transition-opacity duration-700 ease-in-out  animate-fadeIn delay-200">
                We help creative agencies, designers, and other creative people
                showcase their work and connect with clients.
              </p>
            </div>
          </div>

          {/* Button with hover animation */}
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105 duration-300">
              Trusted by 24k+ Customers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
