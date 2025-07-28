"use client";
import Image from "next/image";

export default function Whatwe() {
  return (
    <section className="bg-[#F8F5F0] w-full py-10 md:py-20  px-6 sm:px-10">
      <div className="max-w-7xl mx-auto gap-10 md:gap-4 flex flex-col-reverse lg:flex-row items-center lg:items-stretch">
        {/* Text Section (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-6 text-center lg:text-left pr-0 lg:pr-12">
          <h2 className="text-3xl sm:text-4xl font-playfair tracking-wide text-[#2C2C2C] font-bold leading-snug uppercase">
            Why We Do It
          </h2>
          <p className="text-[#2C2C2C] text-sm sm:text-base font-inter leading-relaxed  mx-auto lg:mx-0">
            Travel, the Way It Was Meant to Be — Slow, Soulful, Yours. Not Just
            a Destination. A Feeling You’ll Return To.
          </p>
          <button className="bg-[#2C2C2C]  text-white px-6 py-3 font-inter text-sm font-semibold uppercase tracking-wider hover:bg-[#424242] transition rounded-md w-fit mx-auto lg:mx-0">
            Watch the Film
          </button>
        </div>

        {/* Image Section (40%) - Stretches to right edge */}
        <div className="w-full lg:w-[50%] relative h-[350px] sm:h-[450px] lg:h-auto">
          <Image
            src="/images/whatwe.jpg"
            alt="Founders"
            fill
            className="object-cover rounded-[12px] object-center w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
