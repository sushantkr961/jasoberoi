import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Image from "next/image";
import React from "react";
import Data from "../../data/OurCulture/data.json";
import GoalCard from "@/components/Missons/GoalCard";
import { GoPeople } from "react-icons/go";
import { GrSupport } from "react-icons/gr";
import { TbGridDots } from "react-icons/tb";
import { FaArrowRight, FaPeopleArrows } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const ourCulture = (props: Props) => {
  const { "OUR-CULTURE": OUR_CULTURE, "OUR-GOAL": OUR_GOAL } = Data;
  return <section>
    <PageHeading imageSrc="assets/ourculture/asset 1.jpeg" heading="Our Culture" />

    <Container className="m-auto px-4">

      {/* Our Culture */}
      <div className="flex flex-col md:flex-row justify-between mt-[48px] sm:mt-[44px] lg:mt-[108px]  md:mb-[80px]">
        <div className="md:w-[47%] flex justify-center">
          <Image
            src={`/assets/ourculture/${OUR_CULTURE.img}`}
            height={700}
            width={580}
            alt="cluture"
            layout="responsive"
            className="hidden md:block object-cover w-full lg:max-h-[830px] lg:max-w-[580px]"
          />

          <img
            src={`/assets/ourculture/${OUR_CULTURE.img}`}
            alt="cluture"
            className="md:hidden object-cover object-top max-h-[8 00px] w-full"
          />

        </div>
        {/* Right Side Description */}
        <div className="md:w-[51%] mt-7 md:mt-0  pr-3 lg:pr-10  text-center xl:text-left">
          <div className="heading text-center">
            <h2 className="font-poppins text-[35px] md:text-[48px] uppercase leading-[1.2em] font-[300]"><strong className="font-[600] ">{OUR_CULTURE.title}</strong> {OUR_CULTURE.subtitle}</h2>
            <p className="text-[#D3AA54] text-[15px] md:text-[21px] font-poppins mt-4 md:mt-4">{OUR_CULTURE.tagline}</p>
          </div>

          <div className="flex flex-col gap-7 mt-7">
            {
              OUR_CULTURE.descriptions.map((data, index) => (
                <p key={index} className="font-poppins text-[15px] text-[#2D2D2D]">{data.content}</p>
              ))
            }

          </div>
        </div>
      </div>

      {/* Our Goals */}
      <div className="flex flex-col lg:flex-row justify-between  gap-8 lg:gap-0 mb-[80px] mt-6 md:px-[60px] ">

        <div className="lg:w-[50%] mt-7 md:mt-0  pr-3 lg:pr-10 text-center  xl:text-left">
          <div className="heading">
            <h2 className="font-poppins text-[35px]  md:text-[48px] uppercase leading-[1.2em] font-[300] text-center"><strong className="font-[600] ">{OUR_GOAL.title}</strong> {OUR_GOAL.subtitle}</h2>
          </div>
          <div className="flex flex-col gap-7 mt-7">
            {
              OUR_GOAL.descriptions.map((data, index) => (
                <p key={index} className="font-poppins text-[15px] md:text-[18px] lg:text-[19px] xl:text-[22px] md:leading-[1.7em] text-[#2D2D2D]">{data.content}</p>
              ))
            }

          </div>
        </div>
        
        {/* Right SIDE PART */}
        <div className="lg:w-[50%] flex flex-col  items-center gap-5">
          <GoalCard 
          icon={<GoPeople  className='text-[30px] text-[#D3AA54]' />}
            name="Generating lasting value for clients"
          />
          <GoalCard 
          icon={<FaPeopleArrows  className='text-[30px] text-[#D3AA54]' />}
            name="Connecting our clients to industry professionals"
          />
          
          <GoalCard 
          icon={<TbGridDots  className='text-[30px] text-[#D3AA54]' />}
            name="
            Creating a Hassle-Free Experience"
          />
          
          <GoalCard 
          icon={<GrSupport className='text-[30px] text-[#D3AA54]' />}
            name="Supporting our communities"
          />
        </div>
      </div>
      <div className="w-full justify-center flex mb-[80px]">
        <Link
          href={"/contact"}
          className="m-auto flex gap-2 items-center "
        >
            <div className="text-[29px]">Contact </div>
            <FaArrowRight className='hidden md:block text-[24px] text-[#D3AA54]' />
        </Link>
      </div>
    </Container>
  </section>;
};

export default ourCulture;
