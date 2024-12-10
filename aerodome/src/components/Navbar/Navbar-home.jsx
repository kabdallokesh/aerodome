"use client";
import {  useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Sun, Menu, X } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <Link
              to="/technology"
              className={`cursor-pointer ${currentPage === "/technology" && "text-[#2563EB]"}`}
            >
              Technology
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
            className={`cursor-pointer text-[16px] ${
              currentPage === "/" && "text-[#2563EB]"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/technology"
            className={`cursor-pointer text-[16px] ${
              currentPage === "/technology" && "text-[#2563EB]"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Technology
          </Link>
          <Link
            to="/team"
            className={`cursor-pointer text-[16px] ${
              currentPage === "/team" && "text-[#2563EB]"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/contact-us"
            className={`cursor-pointer text-[16px] ${
              currentPage === "/contact-us" && "text-[#2563EB]"
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
