import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "About - Jas Oberoi Group",
    description: "Curious about who we are? Get to know everyone in the team that's making Jas Oberoi Group grow the best option for you.",
    alternates: {
        canonical: "https://jasoberoi.ca/about/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "About",
        description: "Curious about who we are? Get to know everyone in the team that's making Jas Oberoi Group grow the best option for you.",
        url: "https://jasoberoi.ca/about/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2024/01/Jas-Oberoi.jpg"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "About - Jas Oberoi Group",
        description: "Curious about who we are? Get to know everyone in the team that's making Jas Oberoi Group grow the best option for you.",
        site: "@jasoberoigroup",
        creator: "@jasoberoigroup",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2024/01/Jas-Oberoi.jpg"
            }
        ]
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2023-12-13T20:41:04+00:00",
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
