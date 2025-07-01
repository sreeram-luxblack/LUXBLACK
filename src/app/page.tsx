/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Nav from "../../components/Nav"
import Hero from "../../components/Hero"
import { Group } from "lucide-react";
import Groups from "../../components/Groups"
import Whatwe from "../../components/Whatwe"
import Whylux from "../../components/Whylux"
import Experience from "../../components/Experience"
import AboutUsSection from "../../components/AboutUsSection"
import Testimonial from "../../components/Testimonial"
import Destinations from "../../components/Destinations";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Groups></Groups>
      <Destinations></Destinations>
      <Experience></Experience>
      <Whatwe></Whatwe>
      <Whylux></Whylux>
      <Testimonial></Testimonial>
      <AboutUsSection></AboutUsSection>
    </>
  );
}
