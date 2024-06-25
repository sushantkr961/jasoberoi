import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Find The Best Commercial Listings Available | Jas Oberoi Group",
    description: "Jas Oberoi Group is the best commercial realtors in Surrey, South Surrey and Cloverdale. We have expert agents to provide you commercial property solutions.",
    alternates: {
      canonical: "https://jasoberoi.ca/commercial-listing/"
    },
    openGraph: {
      locale: "en_US",
      type: "article",
      title: "Commercial Listing",
      description: "Jas Oberoi Group is the best commercial realtors in Surrey, South Surrey and Cloverdale. We have expert agents to provide you commercial property solutions.",
      url: "https://jasoberoi.ca/commercial-listing/",
      siteName: "Jas Oberoi Group",
      images: []
    },
    twitter: {
      card: "summary_large_image",
      title: "Commercial Listing",
      description: "Jas Oberoi Group is the best commercial realtors in Surrey, South Surrey and Cloverdale. We have expert agents to provide you commercial property solutions.",
      site: "Jas Oberoi Group",
      creator: "Jas Oberoi Group",
      images: []
    },
    other: {
      "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
      "article:modified_time": "2024-05-23T17:41:42+00:00",
    },
  };
  
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            {children}
        </>
    );
}
