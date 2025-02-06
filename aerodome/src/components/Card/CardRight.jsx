import PropTypes from "prop-types";
import gnss from "../../assets/rtk image.webp"
import compass from "../../assets/compass-icon-13565.png"
const CardRight = ({  imageSrc, title, description }) => {
  return (
    <div className="md:pt-4 pt-2">
      <div className="text-white p-6 rounded-lg flex flex-col md:flex-row-reverse items-center gap-6 md:gap-16">
        <div className="flex-shrink-0 bg-black rounded-xl">
          <img
            src={imageSrc==='gnss'?gnss:compass}
            alt={title}
            className="rounded-xl object-contain h-40 aspect-video"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right w-full">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
            {title}
          </h3>
          <p className="text-white w-full md:w-[90%] font-light text-[14px] md:text-[16px] mb-2 gap-1 flex flex-col">
            {description.split("\n").map((line, index) => (
              <div key={index}>
                {line}
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

CardRight.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardRight;
