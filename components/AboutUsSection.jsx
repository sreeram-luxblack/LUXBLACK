"use client";
import { LuPenLine, LuGlobe, LuHourglass } from "react-icons/lu";

const values = [
  {
    icon: <LuPenLine size={36} className="text-[#C9B87A]" />,
    title: "Tailored Simplicity",
    description: "Every journey starts with a conversation, not a template.",
  },
  {
    icon: <LuGlobe size={36} className="text-[#C9B87A]" />,
    title: "Invisible Luxury",
    description: "We blend comfort, exclusivity, and detail with elegance.",
  },
  {
    icon: <LuHourglass size={36} className="text-[#C9B87A]" />,
    title: "Time Well-Spent",
    description: "Your time is the most precious currency. We honor that.",
  },
];

export default function AboutUsSection() {
  return (
    <section className="bg-[#F8F5F0] py-20 px-6 sm:px-10 text-center">
      <div className="max-w-4xl mx-auto space-y-5 mb-14">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#352a1c]">
         Designed for ease, comfort and meaning
        </h2>
        <p className="text-[#2C2C2C] text-base font-inter">
          Each detail is intentional, created to bring calm to your routine, softness to your day, and  
          <br className="hidden md:block"/>
         purpose to your self-care. A ritual that feels as good as it looks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {values.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center space-y-4 text-[#2C2C2C] px-4"
          >
            {item.icon}
            <h3 className="font-playfair text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-sm font-inter leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
