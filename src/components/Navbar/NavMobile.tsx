import React, { useState, useEffect, useRef, useCallback } from 'react';
import navData from "../../data/data.json";
import Hamburger from 'hamburger-react';
import Link from 'next/link';

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean,
}
type NavLink = {
    href: string;
    text: string;
    options?: NavLink[];
};

function NavMobile({ setOpen, isOpen }: Props) {
    const [isVisible, setIsVisible] = useState<string | null>(null);
    const navRef = useRef(null);

    const handleClick = useCallback((link: NavLink) => {
        if (isVisible === link.text) {
            setIsVisible(null); // Close the menu if it's already open
            setOpen(false);
        } else {
            setIsVisible(link.text); // Open the clicked menu
            setOpen(true);
        }
    }, [isVisible, setOpen]);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (navRef.current && !(navRef.current as HTMLElement).contains(e.target as Node)) {
                setIsVisible(null);
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [navRef, setOpen]);

    // Render Nav Links
    const renderNavLink = (link: NavLink) => (
        <Link
            href={link.href}
            className="py-4 px-4 w-full text-[15px] rounded md:bg-transparent border-[1px] inline-flex items-center"
            // onClick={() => handleClick(link)}
            onClick={(e) => {
                e.stopPropagation(); // Stop event propagation
                handleClick(link);
                setOpen(false);
            }}
        >
            {link.text}
        </Link>
    );

    const renderDropdown = (link: NavLink) => {
        const isMenuOpen = isVisible === link.text;

        return (
            <div className="relative group">
                <button
                    className="py-4 px-4 w-full text-[15px] border-[1px] text-black rounded flex items-center justify-between"
                    onClick={() => handleClick(link)}
                >
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
                        className={`bg-[#F7F7F7]  min-w-[220px] transition-all duration-300 ${isMenuOpen ? 'h-auto opacity-100 pointer-events: auto' : 'h-0 overflow-hidden opacity-0 pointer-events: none'}`}
                    >
                        <ul className="block text-md text-black py-2 ">
                            {link.options.map((subLink) => (
                                <li key={subLink.text}>
                                    <Link
                                        href={subLink.href}
                                        className="block py-[15px] hover:bg-black hover:text-white px-4 hover:text-[#707070] transition-colors duration-500"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Stop event propagation
                                            handleClick(subLink);
                                            setOpen(false);
                                        }}
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
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20"
                    onClick={() => {
                        setIsVisible(null);
                        setOpen(false);
                    }}
                />
            )}
            <nav
                ref={navRef}
                className={`fixed z-50 top-0 ${isOpen ? 'left-0' : '-left-[200%]'} overflow-hidden h-[100vh] overflow-y-auto bg-[#F7F7F7] items-center justify-between   flex w-auto  transition-all ease-in-out duration-700`}
            >
                <ul className=" flex flex-col h-[100vh] w-[350px]  font-medium ">
                    <li className='ml-auto py-4'>
                        <Hamburger color="black" toggled={isOpen} toggle={setOpen} size={20} />
                    </li>
                    {navData.navLinks.map((link) => (
                        <li key={link.text} className="">
                            {link.options.length > 0
                                ? renderDropdown(link)
                                : renderNavLink(link)}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default NavMobile;