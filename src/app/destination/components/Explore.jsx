"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const countries = [
  {
    title: "Maldives",
    subtitle: "Overwater Serenity",
    image: "/images/dest2.jpg",
    description:
      "Private overwater villas, champagne sunsets, and the quiet rhythm of the ocean—it’s where time slows and the sea speaks in soft whispers.",
    months: ["January", "February", "December"],
    categories: ["honeymoon", "luxury", "couple"],
    status: "Recommended ",
  },
  {
    title: "Mauritius",
    subtitle: "Island Soul & Barefoot Luxury",
    image: "/images/dest2.jpg",
    description:
      "Lush volcanic peaks meet sapphire lagoons. Mauritius is where barefoot luxury dances with island soul.",
    months: ["March", "April", "November"],
    categories: ["honeymoon", "family", "luxury"],
    status: "Trending🔥",
  },
  {
    title: "Dubai",
    subtitle: "World of Wonder & Indulgence",
    image: "/images/dest2.jpg",
    description:
      "Golden dunes by day, glittering skyline by night—Dubai is a world built on wonder, indulgence, and imagination.",
    months: ["October", "December", "February"],
    categories: ["luxury", "family", "group"],
    status: "Recommended",
  },
  {
    title: "Vietnam",
    subtitle: "Emerald Bays & Lantern-lit Towns",
    image: "/images/dest2.jpg",
    description:
      "Cruise through emerald bays, wander lantern-lit towns, and let every meal feel like poetry—Vietnam is gentle, vibrant, and endlessly layered.",
    months: ["March", "April", "October"],
    categories: ["couple", "luxury", "cultural"],
    status: "Trending🔥",
  },
  {
    title: "Singapore",
    subtitle: "A Garden in the Sky",
    image: "/images/dest2.jpg",
    description:
      "A garden in the sky, a city of elegance. Singapore offers seamless design, curated indulgence, and the future wrapped in luxury.",
    months: ["January", "July", "December"],
    categories: ["luxury", "family", "city"],
    status: "Recommended",
  },
  {
    title: "Malaysia",
    subtitle: "Contrasts of Culture & Calm",
    image: "/images/dest2.jpg",
    description:
      "From rainforest retreats to cultural gold, Malaysia holds richness in its contrasts—quiet, bold, and full of soul.",
    months: ["February", "May", "October"],
    categories: ["luxury", "adventure", "nature"],
    status: "Trending🔥",
  },
  {
    title: "Kazakhstan",
    subtitle: "Untouched Grandeur",
    image: "/images/dest2.jpg",
    description:
      "Where modern cities rise from steppe lands and ancient silence fills the air—Kazakhstan is untouched grandeur with a modern twist.",
    months: ["April", "May", "September"],
    categories: ["adventure", "cultural", "luxury"],
    status: "Recommended",
  },
  {
    title: "Azerbaijan",
    subtitle: "Where East Meets West",
    image: "/images/dest2.jpg",
    description:
      "Mystical and modern, Baku’s flame-lit skyline stands beside silk-road stories—Azerbaijan is East, West, and everything in between.",
    months: ["March", "October", "November"],
    categories: ["luxury", "cultural", "city"],
    status: "Trending🔥",
  },
  {
    title: "Georgia",
    subtitle: "Wine, Mountains & Warmth",
    image: "/images/dest2.jpg",
    description:
      "Vineyards kissed by mountains, warm-hearted villages, and cuisine that comforts—Georgia is charm served with a toast.",
    months: ["May", "September", "October"],
    categories: ["luxury", "adventure", "cultural"],
    status: "Recommended",
  },
  {
    title: "Turkey",
    subtitle: "Tapestry of Timeless Cultures",
    image: "/images/dest2.jpg",
    description:
      "Istanbul’s skyline at dusk, Cappadocia’s sky at dawn—Turkey is a tapestry of cultures, textures, and timeless luxury.",
    months: ["April", "May", "September"],
    categories: ["luxury", "honeymoon", "cultural"],
    status: "Trending🔥",
  },
  {
    title: "Seychelles",
    subtitle: "Intimate Island Escape",
    image: "/images/dest2.jpg",
    description:
      "Pearl-white beaches, untouched islands, and the hush of exclusivity—Seychelles is nature’s most intimate secret.",
    months: ["April", "May", "October"],
    categories: ["honeymoon", "luxury", "nature"],
    status: "Recommended",
  },
  {
    title: "Bali",
    subtitle: "Spiritual Luxury & Tranquility",
    image: "/images/dest2.jpg",
    description:
      "Sacred temples, serene villas, and slow rituals of care—Bali is a pause button for the soul.",
    months: ["March", "June", "September"],
    categories: ["honeymoon", "luxury", "spiritual"],
    status: "Recommended",
  },
  {
    title: "Thailand",
    subtitle: "Where Indulgence Meets Spirit",
    image: "/images/dest2.jpg",
    description:
      "Golden temples, private islands, and food that tells a story—Thailand is where indulgence meets ancient spirit.",
    months: ["January", "November", "December"],
    categories: ["honeymoon", "luxury", "cultural"],
    status: "Recommended",
  },
  {
    title: "Sri Lanka",
    subtitle: "Wild, Wise & Wonderfully Private",
    image: "/images/dest2.jpg",
    description:
      "From tea plantations in the clouds to sun-kissed southern shores—Sri Lanka is wild, wise, and wonderfully private.",
    months: ["February", "March", "August"],
    categories: ["adventure", "honeymoon", "luxury"],
    status: "Recommended",
  },
  {
    title: "Switzerland",
    subtitle: "Alpine Calm & Elegance",
    image: "/images/dest2.jpg",
    description:
      "Snow-dusted peaks, quiet lakeside villages, and alpine calm—Switzerland is elegance in every breath.",
    months: ["June", "July", "December"],
    categories: ["luxury", "honeymoon", "nature"],
    status: "Recommended",
  },
  {
    title: "France",
    subtitle: "Romance, Refinement & Reverie",
    image: "/images/dest2.jpg",
    description:
      "Whether it’s Parisian perfume or Provencal air, France offers romance, refinement, and reverie—always effortlessly.",
    months: ["April", "May", "September"],
    categories: ["luxury", "honeymoon", "cultural"],
    status: "Recommended",
  },
  {
    title: "Italy",
    subtitle: "Vineyards, Cliffs & Piazzas",
    image: "/images/dest2.jpg",
    description:
      "Tuscan vineyards, Amalfi cliffs, and timeless piazzas—Italy isn’t just seen, it’s felt.",
    months: ["May", "June", "September"],
    categories: ["honeymoon", "luxury", "cultural"],
    status: "Recommended",
  },
  {
    title: "Greece",
    subtitle: "Mythology, Beauty & Summer Love",
    image: "/images/dest2.jpg",
    description:
      "Whitewashed dreams under Aegean skies—Greece is mythology, beauty, and slow summer love.",
    months: ["June", "July", "September"],
    categories: ["honeymoon", "luxury", "island"],
    status: "Recommended",
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
        Select your Travel by month and style
      </h1>

      {/* Filters */}
      {/* <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10 text-[#4c3c28]">
       
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
      </div> */}

      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-10 text-[#4c3c28]">
        {/* Month Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold mb-1 text-[#4c3c28]">
            Month
          </label>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full sm:w-52 h-11 border border-[#d1bfa7] rounded-lg px-3 text-[#4c3c28] bg-white focus:outline-none focus:ring-2 focus:ring-[#c9b87a] shadow-sm transition-all"
          >
            {months.map((m, i) => (
              <option key={i} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold mb-1 text-[#4c3c28]">
            Travel Type
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-52 h-11 border border-[#d1bfa7] rounded-lg px-3 text-[#4c3c28] bg-white focus:outline-none focus:ring-2 focus:ring-[#c9b87a] shadow-sm transition-all"
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
            <div className="relative">
              <img
                src="/images/dest2.jpg"
                alt={item.title}
                className="w-full h-36 sm:h-44 md:h-52 xl:h-60 2xl:h-72 object-cover"
              />

              {/* Status Tag */}
              {/* {item.status && (
                <span
                  className={`absolute top-2 left-2 text-white text-[10px] sm:text-xs px-4  py-1.5 rounded-full shadow-sm
      ${
        item.status === "Trending🔥"
          ? "bg-gradient-to-r from-orange-500 to-yellow-400"
          : item.status === "Recommended"
          ? "bg-gradient-to-r from-green-500 to-blue-400"
          : "bg-gradient-to-r from-green-500 to-blue-400"
      }
    `}
                >
                  {item.status}
                </span>
              )} */}
            </div>

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
