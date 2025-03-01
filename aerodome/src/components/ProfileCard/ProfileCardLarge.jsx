import { Linkedin } from "lucide-react";
import PropTypes from "prop-types";
const ProfileCardLarge = ({ name, role, image, linkedin }) => {
  return (
    <div className="relative group flex justify-center items-center">
      <div className="bg-[##FFFFFF0A] abolute border-2  border-[#FFFFFF1A] text-white p-4 rounded-[29px] w-[17rem] h-[38vh] flex flex-col justify-around items-center space-y-2  transition duration-300 ease-in-out">
        <div className="relative">
          <img
            src={image}
            className="w-[8.5rem] h-[8.5rem] mb-4 rounded-full bg-gray-300 border-2 border-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-105 "
          ></img>
        </div>
        <div className="text-center group-hover:blur-sm">
          <h2 className="text-[18px] font-medium group-hover:text-blue-400">
            {name}
          </h2>
          <p className="text-[16px] text-gray-400">{role}</p>
        </div>
      </div>
      {/* Icons container */}
      <div className="flex opacity-0 space-x-4 absolute bottom-0 items-center justify-center   border-[#FFFFFF1A] text-white p-4  rounded-b-[29px] h-[10vh] w-full bg-blue-500/20  z-50 grp group-hover:opacity-100 transition-opacity duration-300">
        <a href={linkedin} className="text-white hover:text-blue-400">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

ProfileCardLarge.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default ProfileCardLarge;
