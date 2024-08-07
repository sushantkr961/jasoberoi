import Image from "next/image";
import React from "react";
import Container from "../Containers/Container";
import Carousel from "../Carousel/Carousel";
import Link from "next/link";

interface ContactJasProps { }

const imageUrls = [
  "/assets/webp/asset 4.webp",
  "/assets/webp/asset 5.webp",
  "/assets/webp/asset 6.webp",
  "/assets/webp/asset 7.webp",
  "/assets/webp/asset 8.webp",
  "/assets/webp/asset 9.webp",
  "/assets/webp/asset 10.webp",
  "/assets/webp/asset 11.webp",
  "/assets/webp/asset 12.webp",
  "/assets/webp/asset 13.webp",
  "/assets/webp/asset 14.webp",
  "/assets/webp/asset 15.webp",
];

const ContactJas: React.FC<ContactJasProps> = () => {
  return (
    <section className="bg-white text-white ">
      <Container className="mx-auto px-6 sm:px-6 lg:px-8 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-8 lg:pt-[80px]  pb-12 ">
          <div className="flex justify-center items-center m-auto  ">
            <Image
              src="/assets/webp/jas-oberoi-team.webp"
              alt="Team Image"
              className="w-full h-full lg:w-[80%] m-auto"
              height={1200}
              width={1200}
            />
          </div>
          {/* 19% 0%  */}
          <div className="flex flex-col  items-center lg:items-start gap-5 text-center md:text-left space-y-4  px-5 xl:pr-[26%] ">
            <p className="font-lato  lg:leading-[2.6rem] leading-[1.6rem] uppercase font-[500] text-[16px] lg:text-[22px] xl:text-[24px]  text-[#FFFFFF] text-center  lg:text-left">
              AT JAS OBEROI GROUP, WE ARE A TEAM OF EXPERT ADVISORS WITH A VAST
              NETWORK OF INDUSTRY PROFESSIONALS SO THAT ALL YOUR REAL ESTATE
              NEEDS ARE UNDER ONE ROOF.
            </p>
            <Link href="/contact" className="w-[210px] text-center sm:w-[260px] lg:w-[48%] uppercase bg-[#E7C67C] text-black px-3 py-2 font-bold shadow-lg   transition-colors">
              Connect with Jas
            </Link>
          </div>
        </div>
        <div className="flex justify-center space-x-2 py-4">
          <Carousel imageUrls={imageUrls} fullScreen={false} />
        </div>
      </Container>
    </section>
  );
};

export default ContactJas;
