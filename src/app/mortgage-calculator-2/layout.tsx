import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Calculate Mortgage Payments Easily: Mortgage Calculator Canada",
    description: "Calculate monthly mortgage payments with this Mortgage Calculator. Downpayment, length of loan, annual interest rate & more!",
    alternates: {
        canonical: "https://jasoberoi.ca/mortgage-calculator-2/"
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Mortgage Calculator",
        description: "Calculate monthly mortgage payments with this Mortgage Calculator. Downpayment, length of loan, annual interest rate & more!",
        url: "https://jasoberoi.ca/mortgage-calculator-2/",
        siteName: "Jas Oberoi Group",
        images: [
            {
                url: "https://jasoberoi.ca/wp-content/uploads/2024/01/DALL·E-2024-01-25-18.24.06-A-photographic-style-of-a-vintage-mortgage-calculator-brass-and-wood-materials-prominently-displayed-on-an-old-wooden-desk-in-a-dimly-lit-office-wi-1024x585.png",
                width: 1024,
                height: 585,
                type: "image/png"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
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
        "article:modified_time": "2024-01-26T02:37:46+00:00",
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
