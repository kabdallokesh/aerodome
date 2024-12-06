import PropTypes from "prop-types";

function Heading({ txt }) {
  return <h2>{txt}</h2>;
}

Heading.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Heading;
