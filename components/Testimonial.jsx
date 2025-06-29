"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { User } from "lucide-react"; // You can use this or any other icon
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Emily Carter",
    title: "Frequent Jet Setter",
    message:
      "Every detail of my trip was curated to perfection. It felt like luxury tailored just for me. I won’t travel any other way now.",
  },
  {
    name: "Liam Bennett",
    title: "Business Traveler",
    message:
      "Professional, seamless, and indulgent. I trust them with every aspect of my travel, both work and leisure.",
  },
  {
    name: "Isabella Ruiz",
    title: "Luxury Enthusiast",
    message:
      "From the private villa to the curated wine experiences, everything was unforgettable. They redefine the word ‘escape’.",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white text-[#0C0C0C] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#C9B87A]">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i} className="h-full">
              <div className="bg-[#F8F5F0] text-[#0C0C0C] h-full rounded-xl p-8 shadow-lg border border-[#C9B87A] flex flex-col justify-between min-h-[300px]">
                <p className="text-lg italic leading-relaxed mb-6">
                  “{testimonial.message}”
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-[#C9B87A] flex items-center justify-center">
                    <User size={24} color="#0C0C0C" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#C9B87A]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#2C2C2C]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #c9b87a !important;
        }
        .testimonial-swiper .swiper-button-next::after,
        .testimonial-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
