"use client";
import Image from "next/image";

export default function TiltedCards() {
  return (
    <section className="w-full bg-[#f8f5f0]  py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Top Card */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 transform rotate-2 shadow-lg rounded-md overflow-hidden">
            <Image
              src="/images/tilted.jpg"
              alt="Luxury"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed font-libre">
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…
              <br />
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…"
            </p>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="md:w-1/2 transform -rotate-2 shadow-lg rounded-md overflow-hidden">
            <Image
              src="/images/tilted.jpg"
              alt="Luxury"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed font-libre">
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…
              <br />
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
