function NormalText({ txt, txtStyle }) {
  return <p className={`text-white/80 ${txtStyle}`}>{txt}</p>;
}

import PropTypes from "prop-types";

NormalText.propTypes = {
  txt: PropTypes.string.isRequired,
  txtStyle: PropTypes.string,
};

export default NormalText;
