import { motion } from "framer-motion";
import Heading from "../components/TextComponents/Heading";
import SubHeading from "../components/TextComponents/SubHeading";

function Portfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-20 pt-10 items-center flex flex-col">
      <motion.div
        className="w-full md:w-2/3 lg:w-[70%] items-center flex flex-col gap-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <SubHeading txt={"Portfolio"} textColor={"blue"} textCase={true} />
        <Heading
          txt={"Pioneering Drone Technology"}
          textStyle={"mb-6 md:mb-0"}
        />
      </motion.div>

      <motion.div
        className="p-6 sm:p-8 lg:p-12 w-full"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="relative w-full rounded-xl overflow-hidden border-2 mb-6 border-[#FFFFFF1A] bg-[#181818] p-4"
          variants={childVariant}
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/O6G19m-cvdM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "}
          <div className=" bottom-4 mt-4 text-white bg-black opacity-60 p-3  w-full  shadow-2xl shadow-black">
            <h3 className="font-bold">Pondicherry</h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 ">
          <motion.div
            className="relative rounded-xl overflow-hidden border-2 flex flex-col items-center  border-[#FFFFFF1A] bg-[#181818] p-4"
            variants={childVariant}
          >
            <video
              controls
              className=" aspect-auto w-full md:w-1/2"
              src="https://res.cloudinary.com/dwtytn7fl/video/upload/q_auto/v1738161928/aerodome/djqlwo79d38r5q7zupit.mp4"
            ></video>

            <div className=" bottom-4  text-white bg-black opacity-60 p-3  w-full  shadow-2xl shadow-black">
              <h3 className="font-bold">Ahmedabad Kankaria Carnival 2024</h3>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden border-2 flex flex-col items-center  border-[#FFFFFF1A] bg-[#181818] p-4"
            variants={childVariant}
          >
            <video
              controls
              className=" aspect-auto w-full md:w-1/2"
              src="https://res.cloudinary.com/dwtytn7fl/video/upload/q_auto/v1738161973/aerodome/ybxezmyjf0gskrur6xxn.mp4"
            ></video>

            <div className=" bottom-4  text-white bg-black opacity-60 p-3  w-full  shadow-2xl shadow-black">
              <h3 className="font-bold">30th International Yoga Festival</h3>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative w-full rounded-xl overflow-hidden border-2 mb-6 border-[#FFFFFF1A] bg-[#181818] p-4"
          variants={childVariant}
        >
          <video
            controls
            className=" aspect-auto w-full md:w-full"
            src="https://res.cloudinary.com/dwtytn7fl/video/upload/v1740865044/wedding_all_formation_V2_xqs4de.mp4"
          ></video>
          <div className=" bottom-4 mt-4 text-white bg-black opacity-60 p-3  w-full  shadow-2xl shadow-black">
            <h3 className="font-bold">Wedding Show</h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Portfolio;
