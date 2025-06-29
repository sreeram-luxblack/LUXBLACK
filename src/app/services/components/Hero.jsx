"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/servicehero.jpg" // Replace with your image path
        alt="Luxurious contact background"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-[0.75]"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-playfair text-[#F8F5F0] drop-shadow-lg tracking-wide">
          Let's Connect
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl text-[#ffffff] font-libre drop-shadow-md">
          Whether you're dreaming or ready to go, we’re here to shape your next journey.
        </p>
      </div>
    </section>
  );
}
