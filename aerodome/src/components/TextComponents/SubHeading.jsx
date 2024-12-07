import PropTypes from "prop-types";
import { motion } from "framer-motion";
function SubHeading({ txt, textColor, textCase, textStyle }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.h3
      initial="hidden"
      variants={fadeIn}
      whileInView={"visible"}
      className={`font-bold text-lg ${
        textColor == "blue" ? "text-blue-600" : "text-white/90"
      } ${textStyle}`}
    >
      {textCase ? txt.toUpperCase() : txt}
    </motion.h3>
  );
}

SubHeading.propTypes = {
  txt: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textCase: PropTypes.bool,
  textStyle: PropTypes.string,
};

export default SubHeading;
