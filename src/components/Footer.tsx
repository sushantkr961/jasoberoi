import Image from "next/image";
import React from "react";
import {
  MdKeyboardArrowRight,
  MdLocationOn,
  MdMailOutline,
  MdPhoneIphone,
} from "react-icons/md";
import Link from "./Footer/Link";
import footerData from "../data/data.json";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

type Props = {};

function Footer(props: Props) {
  const { description, quickLinks, contactUs, socialMedia } = footerData.footer;

  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-[1340px] pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <div className="space-y-8 flex flex-col justify-center items-center md:items-start ps-3">
            <Image
              src="https://jasoberoi.ca/wp-content/uploads/elementor/thumbs/Assets-for-videos-horizontal-qgro90ohuycsjyl1241hrplgo9eegohqmzeqpu2agg.png"
              alt="Company logo"
              width={226}
              height={114}
              className="hidden md:block"
            />
            <Image
              src="/assets/mobilelogo.png"
              alt="Company logo"
              width={226}
              height={114}
              className="md:hidden block"
            />
            <p className="text-sm text-white font-poppins font-[300] leading-6 tracking-[0.2px] w-full text-center md:max-w-80">
              {description}
            </p>
            <div className="flex space-x-6 md:hidden">
              <a href="#" className="text-white hover:text-white">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FaTiktok size={25} />
              </a>
              <a href="#" className="text-white hover:text-blue-4">
                <FaYoutube size={30} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FaFacebookF size={25} />
              </a>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2 md:mt-0 justify-items-center">
            <div className="md:grid md:grid-cols-2 md:gap-8 grid grid-cols-1 justify-items-center">
              <div>
                <h3 className="text-[17px] font-poppins font-semibold leading-6 text-white uppercase">
                  {quickLinks.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {quickLinks.links.map((link, index) => (
                    <Link
                      key={index}
                      Icon={MdKeyboardArrowRight}
                      text={link.name}
                      url={link.url}
                    />
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0 text-center">
                <h3 className="text-[17px] font-poppins font-semibold leading-6 text-white uppercase">
                  {contactUs.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[15px] leading-6 text-white hover:text-white flex items-center font-[300] min-w-[160px] w-auto"
                    >
                      <MdPhoneIphone size={20} className="mr-2" />
                      {contactUs.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[15px] leading-6 text-white hover:text-white flex items-center font-[300] min-w-[160px] w-auto"
                    >
                      <MdMailOutline size={20} className="mr-2" />
                      {contactUs.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[15px] leading-6 text-white hover:text-white flex items-center font-[300] min-w-[160px] w-auto"
                    >
                      <MdLocationOn size={40} className="mr-2" />
                      {contactUs.address}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center hidden md:block">
              <div className="mt-10 md:mt-0">
                <h3 className="text-[17px] font-poppins font-semibold leading-6 text-white uppercase mb-5">
                  {socialMedia.title}
                </h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-white hover:text-white">
                    <FaInstagram size={30} />
                  </a>
                  <a href="#" className="text-white hover:text-white">
                    <FaTiktok size={25} />
                  </a>
                  <a href="#" className="text-white hover:text-blue-4">
                    <FaYoutube size={30} />
                  </a>
                  <a href="#" className="text-white hover:text-white">
                    <FaFacebookF size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-400/20 p-10 sm:mt-20 lg:mt-24 md:flex md:justify-between text-center">
          <p className="text-[13px] leading-5 text-[#959595]">
            Copyright &copy; 2013-2024 Jas Oberoi Prec*. All Rights Reserved.
          </p>
          <p className="text-[13px] leading-5 text-[#959595]">
            Designed by <span className="text-[#c1a468]">Orangebox Media</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
