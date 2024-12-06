import PropTypes from "prop-types";
import SubHeading from "../TextComponents/SubHeading";
import NormalText from "../TextComponents/NormalText";

function Service({ Headtxt, txt, img, style }) {
  return (
    <div className={`text-left flex items-center gap-3 ${style}`}>
      <div className="flex flex-col justify-end items-end">
        <SubHeading txt={Headtxt} textColor={"white"} />
        <NormalText txt={txt} txtStyle={"text-right w-[90%]"} />
      </div>
      <div className="flex justify-center items-center bg-blue-600 rounded-full h-10 w-12">
        <img src={img} alt="service" className="m-5 h-5 w-6 bg-blue-600" />
      </div>
    </div>
  );
}

Service.propTypes = {
  Headtxt: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Service;
