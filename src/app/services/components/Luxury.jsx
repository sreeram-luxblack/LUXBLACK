"use client";
import Image from "next/image";
import { useState } from "react";

export default function Luxury() {
  const services = [
    {
      title: "EVERYDAY LUXURY",
      description:
        "Dream above city rooftops: three thousand feet between thoughts and private lounges.",
      bullets: [
        "Private lounges at 30,000 ft",
        "Premium lounge views",
        "Hotel-style comfort",
      ],
      image: "/images/luxury1.jpg",
    },
    {
      title: "MID LUXURY",
      description:
        "Seatbacks lie flat, champagne flows, and sunsets feel like Santorini.",
      bullets: ["Flat-lie seating", "Champagne service", "Intentional design"],
      image: "/images/luxury1.jpg",
    },
    {
      title: "ULTRA LUXURY",
      description:
        "Not crafted for scale — this is curated travel that feels like your favorite villa.",
      bullets: [
        "Villa-level hospitality",
        "Personalized welcome",
        "Curated travel moments",
      ],
      image: "/images/luxury1.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#f8f5f0] py-16 px-4">
      <h2 className="text-center text-[48px] font-semibold font-playfair text-[#2C2C2C] mb-10">
        Choose your Service
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 perspective">
        {services.map((service, index) => (
          <div
            key={index}
            className="group [transform-style:preserve-3d] transition-transform duration-700 relative h-[600px] rounded-xl"
          >
            {/* FRONT */}
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg backface-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-playfair text-white text-center px-4">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md text-[#C9B87A] rounded-xl p-6 transform rotate-y-180 backface-hidden overflow-y-auto shadow-2xl border border-[#C9B87A]/40">
              <h3 className="text-2xl font-heading mb-3 tracking-wide text-[#FFD689]">
                {service.title}
              </h3>
              <p className="text-[#f8f5f0] mb-5 text-sm leading-relaxed font-body">
                {service.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white text-sm font-body">
                {service.bullets.map((point, idx) => (
                  <li key={idx} className="opacity-90">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover trigger */}
            <style jsx>{`
              .group:hover {
                transform: rotateY(180deg);
              }
              .perspective {
                perspective: 1500px;
              }
              .backface-hidden {
                backface-visibility: hidden;
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}
