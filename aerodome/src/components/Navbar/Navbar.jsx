"use client";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import PropTypes from "prop-types";

function HamburgerIcon({ open, onClick }) {
  return (
    <button
      className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[102]"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <span
        className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
      ></span>
      <span
        className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 my-1 ${open ? "opacity-0" : ""}`}
      ></span>
      <span
        className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
      ></span>
    </button>
  );
}

HamburgerIcon.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector("#hero-section")?.offsetHeight || 0;
      if (window.scrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={`w-full h-[8vh] md:h-[12vh] flex justify-center z-[100] sticky top-0 items-center transition-colors duration-300 ${isScrolled ? "bg-[#0F0F0F]" : "bg-transparent"
        }`}
    >
      <div className="h-[6vh] md:h-[10vh] flex items-center font-bold justify-between px-4 w-[95%] md:w-[92%]">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="MobileLogo.png"
            className="w-16 flex md:hidden"
            alt="logo"
          />
          <img
            src="logo.png"
            className="w-[70%] md:w-[50%] hidden md:flex"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center z-30 gap-6 text-white/90">
          <div className="text-[16px] flex gap-6">
            <Link
              to="/"
              className={`cursor-pointer ${currentPage === "/" && "text-[#2563EB]"
                }`}
            >
              Home
            </Link>
            {/* <Link
              to="/technology"
              className={`cursor-pointer ${
                currentPage === "/technology" && "text-[#2563EB]"
              }`}
            >
              Technology
            </Link> */}
            {/* <Link
              to="/portfolio"
              className={`cursor-pointer ${
                currentPage === "/portfolio" && "text-[#2563EB]"
              }`}
            >
              Portfolio
            </Link> */}
            <Link
              to="/team"
              className={`cursor-pointer ${currentPage === "/team" && "text-[#2563EB]"
                }`}
            >
              Team
            </Link>
            {/* <Link
              to="/contact-us"
              className={`cursor-pointer ${
                currentPage === "/contact-us" && "text-[#2563EB]"
              }`}
            >
              Contact
            </Link> */}
          </div>
          {/* <Button txt=" Contact Us" link="/contact-us" /> */}
          {/* <Sun className="cursor-pointer" /> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden z-[102]">
          <HamburgerIcon open={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((v) => !v)} />
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-[101] transition-opacity duration-300" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#0F0F0F] z-[102] text-white flex flex-col px-8 gap-6 py-6 shadow-2xl transition-transform duration-300 ease-in-out sm:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ boxShadow: isMobileMenuOpen ? "-4px 0 32px 0 rgba(0,0,0,0.4)" : "none" }}
      >
        <button
          className="absolute top-2 right-2 text-white rounded-full p-2 bg-[#222] hover:bg-[#2563EB] transition-colors duration-200 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <div className="mt-8">
          <Link
            to="/"
            className={`cursor-pointer text-[18px] block py-2 ${currentPage === "/" && "text-[#2563EB]"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/team"
            className={`cursor-pointer text-[18px] block py-2 ${currentPage === "/team" && "text-[#2563EB]"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
