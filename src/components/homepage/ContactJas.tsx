import Image from "next/image";
import React from "react";
import Container from "../Containers/Container";
import Carousel from "../Carousel/Carousel";

interface ContactJasProps { }

const ContactJas: React.FC<ContactJasProps> = () => {
  return (
    <section className="bg-white text-white ">
        <Container className="mx-auto px-6 sm:px-6 lg:px-8 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-8 lg:pt-[80px]  pb-12 ">
          <div className="flex justify-center items-center m-auto  ">
            <img
              src="/assets/jas-oberoi-team.jpg"
              alt="Team Image"
              className="w-full lg:w-[80%] m-auto"
              // width={590}
              // height={390}

            />
          </div>
          {/* 19% 0%  */}
          <div className="flex flex-col  items-center lg:items-start gap-5 text-center md:text-left space-y-4  px-5 xl:pr-[26%] ">
            <p className="font-lato lg:leading-[2.6rem] leading-[1.6rem] uppercase font-thin text-[16px] lg:text-[22px] xl:text-[24px]  text-[#FFFFFF] text-center  lg:text-left" style={{ fontWeight: '300' }}>
              AT JAS OBEROI GROUP, WE ARE A TEAM OF EXPERT ADVISORS WITH A VAST NETWORK OF INDUSTRY PROFESSIONALS SO THAT ALL YOUR REAL ESTATE NEEDS ARE UNDER ONE ROOF.
            </p>
            <button className="w-[210px] sm:w-[250px] lg:w-[45%] uppercase bg-[#E7C67C] text-black px-6 py-2  shadow-lg  lg:text-left transition-colors">
              Connect with Jas
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2 py-4">
          {/* Icons and text for awards */}
          <Carousel />
          {/* Repeat for other icons */}
        </div>
      </Container>

    </section>
  );
};

export default ContactJas;
