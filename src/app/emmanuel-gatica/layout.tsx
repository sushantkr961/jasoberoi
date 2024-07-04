
export const metadata = {
        title: "Emmanuel Gatica - Jas Oberoi Group",
        description: "Meet Emmanuel Gatica, Jas Oberoi Group's Media Director",
        alternates: {
            canonical: "https://jasoberoi.ca/emmanuel-gatica/"
        },
        openGraph: {
            locale: "en_US",
            type: "article",
            title: "Emmanuel Gatica",
            description: "Meet Emmanuel Gatica, Jas Oberoi Group's Media Director",
            url: "https://jasoberoi.ca/emmanuel-gatica/",
            siteName: "Jas Oberoi Group",
            images: [
                {
                    url: "https://jasoberoi.ca/wp-content/uploads/2023/04/Emmanuel-Gatica-about.jpg"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: "Emmanuel Gatica - Jas Oberoi Group",
            description: "Meet Emmanuel Gatica, Jas Oberoi Group's Media Director",
            site: "@jasoberoigroup",
            creator: "@jasoberoigroup",
            images: [
                {
                    url: "https://jasoberoi.ca/wp-content/uploads/2023/04/Emmanuel-Gatica-about.jpg"
                }
            ]
        }
    }

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
