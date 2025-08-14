"use client";
import {
  LinkedinIcon,
  Mail,
  MailIcon,
  Send,
} from "lucide-react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("3d7215XYxRMlGM79J");
  }, []);

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
    const serviceID = "service_00d4lai";
    const templateID = "template_cwi85bb";
    const userID = "JmCADkU8kK2sGcuy_";

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

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "An error occurred while sending your message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

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

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Animated Background Stars - global behind content */}
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

      {/* Space gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-0"></div>


      {/* Hero Section */}
      <div id="hero-section" className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-20 text-white mt-[-16vh] md:mt-[-20vh]">
        <motion.div
          className="w-full max-w-4xl mx-auto items-center flex flex-col gap-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Main CTA Card */}
          <div className="w-full bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
              variants={slideUp}
            >
              Ready to Experience the Future of{" "}
              <br />
              <div className="h-4"></div>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Navigation?
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
              variants={slideUp}
            >
              Join the revolution in satellite navigation technology. Contact our team to learn how VNSS can transform your operations.
            </motion.p>

            <motion.button
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              variants={slideUp}
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 pb-16">

        {/* Main Content Section */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Information */}
            <motion.div
              className="space-y-8"
              variants={slideUp}
            >
              {/* Get In Touch Section */}
              <div className="bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] border border-[#FFFFFF1A] rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Get In Touch
                </h2>

                {/* Email Section */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center bg-white/5">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[18px] text-white mb-2">
                      Email
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="mailto:info@vyomic.space"
                        className="text-zinc-300 hover:text-blue-400 transition-colors flex items-center gap-2 text-[15px]"
                      >
                        <MailIcon className="w-4 h-4" />
                        info@vyomic.space
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Our Journey Section */}
              <div className="bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] border border-[#FFFFFF1A] rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Follow Our Journey
                </h3>
                <div className="space-y-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/vyomic"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with us on LinkedIn"
                    className="group flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center bg-white/5 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                      <LinkedinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-[15px] mb-1 group-hover:text-blue-400 transition-colors duration-300">Connect with us on LinkedIn</p>
                      <p className="text-zinc-400 text-[13px] group-hover:text-blue-300 transition-colors duration-300">Stay updated with our latest developments</p>
                    </div>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/VyomIC_Space"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on X (Twitter)"
                    className="group flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center bg-white/5 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-[15px] mb-1 group-hover:text-blue-400 transition-colors duration-300">Follow us on X</p>
                      <p className="text-zinc-400 text-[13px] group-hover:text-blue-300 transition-colors duration-300">Stay updated with our latest developments</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              id="contact-form"
              className="bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] border border-[#FFFFFF1A] rounded-2xl p-8 backdrop-blur-sm"
              variants={slideUp}
            >
              <h2 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 ${sent ? "bg-gradient-to-r from-green-600 to-emerald-600" : ""
                    }`}
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUs;


