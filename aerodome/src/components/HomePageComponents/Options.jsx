import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Options() {
  const [openSection, setOpenSection] = useState(1);

  const sections = [
    {
      title: "Global Impact",
      content:
        "Making a lasting difference in communities worldwide through innovative solutions and sustainable practices.",
    },
    {
      title: "Cutting-Edge Research",
      content:
        "Leveraging the latest advancements in technology and research to stay ahead.",
    },
    {
      title: "Customer-Centric Approach",
      content:
        "Putting our customers first with tailored solutions and exceptional service delivery.",
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-3 md:mt-0 md:w-4/5 space-y-2">
      {sections.map((section, index) => (
        <motion.div
          initial="hidden"
          variants={fadeIn}
          whileInView={"visible"}
          key={index}
          className={`rounded-lg overflow-hidden transition-all duration-1000 ${
            openSection === index ? "bg-blue-600" : "bg-transparent"
          }`}
        >
          <button
            onClick={() => toggleSection(index)}
            className="flex items-center w-full p-4 text-left gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
            aria-expanded={openSection === index}
            aria-controls={`section-${index}`}
          >
            <div className="transition-transform duration-500 ease-in-out bg-transparent">
              {openSection === index ? (
                <Minus className="h-5 w-5 text-white bg-transparent" />
              ) : (
                <Plus className="h-5 w-5 text-white bg-transparent" />
              )}
            </div>
            <span className="font-medium text-xl text-white bg-transparent">
              {section.title}
            </span>
          </button>
          <div
            id={`section-${index}`}
            className={`overflow-hidden transition-all duration-1000  ease-in-out ${
              openSection === index ? "max-h-40 " : "max-h-0"
            }`}
          >
            <div
              className={`px-4 pb-4 text-md text-white transition-all duration-1000 bg-blue-600 ${
                openSection === index ? "" : "bg-transparent text-transparent"
              }`}
            >
              {section.content}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
