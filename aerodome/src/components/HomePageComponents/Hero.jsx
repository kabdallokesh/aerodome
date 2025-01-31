import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar-home";

function HeroSection() {
  // Framer Motion Animation Variants
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-full h-[100vh] mb-16 bg-black">
      {/* <Navbar /> */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="hero-img.png" // Replace with the actual image URL
          alt="Drone"
          className="w-full h-full object-cover"
        />
        {/* <video
          alt="Drone"
          className="w-full h-full object-cover aspect-video"
          src="https://res.cloudinary.com/dwtytn7fl/video/upload/v1738161982/aerodome/bufo08m4kwfph11hdq57.mov"
        ></video> */}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 -top-48"
          style={{
            backgroundImage: "url('grid.png')", // Replace with the actual grid image path
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-[20vh] md:pb-[14vh] items-center text-white px-6">
        <motion.div
          className="text-center flex justify-center items-center gap-6"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight md:mr-36 lg:mr-52"
            variants={childVariant}
          >
            Crafting Stories
          </motion.h1>
          {/* CTA */}
          {/* <motion.a
            href="#service"
            className="text-sm md:text-lg mt-4 underline font-medium"
            variants={childVariant}
          >
            CHECK OUT OUR SERVICE
          </motion.a> */}
        </motion.div>

        <motion.div
          className="text-center flex justify-center items-center gap-6"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Scroll Down Text */}
          {/* <motion.a
            href="#"
            className="text-sm md:text-lg mt-4 text-right leading-tight font-medium"
            variants={childVariant}
          >
            SCROLL DOWN <br /> TO CHECK MORE
          </motion.a> */}
          {/* Subheading */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl leading-tight font-bold md:ml-72 lg:ml-96"
            variants={childVariant}
          >
            In The Sky
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
