'use client';
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Sun, Menu, X } from "lucide-react";

function Navbar() {
  const [page, setPage] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setPage(location.pathname);
  }, []);

  return (
    <div className="w-full h-[12vh] flex pt-4 justify-center z-100 sticky bg-[#0F0F0F] top-0 items-center">
      <div className="h-[12vh] flex items-center font-bold justify-between bg-[#0F0F0F] text-white px-4 w-[95%] md:w-[92%]">
        {/* Logo */}
        <div>
          <img src="logo.png" className="w-[70%] md:w-[50%]" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center z-30 gap-6">
          <div className="text-[16px] flex gap-6">
            <Link to="/" className={`cursor-pointer ${page === "/" && "text-[#2563EB]"}`}>
              Home
            </Link>
            <Link to="/technology" className={`cursor-pointer ${page === "/technology" && "text-[#2563EB]"}`}>
              Technology
            </Link>
            <Link to="/contact-us" className={`cursor-pointer ${page === "/contact-us" && "text-[#2563EB]"}`}>
              Contact
            </Link>
          </div>
          <Button txt="Get Quota" link="https://ok.com" />
          <Sun className="cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          {!isMobileMenuOpen ? (
            <Menu className="cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
          ) : (
            <X className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
      </div>

{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="absolute top-[12vh] h-screen left-0 w-full bg-[#0F0F0F]  text-white flex flex-col p-12 gap-6 py-6 shadow-lg transition-transform duration-300">
    <Link
      to="/"
      className={`cursor-pointer text-[16px] ${page === "/" && "text-[#2563EB]"}`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Home
    </Link>
    <Link
      to="/technology"
      className={`cursor-pointer text-[16px] ${page === "/technology" && "text-[#2563EB]"}`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Technology
    </Link>
    <Link
      to="/contact-us"
      className={`cursor-pointer text-[16px] ${page === "/contact-us" && "text-[#2563EB]"}`}
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
