import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer";
import ContactJas from "@/components/homepage/ContactJas";
import Experience from "@/components/homepage/Experience";
import HeroSection from "@/components/homepage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience />
      <ContactJas />
    </>
  );
}
