import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Our Culture - Jas Oberoi Group",
    description: "There's a reason why we are one of the most awarded real estate groups in BC, & that is our culture. Take a look at our mindset for success today.",
    alternates: {
        canonical: "https://jasoberoi.ca/our-culture/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Our Culture",
        description: "There's a reason why we are one of the most awarded real estate groups in BC, & that is our culture. Take a look at our mindset for success today.",
        url: "https://jasoberoi.ca/our-culture/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2023/10/jas-oberoi-team-office-1.jpg"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Culture - Jas Oberoi Group",
        description: "There's a reason why we are one of the most awarded real estate groups in BC, & that is our culture. Take a look at our mindset for success today.",
        site: "@jasoberoigroup",
        creator: "@jasoberoigroup",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2023/10/jas-oberoi-team-office-1.jpg"
            }
        ]
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2024-02-03T00:56:50+00:00",
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
