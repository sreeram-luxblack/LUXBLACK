"use client";
import {
  GiElephant,
  GiSailboat,
  GiMeal,
  GiGreekTemple,
} from "react-icons/gi";

const experiences = [
  {
    icon: GiElephant,
    title: "Romantic Island Hideaways",
  },
  {
    icon: GiSailboat,
    title: "Boutique Cruise Voyages",
  },
  {
    icon: GiMeal,
    title: "Island Hopper Escapes",
  },
  {
    icon: GiGreekTemple,
    title: "Skyline City Breaks",
  },
];

export default function Experience() {
  return (
    <section className="bg-[#F8F5F0] py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-playfair text-[#2C2C2C] mb-10 uppercase">
          Experiences
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center space-y-3 text-[#2C2C2C] group"
              >
                <Icon
                  size={42}
                  className="text-[#2C2C2C] transition-transform duration-300 group-hover:scale-150"
                />
                <p className="text-sm font-libre">{exp.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
