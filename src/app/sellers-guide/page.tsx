import YoutubeVideo from "@/components/Common/YoutubeVideo";
import Container from "@/components/Containers/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const sellersGuide = (props: Props) => {
  return <section>
    <div
      className="w-full h-full"
      style={{
        backgroundImage: "url('/assets/realstateinside/buy-guide.jpg')",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container className="m-auto flex flex-col items-center px-2">
        <div className="heading flex flex-col items-center justify-center pt-10 sm:pt-14 md:pt-20 sm:px-20 lg:px-24  lg:gap-0  lg:max-w-full" >
          <h3 className="font-poppins text-[24px] md:text-[29px] font-bold tracking-[3.1px] text-[#D3AA54]">JAS OBEROI GROUP</h3>
          <h2 className="font-poppins text-[35px] md:text-[48px] uppercase leading-[1.3em] font-[300] text-center"><strong className="font-[600] ">WHY LIST</strong> WITH US</h2>
        </div>

        <div className="w-full sm:w-[95%]  h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[740px] mx-auto max-h-[600px] xl:max-h-full mt-[50px]">
          <YoutubeVideo
            src="https://www.youtube.com/embed/BBZuL3X6OAo?si=UO4cAX90sBniiULj"
            height="100%"
            width="100%"
          />
        </div>
      </Container>
      {/* Seller Guide */}
      <div className="bg-white w-full flex justify-center py-[50px] md:py-[80px]">
        <Container className="m-auto">
          <div className="w-[98%] md:w-[90%] lg:w-[80%] m-auto flex flex-col gap-8 justify-center items-center ">
            <p className="text-[#2d2d2d] leading-[1.4em] tracking-[0.4px] text-[15px] md:text-[20px] font-poppins text-center">At <strong>Jas Oberoi Group</strong>, our job is to understand your priorities and market your home in the best light.</p>
            <p className="text-[#2d2d2d] leading-[1.4em] tracking-[0.4px] text-[15px] md:text-[20px] font-poppins text-center">By maintaining constant communication, we’re here to guide both experienced and inexperienced investors along their journey and make sure that they are.  </p>
            <p className="text-[#2d2d2d] leading-[1.4em] tracking-[0.4px] text-[15px] md:text-[20px] font-poppins text-center">By using a combination of traditional means, online marketing, social media, and the Jas Oberoi Group network of buyers and sellers, we will connect you to the perfect buyer for your home.</p>
            <p className="text-[#2d2d2d] leading-[1.4em] tracking-[0.4px] text-[15px] md:text-[20px] font-poppins text-center">We pride ourselves in mastering the market, our unparalleled experience, and on the close relationships we build with our clients.</p>
            <p className="text-[#2d2d2d] leading-[1.4em] tracking-[0.4px] text-[15px] md:text-[20px] font-poppins text-center">Over the years we have made a name in the business, won multiple awards and acclaim, and built a team based on the foundations of understanding client priorities and to collaborate and strategize on their behalf.</p>
            <p className="text-[#2d2d2d] leading-[1.4em] tracking-[0.4px] font-bold text-[15px] md:text-[20px] font-poppins text-center fo">Save time for yourself, seize financial efficiency, and work with Jas Oberoi Group.</p>
          </div>
        </Container>
      </div>
    </div>

    {/* Card Section */}
    <Container className="max-w-[1550px]  xl:mt-[28px] mx-auto flex flex-col gap-8">
      <div className="heading text-center">
        <h2 className="font-poppins text-[35px] lg:text-[48px] uppercase leading-[1.2em] font-[300]"><strong className="font-[600] ">LIST</strong> EXCLUSIVELY</h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between md:mt-[0px] lg:mt-[44px] md:mb-[80px]">
        <div className="lg:w-[50%] flex justify-center">
          <Image
            src={`/assets/realstateinside/exclusive-property.jpg`}
            height={700}
            width={580}
            alt="exclusive-property"
            layout="responsive"
            className=" md:block object-cover w-full max-h-[80%] sm:max-w-[90%] lg:max-h-[100%] lg:max-w-[90%] xl:max-w-[90%]"
          />


        </div>
        {/* Right Side Description */}
        <div className="px-1 sm:px-0 sm:w-[80%] lg:w-[50%]  sm:mt-4 md:mt-7 mx-auto lg:mx-0 lg:mt-0 pr-3 lg:pr-10 text-center lg:text-left">
          <div className="flex flex-col gap-7 mt-7 md:mt-0">
            <p className="font-poppins text-[15px] md:leading-[2em]">There may be times where you wish to sell your property without any attention; from family, friends, neighbours or on Multiple Listing System (MLS). Whatever your reasons are, we are familiar with the process. We have a track record of selling properties exclusively without putting it to the public.</p>
            <p className="font-poppins text-[15px] md:text-[18px] font-bold">We promise you will not be disappointed.</p>
            <Link

              href={"/contact"}
          className="uppercase font-semibold text-[15px] font-poppins mx-auto w-[150px] text-center lg:mx-0 mt-2 bg-black text-white py-2 px-4">Contact Jas</Link>          
            <div className="w-full h-full mt-4">
              <Image
                src={`/assets/realstateinside/Logos.png`}
                height={700}
                width={580}
                alt="exclusive-property"
                layout="responsive"
                className=" md:block object-cover w-full lg:max-h-[830px] lg:max-w-[580px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="heading w-[97%] sm:w-[70%] lg:w-[54%] m-auto flex flex-col items-center justify-center gap-4 pt-9 md:pt-0 pb-20 text-center">
        <h2 className="font-poppins text-[35px] md:text-[48px] uppercase leading-[1em] font-[300]">
          <strong className="font-[600] ">FREE</strong> HOME EVALUATION
        </h2>
        <p className="text-[#2D2D2D] text-[15px] font-poppins">
          Thinking about selling your home? Receive a free home evaluation to
          learn your property’s worth in today’s market.
        </p>
        <Link 
          href={"/exclusive-properties"}
        className="uppercase font-semibold text-[15px] mt-2 bg-black text-white py-2 px-4">
          {" "}
          Get Evaluation
        </Link>
      </div>
    </Container>
  </section>;
};

export default sellersGuide;
