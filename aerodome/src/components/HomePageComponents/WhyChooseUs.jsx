import Heading from "../TextComponents/Heading";
import SubHeading from "../TextComponents/SubHeading";
import Options from "./Options";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import { motion } from "framer-motion";
function WhyChooseUs() {
  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="w-full flex flex-col md:flex-row h-full">
      <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-2/3">
        <SubHeading
          txt={"Why Chose us?"}
          textColor={"blue"}
          textCase={true}
          textStyle={""}
        />
        <Heading
          txt={"We fuse innovation and imagination to craft stories that soar!"}
          textStyle={"text-center md:text-left text-4xl md:text-5xl"}
        />
        <Options />
      </div>
      <div className="mt-10 md:mt-0 mb-24 md:mb-0 md:w-1/2 p-10 md:p-24 h-full">
        <motion.div
          initial="hidden"
          variants={fadeInFromRight}
          whileInView={"visible"}
          className="relative "
        >
          <img
            src={img3}
            alt=""
            className="absolute rounded-2xl transform origin-top-right rotate-12 "
          />
          <img
            src={img2}
            alt=""
            className="absolute rounded-2xl transform origin-top-right rotate-6"
          />
          <img src={img1} alt="" className="absolute rounded-2xl" />
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
