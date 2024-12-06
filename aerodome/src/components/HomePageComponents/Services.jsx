import SubHeading from "../TextComponents/SubHeading";
import Heading from "../TextComponents/Heading";
import NormalText from "../TextComponents/NormalText";
import Button from "../Button/Button";
import Service from "./Service";
import droneImg from "../../assets/image 14.png";
function Services() {
  return (
    <div className="flex flex-col md:flex-row items-center ">
      <div className="w-1/3">
        <SubHeading txt={"Services"} textColor={"blue"} textCase={true} />
        <Heading txt={"Aerodome"} />
        <NormalText
          txt={
            "A spectacular display of LED-equipped drones transforming the night sky into a canvas of breathtaking visuals - think fireworks, but smarter, brighter, and way more fun!"
          }
        />

        <Button txt={"Get Quota"} link={""} />
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <img src={droneImg} alt="drone image" className="w-4/5" />/
      </div>
      <div className="w-1/3">
        <Service
          Headtxt="Highly Reliable Shows"
          txt="Through multiple safety layers, AeroDome’s system is completely fail-safe."
          img=""
        />
        <Service
          Headtxt="Dynamic Visualisation"
          txt="Integrating motion dynamics and 3D visualization for an immersive experience."
          img=""
        />
        <Service
          Headtxt="Precise Picturisation"
          txt="Cutting-Edge GNSS technology for real-life high-quality visualization."
          img=""
        />
      </div>
    </div>
  );
}

export default Services;
