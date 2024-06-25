import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Featured Listing - Houses For Sale in Surrey, Delta & Cloverdale",
    description: "Take a look at Jas Oberoi Group's available featured listings. Discover a wide range of houses for sale in Surrey, Delta, Langley, and Cloverdale.",
    alternates: {
        canonical: "https://jasoberoi.ca/featured-listing/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Featured Listing",
        description: "Take a look at Jas Oberoi Group's available featured listings. Discover a wide range of houses for sale in Surrey, Delta, Langley, and Cloverdale.",
        url: "https://jasoberoi.ca/featured-listing/",
        siteName: "Jas Oberoi Group",
        images: []
    },
    twitter: {
        card: "summary_large_image",
        title: "Featured Listing - Houses For Sale in Surrey, Delta & Cloverdale",
        description: "Take a look at Jas Oberoi Group's available featured listings. Discover a wide range of houses for sale in Surrey, Delta, Langley, and Cloverdale.",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: []
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2024-05-23T17:39:25+00:00",
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
