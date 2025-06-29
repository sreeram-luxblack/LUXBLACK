/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import Image from "next/image";

const dynamicCategories = [
  {
    title: "Family",
    bgImage: "/images/acc.jpg",
    cards: [
      {
        title: "Family Fun in Bali",
        description: "Enjoy serene beaches with activities for all ages.",
        bullets: ["Kid-friendly resorts", "Local tours", "Beachside dinners"],
        images: ["/images/dest1.jpg", "/images/dest2.jpg", "/images/dest3.jpg"],
      },
      {
        title: "Explore Rome",
        description: "History and fun for the entire family.",
        bullets: ["Colosseum tours", "Pizza-making classes", "Family hotels"],
        images: ["/images/dest2.jpg", "/images/dest3.jpg", "/images/dest1.jpg"],
      },
      {
        title: "Tokyo with Kids",
        description: "Tech meets tradition in a family-friendly city.",
        bullets: ["Theme parks", "Sushi classes", "Cultural shows"],
        images: ["/images/dest3.jpg", "/images/dest1.jpg", "/images/dest2.jpg"],
      },
    ],
  },
  {
    title: "Couples",
    bgImage: "/images/acc2.jpg",
    cards: [
      {
        title: "Romantic Paris",
        description: "Stroll hand-in-hand along the Seine.",
        bullets: ["Eiffel Tower dinner", "Seine cruise", "Wine tasting"],
        images: ["/images/dest1.jpg", "/images/dest2.jpg", "/images/dest3.jpg"],
      },
      {
        title: "Maldives Escape",
        description: "Private overwater villas and clear waters.",
        bullets: ["Candlelit dinners", "Couples spa", "Snorkeling"],
        images: ["/images/dest2.jpg", "/images/dest3.jpg", "/images/dest1.jpg"],
      },
      {
        title: "Venetian Dream",
        description: "Float through romantic canals.",
        bullets: ["Gondola rides", "Historic charm", "Italian cuisine"],
        images: ["/images/dest3.jpg", "/images/dest1.jpg", "/images/dest2.jpg"],
      },
    ],
  },
  {
    title: "Group",
    bgImage: "/images/acc3.jpg",
    cards: [
      {
        title: "Thailand Group Adventure",
        description: "Enjoy vibrant markets and island hopping together.",
        bullets: ["Group boat tours", "Street food walks", "Temple visits"],
        images: ["/images/dest1.jpg", "/images/dest3.jpg", "/images/dest2.jpg"],
      },
      {
        title: "Swiss Alps Trek",
        description: "Bond with your crew in the breathtaking Alps.",
        bullets: ["Chalet stays", "Scenic hikes", "Group photography"],
        images: ["/images/dest3.jpg", "/images/dest2.jpg", "/images/dest1.jpg"],
      },
      {
        title: "Morocco Discovery",
        description: "Explore souks and deserts in a shared adventure.",
        bullets: ["Camel rides", "Desert camps", "Cultural workshops"],
        images: ["/images/dest2.jpg", "/images/dest1.jpg", "/images/dest3.jpg"],
      },
    ],
  },
  {
    title: "Solo",
    bgImage: "/images/acc4.jpg",
    cards: [
      {
        title: "Bali Spiritual Journey",
        description: "Unwind and reconnect with yourself.",
        bullets: ["Yoga retreats", "Ubud stays", "Local ceremonies"],
        images: ["/images/dest3.jpg", "/images/dest1.jpg", "/images/dest2.jpg"],
      },
      {
        title: "Portugal Coast Drive",
        description: "Freedom of the open road and hidden beaches.",
        bullets: ["Car rentals", "Coastal towns", "Sunset views"],
        images: ["/images/dest1.jpg", "/images/dest2.jpg", "/images/dest3.jpg"],
      },
      {
        title: "Vietnam Culture Solo",
        description: "Immerse in local traditions and flavors.",
        bullets: ["Food tours", "Solo-friendly hostels", "Local art"],
        images: ["/images/dest2.jpg", "/images/dest3.jpg", "/images/dest1.jpg"],
      },
    ],
  },
  {
    title: "Luxury",
    bgImage: "/images/acc.jpg",
    cards: [
      {
        title: "Dubai Elite Escape",
        description: "Indulge in ultra-luxury experiences.",
        bullets: ["7-star hotels", "Private yachts", "Sky dining"],
        images: ["/images/dest1.jpg", "/images/dest2.jpg", "/images/dest3.jpg"],
      },
      {
        title: "French Riviera Glamour",
        description: "Relax like royalty in Côte d’Azur.",
        bullets: ["Designer shopping", "Private beaches", "Château stays"],
        images: ["/images/dest3.jpg", "/images/dest1.jpg", "/images/dest2.jpg"],
      },
      {
        title: "Luxury Safari in Kenya",
        description: "See the wild in the most refined way.",
        bullets: [
          "Private game drives",
          "Luxury lodges",
          "Gourmet bush dining",
        ],
        images: ["/images/dest2.jpg", "/images/dest3.jpg", "/images/dest1.jpg"],
      },
    ],
  },
];

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full aspect-square overflow-hidden">
      <Image
        src={images[index]}
        alt={`Destination ${index + 1}`}
        fill
        className="object-cover transition-all duration-500"
      />
      <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Country() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="w-full px-4 sm:px-8 py-12 bg-[#ffffff]">
      <h2 className="text-center text-[48px] font-semibold font-playfair text-[#cbb45f] mb-10 font-libre">
        Choose Your Destination
      </h2>
      <RadixAccordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value || null)}
        className="w-full space-y-4"
      >
        {dynamicCategories.map((category) => (
          <RadixAccordion.Item
            key={category.title}
            value={category.title}
            className="border border-[#e0d7c4] rounded-xl bg-white overflow-hidden"
          >
            <RadixAccordion.Header>
              <RadixAccordion.Trigger
                className="relative overflow-hidden w-full flex justify-between items-center px-6 py-4 text-lg sm:text-xl font-semibold text-[#C9B87A] border border-[#C9B87A] rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                style={{
                  backgroundImage: `url(${category.bgImage})`,
                  backgroundColor: "#F8F5F0", // fallback
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* 🔷 Overlay for blur and darken effect */}
                <div className="absolute inset-0 bg-white/30  z-0 rounded-xl" />

                {/* 🔶 Actual Content */}
                <div className="relative z-10 flex justify-between w-full items-center">
                  <span className="font-heading text-black font-sarif tracking-wide">
                    {category.title}
                  </span>
                  <span
                    className={`ml-4 transform transition-transform duration-300 ${
                      openItem === category.title ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#000000]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </RadixAccordion.Trigger>

              {/* <RadixAccordion.Trigger className="w-full flex justify-between items-center px-6 py-4 text-lg sm:text-xl font-semibold text-[#C9B87A] bg-white border border-[#C9B87A] rounded-xl shadow-sm hover:shadow-md hover:bg-[#fffefc] transition-all duration-300">
                <span className="font-heading tracking-wide">
                  {category.title}
                </span>
                <span
                  className={`ml-4 transform transition-transform duration-300 ${
                    openItem === category.title ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#C9B87A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </RadixAccordion.Trigger> */}
            </RadixAccordion.Header>

            <RadixAccordion.Content
              className="p-4 space-y-6 animate-slideDown "
            >
              {category.cards.map((card, i) => (
                <Card
                  key={i}
                  className="flex flex-col md:flex-row w-full h-fit md:max-h-[400px] overflow-hidden"
                >
                  <div className="md:w-1/2 w-full">
                    <ImageSlider images={card.images} />
                  </div>
                  <div className="md:w-1/2 w-full p-4 bg-[#F8F5F0] flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">
                      {card.title}
                    </h3>
                    <p className="mb-3 text-sm text-[#2C2C2C]/90">
                      {card.description}
                    </p>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-[#2C2C2C]">
                      {card.bullets.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <button className="mt-4 self-start bg-[#C9B87A] text-white px-4 py-1.5 rounded-lg hover:bg-[#bda865] transition-colors shadow-md text-sm">
                      Enquire Now
                    </button>
                  </div>
                </Card>
              ))}
            </RadixAccordion.Content>
          </RadixAccordion.Item>
        ))}
      </RadixAccordion.Root>
    </section>
  );
}
