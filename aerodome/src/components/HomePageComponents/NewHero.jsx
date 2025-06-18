import { motion } from "framer-motion";
import EarthVideo from "./EarthVideo";

// Reusable component to render one group of satellites
function SatelliteOrbit({ satellites, rotate, offset, className }) {
  return (
    <div className={`absolute ${className || ""}`} style={{ ...offset }}>
      {satellites.map((satellite, idx) => {
        const angle = (360 / satellites.length) * satellite.id; // Sequential angle

        return (
          <motion.div
            key={`${rotate}-${satellite.id}`}
            className="absolute"
            initial={{ rotate: angle }}
            animate={{ rotate: angle + rotate }}
            transition={{
              duration: satellite.duration,
              repeat: Infinity,
              ease: "linear",
              delay: 0, // all start at once
            }}
          >
            <motion.div
              className="relative"
              style={{
                width: `${220 + satellite.id * 30}px`,
                height: `${220 + satellite.id * 30}px`,
                marginLeft: `-${110 + satellite.id * 15}px`,
                marginTop: `-${110 + satellite.id * 15}px`,
              }}
            >
              <motion.img
                src="/sat_img.png"
                alt="Satellite"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: satellite.size * 8,
                  height: satellite.size * 8,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <div
                className="absolute inset-0 border border-blue-400/20 rounded-full"
                style={{
                  animation: `pulse ${satellite.duration}s infinite`,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

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

  const satellites = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 20 + i * 2,
    size: Math.random() * 3 + 2,
  }));

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-slate-900 via-black-900 to-black overflow-hidden font-sans">
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
              India's First & Largest Private
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Global PNT Satellite
              </span>{" "}
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
          </motion.div>

          {/* RIGHT: Earth + Satellite Orbits */}
          <motion.div
            className="relative flex-1 w-full max-w-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="relative w-full aspect-square mx-auto">
              {/* Satellite Orbits with Different Offsets */}
              {/* Satellite Orbits with Different Offsets and Alternating Z-index */}
              <SatelliteOrbit
                satellites={satellites}
                rotate={360}
                offset={{ left: "15%", top: "15%" }} // Top-left
                className="z-0"
              />
              <SatelliteOrbit
                satellites={satellites}
                rotate={-360}
                offset={{ left: "45%", top: "15%" }} // Top-right
                className="z-20"
              />
              <SatelliteOrbit
                satellites={satellites}
                rotate={360}
                offset={{ left: "15%", top: "45%" }} // Bottom-left
                className="z-20"
              />
              <SatelliteOrbit
                satellites={satellites}
                rotate={-360}
                offset={{ left: "45%", top: "45%" }} // Bottom-right
                className="z-0"
              />

              {/* Earth */}
              {/* <img
                src="/cropped_circle_image.png"
                alt="Earth"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-[0_0_120px_rgba(0,0,0,0.8)]"
              /> */}
              <EarthVideo />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroSection;
