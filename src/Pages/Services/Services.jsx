import { BsArrowUpRight } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      title: "Branding",
      description: `We weave visual stories and craft strategic messaging that resonate at heartstrings, 
          build unwavering trust, and turn customers into fervent brand champions.`,
      link: "service-details.html",
    },
    {
      title: "Marketing",
      description: `We design data-driven campaigns that ignite engagement like wildfire and turn clicks into conversions.`,
      link: "service-details.html",
    },
    {
      title: "Graphic Design",
      description: `We craft visual masterpieces that sing your brand's story in vibrant colors and captivating shapes.`,
      link: "service-details.html",
    },
    {
      title: "Graphic Design",
      description: `We craft visual masterpieces that sing your brand's story in vibrant colors and captivating shapes.`,
      link: "service-details.html",
    },
    {
      title: "Graphic Design",
      description: `We craft visual masterpieces that sing your brand's story in vibrant colors and captivating shapes.`,
      link: "service-details.html",
    },
  ];
  return (
    <section className=" text-white p-14 py-16 m-5 lg:m-0 lg:mt-9">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-5xl font-bold  max-w-4xl mx-auto mt-4">
        The full spectrum of brand 🪄 magic.
        Choose your adventure.
        </p>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4">
        <ul className="space-y-12">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-1/2">
                <h4 className="text-2xl font-semibold mb-4">
                  {service.title}
                  <span className="text-blue-500">.</span>
                </h4>
              </div>
              <div className="w-1/2 flex items-center justify-between">
                <p className="text-gray-400 hidden md:block">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="text-blue-500 p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors ml-4"
                >
                  <BsArrowUpRight size={24} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Explore All Services Button */}
      <div className="text-center mt-16">
        <a
          href="services.html"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center"
        >
          Explore All Services
          <BsArrowUpRight size={20} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Services;
