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
  const cardsData = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Explore The World",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Wild Forest",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      title: "Sunny Beach",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      title: "City on Winter",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Mountains - Clouds",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row rounded-3xl bg-gray-300/5 px-5 py-10 md:py-16 md:px-20">
        <div className="w-full md:w-1/2 bg-transparent flex flex-col items-center md:items-start">
          <SubHeading
            txt={"ABOUT US"}
            textCase={true}
            textColor={"blue"}
            textStyle={""}
          />
          <Heading
            txt={"How it Started"}
            textStyle={"text-center md:text-left"}
          />
          <ExpandingCard data={cardsData} />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <NormalText
            txt={
              "AeroDome, founded in 2023 by three IIT Madras alumni, emerged from their core involvement with Avishkar Hyperloop—a student team that secured $1.25M funding from the Railway Ministry and corporates and ranked among the global top three in hyperloop development. "
            }
            txtStyle={"text-white/60 text-center md:text-left"}
          />
          <NormalText
            txt={
              "Based in Chennai, we are an NSRCEL, IIM Bangalore-incubated startup, supported by top incubators like Deshpande Startups and VELTECH TBI, with guidance from industry experts and mentors."
            }
            txtStyle={"mt-3  text-white/60  text-center md:text-left"}
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
          <motion.div
            initial="hidden"
            variants={fadeIn}
            whileInView={"visible"}
          >
            <Button txt={"Contact Us"} link={"/contact-us"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
