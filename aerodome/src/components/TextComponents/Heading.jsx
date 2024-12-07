import PropTypes from "prop-types";
import { motion } from "framer-motion";
function Heading({ txt, textStyle }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.h2
      initial="hidden"
      variants={fadeIn}
      whileInView={"visible"}
      className={`text-5xl font-bold text-white/90 ${textStyle} w-full`}
    >
      {txt}
    </motion.h2>
  );
}

Heading.propTypes = {
  txt: PropTypes.string.isRequired,
  textStyle: PropTypes.string,
};

export default Heading;
