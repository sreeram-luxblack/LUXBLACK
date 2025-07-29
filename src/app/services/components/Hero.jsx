"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/heroservice.jpg" // Replace with your image path
        alt="Luxurious contact background"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-[0.40] "
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl  text-[#F8F5F0] drop-shadow-lg font-medium font-playfair tracking-wide ">
         Destinations, Reimagined for You
        </h1>
        {/* <p className="mt-8 text-lg sm:text-xl max-w-2xl text-[#ffffff] font-medium font-playfair tracking-wide  drop-shadow-md">
          From daydreams to departure, your next journey which is, effortless and extraordinary, begins here.
        </p> */}
      </div>
    </section>
  );
}
