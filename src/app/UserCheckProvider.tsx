"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
// import ReactPixel from 'react-facebook-pixel';
type Props = {
    children: React.ReactNode;
}

// const FACEBOOK_PIXEL_ID = '224717419404384';

const UserCheckProvider = ({ children }: Props) => {
    
    const pathname = usePathname();
    // const searchParams = useSearchParams();

    // useEffect(() => {
    //     if (!pathname.startsWith("/admin")) {
    //         ReactPixel.init('224717419404384'); // Replace with your Pixel ID
    //         const handleRouteChange = () => {
    //             ReactPixel.pageView();
    //         };

    //         // Track page views on route change
    //         handleRouteChange();

    //         // Cleanup the event listener on component unmount  
    //         return () => {
    //             // No cleanup needed
    //         };
    //     }
    // }, [pathname, searchParams]);
    const isAdminRoute = pathname.startsWith("/admin");
    return (
        <>
            {!isAdminRoute && <header><Navbar /></header>}
            <main className="overflow-x-hidden">{children}</main>
            {!isAdminRoute && <footer><Footer /></footer>}
        </>
    )
}
export default UserCheckProvider;