import PropTypes from 'prop-types';
import SubHeading from '../TextComponents/SubHeading';
import NormalText from '../TextComponents/NormalText';

function Service({Headtxt,txt,img}) {
  return (
    <div>
      <SubHeading txt={Headtxt} textColor={"white"} />
      <NormalText txt={txt} />
      <img src={img} alt="service" />
    </div>
  );
}

Service.propTypes = {
  Headtxt: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Service;
