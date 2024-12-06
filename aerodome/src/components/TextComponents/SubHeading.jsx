import PropTypes from "prop-types";

function SubHeading({ txt }) {
  return <h3>{txt}</h3>;
}

SubHeading.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default SubHeading;
