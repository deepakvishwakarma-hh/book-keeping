"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoStyle = {
    filter: "invert(1) brightness(100%) grayscale(100%)",
  };
  return (
    <nav className="bg-[#2f5653] text-white p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center bg-white justify-center">
          <Image
            src="/LOGO3.png"
            alt="Ledger Data Solutions"
            width={120}
            height={50}
            className="bg-cover py-1 rounded-md overflow-hidden"
            // style={logoStyle}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm tracking-widest font-semibold">
          <Link href="/" className="hover:text-gray-300">
            HOME
          </Link>
          <Link href="#about" className="hover:text-gray-300">
            ABOUT US
          </Link>
          <Link href="#services" className="hover:text-gray-300">
            SERVICES
          </Link>
          <Link href="#why-choose-us" className="hover:text-gray-300">
            WHY CHOOSE US?
          </Link>
          <Link href="#testimonials" className="hover:text-gray-300">
            TESTIMONIALS
          </Link>
          <Link href="#faqs" className="hover:text-gray-300">
            FAQS
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#2f5653] text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="p-4">
          <X size={32} />
        </button>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col space-y-4 px-6 text-lg tracking-widest font-semibold">
          <Link
            href="/"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="#about"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="#services"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            href="#why-choose-us"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            WHY CHOOSE US?
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            TESTIMONIALS
          </Link>
          <Link
            href="#faqs"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            FAQS
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
