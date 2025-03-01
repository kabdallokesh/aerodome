import SubHeading from "../TextComponents/SubHeading";
import Heading from "../TextComponents/Heading";
import NormalText from "../TextComponents/NormalText";
import Service from "./Service";
import S1 from "../../assets/assured.png";
import S2 from "../../assets/dynamic.png";
import S3 from "../../assets/precision.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import InfiniteImageGallery from "./../ImageGallery/ImageGallery";
function Services() {
  const history = useNavigate();
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div
        id="service"
        className="flex flex-col md:flex-row items-center w-full"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start">
          <SubHeading txt={"Services"} textColor={"blue"} textCase={true} />
          <Heading
            txt={"Drone Light Shows"}
            textStyle={"text-center md:text-left"}
          />
          <NormalText
            txt={
              "A spectacular display of LED-equipped drones transforming the night sky into a canvas of breathtaking visuals - think fireworks, but smarter, brighter, and way more fun!"
            }
            txtStyle={"text-white/60 text-center md:text-left"}
          />

          <motion.div
            initial="hidden"
            variants={fadeIn}
            whileInView={"visible"}
            className="mt-5 mb-8 md:mb-0"
          >
            <button
              onClick={() => {
                history("/contact-us");
              }}
              type="button"
              className="btn"
            >
              <strong className="text-[0.9rem] md:text-xl">
                Get Quotations
              </strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
            {/* <Button txt={"Get Quotations"} link={"/contact-us"} /> */}
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center  mb-8 md:mb-0">
          {/* <img
          src={
            "https://res.cloudinary.com/dwtytn7fl/image/upload/v1738161885/aerodome/hcknebinpabypybkvvu0.jpg"
          }
          alt="drone image"
          className="w-4/5 rounded-3xl opacity-80"
        /> */}
          <video
            autoPlay
            loop
            muted
            className="md:w-3/5 rounded-3xl"
            src="https://res.cloudinary.com/dwtytn7fl/video/upload/v1740865075/ROCKET_video_pcrjy7.mp4"
          ></video>
        </div>
      </div>
      <div className="w-full flex items-center flex-wrap md:gap-5 gap-y-8">
        <Service
          Headtxt="Highly Reliable Shows"
          txt="Through multiple safety layers, AeroDome’s system is completely fail-safe."
          img={S1}
          style={"md:md:w-[48%]"}
          // orderOne={"order-2 md:order-1"}
          // orderTwo={"order-1 md:order-2"}
        />
        <Service
          Headtxt="Dynamic Visualisation"
          txt="Integrating motion dynamics and 3D visualization for an immersive experience."
          img={S2}
          style={"md:w-[48%]"}
          // orderOne={"order-2 md:order-1"}
          // orderTwo={"order-1 md:order-2"}
        />
        <Service
          Headtxt="Precise Picturisation"
          txt="Cutting-Edge GNSS technology for real-life high-quality visualization."
          img={S3}
          style={"md:w-[48%]"}
          // orderOne={"order-2 md:order-1"}
          // orderTwo={"order-1 md:order-2"}
        />
        <Service
          Headtxt="Customer-Centric Approach"
          txt="customer-centric"
          img={""}
          style={"md:w-[48%]"}
          // orderOne={"order-2 md:order-1"}
          // orderTwo={"order-1 md:order-2"}
        />
      </div>
    </>
  );
}

export default Services;
