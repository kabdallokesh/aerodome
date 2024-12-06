

import PropTypes from 'prop-types';

function Button({txt}) {
  return (
    <div>
      {txt}
    </div>
  )
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Button
