import PropTypes from "prop-types";

const CardRight = ({ number, imageSrc, title, description }) => {
  return (
    <div className="md:pt-4 pt-2">
      <div className="text-white p-6 rounded-lg flex flex-col md:flex-row-reverse items-center gap-6 md:gap-16 shadow-lg">
        {/* Number Badge for Mobile */}
        <div className="flex md:hidden items-center justify-center bg-blue-500 text-white w-10 h-10 rounded-full ">
          <span className="text-sm font-bold">{number}</span>
        </div>

        {/* Left Side - Number (Desktop View) */}
        <div className="hidden md:flex items-center rotate-12 justify-center bg-blue-500 p-3 pl-5 pr-5 rounded-full">
          <span className="text-white text-lg font-bold">{number}</span>
        </div>

        {/* Middle - Image */}
        <div className="flex-shrink-0">
          <img
            src={imageSrc}
            alt={title}
            className="rounded-[23px] shadow-lg"
            style={{
              boxShadow: "3px 5px 8px 8px rgba(255, 255, 255, 0.12)",
            }}
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right w-full">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">{title}</h3>
          <p className="text-white w-full md:w-[90%] leading-tight font-light text-[14px] md:text-[16px] mb-2">
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

CardRight.propTypes = {
  number: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardRight;
