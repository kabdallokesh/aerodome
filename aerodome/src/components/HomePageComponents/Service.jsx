import PropTypes from "prop-types";
import SubHeading from "../TextComponents/SubHeading";
import NormalText from "../TextComponents/NormalText";
import { motion } from "framer-motion";
function Service({ Headtxt, txt, img, style, orderOne, orderTwo }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className={`text-left flex items-center gap-3 ${style}`}>
      <div className={`flex flex-col justify-end md:items-end ${orderOne}`}>
        <SubHeading txt={Headtxt} textColor={"white"} />
        <NormalText
          txt={txt}
          txtStyle={"md:text-right md:w-[90%] text-white/60"}
        />
      </div>
      <motion.div
        initial="hidden"
        variants={fadeIn}
        whileInView={"visible"}
        className={`flex justify-center items-center bg-blue-600 rounded-full h-10 w-12 ${orderTwo}`}
      >
        <img src={img} alt="service" className="m-5 h-5 w-6 bg-blue-600" />
      </motion.div>
    </div>
  );
}

Service.propTypes = {
  Headtxt: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  orderOne: PropTypes.string.isRequired,
  orderTwo: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Service;
