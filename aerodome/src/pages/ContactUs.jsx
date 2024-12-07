"use client";
import {
  InstagramIcon,
  TwitterIcon,
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
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.sendgrid.com/v3/mail/send",
        {
          personalizations: [
            {
              to: [{ email: "your-email@example.com" }], // Replace with your recipient email
              subject: `New Contact Us Message from ${formData.firstName} ${formData.lastName}`,
            },
          ],
          from: {
            email: "your-sendgrid-verified-email@example.com", // Replace with your SendGrid verified email
          },
          content: [
            {
              type: "text/html",
              value: `
                <div>
                  <h2>New Contact Request</h2>
                  <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                  <p><strong>Email:</strong> ${formData.email}</p>
                  <p><strong>Phone:</strong> ${formData.phone}</p>
                  <p><strong>Message:</strong> ${formData.message}</p>
                </div>
              `,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 202) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
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
        <SubHeading txt={"contact us"} textColor={"blue"} textCase={true} />
        <Heading txt={"We’d love to hear from you"} />
        <p className="text-[14px] sm:text-[16px] text-zinc-400">
          Get in touch if you need any help or want to share feedback about
          Aerodome.
          <br />
          We respond back within a business day.
        </p>
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
                    <PhoneCallIcon className="w-4 h-4" /> +91 9166836673
                  </p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-start gap-4">
                <MapPinHouse className="w-7 text-white rounded-full p-1 h-7 mt-1 bg-blue-500" />
                <div>
                  <h3 className="font-medium text-[18px] sm:text-[20px] mb-1">
                    Address
                  </h3>
                  <p className="text-white text-[14px] sm:text-[16px] flex gap-2 items-center">
                    <MapPin className="w-4 h-4" />
                    1st Floor, SSN iFound, SSN College of Engineering,
                    <br />
                    Thiruporur, Kalavakkam, Chennai, Tamil Nadu 603110
                  </p>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <h3 className="text-[18px] sm:text-[20px] text-white font-semibold">
                  Connect with us:
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-blue-500 transition-colors flex items-center justify-center w-10 h-10 bg-[#ffffff0a] rounded-full"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-blue-500 transition-colors flex items-center justify-center w-10 h-10 bg-[#ffffff0a] rounded-full"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="hover:text-blue-500 transition-colors flex items-center justify-center w-10 h-10 bg-[#ffffff0a] rounded-full"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;
