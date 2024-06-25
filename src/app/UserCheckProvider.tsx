"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

 const UserCheckProvider = ({ children }:Props) => {

    const pathname = usePathname();
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