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

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Groups></Groups>
      <Experience></Experience>
      <Whatwe></Whatwe>
      <Whylux></Whylux>
      <AboutUsSection></AboutUsSection>
    </>
  );
}
