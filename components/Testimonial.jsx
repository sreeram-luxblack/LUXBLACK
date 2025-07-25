"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { User } from "lucide-react"; // You can use this or any other icon
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Binit Poddar.",
    title: "Treasury Head - PhonePe",
    message:
      "Everything was taken care of without us having to ask. From the private dinners to the surprise upgrades, it was beyond what we imagined.",
  },
  {
    name: "Mithun Appaiah.",
    title: "Chief Executive Officer - Wow Momos",
    message:
      "Our trip felt effortless. Every element was considered — we could just live in the moment while everything unfolded perfectly.",
  },
  {
    name: "Singh S.",
    title: "Vice president of Swiss Re",
    message:
      "From start to finish, the service was seamless. The team operated with quiet precision — exactly how true travel should feel.",
  },
  {
    name: "Venkatesh K.",
    title: "Redington India Ltd",
    message:
      "They curated our journey with taste, restraint, and insight. Nothing was overdone — just beautifully balanced, from start to finish.",
  },
];


export default function Testimonial() {
  return (
    <section className="bg-white text-[#0C0C0C] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-semibold font-serif text-[#352a1c]">
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
                  {/* <div className="w-12 h-12 rounded-full bg-[#C9B87A] flex items-center justify-center">
                    <User size={24} color="#0C0C0C" />
                  </div> */}
                  <div className="text-left">
                    <p className="font-semibold font-playfair text-[#C9B87A]">
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
