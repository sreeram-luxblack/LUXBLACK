/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Hero from "./components/Hero";
import Luxury from "./components/Luxury";
import Accomodation from "./components/Accomodations";
import TiltedCards from "./components/TiltedCards";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Luxury></Luxury>
      <TiltedCards></TiltedCards>
      <Accomodation></Accomodation>
    </>
  );
}
