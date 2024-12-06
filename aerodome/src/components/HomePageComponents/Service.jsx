import PropTypes from "prop-types";
import SubHeading from "../TextComponents/SubHeading";
import NormalText from "../TextComponents/NormalText";

function Service({ Headtxt, txt, img }) {
  return (
    <div className="text-left flex items-center">
      <div className="flex flex-col justify-end items-end">
        <SubHeading txt={Headtxt} textColor={"white"} />
        <NormalText txt={txt} txtStyle={"text-right"} />
      </div>
      <div>
        <img src={img} alt="service" />
      </div>
    </div>
  );
}

Service.propTypes = {
  Headtxt: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Service;
