

export const metadata = {
        title: "Maria - Jas Oberoi Group",
        description: "Meet Maria Hussain, one of Jas Oberoi Group's realtors",
        alternates: {
            canonical: "https://jasoberoi.ca/maria/"
        },
        openGraph: {
            locale: "en_US",
            type: "article",
            title: "Maria",
            description: "Meet Maria Hussain, one of Jas Oberoi Group's realtors",
            url: "https://jasoberoi.ca/maria/",
            siteName: "Jas Oberoi Group",
            images: [
                {
                    url: "https://jasoberoi.ca/wp-content/uploads/2021/11/Maria-.jpg"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: "Maria - Jas Oberoi Group",
            description: "Meet Maria Hussain, one of Jas Oberoi Group's realtors",
            site: "@jasoberoigroup",
            creator: "@jasoberoigroup",
            images: [
                {
                    url: "https://jasoberoi.ca/wp-content/uploads/2021/11/Maria-.jpg"
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
