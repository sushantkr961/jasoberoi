import ContactJas from "@/components/homepage/ContactJas";
import Experience from "@/components/homepage/Experience";
import HeroSection from "@/components/homepage/HeroSection";
import Property from "@/components/homepage/Property";
import Head from "next/head";


export default function Home() {
  return (
    <>

    <HeroSection />
      <Experience />
      <ContactJas />
      <Property />
    </>
  );
}
