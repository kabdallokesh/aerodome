"use client";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
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
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      // More responsive scroll detection - trigger earlier for better UX
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Force initial state to transparent and ensure it stays transparent
    setIsScrolled(false);

    // Immediately set transparent state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      className={`w-full h-[8vh] md:h-[12vh] flex justify-center z-[100] sticky top-0 items-center transition-all duration-500 bg-transparent`}
      style={{
        backgroundColor: 'transparent !important',
        backdropFilter: isScrolled ? 'blur(1px)' : 'none',
        borderBottom: 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        background: 'none !important',
        backgroundImage: 'none !important'
      }}
    >
      <div className="h-[6vh] md:h-[10vh] flex items-center font-bold justify-between px-4 w-[95%] md:w-[92%]">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/MobileLogo.png"
            className="w-16 flex md:hidden"
            alt="logo"
          />
          <img
            src="/logo.png"
            className="w-[70%] md:w-[30%] hidden md:flex"
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

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 ${(currentPage === "/products" || currentPage.startsWith("/products/")) && "text-[#2563EB]"
                  }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div
                  className="absolute top-full left-[-8px] mt-0 w-40 z-50"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <div className="py-2">
                    <Link
                      to="/products/vnss"
                      className="flex items-center gap-3 px-3 py-3 text-white hover:bg-white/10 transition-all duration-200 group rounded-lg"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      {/* Simple Satellite Icon */}
                      <div className="w-5 h-5 text-blue-400">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                        </svg>
                      </div>

                      <span className="font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                        VNSS
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/team"
              className={`cursor-pointer ${currentPage === "/team" && "text-[#2563EB]"
                }`}
            >
              Team
            </Link>
            <Link
              to="/contact-us"
              className={`cursor-pointer ${currentPage === "/contact-us" && "text-[#2563EB]"
                }`}
            >
              Contact
            </Link>
          </div>
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

          {/* Mobile Products Section */}
          <div className="py-2">
            <div className="text-[18px] text-white/90 mb-2">Products</div>
            <div className="ml-4 space-y-2">
              <Link
                to="/products/vnss"
                className={`cursor-pointer text-[16px] block py-1 ${currentPage === "/products/vnss" && "text-[#2563EB]"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VNSS
              </Link>
            </div>
          </div>

          <Link
            to="/team"
            className={`cursor-pointer text-[18px] block py-2 ${currentPage === "/team" && "text-[#2563EB]"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/contact-us"
            className={`cursor-pointer text-[18px] block py-2 ${currentPage === "/contact-us" && "text-[#2563EB]"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
