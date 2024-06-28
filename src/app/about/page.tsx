import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Image from "next/image";
import React from "react";
import Data from "../../data/AboutUs/data.json";
import { FaInstagramSquare, FaYoutubeSquare, FaFacebookSquare, FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import TeamCard from "@/components/Missons/TeamCard";

import link from '../../data/link.json'
import Link from "next/link";
type Props = {};

const About = (props: Props) => {
  const { JASOBEROI, TEAM } = Data;

  return (
    <section >

      <PageHeading
        imageSrc="assets/aboutus/asset 16.webp"
        heading="About Us"
      />

      <Container className="m-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mt-[48px] sm:mt-[44px] lg:mt-[108px] mb-[80px]">
          <div className="md:w-[47%]  justify-center hidden md:flex">
            <Image
              src={`/assets/aboutus/${JASOBEROI.image}`}
              height={700}
              width={580}
              alt="JASOBEROI"
              style={{ width: "auto", height: "auto" }}
              className="hidden md:block object-cover w-full lg:max-h-[830px] lg:max-w-[580px]"
            />
          </div>

          <div className="md:w-[47%]  justify-center flex md:hidden ">
            <Image
              src={`/assets/aboutus/${JASOBEROI.image}`}
              height={700}
              width={580}
              alt="JASOBEROI"
              style={{ width: "auto", height: "auto" }}
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

              <div className="grid grid-cols-1 gap-3  place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
                <div className="flex gap-2 items-center">
                  <FaMobileAlt />
                  <a href={`tel:${link.phone}`}>
                    {link.phone}
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <CiMail />
                  <a href={`mailto:${link.email}`}>
                    {link.email}
                  </a>
                </div>
                <div className="flex gap-2 items-center text-[2rem] " >
                  <a href={link.instagram} target="_black">
                    <FaInstagramSquare />

                  </a>
                  <a href={link.youtube} target="_black">

                    <FaYoutubeSquare />
                  </a>
                  <a href={link.facebook} target="_black">

                    <FaFacebookSquare />
                  </a>
                </div>
                <div className="mt-5 xl:mt-0 flex justify-between lg:col-span-3 2xl:col-auto m-auto">
                  {/* featured-listing/ */}
                  <Link href={"/featured-listing"} className="py-2 bg-[#D3AA54] text-white font-bold px-2">
                    VIEW PROPERTIES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card Section */}
        <div>
          {/* Here Come 4 Card */}
          <div className="heading text-center">
            <p className="text-[#D3AA54] text-[19px] md:text-[16px] font-poppins font-[500] mb-1">It’s our people who make the difference</p>
            <h2 className="font-poppins text-[18px] md:text-[44px] uppercase leading-[1.1em] text-[#002244] font-[700] ">MEET OUR TEAM</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-center justify-center w-full m-auto mt-[35px]">
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
            <Link href={"/featured-listing"} className="bg-black m-auto uppercase text-[14px] py-[12px] px-[24px] text-center text-white  font-bold">View All Properties</Link>
          </div>
        </div>
      </ Container >
    </section>
  );
};

export default About;
