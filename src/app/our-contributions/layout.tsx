import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "The Best Banting Gala - Jas Oberoi Group",
    description: "JAS OBEROI GROUP JOINS HANDS WITH DIABETES CANADA TO HOST THE BEST BANTING GALA OF 2022. THE BLACK TIE EVENT WAS HELD AT THE ARIA BANQUET HALL ON NOVEMBER 5TH. WITH THE SUPPORT OF THE COMMUNITY WE WERE ABLE TO COME TOGETHER AND HOST A BEAUTIFUL BLACK TIE GALA AND RAISED OVER $110,000 JAS OBEROI [&hellip;]",
    alternates: {
        canonical: "https://jasoberoi.ca/the-best-banting-gala/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "The Best Banting Gala",
        description: "JAS OBEROI GROUP JOINS HANDS WITH DIABETES CANADA TO HOST THE BEST BANTING GALA OF 2022. THE BLACK TIE EVENT WAS HELD AT THE ARIA BANQUET HALL ON NOVEMBER 5TH. WITH THE SUPPORT OF THE COMMUNITY WE WERE ABLE TO COME TOGETHER AND HOST A BEAUTIFUL BLACK TIE GALA AND RAISED OVER $110,000 JAS OBEROI [&hellip;]",
        url: "https://jasoberoi.ca/the-best-banting-gala/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2022/11/Banting-Gala-white.png"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "The Best Banting Gala - Jas Oberoi Group",
        description: "JAS OBEROI GROUP JOINS HANDS WITH DIABETES CANADA TO HOST THE BEST BANTING GALA OF 2022. THE BLACK TIE EVENT WAS HELD AT THE ARIA BANQUET HALL ON NOVEMBER 5TH. WITH THE SUPPORT OF THE COMMUNITY WE WERE ABLE TO COME TOGETHER AND HOST A BEAUTIFUL BLACK TIE GALA AND RAISED OVER $110,000 JAS OBEROI [&hellip;]",
        site: "Jas Oberoi Group",
        creator: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2022/11/Banting-Gala-white.png"
            }
        ]
    },
    other: {
        "article:publisher": "https://www.facebook.com/j.o.grouprealestate",
        "article:modified_time": "2023-11-29T06:11:00+00:00",
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
