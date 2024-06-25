import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Podcast - Jas Oberoi Group",
    description: "At Jas Oberoi Group's podcast, you'll discover tips, recommendations, & the funny side of being a realtor. Come take a look",
    alternates: {
        canonical: "https://jasoberoi.ca/podcast/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Podcast",
        description: "At Jas Oberoi Group's podcast, you'll discover tips, recommendations, & the funny side of being a realtor. Come take a look",
        url: "https://jasoberoi.ca/podcast/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2023/10/unplugged-1.jpg"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Podcast - Jas Oberoi Group",
        description: "At Jas Oberoi Group's podcast, you'll discover tips, recommendations, & the funny side of being a realtor. Come take a look",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2023/10/unplugged-1.jpg"
            }
        ]
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2023-11-30T22:18:06+00:00",
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
