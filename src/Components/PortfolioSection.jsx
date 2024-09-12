import { BsArrowUpRight } from "react-icons/bs";

const portfolioItems = [
  {
    title: 'Curology',
    category: 'Branding',
    image: 'src/assets/Images/image1.jpg',
    link: '#',
  },
  {
    title: 'Cookie Dough',
    category: 'Advertising',
    image: 'src/assets/Images/image1.jpg',
    link: '#',
  },
  {
    title: 'Gaming Power',
    category: 'Marketing',
    image: 'src/assets/Images/image1.jpg',
    link: '#',
  },
  {
    title: 'Riot Energy',
    category: 'Advertising',
    image: 'src/assets/Images/image1.jpg',
    link: '#',
  },
  {
    title: 'Smoothie',
    category: 'Marketing',
    image: 'src/assets/Images/image1.jpg',
    link: '#',
  },
  {
    title: 'Positive Beverage',
    category: 'Branding',
    image: 'src/assets/Images/image1.jpg',
    link: '#',
  },
];

const PortfolioSection = () => {
  return (
    <section className="text-white py-16">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">Portfolio</h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
        We are proud of our work, and we are always looking for new challenges. Take a look at some of our recent portfolio:
      </p>
    </div>

    {/* Portfolio Grid */}
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item, index) => (
        <div key={index} className="relative group bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="lg:w-72 w-full h-64 object-cover lg:m-3 lg:rounded-lg "
          />
          {/* Content */}
          <div className="p-4 flex flex-col justify-between">
            <div>
              <span className="text-sm text-gray-400">{item.category}</span>
              <h6 className="text-2xl font-semibold mt-2">{item.title}</h6>
            </div>
          </div>
          {/* Arrow Icon */}
          <a href={item.link} className="absolute bottom-4 right-4 p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <BsArrowUpRight size={20} />
          </a>
        </div>
      ))}
    </div>

    {/* Explore All Works Button */}
    <div className="text-center mt-12">
      <a
        href="#"
        className="inline-flex items-center text-blue-500 hover:underline"
      >
        Explore All Works
        <BsArrowUpRight size={18} className="ml-2" />
      </a>
    </div>
  </section>
  );
};

export default PortfolioSection;
