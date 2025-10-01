"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstFocusableElementRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableElementRef = useRef<HTMLAnchorElement>(null);

  // Handle keyboard navigation and focus trapping in the mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      // Close menu on ESC key
      if (e.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      // Trap focus within the menu
      if (e.key === "Tab") {
        // If shift + tab on first element, move to last element
        if (
          e.shiftKey &&
          document.activeElement === firstFocusableElementRef.current
        ) {
          e.preventDefault();
          lastFocusableElementRef.current?.focus();
        }
        // If tab on last element, move to first element
        else if (
          !e.shiftKey &&
          document.activeElement === lastFocusableElementRef.current
        ) {
          e.preventDefault();
          firstFocusableElementRef.current?.focus();
        }
      }
    };

    // Focus the close button when menu opens
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    // For hash links, check if the current URL includes the hash
    if (href.startsWith("#")) {
      return pathname?.includes(href) || false;
    }
    return false;
  };

  return (
    <header>
      <nav className="bg-[#2f5653] text-white p-4" aria-label="Main navigation">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center bg-white justify-center"
            aria-label="Ledger Data Solutions - Home"
          >
            <img
              src="/LOGO3.png"
              alt="Ledger Data Solutions Logo"
              width={120}
              height={50}
              className="bg-cover py-1 rounded-md overflow-hidden"
              aria-hidden="true"
            />
            <span className="sr-only">Ledger Data Solutions</span>
          </Link>

          {/* Desktop Menu */}
          <div
            className="hidden lg:flex space-x-6 text-[.8rem] tracking-widest font-semibold"
            role="menubar"
            aria-label="Main menu"
          >
            <Link
              href="/"
              className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] px-2 py-1 rounded ${
                isActive("/") ? "underline underline-offset-4" : ""
              }`}
              role="menuitem"
              aria-current={isActive("/") ? "page" : undefined}
            >
              HOME
            </Link>
            <Link
              href="#about"
              className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] px-2 py-1 rounded ${
                isActive("#about") ? "underline underline-offset-4" : ""
              }`}
              role="menuitem"
              aria-current={isActive("#about") ? "true" : undefined}
            >
              ABOUT US
            </Link>
            <Link
              href="#difference"
              className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] px-2 py-1 rounded ${
                isActive("#services") ? "underline underline-offset-4" : ""
              }`}
              role="menuitem"
              aria-current={isActive("#difference") ? "true" : undefined}
            >
              THE DIFFERENCE
            </Link>
            <Link
              href="#services"
              className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] px-2 py-1 rounded ${
                isActive("#services") ? "underline underline-offset-4" : ""
              }`}
              role="menuitem"
              aria-current={isActive("#services") ? "true" : undefined}
            >
              SERVICES
            </Link>
            <Link
              href="#faqs"
              className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] px-2 py-1 rounded ${
                isActive("#faqs") ? "underline underline-offset-4" : ""
              }`}
              role="menuitem"
              aria-current={isActive("#faqs") ? "true" : undefined}
            >
              FAQS
            </Link>
            <Link
              href="#contact"
              className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] px-2 py-1 rounded ${
                isActive("#contact") ? "underline underline-offset-4" : ""
              }`}
              role="menuitem"
              aria-current={isActive("#contact") ? "true" : undefined}
            >
              CONTACT US
            </Link>
            <Link
              href="#signin"
              className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] px-2 py-1 rounded ${
                isActive("#contact") ? "underline underline-offset-4" : ""
              }`}
              role="menuitem"
              aria-current={isActive("#signin") ? "true" : undefined}
            >
              CLIENT SIGN-IN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
          >
            <Menu size={32} aria-hidden="true" />
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`fixed inset-y-0 left-0 w-64 bg-[#2f5653] text-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              className="p-4 self-end focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Close main menu"
            >
              <X size={32} aria-hidden="true" />
              <span className="sr-only">Close main menu</span>
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-4 px-6 text-lg tracking-widest font-semibold">
              <Link
                ref={firstFocusableElementRef}
                href="/"
                className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white px-2 py-1 rounded ${
                  isActive("/") ? "underline underline-offset-4" : ""
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive("/") ? "page" : undefined}
              >
                HOME
              </Link>
              <Link
                href="#about"
                className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white px-2 py-1 rounded ${
                  isActive("#about") ? "underline underline-offset-4" : ""
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive("#about") ? "true" : undefined}
              >
                ABOUT US
              </Link>
              <Link
                href="#difference"
                className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white px-2 py-1 rounded ${
                  isActive("#difference") ? "underline underline-offset-4" : ""
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive("#difference") ? "true" : undefined}
              >
                THE DIFFERENCE
              </Link>
              <Link
                href="#services"
                className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white px-2 py-1 rounded ${
                  isActive("#services") ? "underline underline-offset-4" : ""
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive("#services") ? "true" : undefined}
              >
                SERVICES
              </Link>
              <Link
                href="#faqs"
                className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white px-2 py-1 rounded ${
                  isActive("#faqs") ? "underline underline-offset-4" : ""
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive("#faqs") ? "true" : undefined}
              >
                FAQS
              </Link>
              <Link
                href="#contact"
                className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white px-2 py-1 rounded ${
                  isActive("#contact") ? "underline underline-offset-4" : ""
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive("#contact") ? "true" : undefined}
              >
                CONTACT US
              </Link>
              <Link
                ref={lastFocusableElementRef}
                href="#signin"
                className={`hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white px-2 py-1 rounded ${
                  isActive("#signin") ? "underline underline-offset-4" : ""
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive("#signin") ? "true" : undefined}
              >
                CLIENT SIGN-IN
              </Link>
            </nav>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
            role="presentation"
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
