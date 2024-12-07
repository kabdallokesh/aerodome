import AboutUs from "../components/HomePageComponents/AboutUs";
import Services from "../components/HomePageComponents/Services";
import Technology from "../components/HomePageComponents/Technology";
import WhyChooseUs from "../components/HomePageComponents/WhyChooseUs";

function Home() {
  return (
    <div className="px-12 md:px-16 lg:px-20 flex flex-col gap-16">
      <div></div>
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <Technology />
      <div></div>
    </div>
  );
}

export default Home;
