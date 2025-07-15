"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      >
        <source src="/images/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0  bg-opacity-40 z-10" /> */}

      {/* Centered Text */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] leading-tight">
            Beyond Travel. <br></br> It’s a Story Written for You
          </h1>
          {/* <p className="mt-4 text-lg md:text-[20px]  rounded-[2px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] border-b-[4px] pb-3 border-[#dbb265] text-[#ffffff] font-medium">
            Luxury experiences curated for your journey.
          </p> */}
        </div>
      </div>
    </section>
  );
}
