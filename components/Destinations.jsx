"use client";

import React, { useState } from "react";

const destinations = [
  {
    title: "Acropolis of Athens",
    subtitle: "Ancient Wonders Await",
    image: "/images/dest2.jpg",
    description:
      "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance.",
    points: [
      "Home to the Parthenon",
      "Symbol of classical spirit",
      "World Heritage Site",
      "Historical landmark of Greece",
    ],
  },
  {
    title: "Bali",
    subtitle: "Island Paradise",
    image: "/images/dest2.jpg",
    description:
      "Bali is known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. It is part of the Indonesian archipelago.",
    points: [
      "Famous for temples",
      "Breathtaking beaches",
      "Rich culture and festivals",
      "Great for surfing",
    ],
  },
  {
    title: "Swiss Alps",
    subtitle: "Majestic Peaks",
    image: "/images/dest2.jpg",
    description:
      "The Swiss Alps are renowned for their majestic beauty, world-class skiing resorts and charming alpine villages.",
    points: [
      "Perfect for skiing",
      "Scenic train rides",
      "Picturesque landscapes",
      "Ideal for hiking",
    ],
  },
  {
    title: "Kyoto, Japan",
    subtitle: "Cultural Heritage",
    image: "/images/dest2.jpg",
    description:
      "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
    points: [
      "Historic temples",
      "Beautiful autumn leaves",
      "Traditional tea houses",
      "Cultural festivals",
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
