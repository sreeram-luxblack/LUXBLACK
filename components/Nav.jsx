"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#c0c0c0b3] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-10 2xl:px-20 py-4 flex justify-between items-center relative">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-[#ffffff] text-base font-medium">
          <Link
            href="/destination"
            className="hover:text-[#ffd689] md:text-[20px] transition [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
          >
            Destinations
          </Link>
          <Link
            href="/services"
            className="hover:text-[#ffd689] md:text-[20px] transition [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
          >
            Services
          </Link>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
          </Link>
        </div>

        {/* Right Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="border-[#ffffff] border-[0.5px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-[#ffffff] px-10 py-2 rounded-full md:text-[20px] font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-30"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✨ Mobile Fullscreen Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-xl z-20 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 text-white text-lg font-medium tracking-wide px-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-white border-b border-[#BB9753] pb-2 hover:text-[#FFD28F] text-xl transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="/destination"
            onClick={() => setIsOpen(false)}
            className="text-white border-b border-[#BB9753] pb-2 hover:text-[#FFD28F] text-xl transition-all duration-200"
          >
            Destinations
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="text-white border-b border-[#BB9753] pb-2 hover:text-[#FFD28F] text-xl transition-all duration-200"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-white border-b border-[#BB9753] pb-2 hover:text-[#FFD28F] text-xl transition-all duration-200"
          >
            Contact
          </Link>
          {/* <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-[#BB9753] to-[#FFD28F] text-[#2c2c2c] px-8 py-2 rounded-full shadow-md text-lg font-semibold hover:scale-105 transition"
          >
            Contact
          </Link> */}
        </div>
      </div>
    </header>
  );
}
