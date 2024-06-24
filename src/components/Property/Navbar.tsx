import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 40) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    };

    // Function to handle smooth scroll to section
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100, // Adjusted to leave space for the fixed navbar
                behavior: 'smooth'
            });
        }
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // JSON data for navigation links
    const navLinks = [
        { id: 1, title: 'Description', href: '#Description' },
        { id: 2, title: 'Address', href: '#Address' },
        { id: 3, title: 'Details', href: '#Details' },
        { id: 4, title: 'MortgageCalculator', href: '#MortgageCalculator' },
        { id: 5, title: 'Recent Listings', href: '#RecentListings' }
    ];

    return (
        <nav className={`md:flex w-full justify-center bg-white border-gray-200 py-4 shadow-b-xl ${showNavbar ? 'hidden md:fixed top-0 z-10' : 'hidden md:hidden'}`} style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <div className="px-10 max-w-[1300px] flex justify-center w-full">
                <ul className=" font-medium w-full flex justify-between flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <button

                                onClick={() => scrollToSection(link.href.slice(1))}
                                className="block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:bg-transparent md:p-0 md:border-0 md:hover:bg-transparent"
                            >
                                {link.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
