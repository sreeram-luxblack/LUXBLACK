"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Family",
    image: "/images/group.jpg",
    countries: [
      { name: "Italy", image: "/images/country.jpg" },
      { name: "France", image: "/images/country.jpg" },
      { name: "Greece", image: "/images/country.jpg" },
      { name: "Japan", image: "/images/country.jpg" },
      { name: "Spain", image: "/images/country.jpg" },
    ],
  },
  {
    title: "Couples",
    image: "/images/group.jpg",
    countries: [
      { name: "Bali", image: "/images/country.jpg" },
      { name: "Maldives", image: "/images/country.jpg" },
      { name: "Venice", image: "/images/country.jpg" },
      { name: "Kyoto", image: "/images/country.jpg" },
      { name: "Santorini", image: "/images/country.jpg" },
    ],
  },
  {
    title: "Groups",
    image: "/images/group.jpg",
    countries: [
      { name: "Bali", image: "/images/country.jpg" },
      { name: "Maldives", image: "/images/country.jpg" },
      { name: "Venice", image: "/images/country.jpg" },
      { name: "Kyoto", image: "/images/country.jpg" },
      { name: "Santorini", image: "/images/country.jpg" },
    ],
  },
  {
    title: "Honeymoons",
    image: "/images/group.jpg",
    countries: [
      { name: "Bali", image: "/images/country.jpg" },
      { name: "Maldives", image: "/images/country.jpg" },
      { name: "Venice", image: "/images/country.jpg" },
      { name: "Kyoto", image: "/images/country.jpg" },
      { name: "Santorini", image: "/images/country.jpg" },
    ],
  },
  {
    title: "Solo",
    image: "/images/group.jpg",
    countries: [
      { name: "Bali", image: "/images/country.jpg" },
      { name: "Maldives", image: "/images/country.jpg" },
      { name: "Venice", image: "/images/country.jpg" },
      { name: "Kyoto", image: "/images/country.jpg" },
      { name: "Santorini", image: "/images/country.jpg" },
    ],
  },
];

export default function Groups() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section className="bg-[#F8F5F0] py-[50px] md:py-[70px] px-4">
      <h2 className="text-center text-[48px] font-semibold text-[#2C2C2C] mb-10 font-libre">
        Choose Your Travel Style
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group [perspective:1000px] h-[450px] sm:h-[500px] 2xl:h-[550px] w-full cursor-pointer"
            onClick={() =>
              setFlippedIndex(flippedIndex === idx ? null : idx)
            }
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flippedIndex === idx
                  ? "[transform:rotateY(180deg)]"
                  : ""
              } group-hover:[transform:rotateY(180deg)]`}
            >
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-[20%] left-0 right-0 text-center text-white text-lg font-semibold tracking-wide py-1 font-subheading">
                  {cat.title}
                </div>
              </div>

              {/* Back */}
              <div className="absolute border-[#A89C94] border-[1px] inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#ffffff] rounded-lg p-3 shadow-md flex flex-col justify-center items-center space-y-3 overflow-auto">
                <div className="flex flex-col gap-2">
                  {cat.countries.map((country, i) => (
                    <div
                      key={i}
                      className="w-32 sm:w-36 md:w-40 h-20 rounded overflow-hidden shadow-sm bg-white flex flex-col items-center justify-center border border-[#C9B87A]"
                    >
                      <Image
                        src={country.image}
                        alt={country.name}
                        width={160}
                        height={60}
                        className="object-cover w-full h-[70%]"
                      />
                      <p className="text-xs text-[#2C2C2C] mt-1 font-body">
                        {country.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
