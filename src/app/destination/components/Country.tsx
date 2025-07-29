/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import Image from "next/image";
import Link from "next/link";

const dynamicCategories = [
  {
    title: "Mauritius",
    bgImage: "/images/acc5.jpg",
    cards: [
      {
        title: "LuxBlack Editions – Ultra Luxury",
        description: "",
        bullets: [
          "Presidential suite at One&Only Le Saint Géran, helicopter transfers.",
          "Yacht sailing and private island picnics.",
          "Personal shopping, spa journeys, and exclusive golf access.",
        ],
        images: ["/Mauritius/everyday/1.jpeg"],
      },
      {
        title: "LuxBlack Signature Collections – Mid Luxury",
        description: "",
        bullets: [
          "Beachfront resorts like Heritage Le Telfair, JW Marriott Mauritius.",
          "Island hopping, underwater scooter rides.",
          "Rum tasting and cultural immersions.",
        ],
        images: ["/Mauritius/mid/1.jpeg"],
      },
      {
        title: "LuxBlack One Collections – Everyday Luxury",
        description: "",
        bullets: [
          "All-inclusive stays at Zilwa Attitude, Veranda, Tamassa.",
          "Group excursions to Île aux Cerfs.",
          "Wellness sessions and scenic bike rides.",
        ],
        images: ["/Mauritius/ultra/1.jpeg"],
      },
    ],
  },

  {
    title: "Dubai",
    bgImage: "/images/acc5.jpg",
    cards: [
      {
        title: "LuxBlack Editions – Ultra Luxury",
        description: "",
        bullets: [
          "Burj Al Arab Sky Suite, Atlantis Royal Penthouse, Rolls Royce.",
          "Private yacht parties, helicopter desert rides.",
          "Michelin dining with celebrity chefs.",
        ],
        images: ["/Dubai/everyday/1.jpg"],
      },
      {
        title: "LuxBlack Signature Collections – Mid Luxury",
        description: "",
        bullets: [
          "Address Sky View, Palazzo Versace infinity pool suites.",
          "Desert safari in Range Rover, gold souk shopping.",
          "Rooftop fine dining and private Burj Khalifa access.",
        ],
        images: ["/Dubai/mid/1.jpg"],
      },
      {
        title: "LuxBlack One Collections – Everyday Luxury",
        description: "",
        bullets: [
          "Rove La Mer, Media One, Radisson Blu Waterfront.",
          "Dhow dinner cruise, Miracle Garden tours.",
          "Premium desert camp experience.",
        ],
        images: ["/Dubai/ultra/1.jpg"],
      },
    ],
  },
  {
    title: "Vietnam",
    bgImage: "/images/acc5.jpg",
    cards: [
      {
        title: "LuxBlack Editions – Ultra Luxury",
        description: "",
        bullets: [
          "Private cruise in Ha Long Bay with curated dining.",
          "Stay at Amanoi or Six Senses Con Dao with wellness concierge.",
          "Helicopter transfers to ancient sites, Michelin dining.",
        ],
        images: ["/Vietnam/ultra/1.jpg"],
      },
      {
        title: "LuxBlack Signature Collections – Mid Luxury",
        description: "",
        bullets: [
          "Boutique spa resorts like Fusion Maia, An Lam Retreats.",
          "Vespa street food tours, organic cooking classes.",
          "Scenic luxury train journeys.",
        ],
        images: ["/Vietnam/mid/1.jpg"],
      },
      {
        title: "LuxBlack One Collections – Everyday Luxury",
        description: "",
        bullets: [
          "4-star stays at La Siesta Hanoi, Allegro Hoi An, Pilgrimage Hue.",
          "Group Ha Long Bay cruise, cultural city tours.",
          "Coffee tastings and wellness massages.",
        ],
        images: ["/Vietnam/everyday/1.jpg"],
      },
    ],
  },
  {
    title: "Maldives",
    bgImage: "/images/acc5.jpg",
    cards: [
      {
        title: "LuxBlack Editions – Ultra Luxury",
        description: "",
        bullets: [
          "Private island buyouts (e.g., Velaa Private Island, Cheval Blanc Randheli) with private jet transfers.",
          "Underwater fine dining with live orchestral music.",
          "Private yacht charters, butler villas, and curated reef diving.",
        ],
        images: ["/Maldives/ultra/1.jpg"],
      },
      {
        title: "LuxBlack Signature Collections – Mid Luxury",
        description: "",
        bullets: [
          "Overwater villas at Baros, Anantara Kihavah, or Taj Exotica.",
          "Sunset cruises, spa rituals, and underwater wine pairings.",
          "Floating breakfasts and private beach cinema nights.",
        ],
        images: ["/Maldives/everyday/1.jpeg"],
      },
      {
        title: "LuxBlack One Collections – Everyday Luxury",
        description: "",
        bullets: [
          "Ocean view villas at VARU, Cocoon, or Sun Siyam Olhuveli.",
          "Speedboat transfers and semi-private excursions.",
          "Candle-lit beach dinners and reef snorkeling tours.",
        ],
        images: ["/Maldives/mid/1.jpeg"],
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
    <div className="relative w-full h-96 bg-white overflow-hidden">
      <Image
        src={images[index]}
        alt="Destination"
        fill
        className="object-cover"
        loading="lazy"
        sizes="100vw"
      />
    </div>
  );
}

// function ImageSlider({ images }: { images: string[] }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [images]);

//   return (
//     <div className="relative w-full aspect-square overflow-hidden">
//       <Image
//         src={images[index]}
//         alt={`Destination ${index + 1}`}
//         fill
//         className="object-cover transition-all duration-500 "
//       />
//       <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             className={`w-2 h-2 rounded-full  ${
//               i === index ? "bg-white" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Country() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="relative w-full px-4 sm:px-8 py-12 overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/servicehero.jpg')",
          filter: "blur(20px)",
          transform: "scale(1.1)", // prevents edge blur gaps
          opacity: "20%",
        }}
      ></div>
      <h2 className="text-center relative z-10 text-[24px] md:text-[48px] font-medium font-playfair tracking-wide text-[#2C2C2C] mb-10 ">
        Select your escape
      </h2>
      <RadixAccordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value || null)}
        className="w-full space-y-4 relative z-10"
      >
        {dynamicCategories.map((category) => (
          <RadixAccordion.Item
            key={category.title}
            value={category.title}
            className="border border-[#e0d7c4] rounded-xl bg-[#fff0] overflow-hidden"
          >
            <RadixAccordion.Header>
              {/* <RadixAccordion.Trigger
                className="relative overflow-hidden w-full flex justify-between items-center px-6 py-4 text-lg sm:text-xl font-semibold text-[#C9B87A] border border-[#C9B87A] rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                style={{
                  backgroundColor: "#F8F5F0",
                }}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${category.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(10px)",
                    transform: "scale(1.1)",
                  }}
                />

                <div className="absolute inset-0 bg-white/30  z-0 rounded-xl" />

                <div className="relative z-10 flex justify-between w-full items-center">
                  <span className="font-heading text-[#232222] font-sarif tracking-wide">
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
              </RadixAccordion.Trigger> */}

              <RadixAccordion.Trigger className="w-full flex justify-between items-center px-6 py-4 text-lg sm:text-xl font-semibold text-[#000000] bg-[#fff0] border border-[#000000] rounded-xl shadow-sm hover:shadow-md hover:bg-[#fffefc8a] transition-all duration-300">
                <span className="font-medium font-playfair tracking-wide text-[#2C2C2C]">
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
              </RadixAccordion.Trigger>
            </RadixAccordion.Header>

            <RadixAccordion.Content className="p-4 space-y-6 animate-slideDown ">
              {category.cards.map((card, i) => (
                <Card
                  key={i}
                  className="flex flex-col md:flex-row w-full h-fit md:max-h-[400px] overflow-hidden"
                >
                  <div className="md:w-1/2 w-full">
                    <ImageSlider images={card.images} />
                  </div>
                  <div className="md:w-1/2 w-full p-4 bg-[#ffffff] flex flex-col justify-center">
                    <h3 className="text-xl font-medium font-playfair tracking-wide text-[#2C2C2C] mb-2">
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
                    <Link href={"/contact"}>
                      <button className="mt-4 self-start cursor-pointer bg-[#C9B87A] text-white px-4 py-1.5 rounded-lg hover:bg-[#bda865] transition-colors shadow-md text-sm">
                        Enquire Now
                      </button>
                    </Link>
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
