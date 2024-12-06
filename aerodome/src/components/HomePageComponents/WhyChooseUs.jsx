import Heading from "../TextComponents/Heading";
import SubHeading from "../TextComponents/SubHeading";
import Options from "./Options";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
function WhyChooseUs() {
  return (
    <div className="w-full flex h-full">
      <div className="flex flex-col gap-2 w-2/3">
        <SubHeading txt={"Why Chose us?"} textColor={"blue"} textCase={true} />
        <Heading
          txt={"We fuse innovation and imagination to craft stories that soar!"}
        />
        <Options />
      </div>
      <div className="w-1/2 p-24 h-full">
        <div className="relative ">
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
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
