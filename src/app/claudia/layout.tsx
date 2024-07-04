
export const metadata = {
        title: "Claudia - Jas Oberoi Group",
        description: "Meet Claudia Sung, Jas Oberoi Group's Marketing Manager",
        alternates: {
            canonical: "https://jasoberoi.ca/claudia/"
        },
        openGraph: {
            locale: "en_US",
            type: "article",
            title: "Claudia",
            description: "Meet Claudia Sung, Jas Oberoi Group's Marketing Manager",
            url: "https://jasoberoi.ca/claudia/",
            siteName: "Jas Oberoi Group",
            images: [
                {
                    url: "https://jasoberoi.ca/wp-content/uploads/2021/03/Claudia.jpg"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: "Claudia - Jas Oberoi Group",
            description: "Meet Claudia Sung, Jas Oberoi Group's Marketing Manager",
            site: "@jasoberoigroup",
            creator: "@jasoberoigroup",
            images: [
                {
                    url: "https://jasoberoi.ca/wp-content/uploads/2021/03/Claudia.jpg"
                }
            ]
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
