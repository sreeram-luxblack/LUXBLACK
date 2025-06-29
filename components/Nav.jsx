'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#c0c0c0b3] backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className=" mx-auto px-10 2xl:px-20 py-4 flex justify-between items-center relative">
        
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-[#ffffff] text-base font-medium">
          <Link href="/destination" className="hover:text-[#ffd689] md:text-[20px] transition [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">Destinations</Link>
          <Link href="/services" className="hover:text-[#ffd689] md:text-[20px] transition [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">Services</Link>
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
            className="border-[#A89C94] border-[0.5px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-[#ffffff] px-10 py-2 rounded-full md:text-[20px] font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#00000047] backdrop-blur-sm text-[#ffffff] px-4 pb-4 pt-2 space-y-3 text-base font-medium">
          <Link href="/destination" className="block hover:text-[#BB9753]" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link href="/services" className="block hover:text-[#BB9753]" onClick={() => setIsOpen(false)}>Services</Link>
          <Link
            href="/contact"
            className="block bg-[#A89C94] text-white text-center rounded-full py-2 hover:scale-105 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
