import axios from "axios";
import { stripHtml } from "string-strip-html";
import parse from 'html-react-parser';
import truncate from 'html-truncate';


export async function fetchPropertyData(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/api/admin/property/single?id=${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return null;
    }
}

export async function generateMetadata({ params }: any) {


    const property = await fetchPropertyData(params.id);

    if (!property) {
        // Handle the case where property data could not be fetched
        return {
            title: "Property not found",
            description: "The requested property could not be found.",
        };
    };


    const truncatedContent = truncate(property.description, 300);
    const parsedContent = stripHtml(truncatedContent).result;

    return {
        title: `${property.title} - Jas Oberoi Group`,
        description: parsedContent,
        canonical: `https://jasoberoi.ca/property/${property._id}`,
        openGraph: {
            locale: "en_US",
            type: "article",
            url: `https://jasoberoi.ca/property/${property._id}`,
            siteName: "Jas Oberoi Group",

        }, images: [
            {
                url: `${property.singleImage[0]}`,
                width: 2000,
                height: 1125,
                type: "image/jpeg",
                alt: property.title
            }
        ],
        twitter: {
            card: "summary_large_image",
            title: `${property.title} - Jas Oberoi Group`,
            description: parsedContent,
            site: "Jas Oberoi Group",
            creator: "Jas Oberoi Group",
            images: []
        },
        other: {
            "article:published_time": property.createdAt,
            "article:modified_time": property.updatedAt,
        },
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
