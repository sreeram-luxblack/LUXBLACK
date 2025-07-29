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
              src="/images/str1.jpg"
              alt="Luxury"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2  text-lg leading-relaxed font-medium font-sarif tracking-wide text-[#2C2C2C]">
          
            <p>
              You wanted more than tickets and itineraries. You craved the
              silence of sunrise… The warmth of a place that remembers your
              name…
              <br></br>
              <br></br>
              The stillness of a moment that lives on in memory, not in photos.
              <br></br>
              <br></br>
              At Lux Black, we don’t just plan travel. We curate stories that
              are felt not told. Stories that begin the moment you dream… and
              stay with you long after you return.
            </p>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="md:w-1/2 transform -rotate-2 shadow-lg rounded-md overflow-hidden">
            <Image
              src="/images/str2.jpg"
              alt="Luxury"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2  text-lg leading-relaxed font-medium font-sarif tracking-wide text-[#2C2C2C]">
            <p>
              Each journey we design is woven with care with slow mornings,
              soulful encounters, and experiences that awaken joy, stillness,
              and awe.
              <br></br>
              <br></br>
              This isn’t luxury that shouts. This is luxury that whispers in a
              handwritten note waiting in your villa, a local elder sharing
              legends under starlight, a hidden café tucked away from the
              crowds.
              <br></br>
              <br></br>
              We believe true luxury is not measured in stars, but in how deeply
              you feel each moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
