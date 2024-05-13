import React, { useState } from "react";
import navData from "../../data/data.json";
import Link from "next/link";

type Props = {};
type NavLink = {
  href: string;
  text: string;
  options?: NavLink[];
};

function NavDesktop({}: Props) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState<string | null>(null);

  const handleMouseEnter = (link: NavLink) => {
    setIsVisible(link.text);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100); // Adjust the delay time as needed (200ms in this example)
  };

  const handleMouseLeave = () => {
    setIsVisible(null);
    setIsAnimating(false);
  };

  const renderNavLink = (link: NavLink) => (
    <Link
      href={link.href}
      className=" py-4 px-3 text-[15px] rounded md:bg-transparent md:p-0  md:py-4 md:bg-red-700 inline-flex items-center"
    >
      {link.text}
    </Link>
  );

  const renderDropdown = (link: NavLink) => (
    <div
      className="relative group"
      onMouseEnter={() => handleMouseEnter(link)}
      onMouseLeave={handleMouseLeave}
    >
      <button className="py-2 px-4 text-[15px]  text-black rounded md:bg-transparent md:p-0 md:py-4 md:bg-red-700 inline-flex items-center">
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
        <div
          className={`absolute z-[10000] bg-black shadow-md min-w-[220px] pt-4  pb-4 transform transition-transform duration-300 ${
            isVisible === link.text
              ? isAnimating
                ? "translate-y-[-6px]"
                : " translate-y-[-10px]"
              : "hidden"
          }`}
        >
          <ul className="block text-sm text-white">
            {link.options.map((subLink) => (
              <li key={subLink.text}>
                <Link
                  href={subLink.href}
                  className="block py-[15px] px-4 hover:text-[#707070] transition-colors duration-500"
                >
                  {subLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <nav
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="hidden lg:flex lg:flex-row p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 lg:space-x-2 xl:space-x-8 rtl:space-x-reverse  md:mt-0 md:border-0">
        {navData.navLinks.map((link) => (
          <li key={link.text} className="md:mr-8">
            {link.options.length > 0
              ? renderDropdown(link)
              : renderNavLink(link)}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavDesktop;
