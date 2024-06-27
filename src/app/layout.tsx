"use client"
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import UserCheckProvider from "./UserCheckProvider";
import "./globals.css";


// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1.0,
// };

// export const metadata: Metadata = {
//   title: "Jas Oberoi | Best Realtor Surrey | White Rock | South Surrey",
//   description: "We are one of the best realtors in Surrey. we work to deliver the best experience with Real Estate. Doing more than just finding real estate.",
//   icons: {
//     icon: "/assets/favicon.ico",
//   },
//   robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
//   alternates: {
//     canonical: "https://jasoberoi.ca/",
//   },
//   openGraph: {
//     locale: "en_US",
//     type: "website",
//     title: "Home",
//     description: "We are one of the best realtors in Surrey. we work to deliver the best experience with Real Estate. Doing more than just finding real estate.",
//     url: "https://jasoberoi.ca/",
//     siteName: "Jas Oberoi Group",
//     images: [
//       {
//         url: "https://jasoberoi.ca/wp-content/uploads/2023/09/Belleza-White-.png",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//   },
//   other: {
//     "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
//     "article:modified_time": "2023-12-13T20:41:04+00:00",
//   },
// };

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jas Oberoi | Best Realtor Surrey | White Rock | South Surrey</title>
        <meta
          name="description"
          content="We are one of the best realtors in Surrey. we work to deliver the best experience with Real Estate. Doing more than just finding real estate."
        />
        <link rel="icon" href="/assets/favicon.ico" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jasoberoi.ca/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="We are one of the best realtors in Surrey. we work to deliver the best experience with Real Estate. Doing more than just finding real estate."
        />
        <meta property="og:url" content="https://jasoberoi.ca/" />
        <meta property="og:site_name" content="Jas Oberoi Group" />
        <meta property="og:image" content="https://jasoberoi.ca/wp-content/uploads/2023/09/Belleza-White-.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Other Meta Tags */}
        <meta property="article:publisher" content="https://www.facebook.com/j.o.grouprealestate" />
        <meta property="article:modified_time" content="2023-12-13T20:41:04+00:00" />

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
      </head>
      <body
        className={cn("relative", inter.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <UserCheckProvider>
          {children}
        </UserCheckProvider>
      </body>
    </html>
  );
}
