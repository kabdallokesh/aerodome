import Heading from "../TextComponents/Heading";
import SubHeading from "../TextComponents/SubHeading";
import img1 from "../../assets/image3.png";
import img2 from "../../assets/image3.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image3.png";
import img5 from "../../assets/image3.png";
import img6 from "../../assets/image3.png";
import img7 from "../../assets/image3.png";
import NormalText from "../TextComponents/NormalText";
import Button from "../Button/Button";
function Technology() {
  return (
    <div>
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
      <div className="flex flex-col overflow-hidden gap-5 mt-8 h-full">
        <div className="flex gap-10 md:-ml-24">
          <img src={img3} alt="" className="w-1/4 h-56 rounded-lg" />
          <img src={img2} alt="" className="w-1/4 h-56 rounded-lg" />
          <img src={img4} alt="" className="w-1/4 h-56 rounded-lg" />
          <img src={img1} alt="" className="w-1/4 h-56 rounded-lg" />
        </div>
        <div className="flex gap-10 -ml-72 h-full">
          <img src={img5} alt="" className="w-1/4 h-56 rounded-lg" />
          <img src={img6} alt="" className="w-1/4 h-56 rounded-lg" />
          <img src={img7} alt="" className="w-1/4 h-56 rounded-lg" />
          <div className="w-1/4 rounded-lg h-56 bg-white/90 p-10 flex flex-col gap-5">
            <NormalText
              txt={
                "We use state-of-the-art drone technology and modules to create seamless, high-performance solutions."
              }
              txtStyle={"text-black/90"}
            />
            <Button txt="More Details" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
