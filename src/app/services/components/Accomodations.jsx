"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function Accomodation() {
  const stayImages = [
    "/Stays/1 (1).jpg",
    "/Stays/1 (2).jpg",
    "/Stays/1 (3).jpg",
    "/Stays/1 (4).jpg",
 
  ];

  const transportImages = [
   "/Transports/1 (1).jpg",
    "/Transports/1 (2).jpg",
    "/Transports/1 (3).jpg",
    "/Transports/1 (4).jpg",
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
  const blogs = [
    {
      title: "Exploring Santorini’s Hidden Gems",
      excerpt:
        "From quiet cliffside views to lesser-known blue-domed chapels — Santorini redefined.",
      image: "/images/footer.jpg",
      link: "/blogs/santorini-hidden-gems",
    },
    {
      title: "Private Safari Lodges in South Africa",
      excerpt:
        "A look into the world of ultra-private luxury safaris across Kruger and Sabi Sands.",
      image: "/images/footer.jpg",
      link: "/blogs/private-safari-lodges",
    },
    {
      title: "Top 5 Secluded Beaches in Southeast Asia",
      excerpt:
        "Silky sands, turquoise tides, and total tranquility — these shores are soul food.",
      image: "/images/footer.jpg",
      link: "/blogs/secluded-beaches-asia",
    },
  ];

  return (
    <section className="bg-[#ffffff] text-[#000000] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-20">
        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-[32px] md:text-5xl font-medium font-playfair tracking-wide text-[#cbb45f] mb-8 ">
            A World of Experiences, <br className="block md:hidden"></br>{" "}
            Tailored for You
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto font-medium font-playfair tracking-wide text-[#2C2C2C]">
            Curated travel experiences that blend luxury with comfort, for those
            who travel often and well.
          </p>
        </div>

        {/* Stays & Accommodations */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-medium font-playfair tracking-wide text-[#cbb45f] text-center">
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

          {/* <p className="text-center max-w-2xl mx-auto text-sm sm:text-base">
            Curated travel experiences that blend luxury with comfort, for those
            who travel often and well.
          </p> */}
        </div>

        {/* Transport */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-medium font-playfair tracking-wide text-[#cbb45f] text-center">
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

          <p className="text-center max-w-2xl mx-auto  text-sm sm:text-base font-medium font-playfair tracking-wide text-[#2C2C2C]">
            Arrive in style—be it by sea, sky, or the stories in between.
          </p>
        </div>

        {/* Sites */}
        {/* <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-playfair text-[#cbb45f] text-center">
            From Our Journal
          </h3>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-xl"
          >
            {blogs.map((blog, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#ffffff79] h-[300px] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-[220px]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="text-lg font-semibold text-[#2C2C2C] font-playfair">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-[#555] leading-snug">
                      {blog.excerpt}
                    </p>
                    <Link
                      href={blog.link}
                      className="text-[#cbb45f] text-sm font-semibold inline-block hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
     <style jsx global>{`
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff !important;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5); /* subtle shadow */
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4)); /* stronger outer glow */
    transition: transform 0.2s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.1);
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
