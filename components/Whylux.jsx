"use client";
import {
  FaAward,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaUserTie,
  FaGlobeAmericas,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaGlobeAmericas,
    title: "Top-Tier Destination Experts",
    color: "#C9B87A", // Luxury gold
  },
  {
    icon: FaCogs,
    title: "Tailor-Made, Not Off-the-Shelf",
    color: "#C2703D", // Warm bronze
  },
  {
    icon: FaUserTie,
    title: "Trusted by Business Leaders",
    color: "#479C91", // Elite green
  },
  {
    icon: FaHeadset,
    title: "Concierge Support, 24/7 Worldwide",
    color: "#3F7CA3", // Calm blue
  },
];

export default function Whylux() {
  return (
    <section className="bg-white pt-16 pb-5 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase font-playfair text-[#2C2C2C] mb-10">
          Why LuxBlack?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {reasons.map(({ icon: Icon, title, color }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3"
            >
              <Icon size={48} style={{ color }} />
              <p className="text-sm text-[#2C2C2C] font-libre max-w-[140px] ">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
