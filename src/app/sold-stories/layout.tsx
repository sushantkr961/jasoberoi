
export const metadata = {
    title: "Sold Stories - Jas Oberoi Group",
    description: "If you’re looking to sell your home or find a similar property, we invite you to contact us. Our team of real estate professionals is here to help.",
    canonical: "https://jasoberoi.ca/sold-stories/",
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Sold Stories",
        description: "If you’re looking to sell your home or find a similar property, we invite you to contact us. Our team of real estate professionals is here to help.",
        url: "https://jasoberoi.ca/sold-stories/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2023/06/74-13898-64-ave.-Surrey-BC-592x444.jpg",
                alt: "Sold Stories"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Sold Stories - Jas Oberoi Group",
        description: "If you’re looking to sell your home or find a similar property, we invite you to contact us. Our team of real estate professionals is here to help.",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: []
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2024-05-23T17:43:11+00:00"
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
