
function NormalText({txt}) {
  return (
    <p>
      {txt}
    </p>
  )
}

import PropTypes from 'prop-types';

NormalText.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default NormalText;
