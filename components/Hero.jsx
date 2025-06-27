'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src="/images/bgvideo.MP4" // Place the video in public/videos/
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40 z-10" />

      {/* Centered Text */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Your Dream Destination
          </h1>
          <p className="mt-4 text-lg md:text-[20px] bg-[#653ec8af] rounded-[2px] border-[1px] border-[#100037] text-[#ffffff] font-medium">
            Luxury experiences curated for your journey
          </p>
        </div>
      </div>
    </section>
  );
}
