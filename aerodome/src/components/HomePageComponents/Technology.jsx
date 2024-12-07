import Heading from "../TextComponents/Heading";
import SubHeading from "../TextComponents/SubHeading";
import NormalText from "../TextComponents/NormalText";
import Button from "../Button/Button";
import InfiniteImageGallery from "../ImageGallery/ImageGallery";
import { motion } from "framer-motion";
function Technology() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="overflow-x-hidden overflow-y-clip">
      <div className="w-full flex flex-col items-center md:items-start">
        <SubHeading
          txt={"showcase"}
          textCase={true}
          textColor={"blue"}
          txtStyle={"text-center md:text-left"}
        />
        <Heading
          txt={"Our Technologies"}
          textStyle={"text-center md:text-left"}
        />
      </div>
      <div className="flex flex-col  gap-5 mt-8 h-full mb-[80%] md:mb-0 ">
        <InfiniteImageGallery />
        <div className="flex gap-10 md:-ml-32 relative h-full">
          <InfiniteImageGallery />
          <div
            className="md:w-1/4 
          rounded-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg h-56 bg-white p-10 flex flex-col gap-5 absolute md:right-0 md:top-0 top-[110%] items-center"
          >
            <NormalText
              txt={
                "We use state-of-the-art drone technology and modules to create seamless, high-performance solutions."
              }
              txtStyle={"text-black/90 text-center"}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <Button txt="More Details" link="/technology" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
