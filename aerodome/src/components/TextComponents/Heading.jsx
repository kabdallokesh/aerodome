import PropTypes from "prop-types";

function Heading({ txt, textStyle }) {
  return (
    <h2 className={`text-5xl font-bold text-white/90 ${textStyle}`}>{txt}</h2>
  );
}

Heading.propTypes = {
  txt: PropTypes.string.isRequired,
  textStyle: PropTypes.string,
};

export default Heading;
