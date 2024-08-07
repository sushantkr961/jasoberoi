"use client";
import GalleryCarousel from "@/components/Carousel/GalleryCarsouel";
import YoutubeVideo from "@/components/Common/YoutubeVideo";
import Container from "@/components/Containers/Container";
import MusicCard from "@/components/Contributions/MusicCard";
import SponnsorsCard from "@/components/Contributions/SponnsorsCard";
import { motion, useAnimation } from 'framer-motion';
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import data from "../../data/Contributions/data.json";

type Props = {};

function page({ }: Props) {
  const { music, sponsors } = data;


  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if(inView2){
      controls2.start('visible');
    }

  }, [controls, inView,inView2,ref2]);

  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };


  return (
    <section className="bg-[#F0F2F4]">
      <motion.div
        initial="hidden"
        animate='visible'
        variants={containerVariants}
        className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[100vh] mx-auto max-h-[600px] xl:max-h-full mt-[10px] ">
        {/* Youtube video */}
        <YoutubeVideo
          src="https://www.youtube.com/embed/QN6rR1zuu_k?si=Zi48mup3kGDCDPZs"
          height="100%"
          width="100%"
        />
      </motion.div>
      {/* BantingGalaw */}
      <div className="bg-[#111B1E] sm:py-[3%] flex justify-center pb-[10%] ">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between mt-[36px] sm:my-[44px]  lg:my-[70px]  text-white sm:px-6">
            {/* Right Side Description */}
            <div className="md:w-[51%] mt-7 md:mt-0 pr-3 lg:pr-0 text-center ">
              <div className="heading text-center">
                <Image
                  src={`/assets/ourcontributions/BantingGalawhite.webp`}
                  height={700}
                  loading="lazy"
                  width={580}
                  alt="cluture"
                  className="md:block object-cover w-full "
                />
              </div>
              <div className="flex flex-col gap-5 mt-7 tracking-[1px]">
                <p className="font-poppins text-[15px] font-[400]">
                  JAS OBEROI GROUP JOINS HANDS WITH DIABETES CANADA TO HOST THE
                  BEST BANTING GALA OF 2022.
                </p>
                <p className="font-poppins text-[15px] font-[400]">
                  THE BLACK TIE EVENT WAS HELD AT THE ARIA BANQUET HALL ON
                  NOVEMBER 5TH.
                </p>
                <p className="font-poppins text-[15px] font-[400]">
                  WITH THE SUPPORT OF THE COMMUNITY WE WERE ABLE TO COME
                  TOGETHER AND HOST A BEAUTIFUL BLACK TIE GALA AND RAISED OVER
                  $110,000
                </p>
              </div>
            </div>
            <div className="w-full md:w-[47%] flex justify-center mt-[35px] md:mt-[0px]">
              <Image
                src={`/assets/ourcontributions/DSC00562.webp`}
                height={700}
                width={580}
                alt="cluture"
                loading="lazy"
                className="hidden md:block object-cover w-full lg:max-h-[830px] lg:max-w-[500px] xl:max-w-[560px]"
              />
              <Image
                src={`/assets/ourcontributions/DSC00562.webp`}
                height={700}
                width={580}
                alt="cluture"
                loading="lazy"
                className="md:hidden object-cover object-top max-h-[8 00px] w-full"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* 3 Image Card */}
      <div className="h-[800px] lg:h-[400px]  grid grid-cols-1 lg:grid-cols-3">
        <div
          className="relative h-full flex justify-center items-center"
          style={{
            backgroundImage: "url('/assets/ourcontributions/glass1.webp')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" h-full w-full opacity-[0.34] absolute z-10"></div>
          <div className="relative elementor-widget-container tracking-[6.7px] leading-[1.4em] text-center z-30 text-white text-[26px] md:text-[39px]">
            $110,000
            <br />
            RAISED
          </div>
        </div>
        <div
          className="relative h-full flex justify-center items-center"
          style={{
            backgroundImage:
              "url('/assets/ourcontributions/girlpurpledress.webp')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-[#000000] h-full w-full opacity-[0.34] absolute z-10"></div>
          <div className="relative elementor-widget-container tracking-[6.7px] leading-[1.4em] text-center z-30 text-white text-[26px] md:text-[39px]">
            20
            <br />
            SPONSORS
          </div>
        </div>
        <div
          className="relative h-full flex justify-center items-center"
          style={{
            backgroundImage: "url('/assets/ourcontributions/table.webp')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-[#000000] h-full w-full opacity-[0.34] absolute z-10"></div>

          <div className="relative elementor-widget-container tracking-[6.7px] leading-[1.4em] text-center z-30 text-white text-[26px] md:text-[39px]">
            300+
            <br />
            ATTENDEES
          </div>
        </div>
      </div>

      {/* DR. BRIAN RODRIGUES & RUI SHANG. */}

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={containerVariants}
      >
        <Container className="flex flex-col gap-7 sm:gap-9 justify-center m-auto py-16 xl:py-0 xl:min-h-[864px]">
          <div>
            <Image
              src={`/assets/ourcontributions/DSC00474.webp`}
              height={700}
              width={580}
              alt="cluture"
              layout="responsive"
              className="md:block object-cover w-full "
            />
          </div>
          <div className="sm:px-3 flex flex-col text-center  justify-between w-full">
            <div className="text-[#111B1E] text-[14px] lg:text-[15px] ">
              DR. BRIAN RODRIGUES & RUI SHANG.
            </div>
            <div>
              <div className="text-[#111B1E] text-[12px] lg:text-[15px] leading-[1.3rem] lg:leading-[1.8rem] tracking-[1px] mt-4 ">
                OVER 300 INDUSTRY LEADING PROFESSIONALS GATHERED AT THE ARIA
                BANQUET HALL TO ENJOY DELICIOUS FOOD, DRINK, AND GOOD COMPANY.
              </div>
            </div>
          </div>
        </Container>

      </motion.div>
      {/* SPONSORS AND SPEAKERS */}
      <div className="bg-[#111B1E] py-[40px] flex justify-center md:py-[5%] ">
        <Container>
          <div>
            <h2 className="text-white text-[25px] md:text-[39px] leading-[1.4em] text-center tracking-[4.2px] md:tracking-[6.7px]">
              SPONSORS AND SPEAKERS
            </h2>
          </div>
          {/* Sponsors Card */}
          <div className="grid mt-8 md:mt-12 xl:mt-16 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-y-14 md:px-9">
            {sponsors.map((data) => (
              <SponnsorsCard
                key={data.id}
                imageSrc={`/assets/ourcontributions/${data.image}`}
                altText={data.name}
                description={data.description}
                className="some-custom-class"
              />
            ))}
          </div>

          <div className="flex justify-center pt-10 lg:pt-20 pb-8">
            <p className=" font-poppins text-[14px] md:text-[15px] md:leading-[25px] font-[400] text-white mt-5 text-center ">
              MULTIPLE SPEAKERS SHARED THEIR PERSONAL EXPEREINCES;
              <br />
              DR. SATPREET SINGH, RAGHAV MANCHANDA, AND HENNESSY ESCOBAR
            </p>
          </div>
        </Container>
      </div>

      {/* ANGELINA RAII */}
      <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
  
      className=" sm:py-[2%] flex justify-center pb-[8%]">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-5 max-w-[1340px] justify-between mt-[36px] sm:my-[44px]  lg:my-[70px] ">
            <div className="w-full md:w-[37%] flex  md:mt-[0px]">
              <Image
                src={`/assets/ourcontributions/DSC00433.webp`}
                height={700}
                width={580}
                alt="cluture"
                layout="responsive"
                className=" object-cover m-auto w-full lg:max-h-[830px] lg:max-w-[471px]  xl:max-w-[471px]"
              />
            </div>
            {/* Right Side Description */}
            <div className="md:w-[58%]  h-full mt-2 md:mt-auto  pr-3 lg:pr-0 text-left flex flex-col w">
              <div className="md:w-[90%] lg:w-[50%] text-center md:text-left h-full mt-auto">
                <div className="heading ">
                  <h2 className="text-[#111B1E]  tracking-[6.7px] leading-[1.3em] text-[27px] font-poppins uppercase">
                    ANGELINA RAII
                  </h2>
                </div>
                <div className="flex  flex-col gap-5 mt-7">
                  <p className="text-[#111B1E] tracking-[1.2px] leading-[1.6em] font-poppins text-[15px] font-[400]">
                    AS HEARD ON I-HEART-RADIO, MANY SAW ANGELINA RAII FOR THE
                    FIRST TIME IN PERSON AND OFF-AIR FROM HER APPEARENCE AS
                    MID-DAY HOST FOR VIRGIN RADIO AS THE OFFICIAL EMCEE FOR THE
                    NIGHT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>

      {/* MUSIC MEDLEY AND MAGIC */}
      <div className=" lg:py-[10px] flex justify-center md:pb-[5%] ">
        <Container>
          <div>
            <h2 className="text-[#111B1E]  text-center tracking-[6.7px] leading-[1.3em] text-[27px] font-poppins uppercase ">
              MUSIC, MEDLEY, AND MAGIC.
            </h2>
          </div>
          <div className=" grid mt-8 md:mt-6 xl:mt-9 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-5 gap-y-5 md:gap-y-10 lg:gap-y-14 md:px-9">
            {music.map((data) => (
              <MusicCard
                key={data.id}
                imageSrc={`/assets/ourcontributions/${data.image}`}
                text={data.text}
                className="some-custom-class"
              />
            ))}
          </div>
        </Container>
      </div>

      {/* IMPACT & OUR DONORS*/}
      <div className="bg-[#111B1E]  py-[44px]  flex flex-col items-center md:py-[4%] gap-10 sm:gap-9  ">
        {/* COUNTLESS AMOUNT */}
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-y-7 max-w-[1340px] justify-between  lg:px-7 xl:px-0 ">
            {/* Left Side Description */}
            <div className="lg:mr-14 h-full  md:mt-auto pr-3 lg:pr-0 text-left flex flex-col items-end">
              <div className="flex justify-end flex-col md:w-[90%]  xl:w-[70%] text-center lg:text-right h-full mt-auto">
                <div className="flex flex-col gap-5 ">
                  <p className="text-white tracking-[1.2px] leading-[1.6em] font-poppins text-[15px] font-[400]">
                    COUNTLESS AMOUNT OF AUCTION PRIZES WHERE PROCEEDS WILL GO
                    DIRECTLY TO DIABETES CANADA.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side Description */}
            <div className="w-full flex md:mt-[0px]">
              <Image
                src={`/assets/ourcontributions/DSC00271.webp`}
                height={700}
                width={580}
                alt="cluture"
                layout="responsive"
                className=" object-cover m-auto w-full xl:max-w-[100%]"
              />
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <p className="text-white  tracking-[1.2px] leading-[1.6em] font-poppins text-[13px] font-[400]">
                ITEMS FOR BID AT THE SILENT AUCTION TABLE
              </p>
            </div>
          </div>
        </Container>

        {/* COUNTLESS AMOUNT */}
        <Container className="">
          <div className="w-full md:max-w-[70%] lg:max-w-[68%] m-auto flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-5 md:gap-7 text-center">
              <h2 className="text-white text-[25px] md:text-[39px] leading-[1.4em] text-center tracking-[4.2px] md:tracking-[6.7px]">
                IMPACT
              </h2>
              <p className="text-white tracking-[1.2px] leading-[1.6em] font-poppins md:text-[15px] font-[400]">
                WHEN WE FIRST DECIDED TO FUNDRAISE FOR DIABETES CANADA, OUR GOAL
                WAS TO RAISE $100,000.
              </p>

              <p className="text-white tracking-[1.2px] leading-[1.6em] font-poppins text-[15px] font-[400]">
                WITH THE LABOUR OF MANY HARDWORKING INDIVIDUALS AND THE GENEROUS
                SUPPORT OF OUR COMMUNITY WE WERE OVERJOYED TO ANNOUONCED THAT WE
                RAISED OVER $110,000 FOR DIABETES CANADA.
              </p>
              <p className="text-white tracking-[1.2px] leading-[1.6em] font-poppins text-[15px] font-[400]">
                THE MONEY RAISED TODAY WILL NOT ONLY BE USED FOR RESEARCH IN
                FINDING A CURE BUT ALSO IN SPREADING AWARENESS ON DIABETES AS
                MILLIONS OF CANADIANS ARE IMPACTED WITH DIABETES.
              </p>
            </div>
            {/* Sponsors Card */}
            <div className="mt-8 md:mt-12 xl:mt-16 w-full">
              {/* Right Side Description */}
              <div className="w-full flex md:mt-[0px]">
                <Image
                  src={`/assets/ourcontributions/DSC06089.webp`}
                  height={700}
                  width={580}
                  alt="cluture"
                  layout="responsive"
                  className=" object-cover m-auto w-full sm:max-w-[95%] lg:max-w-[90%] 2xl:w-full "
                />
              </div>
            </div>
          </div>
        </Container>

        {/* Add Slider in this section */}
        {/* GALLERY OF THE NIGHT */}
        <div className="pt-[5%] md:pb-[2%] overflow-hidden">
          <div className="w-full m-auto flex flex-col justify-center items-center">
            <div className="border-t-4 mb-3 border-white w-full" />
            <div className="flex flex-col justify-center items-center gap-5 md:gap-7 text-center">
              <h2 className="text-white text-[20px] sm:text-[25px] md:text-[39px] leading-[1.4em] text-center tracking-[3px] sm:tracking-[4.2px] md:tracking-[6.7px]">
                GALLERY OF THE NIGHT
              </h2>
            </div>
            <div className="flex justify-center space-x-2 pt-4">
              {/*  GALLERY OF THE NIGHT Slide Here*/}
              {/* <Carousel imageUrls={imageUrls} backgroundColor="none" fullScreen={false} className={"h-150 object-cover"} /> */}
              <GalleryCarousel />
            </div>
          </div>
        </div>

        {/* Add Slider in this section */}
        {/* THANK YOU TO OUR DONORS */}
        <div className="">
          <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[95%]  m-auto flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-5 md:gap-7 text-center">
              <h2 className="text-white text-[25px] md:text-[39px] leading-[1.4em] text-center tracking-[4.2px] md:tracking-[6.7px]">
                THANK YOU TO OUR DONORS
              </h2>
            </div>
            <div className="w-full flex  flex-col gap-16 mt-10">
              {/* Platinum sponsor */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-white text-center tracking-[6.7px] leading-[1.3em] text-[27px] font-poppins uppercase ">
                    PLATINUM SPONSOR
                  </h2>
                </div>
                {/* Imagge */}
                <div className="w-full flex md:mt-[0px]">
                  <Image
                    src={`/assets/ourcontributions/asset 178.webp`}
                    height={700}
                    width={580}
                    alt="cluture"
                    layout="responsive"
                    className="max-h-[80px] object-contain"
                  />
                </div>
              </div>

              {/* Gold Sponsors */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-white  text-center tracking-[6.7px] leading-[1.3em] text-[27px] font-poppins uppercase ">
                    GOLD SPONSORS
                  </h2>
                </div>
                {/* Image */}
                <div className="w-full flex flex-col md:flex-row md:mt-[0px] items-center justify-center">
                  <div className="w-full md:w-auto">
                    <Image
                      src={`/assets/ourcontributions/asset 179.webp`}
                      height={700}
                      width={580}
                      alt="cluture"
                      layout="responsive"
                      className="min-h-[80px] max-h-[80px] object-contain"
                    />
                  </div>
                  <div className="w-full md:w-auto">
                    <Image
                      src={`/assets/ourcontributions/asset 180.webp`}
                      height={700}
                      width={580}
                      alt="cluture"
                      layout="responsive"
                      className="min-h-[80px] max-h-[80px] object-contain"
                    />
                  </div>
                  <div className="w-full md:w-auto">
                    <Image
                      src={`/assets/ourcontributions/asset 181.webp`}
                      height={700}
                      width={580}
                      alt="cluture"
                      layout="responsive"
                      className="min-h-[80px] max-h-[80px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bronze sponsors */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-white  text-center tracking-[6.7px] leading-[1.3em] text-[27px] font-poppins uppercase ">
                    BRONZE SPONSORS
                  </h2>
                </div>
                {/* Images */}
                <div className="hidden md:grid  md:grid-cols-5 lg:grid  place-items-center lg:grid-cols-7 gap-4 justify-between">
                  {[
                    182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
                    194, 195,
                  ].map((data) => (
                    <Image
                      src={`/assets/ourcontributions/asset ${data}.webp`}
                      height={700}
                      width={580}
                      alt="cluture"
                      layout="responsive"
                      className="object-contain w-full "
                    />
                  ))}
                </div>

                <div style={{ flexWrap: "wrap" }} className="flex md:hidden flex-wrap  grid-cols-2  place-items-center gap-4 justify-between">
                  {
                    [182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195].map((data) => (
                      <Image
                        src={`/assets/ourcontributions/asset ${data}.webp`}
                        height={700}
                        width={580}
                        alt="cluture"
                        layout="responsive"
                        className=" max-w-[130px] object-contain w-[200px]"
                      />
                    ))
                  }
                </div>
                {/* Sponse Two Carousel right left */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
