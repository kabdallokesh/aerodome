import AboutUs from "../components/HomePageComponents/AboutUs";
import NewHeroSection from "../components/HomePageComponents/NewHero";
import Services from "../components/HomePageComponents/Services";
// import Technology from "../components/HomePageComponents/Technology";
// import WhyChooseUs from "../components/HomePageComponents/WhyChooseUs";

function Home() {
  return (
    <div className="mb-10">
      <div id="hero-section" className="w-full z-[300] mt-[-8vh] md:mt-[-13vh]">
        <NewHeroSection />
      </div>
      <div className="px-8 md:px-14 lg:px-20 flex flex-col gap-12 md:gap-16">
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
