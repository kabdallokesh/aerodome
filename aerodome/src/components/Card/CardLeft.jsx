import PropTypes from "prop-types";
const CardLeft = ({ imageSrc, title, description, number }) => {
  return (
    <div className="md:pt-4 pt-2">
      <div className="text-white p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 md:gap-16">
         <div className="flex-shrink-0 bg-white rounded-xl">
          <img
            src={imageSrc}
            alt={title}
            className="rounded-xl object-cover object-[0,-140px] h-40 aspect-video"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-justify">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-4">
            {title}
          </h3>
          <p className="text-white w-full md:w-[90%] font-light text-[14px] md:text-[16px] mb-2 gap-1 flex flex-col">
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
