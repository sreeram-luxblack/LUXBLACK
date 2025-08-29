"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Honeymoons",
    image: "/home/honeymoon 2.jpg",
    countries: [
      { name: "Maldives", image: "/home/c.jpg" },
      { name: "Mauritius", image: "/home/mau1.jpeg" },
      { name: "Bali", image: "/home/e.jpg" },
      { name: "Thailand", image: "/home/l.jpg" },
    ],
  },
  {
    title: "Family",
    image: "/home/family 2.jpg",
    countries: [
      { name: "Singapore", image: "/home/singa.jpg" },
      { name: "Dubai", image: "/home/dub2.jpg" },
      { name: "Malaysia", image: "/home/malis.jpg" },
      { name: "Sri Lanka", image: "/home/j.jpg" },
    ],
  },
  {
    title: "Couples",
    image: "/home/couples.jpg",
    countries: [
      { name: "Vietnam", image: "/home/viet.jpg" },
      { name: "Georgia", image: "/home/n.jpg" },
      { name: "Turkey", image: "/home/m.jpg" },
      { name: "Maldives", image: "/home/mal1.jpg" },
    ],
  },
  {
    title: "Groups",
    image: "/images/group2.jpg",
    countries: [
      { name: "Thailand", image: "/home/l.jpg" },
      { name: "Vietnam", image: "/home/viet.jpg" },
      { name: "Europe", image: "/home/sw.jpg" },
      { name: "Dubai", image: "/home/dub1.jpg" },
    ],
  },
];

export default function Groups() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section className="bg-[#F8F5F0] py-[50px] md:py-[70px] px-4">
      <h2 className="text-center text-[30px] md:text-[48px] font-medium font-playfair tracking-wide text-[#2C2C2C] mb-10  ">
        <span className=""> Select Your </span>
        <br className="block sm:hidden text-[40px] md:text-[48px]"></br>Bespoke
        Journey
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group border-1 border-[#2c2c2c71] rounded-lg [perspective:1000px] h-[340px] sm:h-[500px] 2xl:h-[550px] w-full sm:w-[240px] md:w-[250px] cursor-pointer"
            onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flippedIndex === idx ? "[transform:rotateY(180deg)]" : ""
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
                <div className="absolute bottom-[20%] left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-t from-white/80 to-white/90 px-4 py-2 rounded-md shadow-lg  text-lg font-semibold font-playfair tracking-wide text-[#2C2C2C]">
                    {cat.title}
                  </div>
                </div>
              </div>

              {/* Back */}
              <div className="absolute border-[#dbc471] border-[1px] inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#ffffff] rounded-lg p-3 shadow-md flex flex-col justify-center items-center space-y-3 overflow-auto">
                <div className="flex flex-wrap gap-2 justify-center">
                  {cat.countries.map((country, i) => (
                    <Link href="/destination">
                      <div
                        key={i}
                        className="w-full sm:w-40 md:w-44 h-36 rounded-lg overflow-hidden shadow-sm bg-white flex flex-col items-center justify-center border border-[#dbc471] mx-1"
                      >
                        <Image
                          src={country.image}
                          alt={country.name}
                          width={160}
                          height={60}
                          className="object-cover w-28 h-28"
                        />

                        <p className="text-xs text-[#2C2C2C] mt-1 font-libre text-center">
                          {country.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group [perspective:1000px] h-[450px] sm:h-[500px] 2xl:h-[550px] w-full cursor-pointer"
            onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flippedIndex === idx ? "[transform:rotateY(180deg)]" : ""
              } group-hover:[transform:rotateY(180deg)]`}
            >
              
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

              
              <div className="absolute border-[#A89C94] border-[1px] inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#ffffff] rounded-lg p-3 shadow-md flex flex-col justify-center items-center space-y-3 overflow-auto">
                <div className="flex flex-col gap-2">
                  {cat.countries.map((country, i) => (
                    <div
                      key={i}
                      className="w-32 sm:w-36 md:w-40 h-18 md::h-20 rounded overflow-hidden shadow-sm bg-white flex flex-col items-center justify-center border border-[#C9B87A]"
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
      </div> */}
    </section>
  );
}
