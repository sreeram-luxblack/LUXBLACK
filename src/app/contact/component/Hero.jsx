"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/contacthero1.jpg" // Replace with your image path
        alt="Luxurious contact background"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-[0.65]"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-playfair  text-[#ffffff]  drop-shadow-lg tracking-wide">
          Let's Connect
        </h1>
        <p className="mt-8 text-lg sm:text-xl max-w-2xl text-[#ffffff] font-medium font-playfair tracking-wide  drop-shadow-md">
          Let’s begin curating your escape. Please share a few details so our travel atelier can design your journey with precision and care
        </p>
      </div>
    </section>
  );
}
