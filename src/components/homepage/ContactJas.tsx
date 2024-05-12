import Image from "next/image";
import React from "react";
import Container from "../Containers/Container";
import Carousel from "../Carousel/Carousel";

interface ContactJasProps {}

const ContactJas: React.FC<ContactJasProps> = () => {
  return (
    <section className="bg-white text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-black max-w-[1350px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20  pb-12">
          <div className="flex justify-center">
            <Image
              src="/assets/jas-oberoi-team.jpg"
              alt="Team Image"
              width={590}
              height={390}
              layout="intrinsic"
            />
          </div>
          
    {/* letter-spacing: 0.8px;
    
     */}
      {/* 19% 0%  */}
          <div className="flex flex-col gap-5 text-center md:text-left space-y-4  px-5 pr-[19%]">
            <p className="font-lato leading-[2.6rem] uppercase  font-thin  text-[24px] text-[#FFFFFF]" style={{fontWeight:'300'}}>
            AT JAS OBEROI GROUP, WE ARE A TEAM OF EXPERT ADVISORS WITH A VAST NETWORK OF INDUSTRY PROFESSIONALS SO THAT ALL YOUR REAL ESTATE NEEDS ARE UNDER ONE ROOF.
            </p>
            <button className="w-[45%] uppercase bg-yellow-500 text-black px-6 py-2 rounded shadow-lg hover:bg-yellow-600 transition-colors">
              Connect with Jas
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2 py-4">
          {/* Icons and text for awards */}
          <Carousel />
          {/* Repeat for other icons */}
        </div>
      </div>
    </section>
  );
};

export default ContactJas;
