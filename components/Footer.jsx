"use client";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
  FaLocationPin,
} from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/luxblackone/?utm_source=ig_web_button_share_sheet", // Replace with your actual Instagram URL
    },
    {
      icon: FaLinkedinIn,
      url: "https://linkedin.com/in/yourprofile", // Replace with your actual LinkedIn URL
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/918111071115", // Replace with your actual WhatsApp link
    },
  ];

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
        <div className="h-[2px] w-24 bg-gradient-to-r from-[#C9B87A] to-[#A78B49] mx-auto my-5 md:my-10 rounded-full" />

        {/* Footer Core */}
        <div className="max-w-7xl mx-auto pb-16 px-6 flex flex-col items-center md:space-y-10 space-y-6 ">
          {/* Social Icons */}
          <div className="flex gap-8 flex-wrap justify-center">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Social Link ${idx + 1}`}
              >
                <Icon
                  size={36}
                  className="text-[#2C2C2C] hover:text-[#C9B87A] hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 items-center text-[#2C2C2C] text-base font-medium">
            {/* Email */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <HiOutlineMail size={20} />
              <a
                href="mailto:info@luxblackone.com"
                className="hover:text-[#C9B87A] transition-colors"
              >
                info@luxblackone.com
              </a>
              <MdArrowForwardIos
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>

            <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-8">
              <div className="flex items-center gap-2">
                <HiOutlinePhone size={20} />
                <p>+91 81110 71115</p>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-2">
                <HiOutlinePhone size={20} />
                <p>+91 63817 97305</p>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-6 text-[#2C2C2C] md:px-[40px] flex flex-col md:flex-row md:justify-between text-base font-playfair font-medium space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-start gap-3 max-w-md">
              <span className="text-[#e8bf37] mt-1">
                <FaLocationPin />
              </span>
              <p className="leading-relaxed">
                <strong className="text-[#e8bf37]">Coimbatore –</strong> Aadi
                Complex, Vasanth Nagar, Singanallur,
                <br />
                Tamil Nadu – <span className="font-semibold">641005</span>
              </p>
            </div>

            <div className="flex items-start gap-3 max-w-md">
              <span className="text-[#e8bf37] mt-1">
                <FaLocationPin />
              </span>
              <p className="leading-relaxed">
                <strong className="text-[#e8bf37]">Chennai –</strong> Ramana
                Associates, S1 Devendran Nagar,
                <br />
                Vengaivasal, Medavakkam –{" "}
                <span className="font-semibold">600100</span>
              </p>
            </div>

            <div className="flex items-start gap-3 max-w-md">
              <span className="text-[#e8bf37] mt-1">
                <FaLocationPin />
              </span>
              <p className="leading-relaxed">
                <strong className="text-[#e8bf37]">Tirupur –</strong> 19/85, 15
                Velampalayam Main Rd,
                <br />
                A.Thirumuruganpoondi, Tiruppur, Tamil Nadu –{" "}
                <span className="font-semibold">641652</span>
              </p>
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
                href="https://sixthgenx.vercel.app/"
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
