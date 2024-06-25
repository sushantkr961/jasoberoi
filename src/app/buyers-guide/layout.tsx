import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Buyer's Guide - Jas Oberoi Group",
    description: "Buyer’s Guide a hassle free guide to buying We are committed to provide quality and value to all of our clients. Buying a home can be one of the grandest and happiest decisions of your life. It can also be one of the most complex and demanding decisions. To ready you for the upcoming transition, [&hellip;]",
    alternates: {
        canonical: "https://jasoberoi.ca/buyers-guide/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Buyer’s Guide",
        description: "Buyer’s Guide a hassle free guide to buying We are committed to provide quality and value to all of our clients. Buying a home can be one of the grandest and happiest decisions of your life. It can also be one of the most complex and demanding decisions. To ready you for the upcoming transition, [&hellip;]",
        url: "https://jasoberoi.ca/buyers-guide/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2021/03/Jas-Oberoi-Group-team.jpg"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Buyer's Guide - Jas Oberoi Group",
        description: "Buyer’s Guide a hassle free guide to buying We are committed to provide quality and value to all of our clients. Buying a home can be one of the grandest and happiest decisions of your life. It can also be one of the most complex and demanding decisions. To ready you for the upcoming transition, [&hellip;]",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2021/03/Jas-Oberoi-Group-team.jpg"
            }
        ]
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2024-05-23T17:46:23+00:00",
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
