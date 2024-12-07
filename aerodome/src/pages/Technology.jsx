import { motion } from "framer-motion";
import CardLeft from "../components/Card/CardLeft";
import CardRight from "../components/Card/CardRight";
import InfiniteImageSlider from "../components/ImageGallery/ImageGallery";
import Heading from "../components/TextComponents/Heading";
import SubHeading from "../components/TextComponents/SubHeading";

function Technology() {
  // Animation Variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-20 pt-10 items-center flex flex-col">
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
        <motion.div initial="hidden" whileInView="visible" variants={fadeInFromLeft}>
          <CardLeft
            number="1"
            imageSrc="https://via.placeholder.com/480x290"
            title="Self - Developed Drones"
            description="Crafted with advanced engineering and innovation, our self-developed drones are built for versatility and peak performance.

            They feature state-of-the-art technology to deliver precision, reliability, and efficiency, tailored to meet the needs of industries ranging from entertainment to logistics."
          />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInFromRight}>
          <CardRight
            number="2"
            imageSrc="https://via.placeholder.com/480x290"
            title="Compass Technology"
            description="Our advanced compass technology ensures accurate navigation and orientation for drones in diverse environments. 

            It enhances stability, precision, and reliability, making operations seamless and efficient even in challenging conditions."
          />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInFromLeft}>
          <CardLeft
            number="3"
            imageSrc="https://via.placeholder.com/480x290"
            title="LED Module"
            description="Our LED modules are designed for vibrant, high-visibility displays, making them ideal for drone shows and creative aerial applications. 

            They deliver seamless performance, transforming aerial visuals into captivating experiences."
          />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInFromRight}>
          <CardRight
            number="4"
            imageSrc="https://via.placeholder.com/480x290"
            title="GNSS Module"
            description="Our GNSS modules provide precise positioning and navigation capabilities, ensuring accurate flight paths and reliable performance in various environments. 

            They are essential for seamless drone operations, enabling efficient and consistent results."
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
        <div className="w-full md:w-2/3 lg:w-[85%] flex flex-col gap-4">
          <SubHeading txt={"showcase"} textColor={"blue"} textCase={true} />
          <Heading txt={"Swarn Technology"} />
        </div>
        <div className="w-full pt-4">
          <InfiniteImageSlider />
        </div>
      </motion.div>
    </div>
  );
}

export default Technology;
