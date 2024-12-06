import PropTypes from "prop-types";

function SubHeading({ txt, textColor, textCase, textStyle }) {
  return (
    <h3
      className={`font-bold text-lg ${
        textColor == "blue" ? "text-blue-600" : "text-white/90"
      } ${textStyle}`}
    >
      {textCase ? txt.toUpperCase() : txt}
    </h3>
  );
}

SubHeading.propTypes = {
  txt: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textCase: PropTypes.bool,
  textStyle: PropTypes.string,
};

export default SubHeading;
