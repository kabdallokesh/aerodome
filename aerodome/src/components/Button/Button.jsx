

import PropTypes from 'prop-types';

function Button({txt,link}) {
  return (
    <a href={link}>
      {txt}
    </a>
  )
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button
