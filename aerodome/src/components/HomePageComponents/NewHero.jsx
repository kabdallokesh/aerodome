import { motion } from "framer-motion";

function HeroSection() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white pt-20 md:pt-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* LEFT */}
          <motion.div
            className="flex-1 text-left"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={slideUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl mt-0 md:mt-10"
            >
              INDIA's First & Largest Private
              <br />
              <div className="h-1 md:h-2 lg:h-3"></div>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Global PNT Satellite
              </span>{" "}
              <br />
              <div className="h-1 md:h-2 lg:h-3"></div>
              Constellation
            </motion.h1>

            <motion.div
              variants={slideUpVariant}
              className="mt-6 md:mt-10 inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 border border-orange-400/50 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-400 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 md:w-3 md:h-3 bg-orange-400 rounded-full animate-ping" />
              </div>
              <span className="text-lg md:text-2xl lg:text-3xl font-semibold text-orange-200 tracking-wide">
                Coming Soon...
              </span>
            </motion.div>

            {/* PNT Words - Bottom Center */}
            <motion.div
              variants={slideUpVariant}
              className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-0 right-0 flex justify-center items-center px-4 z-20"
            >
              <div className="flex items-center gap-2 md:gap-4 lg:gap-6 flex-wrap justify-center">
                <span className="text-white/80 font-medium text-base md:text-lg lg:text-xl">Positioning</span>
                <span className="text-white/60 text-base md:text-lg lg:text-xl">•</span>
                <span className="text-white/80 font-medium text-base md:text-lg lg:text-xl">Navigation</span>
                <span className="text-white/60 text-base md:text-lg lg:text-xl">•</span>
                <span className="text-white/80 font-medium text-base md:text-lg lg:text-xl">Timing</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Clean Video Only */}
          <motion.div
            className="relative flex-1 w-full max-w-5xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="relative w-full aspect-square mx-auto bg-transparent">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-full"
              >
                <source src="/earth_rotate.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
