import axios from "axios";
import truncate from 'html-truncate';
import { stripHtml } from "string-strip-html";


async function fetchPostData(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/api/admin/blog/single?id=${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return null;
    }
}

export async function generateMetadata({ params }: any) {

    const post = await fetchPostData(params.id);

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
        title: `${post.title} - Jas Oberoi Group`,
        description: parsedContent,
        canonical: `https://jasoberoi.ca/posts/${post._id}`,
        openGraph: {
            locale: "en_US",
            type: "article",
            title: `${post.title} - Jas Oberoi Group`,
            description: parsedContent,
            url: `https://jasoberoi.ca/posts/${post._id}`,
            siteName: "Jas Oberoi Group",
            images: [
                {
                    url: post.imageUrl,
                    width: 1792,
                    height: 1024,
                    type: "image/webp",
                    alt: post.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: `${post.title} - Jas Oberoi Group`,
            description: parsedContent,
            site: "Jas Oberoi Group",
            creator: post.author,
            images: [post.imageUrl],
            label1: "Written by",
            data1: post.author,
            label2: "Est. reading time",
            data2: "3 minutes"
        },
        other: {
            "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
            "article:published_time": post.createdAt,
            "article:modified_time": post.updatedAt || post.createdAt,
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
