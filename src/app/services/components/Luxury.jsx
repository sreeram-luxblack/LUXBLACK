"use client";
import Image from "next/image";
import { useState } from "react";

export default function Luxury() {
  const collections = [
    {
      title: "LUXBLACK ONE COLLECTIONS",
      subheadline:
        "Effortless escapes designed with style, comfort, and curated essentials — luxury that feels just right.",
      bullets: [
        "Boutique hotel stays & premium 4–5 Star properties in top destinations",
        "Curated cultural moments — sunset boat rides, artisan food walks, local guided tours",
        "Streamlined service with a personal touch, ensuring ease throughout your journey",
      ],
      image: "/home/one.jpg", // Replace with relevant image
    },
    {
      title: "LUXBLACK SIGNATURE COLLECTIONS",
      subheadline:
        "Elevated journeys crafted with intention — where indulgence meets authenticity in every detail.",
      bullets: [
        "5 Star handpicked retreats, cliffside villas & beachfront suites with special privileges",
        "Signature experiences — heritage safaris, private yacht excursions, curated spa journeys",
        "Dedicated travel curator, offering seamless planning and concierge support pre-to-post trip",
      ],
      image: "/home/sig.jpg", // Replace with relevant image
    },
    {
      title: "LUXBLACK EDITIONS",
      subheadline:
        "Rare experiences for the world’s most discerning — privately tailored, deeply immersive, and truly exceptional.",
      bullets: [
        "Charter private jets, superyachts or reserve entire private islands (e.g. Velaa, Calala)",
        "Exclusive experiences — chef-hosted dinners, fashion week access, exclusive destinations explorations",
        "White-glove end-to-end service, including 24/7 concierge, VIP immigration handling, and personal hosts",
      ],
      image: "/home/edi.jpg", // Replace with relevant image
    },
  ];

  return (
    <section className="w-full bg-[#f8f5f0] pt-14 pb-7 md:py-16 px-4">
      <h2 className="text-center text-[32px] md:text-[48px] font-medium font-playfair tracking-wide text-[#2C2C2C] mb-10">
        Choose your Service
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 perspective">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="group [transform-style:preserve-3d] transition-transform duration-700 relative h-[430px] md:h-[600px] rounded-xl"
          >
            {/* FRONT */}
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg backface-hidden">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover brightness-80"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                <h3 className="text-2xl font-playfair font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-white text-center">
                  {collection.title}
                </h3>
              </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 bg-[#232323] backdrop-blur-md text-[#C9B87A] rounded-xl p-6 transform rotate-y-180 backface-hidden overflow-y-auto shadow-2xl border border-[#C9B87A]/40">
              <h3 className="text-2xl font-heading mb-6   text-center tracking-wide font-playfair text-[#e8cc67]">
                {collection.title}
              </h3>
              <p className="text-[#f9f9f9] mb-5 font-playfair text-sm lg:text-lg leading-relaxed font-body">
                {collection.subheadline}
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#fff] text-sm  lg:text-[16px] font-normal ">
                {collection.bullets.map((point, idx) => {
                  const [boldPart, ...rest] = point.split("—"); // split on dash
                  return (
                    <li key={idx} className="opacity-90   text-[#ededede6]">
                      <strong className="text-[#ffffff]  ">
                        {boldPart.trim()}
                      </strong>
                      {rest.length > 0 ? ` —${rest.join("—")}` : ""}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Hover Trigger */}
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
