'use client'
import { InstagramIcon, TwitterIcon, YoutubeIcon, LinkedinIcon, Mail, Phone, MapPinHouse } from "lucide-react";
import Heading from "../components/TextComponents/Heading";
import SubHeading from "../components/TextComponents/SubHeading";
import { useState } from "react";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

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
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ success: false, message: "Failed to send message." });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        success: false,
        message: error.response?.data?.errors?.[0]?.message || "An error occurred. Please try again.",
      });
    }
  };
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-20 pt-10 items-center flex flex-col">
      {/* Header Section */}
      <div className="w-full md:w-2/3 lg:w-[70%] items-center flex flex-col gap-4 text-center">
        <SubHeading txt={"contact us"} textColor={"blue"} textCase={true} />
        <Heading txt={"We’d love to hear from you"} />
        <p className="text-[14px] sm:text-[16px] text-zinc-400">
          Get in touch if you need any help or want to share feedback about Aerodome.
          <br />
          We respond back within a business day.
        </p>
      </div>

      {/* Content Section */}
      <div className="min-h-auto text-white p-4 sm:p-8 bg-transparent w-full">
        <div className="max-w-6xl mx-auto border-2 border-[#FFFFFF1A] rounded-3xl bg-[#FFFFFF0A] p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
              {/* Email Section */}
              <div className="flex items-start gap-4">
                <Mail className="w-7 text-white rounded-full p-1 h-7 mt-1 bg-blue-500" />
                <div>
                  <h3 className="font-medium text-[18px] sm:text-[20px] mb-1">Email</h3>
                  <p className="text-white text-[14px] sm:text-[16px]">
                    info@aerodome.tech <br />
                    vibhor@aerodome.tech
                  </p>
                </div>
              </div>

              {/* Contact Number Section */}
              <div className="flex items-start gap-4">
                <Phone className="w-7 text-white rounded-full p-1 h-7 mt-1 bg-blue-500" />
                <div>
                  <h3 className="font-medium text-[18px] sm:text-[20px] mb-1">Contact Number</h3>
                  <p className="text-white text-[14px] sm:text-[16px]">+91 9166836673</p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-start gap-4">
                <MapPinHouse className="w-7 text-white rounded-full p-1 h-7 mt-1 bg-blue-500" />
                <div>
                  <h3 className="font-medium text-[18px] sm:text-[20px] mb-1">Address</h3>
                  <p className="text-white text-[14px] sm:text-[16px]">
                    1st Floor, SSN iFound, SSN College of Engineering,
                    <br />
                    Thiruporur, Kalavakkam, Chennai, Tamil Nadu 603110
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-[18px] sm:text-[20px] mb-4 text-white font-semibold">Connect with us on social channels</h3>
                <div className="flex gap-4">
                  <a href="#" aria-label="Instagram" className="hover:text-blue-500 transition-colors">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Twitter" className="hover:text-blue-500 transition-colors">
                    <TwitterIcon className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="YouTube" className="hover:text-blue-500 transition-colors">
                    <YoutubeIcon className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition-colors">
                    <LinkedinIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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
      </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
