import FeaturesSection from "./Features";
import HeroSectionAbout from "./HeroSectionAbout";
import Services from "./Services";
import Story from "./Story";
import MeetTheTeam from "./Team";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="max-w-4xl mx-auto p-8 rounded-lg items-center">
        <h1 className="text-6xl font-bold mb-4 text-center">About Us</h1>
        <p className="font-bold mb-4 text-center my-9">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          dolores voluptatum delectus sit, minus ab deserunt consequatur
          architecto culpa exercitationem!
        </p>
      </div>
      <HeroSectionAbout />
      <MeetTheTeam />
      <Story />
      <Services />
      <FeaturesSection/>
    </div>
  );
};

export default AboutPage;
