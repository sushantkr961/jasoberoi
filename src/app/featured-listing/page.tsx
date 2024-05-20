"use client";
import { useState, useEffect, useRef } from "react";
import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";

type Props = {};

const FeaturedListing = (props: Props) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const scriptContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.id = "mrpscript";
    script.type = "text/javascript";
    script.src = "https://idx.myrealpage.com/wps/rest/63169/l/idx2/mylistings/tmpl~v2,noframe~true/-/mylistings.def/in.js";
    script.async = true;

    // Check if the script already exists
    const existingScript = document.getElementById("mrpscript");
    if (existingScript) {
      // If the script already exists, remove it before appending the new one
      existingScript.remove();
    }

    // Append the script to the container element
    if (scriptContainerRef.current) {
      scriptContainerRef.current.appendChild(script);
    }

    // When script is loaded, set scriptLoaded to true
    script.onload = () => {
      setScriptLoaded(true);
    };

    return () => {
      // Cleanup function: remove the script when component unmounts
      if (scriptContainerRef.current) {
        scriptContainerRef.current.innerHTML = ""; // Clear script content
      }
    };
  }, []);

  return (
    <section>
      <PageHeading
        imageSrc="assets/ourculture/asset 1.jpeg"
        heading="Featured Listing"
      />

      {/* Render other content only if the script has loaded */}
      <Container className="w-full m-auto flex flex-col items-center px-2">

        <div ref={scriptContainerRef} className="w-full">

        </div>
        {/* Here Come I Fram */}
        <hr className="py-10 md:py-18 lg:py-20 w-[90%] border-b-2   mb-5" />
        <div className="heading w-[97%] sm:w-[90%] lg:w-[54%] m-auto flex flex-col items-center justify-center gap-4 py-9 text-center">
          <h2 className="font-poppins text-[35px] md:text-[48px] uppercase leading-[1em] font-[300]">
            <strong className="font-[600] ">CHECK OUR EXCLUSIVE </strong>{" "}
            PROPERTIES
          </h2>
          <p className="text-[#2D2D2D] text-[15px] font-poppins">
            Whether buying or selling a home, we'll select one of our
            experienced agents to make your dream come true based on your
            lifestyle needs.
          </p>
          <Link
            href={"/contact"}
            className="uppercase font-semibold text-[18px] md:text-[20px] mt-2 bg-black text-white py-4 px-8"
          >
            {" "}
            EXCLUSIVE PROPERTIES
          </Link>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-4 items-center md:gap-9 mb-[70px] text-[20px] sm:text-[28px]">
          <div className="flex gap-2 items-center ">
            <FaMobileAlt />
            <a href="tel:7789947450">778.994.7450</a>
          </div>
          <div className="flex gap-2 items-center ">
            <CiMail />
            <a href="mailto:jo@jasoberoi.ca">jo@jasoberoi.ca</a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedListing;