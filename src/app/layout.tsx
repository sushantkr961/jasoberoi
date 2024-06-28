import { cn } from "@/lib/utils";
import { Inter, Crimson_Pro, Crimson_Text, Poppins, Lato, Great_Vibes, Belleza } from "next/font/google";

import { Toaster } from "react-hot-toast";
import UserCheckProvider from "./UserCheckProvider";
import "./globals.css";
import { Metadata, Viewport } from "next";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Jas Oberoi | Best Realtor Surrey | White Rock | South Surrey",
  description: "We are one of the best realtors in Surrey. we work to deliver the best experience with Real Estate. Doing more than just finding real estate.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://jasoberoi.ca/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Home",
    description: "We are one of the best realtors in Surrey. we work to deliver the best experience with Real Estate. Doing more than just finding real estate.",
    url: "https://jasoberoi.ca/",
    siteName: "Jas Oberoi Group",
    images: [
      {
        url: "https://jasoberoi.ca/wp-content/uploads/2023/09/Belleza-White-.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
    "article:modified_time": "2023-12-13T20:41:04+00:00",
  },
};
const belleza = Belleza({ subsets: ["latin"], variable: '--font-belleza', weight: '400' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const crimsonPro = Crimson_Pro({ subsets: ["latin"], variable: '--font-crimson-pro', weight: ['200', '900'] });
const crimsonText = Crimson_Text({ subsets: ["latin"], variable: '--font-crimson-text', weight: ['400', '600', '700'] });
const poppins = Poppins({ subsets: ["latin"], variable: '--font-poppins', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const lato = Lato({ subsets: ["latin"], variable: '--font-lato', weight: ['100', '300', '400', '700', '900'] });
const greatVibes = Great_Vibes({ subsets: ["latin"], variable: '--font-great-vibes', weight: '400' });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (<html lang="en" className={`${inter.variable} ${crimsonPro.variable} ${crimsonText.variable} ${poppins.variable} ${lato.variable} ${greatVibes.variable} ${belleza.variable}`}>

    <head>

      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Great+Vibes&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        /> */}

      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Great+Vibes&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
 */}


      <link rel="icon" href="/assets/favicon.ico" />
      {/* <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}

      <script
        id="fb-pixel"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '224717419404384');
fbq('track', 'PageView');
`,
        }}
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
