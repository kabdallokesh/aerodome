import AboutUs from "../components/HomePageComponents/AboutUs";
import Services from "../components/HomePageComponents/Services";
import WhyChooseUs from "../components/HomePageComponents/WhyChooseUs";

function Home() {
  return (
    <div className="px-12 md:px-16 lg:px-20 flex flex-col gap-16">
      <div></div>
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <div></div>
    </div>
  );
}

export default Home;
