"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const countries = [
  {
    title: "India",
    subtitle: "Land of Vibrant Culture",
    image: "/images/dest2.jpg",
    description:
      "India is a land of diverse culture, heritage, and traditions. From the Himalayas to coastal Kerala, it’s packed with historical landmarks and spiritual experiences.",
    months: ["January", "March", "November"],
    categories: ["honeymoon", "family", "group"],
  },
  {
    title: "Japan",
    subtitle: "Timeless Traditions",
    image: "/images/dest2.jpg",
    description:
      "Japan offers a fascinating blend of traditional and modern culture, with beautiful cherry blossoms, temples, and futuristic cities.",
    months: ["April", "October", "December"],
    categories: ["honeymoon", "couple"],
  },
  {
    title: "Maldives",
    subtitle: "Tropical Paradise",
    image: "/images/dest2.jpg",
    description:
      "Known for its crystal-clear waters and luxurious resorts, Maldives is a perfect escape into nature and romance.",
    months: ["February", "June", "December"],
    categories: ["honeymoon", "couple"],
  },
  {
    title: "France",
    subtitle: "Joie de Vivre",
    image: "/images/dest2.jpg",
    description:
      "France is the epitome of art, food, and architecture. From Paris to Provence, there's magic everywhere.",
    months: ["May", "July", "September"],
    categories: ["couple", "family"],
  },
  {
    title: "Greece",
    subtitle: "Aegean Splendor",
    image: "/images/dest2.jpg",
    description:
      "Greece offers beautiful islands, ancient ruins, and rich mythology. Perfect for romance and exploration.",
    months: ["May", "August"],
    categories: ["honeymoon", "group"],
  },
  {
    title: "Mexico",
    subtitle: "Vibrant Heritage",
    image: "/images/dest2.jpg",
    description:
      "Colorful festivals, beaches, and historic ruins make Mexico a destination full of energy and charm.",
    months: ["March", "September", "October"],
    categories: ["group", "family"],
  },
  {
    title: "South Africa",
    subtitle: "Diverse and Majestic",
    image: "/images/dest2.jpg",
    description:
      "From safaris to wine country, South Africa is packed with adventure, beauty, and cultural richness.",
    months: ["January", "July"],
    categories: ["group", "family"],
  },
  {
    title: "Thailand",
    subtitle: "Kingdom of Smiles",
    image: "/images/dest2.jpg",
    description:
      "Thailand combines spiritual temples, tropical beaches, and lively street markets. A destination for everyone.",
    months: ["February", "April", "June"],
    categories: ["honeymoon", "group", "family"],
  },
  {
    title: "Australia",
    subtitle: "Island of Wonders",
    image: "/images/dest2.jpg",
    description:
      "Australia is known for its natural wonders, unique wildlife, and modern cities like Sydney and Melbourne.",
    months: ["December", "February"],
    categories: ["group", "family"],
  },
  {
    title: "Indonesia",
    subtitle: "Island of Gods",
    image: "/images/dest2.jpg",
    description:
      "Indonesia’s islands offer serene beaches, volcanoes, and spiritual retreats. Bali is just the beginning.",
    months: ["May", "June"],
    categories: ["honeymoon", "couple"],
  },
  {
    title: "New Zealand",
    subtitle: "Pristine Landscapes",
    image: "/images/dest2.jpg",
    description:
      "Home to dramatic landscapes, adventure sports, and Maori culture. Perfect for explorers and nature lovers.",
    months: ["January", "March", "October"],
    categories: ["group", "family"],
  },
];

const months = [
  "All",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const categories = ["All", "honeymoon", "family", "couple", "group"];

export default function Explore() {
  const [selected, setSelected] = useState(null);
  const [month, setMonth] = useState("All");
  const [category, setCategory] = useState("All");

  const filteredCountries = countries.filter((c) => {
    const matchesMonth = month === "All" || c.months.includes(month);
    const matchesCategory =
      category === "All" || c.categories.includes(category);
    return matchesMonth && matchesCategory;
  });

  return (
    <div className="p-6 sm:p-10 bg-[#ffffff] lg:pb-22 min-h-fit text-[#4c3c28]">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
        Start Your Journey
      </h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10 text-[#4c3c28]">
        {/* Month Filter */}
        <div className="flex items-center gap-2 border-b-2 border-[#d1bfa7] pb-1">
          <span className="text-base font-medium">Month</span>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-40 sm:w-48 h-10 bg-transparent text-[#4c3c28] focus:outline-none"
          >
            {months.map((m, i) => (
              <option key={i} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 border-b-2 border-[#d1bfa7] pb-1">
          <span className="text-base font-medium">Travel Type</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-40 sm:w-48 h-10 bg-transparent text-[#4c3c28] focus:outline-none"
          >
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {filteredCountries.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-200"
          >
            <img
              src="/images/dest2.jpg"
              alt={item.title}
              className="w-full h-36 sm:h-44 md:h-52 xl:h-60 2xl:h-72 object-cover"
            />
            <div className="p-4 xl:p-6 2xl:p-8">
              <h2 className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-[#4c3c28] leading-tight">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-500">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl overflow-hidden w-full max-w-xl relative animate-fade-in-up">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-black bg-white hover:bg-gray-100 rounded-full p-2 shadow"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {selected.title}
              </h2>
              <p className="text-gray-700 mb-3 text-sm sm:text-base">
                {selected.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {selected.categories.map((cat, idx) => (
                  <li key={idx} className="capitalize">
                    {cat} destination
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
