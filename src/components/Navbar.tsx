import React from "react";
import navData from "../data/data.json";
import Image from "next/image";

type Props = {};
type NavLink = {
  href: string;
  text: string;
  options?: NavLink[];
};

const Navbar: React.FC = () => {
  const renderNavLink = (link: NavLink) => (
    <a
      href={link.href}
      className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
    >
      {link.text}
    </a>
  );

  const renderDropdown = (link: NavLink) => (
    <div className="relative group">
      <button className="py-2 px-3 text-black rounded md:bg-transparent md:p-0 inline-flex items-center">
        {link.text}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {link.options && (
        <div className="absolute hidden group-hover:block bg-black shadow-md mt-1 min-w-[220px] pt-4 pb-4">
          <ul className="block text-sm text-white">
            {link.options.map((subLink) => (
              <li key={subLink.text}>
                <a
                  href={subLink.href}
                  className="block py-2 px-4 hover:bg-gray-100"
                >
                  {subLink.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <nav className="relative h-[160px] bg-white w-full z-20 top-0 start-0 border-red-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 max-w-[1340px]">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/navLogo.png"
            height="130"
            alt="Flowbite Logo"
            style={{ height: "130px", width: "auto" }} 
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white focus:outline-none bg-black font-medium text-[16px] py-[15px] px-[30px] text-center uppercase"
          >
            BOOK NOW
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navData.navLinks.map((link) => (
              <li key={link.text} className="md:mr-8">
                {link.options.length > 0
                  ? renderDropdown(link)
                  : renderNavLink(link)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
