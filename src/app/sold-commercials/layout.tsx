import type { Metadata } from "next";

export const metadata = {
    title: "Sold Commercials - Jas Oberoi Group",
    description: "Did you see a property you liked with us but can't find it now? It might be here in our sold commercials list. Come take a look.",
    alternates: {
        canonical: "https://jasoberoi.ca/sold-commercials/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Sold Commercials",
        description: "Did you see a property you liked with us but can't find it now? It might be here in our sold commercials list. Come take a look.",
        url: "https://jasoberoi.ca/sold-commercials/",
        siteName: "Jas Oberoi Group",
        images: []
    },
    twitter: {
        card: "summary_large_image",
        title: "Sold Commercials - Jas Oberoi Group",
        description: "Did you see a property you liked with us but can't find it now? It might be here in our sold commercials list. Come take a look.",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: []
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2024-05-23T17:42:21+00:00"
    }
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
