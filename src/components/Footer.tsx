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
import Container from "./Containers/Container";
import { FaAddressCard } from "react-icons/fa";
import link from '../data/link.json'
type Props = {};

function Footer(props: Props) {
  const { description, quickLinks, contactUs, socialMedia } = footerData.footer;

  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <Container className="mx-auto pt-7 px-12 md:px-0  sm:pt-24 lg:pt-20 overflow-hidden">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 place-items-center  items-start sm:items-start  sm:place-content-start lg:items-start  lg:grid-cols-5 md:gap-8">
          {/* Logo Section */}
          <div className="space-y-4 md:space-y-8 flex flex-col lg:col-span-2 justify-center items-center md:items-start lg:ps-3">
            <Image
              src="/assets/webp/navLogo.webp"
              alt="JASOBEROI"
              width={365}
              height={198}
              style={{ width: "auto", height: "auto" }}
              className="hidden md:block invert max-w-[233px]"
            />
            <Image
              src="/assets/webp/mobilelogo.webp"
              alt="JASOBEROI"
              width={117}
              height={14}
              className="md:hidden block"
            />
            <p className="text-sm text-white font-poppins font-[300] leading-6 tracking-[0.2px] w-full text-center md:text-justify md:max-w-80">
              {description}
            </p>
            <div className="flex space-x-6 md:hidden">
              <a href={link.instagram} className="text-white hover:text-white">
                <FaInstagram size={30} />
              </a>
              <a href={link.tiktok} className="text-white hover:text-white">
                <FaTiktok size={25} />
              </a>
              <a href={link.youtube} className="text-white hover:text-blue-4">
                <FaYoutube size={30} />
              </a>
              <a href={link.facebook} className="text-white hover:text-white">
                <FaFacebookF size={25} />
              </a>
            </div>
          </div>
          {/* Quick Link */}
          <div>
            <h3 className="text-[17px]  text-center md:text-left font-poppins font-semibold leading-6 text-white uppercase">
              {quickLinks.title}
            </h3>
            <ul role="list" className="mt-3 md:mt-6 space-y-1 md:space-y-4 ">
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

          {/* Contact Us */}
          <div className=" md:mt-0 ">
            <h3 className="text-[17px] font-poppins font-semibold leading-6 text-white uppercase text-center md:text-left">
              {contactUs.title}
            </h3>
            <ul role="list" className="mt-3 md:mt-6 space-y-1 md:space-y-4">
              <li>
                <a
                  href={`tel:${link.phone}`}
                  className="text-[15px] leading-6 text-white hover:text-slate-200 duration-300 flex items-center font-[300] min-w-[160px] w-auto justify-center md:justify-start"
                >
                  <MdPhoneIphone size={20} className="mr-2 hidden md:block " />
                  {link.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${link.email}`}
                  className="text-[15px] leading-6 text-white hover:text-slate-200 duration-300 flex items-center font-[300] min-w-[160px] w-auto justify-center md:justify-start"
                >
                  <MdMailOutline size={20} className="mr-2 hidden md:block " />
                  {link.email}
                </a>
              </li>
              <li className="max-w-[60px] md:max-w-full">
                <a
                  href=""
                  className="text-[15px] leading-6 text-wrap text-white hover:text-slate-300 duration-300 flex items-center font-[300] min-w-[160px] w-auto text-center md:text-left"
                >
                  <FaAddressCard size={20} className="mr-2  hidden md:block  " />
                  {link.address}
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>

          {/* Follow Us */}
          <div className="flex justify-center  md:block">
            <div className="hidden md:block md:mt-0">
              <h3 className="text-[17px] font-poppins font-semibold leading-6 text-white uppercase mb-5 text-center md:text-left">
                {socialMedia.title}
              </h3>
              <div className="flex space-x-6">
                <a href={link.instagram} className="text-white hover:text-slate-300 duration-300">
                  <FaInstagram size={30} />
                </a>
                <a href={link.tiktok} className="text-white hover:text-slate-300 duration-300">
                  <FaTiktok size={25} />
                </a>
                <a href={link.youtube} className="text-white hover:text-blue-4 hover:text-slate-300 duration-300">
                  <FaYoutube size={30} />
                </a>
                <a href={link.facebook} className="text-white hover:text-slate-300 duration-300">
                  <FaFacebookF size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* Bottom Footer */}
        <div className="  border-t border-gray-400/20 p-7 sm:mt-20 lg:mt-5 md:flex md:justify-between text-center">
          <p className="text-[13px] leading-5 text-[#959595]">
            Copyright &copy; 2013-2024 Jas Oberoi Prec*. All Rights Reserved.
          </p>
          <p className="text-[13px] leading-5 text-[#959595]">
            Designed by <span className="text-[#c1a468]">Infridet solutions Private Limited</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
