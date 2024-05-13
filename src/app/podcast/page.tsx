import PageHeading from "@/components/Common/PageHeading";
import YoutubeVideo from "@/components/Common/YoutubeVideo";
import Container from "@/components/Containers/Container";
import React from "react";
import { BsSpotify } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";

type Props = {};

const podcast = (props: Props) => {
  return <section>
    <PageHeading imageSrc="assets/ourculture/asset 1.jpeg" heading="Unplugged With Jas Oberoi Podcast" className="md:text-[50px]"/>

    {/* Video Container */}
    <Container className="w-full  h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] mx-auto max-h-[600px] xl:max-h-full my-[50px]">
      <YoutubeVideo
        src="https://www.youtube.com/embed/3GUeLd6EEbs?si=rlr-EVaVcW666uvA"
        height="100%"
        width="100%"
      />
    </Container>

    {/* On Spotify */}
    <div className="w-full bg-black  ">
      <Container className="bg-black flex flex-col text-center lg:text-left lg:flex-row lg:gap-8 xl:gap-0 justify-between pt-[60px] lg:pt-[80px] px-[36px] m-auto">
        <div className="flex justify-center lg:w-[46%] items-center">
          <div className="w-[559px] h-[260px] sm:h-[300px] lg:h-[361px] xl:h-[381px]">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/episode/6VBsGdt6mB6wsfhxJG32MV/video?utm_source=generator"
            width="100%"
            height="100%"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" />
          </div>
        </div>
        <div className="lg:w-[53%] mt-8 lg:mt-0">
          <img
            src="/assets/realstateinside/unplugged-1.jpg "
            className="w-[70%] md:lg-[60%] lg:w-[70%] mb-7 mx-auto lg:mx-0"
          >
          </img>
          <div className="tracking-[1px] flex flex-col gap-6 text-[15px] font-poppins font-[300] md:text-[18px] text-white">
            <p >Come for entrepreneurial advice, stay for the real estate propaganda.</p>
            <p >Join the Jas Oberoi Group as we dive into the local drama, professional struggles, and the latest updates on the real estate market in the Fraser Valley. Featuring special guests from intersecting roles such as mortgage brokers, financial advisor, marketing and more.</p>
            <p >Explore personal advice, business strategies and the insight you need to succeed as a professional in BC.</p>
            <p >Listen and learn - We look forward to making you laugh or pissing you off.</p>
          </div>
        </div>
      </Container>
      <div className="flex justify-center py-10 lg:py-20">
        <a 
          href="https://open.spotify.com/show/6cJ4jdYMaKM4CcPXwDOASR?si=b998a1974c75402d" 
          target="_blank"
        className="bg-white py-2 md:py-3 px-3 flex justify-center items-center w-[300px] text-[20px] md:text-[22px] font-poppins  rounded-lg uppercase"
        >
            Listen On Spotify						
            <BsSpotify   className="text-green-600 text-[38px] ml-4"/>
        </a>
      </div>
    </div>
  </section>;
};

export default podcast;
