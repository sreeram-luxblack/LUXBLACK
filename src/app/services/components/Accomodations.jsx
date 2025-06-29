"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function Accomodation() {
  const stayImages = [
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/a.jpg",
  ];

  const transportImages = [
    "/images/b.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
  ];
  const natureImages = [
    "/images/b.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
  ];

  return (
    <section className="bg-[#ffffff] text-[#000000] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair text-[#cbb45f] mb-4">
            EFFORTLESS ESCAPES
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Curated travel experiences that blend luxury with comfort, for those
            who travel often and well.
          </p>
        </div>

        {/* Stays & Accommodations */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-playfair text-[#cbb45f] text-center">
            Stays & Accommodations
          </h3>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-xl"
          >
            {stayImages.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Stay ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="text-center max-w-2xl mx-auto text-sm sm:text-base">
            Curated travel experiences that blend luxury with comfort, for those
            who travel often and well.
          </p>
        </div>

        {/* Transport */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-playfair text-[#cbb45f] text-center">
            Transport
          </h3>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-xl"
          >
            {transportImages.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Transport ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="text-center max-w-2xl mx-auto text-sm sm:text-base">
            For the connoisseurs of life. Entirely customizable experiences from
            private jets to island takeovers.
          </p>
        </div>

        {/* Sites */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-playfair text-[#cbb45f] text-center">
            Beautiful Nature & Beaches
          </h3>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-xl"
          >
            {natureImages.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Transport ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="text-center max-w-2xl mx-auto text-sm sm:text-base">
            For the connoisseurs of life. Entirely customizable experiences from
            private jets to island takeovers.
          </p>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff !important; /* Gold color */
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 34px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
