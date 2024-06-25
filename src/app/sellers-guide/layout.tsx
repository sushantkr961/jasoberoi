import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Seller's Guide - Jas Oberoi Group",
    description: "Are you looking to sell? At Jas Oberoi Group, you can find all the help you need under one roof. Contact us today for more information.",
    alternates: {
        canonical: "https://jasoberoi.ca/sellers-guide/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Seller's Guide",
        description: "Are you looking to sell? At Jas Oberoi Group, you can find all the help you need under one roof. Contact us today for more information.",
        url: "https://jasoberoi.ca/sellers-guide/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2021/11/exclusive-property.jpg"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        description: "Are you looking to sell? At Jas Oberoi Group, you can find all the help you need under one roof. Contact us today for more information.",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2021/11/exclusive-property.jpg"
            }
        ]
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2023-11-30T11:16:24+00:00",
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
