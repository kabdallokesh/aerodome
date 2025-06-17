"use client";
import {
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  Mail,
  Phone,
  MapPinHouse,
  MailIcon,
  PhoneCallIcon,
  MapPin,
} from "lucide-react";
import Heading from "../components/TextComponents/Heading";
import SubHeading from "../components/TextComponents/SubHeading";
import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import emailjs from "@emailjs/browser"; // Import EmailJS

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSending(true);

    // EmailJS configuration
    const serviceID = "service_u3d1pmg"; // Replace with your EmailJS service ID
    const templateID = "template_db1ejwh"; // Replace with your EmailJS template ID
    const userID = "3d7215XYxRMlGM79J"; // Replace with your EmailJS user ID

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || "N/A",
          message: formData.message,
        },
        userID
      );
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 2000);

      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   phone: "",
      //   message: "",
      // });
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "An error occurred while sending your message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  // Animation Variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
        <SubHeading
          txt={"contact us"}
          textStyle={"text-xl"}
          textColor={"blue"}
          textCase={true}
        />
        <Heading
          txt={"We’d love to hear from you"}
          textStyle={"mb-6 md:mb-0"}
        />
        {/* <p className="text-[14px] sm:text-[16px] text-zinc-400">
          Get in touch if you need any help or want to share feedback about
          Aerodome.
          <br />
          We respond back within a business day.
        </p> */}
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="min-h-auto text-white p-4 sm:p-8 bg-transparent w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto border-2 border-[#FFFFFF1A] rounded-3xl bg-[#FFFFFF0A] p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div
              className="space-y-6 sm:space-y-8 flex flex-col justify-center bg-transparent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {/* Email Section */}
              <div className="flex items-start gap-4 bg-transparent ">
                <Mail className="w-7 text-white rounded-full p-1 h-7 mt-1 bg-blue-500" />
                <div>
                  <h3 className="font-medium text-[18px] sm:text-[20px] mb-1">
                    Email
                  </h3>
                  <p className="text-white text-[14px] sm:text-[16px] flex flex-col gap-1">
                    <span className="flex gap-2 items-center">
                      <MailIcon className="w-4 h-4" />
                      info@aerodome.tech{" "}
                    </span>
                    <span className="flex gap-2 items-center">
                      <MailIcon className="w-4 h-4" />
                      vibhor@aerodome.tech
                    </span>
                  </p>
                </div>
              </div>

              {/* Contact Number Section */}
              <div className="flex items-start gap-4">
                <Phone className="w-7 text-white rounded-full p-1 h-7 mt-1 bg-blue-500" />
                <div>
                  <h3 className="font-medium text-[18px] sm:text-[20px] mb-1">
                    Contact Number
                  </h3>
                  <p className="text-white text-[14px] sm:text-[16px] flex gap-2 items-center">
                    <PhoneCallIcon className="w-4 h-4" /> +91 7358322001
                  </p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-start gap-4">
                <MapPinHouse className="w-8 text-white rounded-full p-1 h-8 mt-1 bg-blue-500" />
                <div>
                  <h3 className="font-medium text-[18px] sm:text-[20px] mb-1">
                    Address
                  </h3>
                  <p className="text-white text-[14px] sm:text-[16px] flex gap-2 ">
                    <MapPin className="w-6 md:w-4 h-4 mt-1 md:mt-2" />
                    1st Floor, SSN iFound, SSN College of Engineering,
                    <br />
                    Thiruporur, Kalavakkam, Chennai, Tamil Nadu 603110
                  </p>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <h3 className="text-[18px] sm:text-[20px] text-white font-semibold">
                  Connect with us:
                </h3>
                <div className="flex items-center gap-4">
                  {/* <a
                    href="https://www.instagram.com/aerodometechnologies/"
                    target="_blank"
                    aria-label="Instagram"
                    className="hover:text-blue-500 transition-colors flex items-center justify-center w-10 h-10 bg-[#ffffff0a] rounded-full"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a> */}
                  {/* <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-blue-500 transition-colors flex items-center justify-center w-10 h-10 bg-[#ffffff0a] rounded-full"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a> */}
                  {/* <a
                    href="http://www.youtube.com/@AeroDomeTechnologies"
                    target="_blank"
                    aria-label="YouTube"
                    className="hover:text-blue-500 transition-colors flex items-center justify-center w-10 h-10 bg-[#ffffff0a] rounded-full"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                  </a> */}
                  <a
                    href="https://www.linkedin.com/company/aerodome-technologies/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="hover:text-blue-500 transition-colors flex items-center justify-center w-10 h-10 bg-[#ffffff0a] rounded-full"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-zinc-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-zinc-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-zinc-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-zinc-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-zinc-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-blue-600 ${
                  sent === true && "disabled"
                } hover:bg-blue-500 text-white disabled:cursor-not-allowed font-medium py-3 rounded-lg transition-colors`}
              >
                {sent === true ? "Message Sent Successfully" : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;
