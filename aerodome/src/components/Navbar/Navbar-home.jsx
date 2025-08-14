"use client";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Sun, Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const currentPage = location.pathname;

  return (
    <div className="w-full h-[13vh] flex justify-center z-[100] sticky top-0 items-center">
      <div className="h-[12vh] flex items-center font-bold justify-between  text-white px-4 w-[95%] md:w-[92%]">
        {/* Logo */}
        <div>
          <img src="logo.png" className="w-[70%] md:w-[50%]" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center z-30 gap-6">
          <div className="text-[16px] flex gap-6">
            <Link
              to="/"
              className={`cursor-pointer ${currentPage === "/" && "text-[#2563EB]"}`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 ${(currentPage === "/products" || currentPage.startsWith("/products/")) && "text-[#2563EB]"}`}
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
                          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 8.26L4 9L10.91 8.26L12 2Z" />
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
              to="/technology"
              className={`cursor-pointer ${currentPage === "/technology" && "text-[#2563EB]"}`}
            >
              Technology
            </Link>

            <Link
              to="/portfolio"
              className={`cursor-pointer ${currentPage === "/portfolio" && "text-[#2563EB]"}`}
            >
              Portfolio
            </Link>
            <Link
              to="/team"
              className={`cursor-pointer ${currentPage === "/team" && "text-[#2563EB]"}`}
            >
              Team
            </Link>
            <Link
              to="/contact-us"
              className={`cursor-pointer ${currentPage === "/contact-us" && "text-[#2563EB]"}`}
            >
              Contact
            </Link>
          </div>
          <Button txt="Get Quota" link="https://ok.com" />
          <Sun className="cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden z-[101]">
          {!isMobileMenuOpen ? (
            <Menu
              className="cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          ) : (
            <X
              className="cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-[#0F0F0F] z-[100] text-white flex flex-col p-12 gap-6 py-6 shadow-lg transition-transform duration-300">
          <Link
            to="/"
            className={`cursor-pointer text-[16px] ${currentPage === "/" && "text-[#2563EB]"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Products Section */}
          <div className="py-2">
            <div className="text-[16px] text-white/90 mb-2">Products</div>
            <div className="ml-4 space-y-2">
              <Link
                to="/products/vnss"
                className={`cursor-pointer text-[14px] block py-1 ${currentPage === "/products/vnss" && "text-[#2563EB]"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VNSS
              </Link>
            </div>
          </div>

          <Link
            to="/technology"
            className={`cursor-pointer text-[16px] ${currentPage === "/technology" && "text-[#2563EB]"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Technology
          </Link>
          <Link
            to="/team"
            className={`cursor-pointer text-[16px] ${currentPage === "/team" && "text-[#2563EB]"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/contact-us"
            className={`cursor-pointer text-[16px] ${currentPage === "/contact-us" && "text-[#2563EB]"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button txt="Get Quota" link="https://ok.com" />
        </div>
      )}
    </div>
  );
}

export default Navbar;
