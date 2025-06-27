"use client";
import {
  FaAward,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaUserTie,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaAward,
    title: "Award-winning planners",
    color: "#C9B87A",
  },
  {
    icon: FaBoxOpen,
    title: "No-obligation quotes",
    color: "#C2703D",
  },
  {
    icon: FaMapMarkedAlt,
    title: "No planning fees",
    color: "#479C91",
  },
  {
    icon: FaPhoneAlt,
    title: "24/7 on the ground support",
    color: "#3F7CA3",
  },
  {
    icon: FaUserTie,
    title: "Expert private guides",
    color: "#8964A0",
  },
];

export default function Whylux() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase font-playfair text-[#2C2C2C] mb-10">
          Why Black Tomato?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {reasons.map(({ icon: Icon, title, color }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3"
            >
              <Icon size={48} style={{ color }} />
              <p className="text-sm text-[#2C2C2C] font-libre max-w-[110px]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
