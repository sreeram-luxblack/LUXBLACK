"use client";

import React, { useState } from "react";

const destinations = [
  {
    title: "Maldives",
    subtitle: "Private Islands & Ocean Dreams",
    image: "/images/dest2.jpg",
    description:
      "Private overwater villas, champagne sunsets, and the quiet rhythm of the ocean—it’s where time slows and the sea speaks in soft whispers.",
    points: [
      " Private candle-lit dinners on secluded sandbanks",
      "Personalized spa rituals in overwater pavilions",
      "Sunrise seaplane journeys over turquoise atolls",
    ],
  },
  {
    title: "Mauritius",
    subtitle: "Tropical Bliss & Island Culture",
    image: "/images/dest2.jpg",
    description:
      "Lush volcanic peaks meet sapphire lagoons. Mauritius is where barefoot luxury dances with island soul.",
    points: [
      "Helicopter transfers to remote beach resorts",
      "Private rum tastings on historic plantations",
      "Sunset catamaran cruises with live saxophone",
    ],
  },
  {
    title: "Dubai",
    subtitle: "Desert Glamour & Sky High",
    image: "/images/dest2.jpg",
    description:
      " Golden dunes by day, glittering skyline by night—Dubai is a world built on wonder, indulgence, and imagination.",
    points: [
      "Desert safaris in vintage Land Rovers with gourmet picnics",
      "Sky-high dining in the clouds of Burj Khalifa",
      " Yacht charters along the Palm with butler service",
    ],
  },
  {
    title: "Vietnam",
    subtitle: "Heritage Trails & Hidden Bays",
    image: "/images/dest2.jpg",
    description:
      "Cruise through emerald bays, wander lantern-lit towns, and let every meal feel like poetry—Vietnam is gentle, vibrant, and endlessly layered.",
    points: [
      "Overnight cruises through the limestone karsts of Ha Long Bay",
      "Chef-led culinary journeys in Hanoi’s secret kitchens",
      "Wellness retreats in ancient riverside temples",
    ],
  },
];

export default function Destinations() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 sm:p-10 bg-[#f8f5f0] min-h-screen text-[#4c3c28] font-sans">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-10 lg:mb-16 tracking-wide font-serif">
        LuxBlack Signatures
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {destinations.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 sm:p-5">
              <h2 className="text-lg sm:text-2xl font-semibold mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-0">
          <div className="bg-white rounded-2xl overflow-hidden w-full max-w-xl relative animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white bg-black hover:bg-gray-600 rounded-full p-2 shadow "
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="p-5 sm:p-6">
              <h2 className="text-xl sm:text-3xl font-bold mb-3">
                {selected.title}
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                {selected.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                {selected.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
