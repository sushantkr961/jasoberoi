import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Image from "next/image";
import React from "react";

type Props = {};

const buyersGuide = (props: Props) => {
  return <section>
    <PageHeading
      imageSrc="assets/ourculture/asset 1.jpeg"
      heading="
        Buyer's Guide"
    />

    <Container className="m-auto flex flex-col items-center">
      <div className="heading flex flex-col items-center justify-center py-10 md:py-20 sm:px-20 lg:px-24 gap-3 md:gap-8 lg:gap-10  lg:max-w-full" >
        <h2 className="font-poppins text-[25px] md:text-[46px] uppercase leading-[1.3em] font-[300] text-center"><strong className="font-[600] ">A HASSLE FREE</strong>GUIDE TO BUYING</h2>
        <p className="text-[#2d2d2d] text-[15xpx] md:text-[22px] font-poppins text-center">Buying a home can be one of the grandest and happiest decisions of your life. It can also be one of the most complex and demanding decisions. To ready you for the upcoming transition, here is a general overview of what to expect and prepare.</p>
      </div>

      <div className=" lg:w-[88%] flex justify-center " style={{border:"double #C1A468"}}>
            <Image
              src='/assets/realstateinside/Jas-Oberoi-Group-team.jpg'
              height={750}
              width={580}
              alt="JASOBEROI"
              layout="responsive"
              className="object-cover w-full lg:max-h-[830px] "
            />

          </div>
    </Container>
  </section>;
};

export default buyersGuide;
