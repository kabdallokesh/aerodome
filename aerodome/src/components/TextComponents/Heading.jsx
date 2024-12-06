import PropTypes from "prop-types";

function Heading({ txt }) {
  return <h2 className="text-5xl font-bold text-white/90">{txt}</h2>;
}

Heading.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Heading;
