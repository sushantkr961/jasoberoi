import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div
      className="relative min-h-[688px] flex items-center justify-center "
      style={{
        backgroundImage: "url('/assets/background.jpg')",
        backgroundPosition: 'top center',  // Aligns the top part of the image at the center
        backgroundRepeat: 'no-repeat',     // Prevents the background image from repeating
        backgroundSize: '100% auto'        // Covers the width 100% and height adjusts automatically
      }}
        >
      <div className="min-w-full h-auto flex justify-center align-middle p-[10px]">
        <div className="">
          <div className="mb-[20px]">
            <Image
              src="/assets/Belleza-White-.png"
              alt="logo"
              width={768}
              height={128}
              className="block max-w-full"
            />
          </div>
          <div className="flex items-center justify-center p-[10px]">
            <button className="px-10 py-5 bg-white font-medium transition-colors text-[18px] font-poppins uppercase text-black">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
