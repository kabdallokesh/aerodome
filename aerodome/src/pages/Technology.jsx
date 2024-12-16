import { motion } from "framer-motion";
import CardLeft from "../components/Card/CardLeft";
import CardRight from "../components/Card/CardRight";
import InfiniteImageSlider from "../components/ImageGallery/ImageGallery";
import Heading from "../components/TextComponents/Heading";
import SubHeading from "../components/TextComponents/SubHeading";
import NormalText from "../components/TextComponents/NormalText";
function Technology() {
  // Animation Variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-20 pt-10 items-center flex flex-col overflow-x-hidden overflow-y-clip">
      {/* Header Section */}
      <motion.div
        className="w-full md:w-2/3 lg:w-[70%] items-center flex flex-col gap-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <SubHeading txt={"Technology"} textColor={"blue"} textCase={true} />
        <Heading txt={"Pioneering Drone Technology"} />
      </motion.div>

      {/* Technology Section */}
      <div className="md:p-8 p-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
        >
          <CardLeft
            number=""
            imageSrc="https://via.placeholder.com/480x290"
            title="In-House Developed Drones"
            description="Crafted with advanced engineering and innovation, our self-developed drones are built for versatility and peak performance.

The drones are equipped with state-of-the-art technology designed to ensure reliability, precision, and efficiency, even under the most challenging environmental conditions."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight}
        >
          <CardRight
            number="4"
            imageSrc="gnss.jpg"
            title="Precision GNSS Module"
            description="Our GNSS modules deliver centimeter-level precision in positioning and navigation, enabling accurate flight paths and dependable performance even in the most demanding environments. 
            
            These modules are integral to seamless swarm operations and precise visual coordination."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
        >
          <CardLeft
            imageSrc="led.jpg"
            title="LED Module"
            description="Our LED modules are designed for vibrant, high-visibility displays, making them ideal for drone shows and creative aerial applications. 

            They deliver seamless performance, transforming aerial visuals into captivating experiences."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight}
        >
          <CardRight
            imageSrc="https://via.placeholder.com/480x290"
            title="Compass Technology"
            description="Our advanced military-grade compass technology ensures accurate navigation and orientation for drones in diverse environments. 
            
            The rugged design enhances the stability, reliability, and precision of the drone during complex operations."
          />
        </motion.div>
      </div>

      {/* Showcase Section */}
      <motion.div
        className="md:p-8 p-4 w-full"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
      >
        <div className="w-full md:w-2/3 lg:w-[85%] flex flex-col gap-2 items-center md:items-start">
          <SubHeading txt={"Swarn"} textColor={"blue"} textCase={true} />
          <Heading txt={"Technology"} textStyle={"text-center md:text-start"} />
        </div>
        <NormalText
          txt="Swarm technology presents transformative potential for enhancing task efficiency, enabling drones to adapt to diverse challenges, and creating redundant, reliable systems for applications such as defense, emergency logistics, and surveillance. 
At AeroDome, we have also successfully tested and demonstrated advanced decentralized swarm technology, with a primary focus on defense applications."
          txtStyle={"text-white/80 my-5"}
        />
        <div className="w-full pt-4 overflow-x-hidden">
          <InfiniteImageSlider />
        </div>
      </motion.div>
    </div>
  );
}

export default Technology;
