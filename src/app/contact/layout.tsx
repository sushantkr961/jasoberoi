import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact - Jas Oberoi Group",
    description: "Looking for Real Estate help? Contact us today, and let us help you with all your Real Estate needs & inquiries. Jas Oberoi Group is here to help.",
    alternates: {
        canonical: "https://jasoberoi.ca/contact/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Contact",
        description: "Looking for Real Estate help? Contact us today, and let us help you with all your Real Estate needs & inquiries. Jas Oberoi Group is here to help.",
        url: "https://jasoberoi.ca/contact/",
        siteName: "Jas Oberoi Group",
        images: []
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact - Jas Oberoi Group",
        description: "Looking for Real Estate help? Contact us today, and let us help you with all your Real Estate needs & inquiries. Jas Oberoi Group is here to help.",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: []
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2024-05-23T17:31:28+00:00",
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
