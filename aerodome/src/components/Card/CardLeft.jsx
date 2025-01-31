import PropTypes from "prop-types";
const CardLeft = ({ imageSrc, title, description, number }) => {
  return (
    <div className="md:pt-4 pt-2">
      <div className="text-white p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 md:gap-16">
        {/* Number Badge for Mobile */}
        {/* <div className="flex md:hidden items-center justify-center bg-blue-500 text-white w-10 h-10 rounded-full">
          <span className="text-sm font-bold">{number}</span>
        </div> */}

        {/* Left Side - Number (Desktop View) */}
        {/* <div className="hidden md:flex items-center -rotate-12 justify-center bg-blue-500 p-3 pl-5 pr-5 rounded-full">
          <span className="text-white text-lg font-bold">{number}</span>
        </div> */}

        {/* Middle - Image */}
        <div className="flex-shrink-0 h-full w-1/4">
          <img
            src={imageSrc}
            alt={title}
            className="rounded-xl object-[0,-150px] object-cover h-40 w-full"
            style={{}}
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-justify">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-4">
            {title}
          </h3>
          <p className="text-white w-full md:w-[90%] leading-tight font-light text-[14px] md:text-[16px] mb-2">
            {number == 1 ? (
              <p className="flex flex-col gap-2">
                Crafted with advanced engineering and innovation, our
                self-developed drones are built for versatility and peak
                performance.
                <span>
                  The drones are equipped with state-of-the-art technology
                  designed to ensure reliability, precision, and efficiency,{" "}
                  <b className="font-extrabold">
                    even under the most challenging environmental conditions.
                  </b>
                </span>
                <br />
              </p>
            ) : (
              description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

CardLeft.propTypes = {
  number: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardLeft;
