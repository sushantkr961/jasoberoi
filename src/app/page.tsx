import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="relative py-28 lg:py-0 lg:min-h-[668px] w-full flex items-center justify-center "
        style={{
          backgroundImage: "url('/assets/background.jpg')",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
        }}
      >
        <div className="min-w-full h-auto flex justify-center align-middle p-[10px]">
          <div className="">
            <div className="mb-4 md:mb-8">
              <Image
                src="/assets/Belleza-White-.png"
                alt="logo"
                width={768}
                height={128}
                className="block max-w-full"
              />
            </div>
            <div className="flex items-center justify-center p-[10px]">
              <button className="px-10 py-5 rounded bg-white font-medium transition-colors text-[18px] font-poppins uppercase text-black">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      {/* <section className="mt-0 mb-0 pt-[7%] pb-[7%] relative z-10 flex items-center justify-center">
        <div className="max-w-[1340px] flex justify-between">
          <div className="max-w-[48%] flex align-middle justify-center items-center">
            <div className="flex flex-col">
              <div className="text-[48px] font-poppins">
                <strong>HASSLE FREE </strong> EXPERIENCE
              </div>
              <div className="text-[22px] font-poppins">
                A keen eye on the market, a passion to excel, and a wide network
                of industry professionals. Jas Oberoi Group is the best real
                estate team in Surrey and we work to deliver the best experience
                with Real Estate.
              </div>
              <div className="text-[16px] font-poppins mt-4 mb-4">
                <p>
                  Doing more than just finding real estate and developing an
                  investment strategy. By working with Jas Oberoi Group, we
                  provide for every real estate need under one roof. We want to
                  emphasize that we are not sales associates- Jas Oberoi Group
                  is a home made up of only advisors and consultants dedicated
                  to imparting transparent and honest advice. Our values build
                  our character, our stories strengthen our reputation.
                </p>
              </div>
              <div className="text-[48px] font-great-vibes text-[#C0AC6A]">
                <h2>Jas Oberoi</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="border-solid border-4 border-[#C0AC6A] pl-5 pr-5">
              <section className="flex justify-around items-center align-middle">
                <div className="flex flex-col justify-center items-center align-middle p-[30px]">
                  <h1 className="text-[106px] font-poppins"> 800M+</h1>
                  <p className="text-[19px] font-poppins">in Career Sales</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle p-[30px]">
                  <h1 className="text-[106px] font-poppins"> 35+</h1>
                  <p className="text-[19px] font-poppins">Real Estate Awards</p>
                </div>
              </section>
              <section className="flex justify-around items-center align-middle">
                <div className="flex flex-col justify-center items-center align-middle p-[30px]">
                  <h1 className="text-[106px] font-poppins"> 8+</h1>
                  <p className="text-[19px] font-poppins">Year of Experience</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle p-[30px]">
                  <h1 className="text-[106px] font-poppins"> 1K+</h1>
                  <p className="text-[19px] font-poppins">Total Sales Volume</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section> */}
      {/*  */}
      {/* <section className="relative bg-white flex items-center justify-center">
        <div className="bg-black max-w-[1340px]">
          <div className="relative flex justify-between items-center">
            <div>
              <Image
                src="/assets/jas-oberoi-team.jpg"
                alt="team"
                width={800}
                height={528}
                className="block max-w-full"
              />
            </div>
            <div>
              <p className="text-white">
                AT JAS OBEROI GROUP, WE ARE A TEAM OF EXPERT ADVISORS WITH A
                VAST NETWORK OF INDUSTRY PROFESSIONALS SO THAT ALL YOUR REAL
                ESTATE NEEDS ARE UNDER ONE ROOF.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section> */}
    </>
  );
}

import React from "react";
