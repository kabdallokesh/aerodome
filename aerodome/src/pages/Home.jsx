import AboutUs from "../components/HomePageComponents/AboutUs";
import HeroSection from "../components/HomePageComponents/Hero";
import Services from "../components/HomePageComponents/Services";
import Technology from "../components/HomePageComponents/Technology";
import WhyChooseUs from "../components/HomePageComponents/WhyChooseUs";

function Home() {
  return (
    <div>
      <div className="w-full z-[300] mt-[-13vh]">
        <HeroSection  />
      </div>
      <div className="px-12 md:px-16 lg:px-20 flex flex-col gap-16">
        <Services />
        <WhyChooseUs />
        <AboutUs />
        <Technology />
        <div></div>
      </div>
    </div>
  );
}

export default Home;
