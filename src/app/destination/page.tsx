/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Hero from "./components/Hero";
import Country from "./components/Country";
import Groups from "./components/Groups";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Country />
      <Groups></Groups>
    </>
  );
}
