import type { Metadata } from "next";


export async function generateMetadata({ params }: any) {
    let metadata;
    const Maria = {
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

    const Claudia = {
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
    }
    const Emmanuel = {
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

    if (params.id == "maria") {
        return Maria;
    } else if (params.id == "claudia") {
        return Claudia;
    } else if (params.id == "emmanuel-gatica") {
        return Emmanuel;
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
