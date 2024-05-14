import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Image from "next/image";
import React from "react";
import data from '../../data/BuyerGuide/data.json'
import { FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
type Props = {};

const buyersGuide = (props: Props) => {

  const { guide } = data;
  return <section>
    <PageHeading
      imageSrc="assets/ourculture/asset 1.jpeg"
      heading="
        Buyer's Guide"
    />
    <div 
      className="w-full h-full"
      style={{
        backgroundImage: "url('/assets/realstateinside/buy-guide.jpg')",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container className="m-auto flex flex-col items-center px-2"
      >
        <div className="heading flex flex-col items-center justify-center py-10 md:py-20 sm:px-20 lg:px-24 gap-3 md:gap-8 lg:gap-10  lg:max-w-full" >
          <h2 className="font-poppins text-[25px] md:text-[46px] uppercase leading-[1.3em] font-[300] text-center"><strong className="font-[600] ">A HASSLE FREE</strong> GUIDE TO BUYING</h2>
          <p className="text-[#2d2d2d] text-[15xpx] md:text-[22px] font-poppins text-center">Buying a home can be one of the grandest and happiest decisions of your life. It can also be one of the most complex and demanding decisions. To ready you for the upcoming transition, here is a general overview of what to expect and prepare.</p>
        </div>

        <div className=" lg:w-[88%] flex justify-center " style={{ border: "double #C1A468" }}>
          <Image
            src='/assets/realstateinside/Jas-Oberoi-Group-team.jpg'
            height={750}
            width={580}
            alt="JASOBEROI"
            layout="responsive"
            className="object-cover w-full lg:max-h-[830px] "
          />
        </div>

        {/* Guide */}
        <div className="py-10 md:py-18 lg:py-20  md:px-[40px] lg:px-[0px] lg:w-[80%] border-b-2 flex flex-col gap-6  mb-5">
          {
            guide.guide.map((data, index) => (
              <div key={index} className="">
                <h2 className="font-poppins font-[600] text-center text-[24px] lg:text-left lg:text-[29px] uppercase mb-[11px] ">{data.title}</h2>
                {data.contents.map((para) => (
                  <p className="text-center text-[14px] lg:text-left lg:text-[16px] text-[#212111]">{para.content}</p>
                ))}
              </div>
            ))
          }
        </div>

        <div className="heading w-[97%] sm:w-[70%] md:w-[50%] m-auto flex flex-col items-center justify-center gap-4 py-9 text-center">
              <h2 className="font-poppins text-[35px] md:text-[48px] uppercase leading-[1em] font-[300]"><strong className="font-[600] ">WE’D LOVE</strong>TO MEET YOU!</h2>
              <p className="text-[#2D2D2D] text-[15px] font-poppins">Whether buying or selling a home, we’ll select one of our experienced agents to make your dream come true based on your lifestyle needs.</p>
              <button className="uppercase font-semibold text-[15px] mt-2 bg-black text-white py-2 px-4"> Contact Us</button>
        </div>
        <div className="flex justify-between gap-9 mb-[70px] text-[16px] sm:text-[20px]">
        <div className="flex gap-2 items-center ">
                  <FaMobileAlt />
                  <a href="tel:7789947450">
                    778.994.7450
                  </a>
                </div>
                <div className="flex gap-2 items-center ">
                  <CiMail />
                  <a href="mailto:jo@jasoberoi.ca">
                    jo@jasoberoi.ca
                  </a>
                </div>
        </div>
      </Container>

    </div>  </section>;
};

export default buyersGuide;
