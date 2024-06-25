import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blog - Jas Oberoi Group",
    description: "Explore real estate trends in Surrey, Cloverdale, Langley, White Rock. Get expert advice from the JO Group. Take charge of your property journey",
    alternates: {
        canonical: "https://jasoberoi.ca/blog/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Blog",
        description: "Explore real estate trends in Surrey, Cloverdale, Langley, White Rock. Get expert advice from the JO Group. Take charge of your property journey",
        url: "https://jasoberoi.ca/blog/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2024/01/Real-estate-surrey-592x444.png"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Jas Oberoi Group",
        description: "Explore real estate trends in Surrey, Cloverdale, Langley, White Rock. Get expert advice from the JO Group. Take charge of your property journey",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2024/01/Real-estate-surrey-592x444.png"
            }
        ]
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2024-01-16T23:14:33+00:00",
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
