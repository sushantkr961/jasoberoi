import axios from "axios";
import parse from 'html-react-parser';
import truncate from 'html-truncate';
import { stripHtml } from "string-strip-html";



export async function fetchPostData(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/api/admin/soldstories/single?id=${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return null;
    }
}

export async function generateMetadata({ params }: any) {
    const post = await fetchPostData(params.id);
    console.log(post);

    if (!post) {
        // Handle the case where post data could not be fetched
        return {
            title: "Post not found",
            description: "The requested post could not be found.",
        };
    }


    const truncatedContent = truncate(post.content, 300);
    const parsedContent = stripHtml(truncatedContent).result; 

    return {
        title: `${post.title}`,
        description: post.content ? parsedContent : '',
        canonical: `https://jasoberoi.ca/sold-stories/${post._id}`,
        openGraph: {
            locale: "en_US",
            type: "article",
            title: `Congratulations! ${post.title} - SOLD!`,
            description: post.content ? parsedContent : '',
            url: `https://jasoberoi.ca/sold-stories/${post._id}`,
            siteName: "Jas Oberoi Group",
            images: [
                {
                    url: `${post.singleImage[0]}`,
                    alt: "Sold Stories"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            label1: "Written by",
            label2: "Est. reading time",
            data2: "3 minutes"
        },
        other: {
            "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
            "article:published_time": post.createdAt,
            "article:modified_time": post.createdAt
        }
    };
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
