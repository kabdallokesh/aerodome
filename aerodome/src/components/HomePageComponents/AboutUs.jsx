import Button from "../Button/Button";
import Heading from "../TextComponents/Heading";
import NormalText from "../TextComponents/NormalText";
import SubHeading from "../TextComponents/SubHeading";
import ExpandingCard from "./ExpandingCards";
import backer1 from "../../assets/Backers/Media Kit_DS Full whitte 1.png";
import backer2 from "../../assets/Backers/NSRCEL Main logo.png";
import backer3 from "../../assets/Backers/SSN iFound Logo transparent blue.png";
import backer4 from "../../assets/Backers/Veltech.jpeg";
import { motion } from "framer-motion";
function AboutUs() {
  // const cardsData = [
  //   {
  //     id: 1,
  //     url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     title: "Explore The World",
  //   },
  //   {
  //     id: 2,
  //     url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     title: "Wild Forest",
  //   },
  //   {
  //     id: 3,
  //     url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  //     title: "Sunny Beach",
  //   },
  //   {
  //     id: 4,
  //     url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  //     title: "City on Winter",
  //   },
  //   {
  //     id: 5,
  //     url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     title: "Mountains - Clouds",
  //   },
  // ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="">
      <div className="flex flex-col gap-10 rounded-3xl bg-gray-300/5 px-5 py-10 md:py-16 md:px-20">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="bg-transparent flex flex-col items-center md:items-start">
            <SubHeading
              txt={"ABOUT US"}
              textCase={true}
              textColor={"blue"}
              textStyle={""}
            />
            <Heading txt={"AeroDome"} textStyle={"text-center md:text-left"} />
            {/* <ExpandingCard data={cardsData} /> */}
          </div>
          <div className="flex flex-col items-center md:items-start">
            <NormalText
              txt={`AeroDome was founded in 2023 by three alumni of the Indian Institute of Technology Madras, who previously led Avishkar Hyperloop, the premier student team pioneering hyperloop technologies in India. Under their leadership, Avishkar secured $1.25 million in funding from the Ministry of Railways and leading corporations and ranked among the top three hyperloop teams globally. Their efforts contributed to the development of the world’s first and largest academic hyperloop ecosystem, featuring a 422-meter-long hyperloop tube, test track, and vacuum facility.`}
              txtStyle={"text-white/60 text-center md:text-left"}
            />

            <NormalText
              txt={`Building on this foundation of innovation, the founders transitioned into the field of drone and swarm technologies, launching commercial operations with a fleet of 60 drones. During this phase, they identified a critical gap in the global GNSS (Global Navigation Satellite System) infrastructure, particularly in terms of precision and security.`}
              txtStyle={"mt-3  text-white/60  text-center md:text-left"}
            />

            <NormalText
              txt={`In response, AeroDome is now developing India’s first and largest private Global PNT (Positioning, Navigation, and Timing) Satellite Constellation, designed to deliver highly accurate and secure PNT services worldwide. The company is backed by a high-caliber team of technologists, seasoned industry experts, and strategic advisors who guide its growth across both technological and business dimensions.`}
              txtStyle={"mt-3  text-white/60  text-center md:text-left"}
            />
            {/* <motion.div
              initial="hidden"
              variants={fadeIn}
              whileInView={"visible"}
              className="mt-5"
            >
              <Button txt={"Contact Us"} link={"/contact-us"} />
            </motion.div> */}
          </div>
        </div>
        {/* <div>
          <SubHeading
            txt={"SUPPORTED BY"}
            textCase={false}
            textColor={"white"}
            textStyle={"text-center md:text-left"}
          />
          <motion.div
            initial="hidden"
            variants={fadeIn}
            whileInView={"visible"}
            className="bg-white/90 flex rounded-lg p-3 mt-5 items-center justify-center mb-8"
          >
            <img
              src={backer1}
              alt="nsrcel logo"
              className="w-1/5 h-10 md:h-14 mx-auto bg-transparent"
            />
            <img
              src={backer2}
              className="w-1/5 h-10 md:h-14  mx-auto bg-transparent"
            />
            <img
              src={backer3}
              className="w-1/5 h-10 md:h-20  mx-auto bg-transparent"
            />
            <img
              src={backer4}
              className="w-1/5 h-10 md:h-14  mx-auto bg-transparent"
            />
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
