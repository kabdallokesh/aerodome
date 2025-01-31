import ProfileCardLarge from "../components/ProfileCard/ProfileCardLarge";
// import ProfileCardSmall from "../components/ProfileCard/ProfileCardSmall";
import Heading from "../components/TextComponents/Heading";
import SubHeading from "../components/TextComponents/SubHeading";
import { motion } from "framer-motion";

function Team() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-20 pt-10 items-center flex flex-col">
      {/* Header Section */}
      <motion.div
        className="w-full md:w-2/3 lg:w-[70%] items-center flex flex-col gap-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <SubHeading txt={"Our"} textColor={"blue"} textCase={true} />
        <Heading
          txt={"Team"}
          textStyle={"mb-6 md:mb-0"}
        />
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="p-6 sm:p-8 lg:p-12 w-full"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="flex flex-wrap gap-6 justify-center items-end">
          <motion.div variants={childVariant}>
            <ProfileCardLarge
              name="Lokesh Kabdal"
              role="Co-Founder and CEO"
              image="team-lokesh.jpg"
              linkedin="https://www.linkedin.com/in/lokesh-kabdal"
            />
          </motion.div>

          <motion.div variants={childVariant}>
            <ProfileCardLarge
              name="Vibhor Jain"
              role="Co-Founder and CBO"
              image="team-vibhor.jpg"
              linkedin="https://www.linkedin.com/in/vibhor-jain3"
            />
          </motion.div>

          <motion.div variants={childVariant}>
            <ProfileCardLarge
              name="Anurag Patil"
              role="Co-Founder and CTO"
              image="team-anurag.jpg"
              linkedin="https://www.linkedin.com/in/anurag-jeevan-patil"
            />
          </motion.div>

          <motion.div variants={childVariant}>
            <ProfileCardLarge
              name="Dr. Satyanarayanan Chakravarthy"
              role="Advisor"
              image="team-satya.jpg"
              linkedin="https://www.linkedin.com/in/satya-chakravarthy-51326241"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Team;
