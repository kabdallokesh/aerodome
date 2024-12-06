
function NormalText({txt}) {
  return (
    <p className='text-white/80'>
      {txt}
    </p>
  )
}

import PropTypes from 'prop-types';

NormalText.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default NormalText;
