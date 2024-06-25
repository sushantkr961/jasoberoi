"use client";
import { useState, useEffect, useRef } from "react";
import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import link from '../../data/link.json'
import { usePathname } from "next/navigation";

type Props = {};

const misSearch = (props: Props) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const pathname = usePathname();
  const scriptContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.id = "mrpscript";
    script.type = "text/javascript";
    script.src = "https://idx.myrealpage.com/wps/rest/63169/l/idx2/recip/tmpl~v2,noframe~true/-/idx.browse.searchform/in.js";
    script.async = true;

    // Append the script to the container element
    if (scriptContainerRef.current && pathname.startsWith("/mls-search")) {
      scriptContainerRef.current.appendChild(script);
    }

    // When script is loaded, set scriptLoaded to true
    script.onload = () => {
      setScriptLoaded(true);
    };

    // Cleanup function to remove the script when the component unmounts
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
        heading="MLS Search"
      />

      {/* Render other content only if the script has loaded */}
      <Container className="w-full m-auto flex flex-col items-center px-2">

        <div ref={scriptContainerRef} className="w-full mt-8 lg:mt-20"></div>
        {/* Here Come I Fram */}
        <hr className="py-10 md:py-18  w-[90%] border-b-2   mb-5" />
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
            href={"/exclusive-properties"}
            className="uppercase font-semibold text-[15px] md:text-[16px] mt-2 bg-black text-white py-3 px-4">
            {" "}
            EXCLUSIVE PROPERTIES
          </Link>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-4 items-center md:gap-9 mb-[70px] text-[20px] sm:text-[28px]">
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
    </section>
  );
};

export default misSearch;