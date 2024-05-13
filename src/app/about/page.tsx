import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Image from "next/image";
import React from "react";
import Data from "../../data/AboutUs/data.json";
import { FaInstagramSquare, FaYoutubeSquare, FaFacebookSquare, FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import TeamCard from "@/components/aboutpage/TeamCard";
type Props = {};

const About = (props: Props) => {
  const { JASOBEROI, TEAM } = Data;
  console.log(TEAM);
  
  return (
    <section >
      <PageHeading
        imageSrc="assets/aboutus/asset 16.jpeg"
        heading="About Us"
      />

      <Container className="m-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mt-[48px] sm:mt-[44px] lg:mt-[108px] mb-[80px]">
          <div className="md:w-[47%] flex justify-center">
            <Image
              src="/assets/aboutus/asset 2.jpeg"
              height={700}
              width={580}
              alt="JASOBEROI"
              layout="responsive"
              className="hidden md:block object-cover w-full lg:max-h-[830px] lg:max-w-[580px]"
            />

            <img
              src="/assets/aboutus/asset 2.jpeg"
              alt="JASOBEROI"
              className="md:hidden object-cover object-top max-h-[1090px] w-full"
            />

          </div>
          {/* Right Side Description */}
          <div className="md:w-[51%] mt-7 md:mt-0  pr-3 lg:pr-10 text-center  md:text-left">
            <div className="heading">
              <h2 className="font-poppins text-[35px] md:text-[48px] uppercase leading-[1em] font-[300]"><strong className="font-[600] ">{JASOBEROI.firstname}</strong> {JASOBEROI.lastname}</h2>
              <p className="text-[#D3AA54] text-[15px] md:text-[20px] font-poppins">{JASOBEROI.workd}</p>
            </div>

            <div className="flex flex-col gap-7 mt-7">
              {
                JASOBEROI.descriptions.map((data, index) => (
                  <p className="font-poppins text-[15px] text-[#2D2D2D]">{data.content}</p>
                ))
              }
              <p className="font-poppins text-[15px] font-semibold">{JASOBEROI.benefits}</p>
              <hr className="border-t-2" />

              <div className="grid grid-cols-1 gap-3  place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                <div className="flex gap-2 items-center">
                  <FaMobileAlt />
                  <a href="tel:7789947450">
                    778.994.7450
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <CiMail />
                  <a href="mailto:jo@jasoberoi.ca">
                    jo@jasoberoi.ca
                  </a>
                </div>
                <div className="flex gap-2 items-center text-[2rem] " >
                  <FaInstagramSquare />
                  <FaYoutubeSquare />
                  <FaFacebookSquare />
                </div>
                <div className="mt-5 xl:mt-0 flex justify-between lg:col-span-3 xl:col-auto m-auto">
                  {/* featured-listing/ */}
                  <button className="py-2 bg-[#D3AA54] text-white font-bold px-2">
                    VIEW PROPERTIES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card Section */}
        <div>
          {/* Here Come 4 Card */}
          <div className="heading text-center">
            <p className="text-[#D3AA54] text-[19px] md:text-[16px] font-poppins font-[500]">It’s our people who make the difference</p>
            <h2 className="font-poppins text-[18px] md:text-[44px] uppercase leading-[1em] text-[#002244] font-[700]">MEET OUR TEAM</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 lg:grid-cols-4 items-center justify-center w-full m-auto mt-[35px]">
            {/* Here Come Four Card */}
            {
              TEAM.map((data) => (
                <TeamCard
                  teamMemberDetails={data}
                  key={data.name}
                />
              ))
            }
          </div>
            <div className="p-[50px] mb-[18px] flex">
              <button className="bg-black m-auto uppercase text-[14px] py-[12px] px-[24px] text-center text-white  font-bold">View All Properties</button>
            </div>
        </div>
      </ Container >
    </section>
  );
};

export default About;
