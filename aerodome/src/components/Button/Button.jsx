import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ txt, link }) {
  return (
    <Link
      className="text-white/90 bg-blue-600 p-2 px-5 text-lg text-center font-semibold rounded-3xl"
      to={link}
    >
      {txt}
    </Link>
  );
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
