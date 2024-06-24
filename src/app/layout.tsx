"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Great+Vibes&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>
          Jas Oberoi | Best Realtor Surrey | White Rock | South Surrey
        </title>
        <link rel="icon" href="/assets/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <title>Jas Oberoi | Best Realtor Surrey | White Rock | South Surrey</title>
        <link rel="icon" href="/assets/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="description" content="We are one of the best realtors in Surrey. we work to deliver the best experience with Real Estate. Doing more than just finding real estate." />
        <link rel="canonical" href="https://jasoberoi.ca/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="We are one of the best realtors in Surrey. we work to deliver the best experience with Real Estate. Doing more than just finding real estate." />
        <meta property="og:url" content="https://jasoberoi.ca/" />
        <meta property="og:site_name" content="Jas Oberoi Group" />
        <meta property="article:publisher" content="https://www.facebook.com/j.o.grouprealestate" />
        <meta property="article:modified_time" content="2023-12-13T20:41:04+00:00" />
        <meta property="og:image" content="https://jasoberoi.ca/wp-content/uploads/2023/09/Belleza-White-.png" />
        <meta name="twitter:card" content="summary_large_image" />

      
      </head>
      <body
        className={cn("relative", inter.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        {!isAdminRoute && <Navbar />}
        <main className="overflow-x-hidden">{children}</main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
