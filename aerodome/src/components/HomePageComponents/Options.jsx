import { Plus, Minus } from "lucide-react";
import { useState } from "react";

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

  return (
    <div className="w-4/5">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`rounded-lg  ${
            openSection === index ? "bg-blue-600 " : ""
          }`}
        >
          <button
            onClick={() => toggleSection(index)}
            className="flex items-center w-full p-4  text-left gap-3"
          >
            {openSection === index ? (
              <Minus className="h-5 w-5 text-white bg-transparent" />
            ) : (
              <Plus className="h-5 w-5 text-white bg-transparent" />
            )}
            <span
              className={`font-medium bg-transparent text-xl ${
                openSection === index ? "text-white" : "text-white"
              }`}
            >
              {section.title}
            </span>
          </button>
          {openSection === index && (
            <div className="px-4 pb-4 text-md rounded-br-lg rounded-bl-lg text-white bg-blue-600 ">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
