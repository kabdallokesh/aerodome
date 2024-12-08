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
              txt={
                "AeroDome was founded in 2023 by three alumni from the Indian Institute of Technology Madras. They previously worked together as part of the core team of Avishkar Hyperloop, a student competition team at IIT Madras, and received $1.25M in funding for Avishkar from the Railway Ministry & other corporates. They were among the top three teams globally for hyperloop development."
              }
              txtStyle={"text-white/60 text-center md:text-left"}
            />
            <NormalText
              txt={
                "We are an NSRCEL, IIM Bangalore incubated startup, based in Chennai and supported by various top incubators of the country including Deshpande Startups, SSN iFound, and VELTECH TBI. Our team consists of brilliant individuals from diverse backgrounds along with seasoned industry experts and top mentors from the startup ecosystem in India who advise us on both the technology and business front."
              }
              txtStyle={"mt-3  text-white/60  text-center md:text-left"}
            />
            <motion.div
              initial="hidden"
              variants={fadeIn}
              whileInView={"visible"}
              className="mt-5"
            >
              <Button txt={"Contact Us"} link={"/contact-us"} />
            </motion.div>
          </div>
        </div>
        <div>
          <SubHeading
            txt={"BACKERS"}
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
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
