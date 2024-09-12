import { BsArrowUpRight } from "react-icons/bs";
import ServicesSection from "../../Components/ServicesSection";

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
        },{
          title: "Graphic Design",
          description: `We craft visual masterpieces that sing your brand's story in vibrant colors and captivating shapes.`,
          link: "service-details.html",
        },{
          title: "Graphic Design",
          description: `We craft visual masterpieces that sing your brand's story in vibrant colors and captivating shapes.`,
          link: "service-details.html",
        },
      ];
  return (
    <>
      <section className="relative text-white">
        {/* Content Section */}
        <div className="container lg:mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 mx-6">
          {/* Left Column */}
          <div
            className="space-y-6 flex flex-col justify-between "
            data-unload="fade-left"
          >
            <h2 className="text-6xl font-bold" data-split-appear="fade-up">
              Igniting brands that <br></br> spark movements.
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
              We're not just creatives; we're brand-whisperers, storytellers,
              and digital alchemists. We take your vision, infuse it with our
              spark, and craft unforgettable experiences that ignite
              imaginations and leave audiences begging for more. At Bringer, we
              don't just build brands, we build movements.
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

        <section className=" text-white p-14 py-16 m-5 lg:m-0">

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
      </section>
    </>
  );
};

export default Services;
