const HeroSection = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen py-12 px-4">
      {/* Image Section */}
      <div className="flex justify-center w-full">
        <img
          src="/Images/image1.jpg"
          alt="Creative Workspace"
          className="rounded-lg w-full lg:w-3/4 mb-8"
        />
      </div>

      {/* Awards and Portfolio Info */}
      <div className="flex justify-between items-center text-gray-400 text-sm w-full lg:w-3/4 mb-4">
        <p>8 awards won</p>
        <p>From 2020</p>
        <p>420 portfolios Done</p>
      </div>

      {/* Main Heading Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:w-3/4 text-center lg:text-left mb-8">
        <div className="lg:max-w-lg">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            Bring your creative ideas into Reality!
          </h1>
        </div>

        <div>
          {/* Profile Images Section */}
          <p className="text-2xl text-gray-300 mb-4 lg:mb-14 text-right ">
          We help creative agencies, designers, and other creative people showcase their work and connect with clients.
          </p>

          <div className="flex items-end justify-center lg:justify-end space-x-4 mt-4 lg:mt-0">
            <img
              src="/Images/image1.jpg"
              alt="Person 1"
              className="w-28 h-28  rounded-lg"
            />
            <img
              src="/Images/image1.jpg"
              alt="Person 2"
              className="w-28 h-28  rounded-lg"
            />
            <img
              src="/Images/image1.jpg"
              alt="Person 3"
              className="w-28 h-28  rounded-lg"
            />
            <button className="bg-blue-500 w-28 h-28  rounded-lg text-white px-6 py-3 shadow-md transition-transform transform hover:scale-105">
              Trusted by 24k+ Customers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
