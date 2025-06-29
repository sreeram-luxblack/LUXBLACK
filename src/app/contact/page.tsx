/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Hero from "./component/Hero";
import Contactform from "./component/Contactform";
import ContactForm from "./component/Cf";
import { FormspreeProvider } from "@formspree/react";

export default function Home() {
  return (
    <>
      <Hero></Hero>

      <Contactform />
    </>
  );
}
