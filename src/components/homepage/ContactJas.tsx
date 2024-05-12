import Image from "next/image";
import React from "react";
import Container from "../Containers/Container";
import Carousel from "../Carousel/Carousel";

interface ContactJasProps {}

const ContactJas: React.FC<ContactJasProps> = () => {
  return (
    <section className="bg-white text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-black max-w-[1350px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-12">
          <div className="flex justify-center">
            <Image
              src="/assets/jas-oberoi-team.jpg"
              alt="Team Image"
              width={700}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-xl font-bold">
              At JAS OBEROI GROUP, WE ARE A TEAM OF EXPERT ADVISORS
            </h2>
            <p>
              A keen eye on the market, a passion to excel, and a wide network
              of industry professionals so that all your real estate needs are
              under one roof.
            </p>
            <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded shadow-lg hover:bg-yellow-600 transition-colors">
              Connect with Jas
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2 py-4">
          {/* Icons and text for awards */}
          <Carousel />
          {/* Repeat for other icons */}
        </div>
      </div>
    </section>
  );
};

export default ContactJas;
