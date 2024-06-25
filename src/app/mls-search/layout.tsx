import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MLS Search - Jas Oberoi Group",
    description: "MLS Search Check our Exclusive Properties. Whether buying or selling a home, we’ll select one of our experienced agents to make your dream come true based on your lifestyle needs. EXCLUSIVE PROPERTIES 604.385.3770 jo@jasoberoi.ca",
    alternates: {
        canonical: "https://jasoberoi.ca/mls-search/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "MLS Search",
        description: "MLS Search Check our Exclusive Properties. Whether buying or selling a home, we’ll select one of our experienced agents to make your dream come true based on your lifestyle needs. EXCLUSIVE PROPERTIES 604.385.3770 jo@jasoberoi.ca",
        url: "https://jasoberoi.ca/mls-search/",
        siteName: "Jas Oberoi Group",
        images: []
    },
    twitter: {
        card: "summary_large_image",
        title: "MLS Search - Jas Oberoi Group",
        description: "MLS Search Check our Exclusive Properties. Whether buying or selling a home, we’ll select one of our experienced agents to make your dream come true based on your lifestyle needs. EXCLUSIVE PROPERTIES 604.385.3770 jo@jasoberoi.ca",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: []
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2024-05-23T17:40:55+00:00",
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
