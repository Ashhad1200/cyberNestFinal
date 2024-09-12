const AboutUsSection = () => {
  return (
    <div className=" text-white p-8 container my-9" >
    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
      <img
        src="src/assets/Images/image1.jpg"
        alt="Creative Workspace"
        className="rounded-lg w-full lg:w-1/2"
      />
      <div className="text-center lg:text-left lg:ml-8 mt-6 lg:mt-0">
        <h1 className="text-4xl font-bold mb-4">
          Bring your creative ideas into Reality!
        </h1>
        <p className="text-xl mb-4">
          We help creative agencies, designers, and other creative people showcase their work and connect with clients.
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Trusted by 24k+ Customers
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutUsSection;
