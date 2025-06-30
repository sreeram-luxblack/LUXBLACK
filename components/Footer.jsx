"use client";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative bg-[#F8F5F0] text-[#2C2C2C] border-t-4 border-[#C9B87A] overflow-hidden">
      {/* ✅ Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/images/footer.jpg')" }}
      />

      {/* ✅ Content Layer (on top of image) */}
      <div className="relative z-10">
        {/* Header CTA */}
        <div className="text-center pt-16 px-6 sm:px-10">
          <h2 className="text-4xl sm:text-5xl font-playfair tracking-wide text-[#2C2C2C] mb-4">
            Begin Your Journey
          </h2>
          <p className="text-[#5A5A5A] text-lg sm:text-xl  [text-shadow:2px_2px_4px_rgba(255,255,255,0.3)] max-w-2xl mx-auto font-libre">
            Step into a world where luxury meets purpose. Your adventure starts
            here.
          </p>
        </div>

        {/* Divider Line */}
        <div className="h-[2px] w-24 bg-gradient-to-r from-[#C9B87A] to-[#A78B49] mx-auto my-10 rounded-full" />

        {/* Footer Core */}
        <div className="max-w-7xl mx-auto pb-16 px-6 flex flex-col items-center space-y-12">
          {/* Social Icons */}
          <div className="flex gap-8 flex-wrap justify-center">
            {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, idx) => (
              <Icon
                key={idx}
                size={36}
                className="text-[#2C2C2C] hover:text-[#C9B87A] hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 items-center text-[#2C2C2C] text-base font-medium">
            <div className="flex items-center gap-2 group cursor-pointer">
              <HiOutlineMail size={20} />
              <a
                href="mailto:info@blacktomato.com"
                className="hover:text-[#C9B87A] transition-colors"
              >
                info@blacktomato.com
              </a>
              <MdArrowForwardIos
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center gap-2">
              <HiOutlinePhone size={20} />
              <p>+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-center text-[#2C2C2C] font-libre">
            <p>
              &copy; {new Date().getFullYear()} All rights reserved at{" "}
              <span className="font-semibold hover:text-[#C9B87A] transition-colors">
                LuxBlack
              </span>{" "}
              | Developed by{" "}
              <a
                href="https://sixthgenx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-[#C9B87A] transition-colors"
              >
                SixthGenX
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
