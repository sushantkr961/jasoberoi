import PageHeading from "@/components/Common/PageHeading";
import YoutubeVideo from "@/components/Common/YoutubeVideo";
import Container from "@/components/Containers/Container";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaMobileAlt, FaYoutube } from "react-icons/fa";
import link from '../../data/link.json'

type Props = {};

const soldCommercials = (props: Props) => {
  return <section>
    <PageHeading
      imageSrc="assets/ourculture/asset 1.jpeg"
      heading="Sold Commercials"
    />

    <Container className="m-auto flex flex-col items-center px-2">
      <div className="heading flex flex-col items-center justify-center pt-10 sm:pt-14 md:pt-20 sm:px-20 lg:px-24  lg:gap-0  lg:max-w-full" >
        <h2 className="font-poppins text-[35px] md:text-[48px] uppercase leading-[1.3em] font-[300] text-center"><strong className="font-[600] ">HOW TO</strong> MAKE MONEY</h2>
      </div>
      <div className="w-full sm:w-[95%]  h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[740px] mx-auto max-h-[600px] xl:max-h-full mt-[30px] md:mt-[50px]">
        <YoutubeVideo
          src="https://www.youtube.com/embed/-MaWYUiauIg?si=YwuDgH_lXmzc4mUh"
          height="100%"
          width="100%"
        />
      </div>

      <div className=" md:py-10    lg:px-[0px]  border-b-2 flex flex-col gap-6  mb-5">

        <div className="mt-8">
          <Link
            href={"/contact"}
            className="flex gap-3 items-center uppercase font-semibold text-[15px]  mt-2 bg-black text-white py-3 px-7">
            {" "}
            <FaYoutube />
            Subscribe to my channel
          </Link>
        </div>
      </div>

      <div className="heading w-[97%] sm:w-[90%] lg:w-[54%] m-auto flex flex-col items-center justify-center gap-4 py-9 text-center">
        <h2 className="font-poppins text-[35px] md:text-[48px] uppercase leading-[1em] font-[300]">
          <strong className="font-[600] ">SHARE YOUR </strong>{" "}
          STORY!
        </h2>
        <p className="text-[#2D2D2D] text-[15px] font-poppins">
          Get in contact with Jas Oberoi Group to and begin your own story.
        </p>
        <Link
          href={"/contact"}
          className="uppercase font-semibold text-[15px]  mt-2 bg-black text-white py-2 px-7">
          {" "}
          Contact Us
        </Link>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-4 items-center md:gap-9 mb-[70px] text-[18px]">
        <div className="flex gap-2 items-center ">
          <FaMobileAlt />
          <a href={`tel:${link.phone}`}>{link.phone}</a>
        </div>
        <div className="flex gap-2 items-center ">
          <CiMail />
          <a href={`mailto:${link.email}`}>{link.email}</a>
        </div>
      </div>

    </Container>


  </section>;
};

export default soldCommercials;
