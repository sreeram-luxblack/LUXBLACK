"use client";

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Video */}
      <Image
        src="/images/dest.jpg" // Replace with your image path
        alt="Luxurious contact background"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-[0.75]"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40 z-10" />

      {/* Centered Text */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-medium [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] leading-tight  font-playfair tracking-wide text-[#ffffff]">
           Go Beyond the Map <br></br> Where Your Story Begins

          </h1>
          {/* <p className="mt-4 text-lg md:text-[20px]  rounded-[2px] border-b-[4px] pb-3 border-[#BB9753] text-[#ffffff] font-medium">
            Luxury experiences curated for your journey
          </p> */}
        </div>
      </div>
    </section>
  );
}
