import { motion } from "framer-motion";
import PropTypes from "prop-types";
function NormalText({ txt, txtStyle }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.p
      initial="hidden"
      variants={fadeIn}
      whileInView="visible"
      className={txtStyle}
      style={{ textAlign: "justify" }}
      dangerouslySetInnerHTML={{ __html: txt }}
    />
  );
}

NormalText.propTypes = {
  txt: PropTypes.string.isRequired,
  txtStyle: PropTypes.string,
};

export default NormalText;
