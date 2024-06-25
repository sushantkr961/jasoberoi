import Container from "@/components/Containers/Container";
import Image from "next/image";
import { Metadata } from "next";
import React from "react";
import Data from "../../../data/AboutUs/data.json";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
type Props = {
    params: {
        id: string
    }
};

export async function generateMetadata({ params }: Props) {
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

    if (params.id == "1") {
        return Maria;
    } else if (params.id == "2") {
        return Claudia;
    } else if (params.id == "3") {
        return Emmanuel;
    }
};


const page = ({ params }: Props) => {
    const { JASOBEROI, TEAM } = Data;
    const member = TEAM[parseInt(params?.id) as number - 1];

    return (
        <>
            <Container className="m-auto px-4">
                <div className="flex flex-col md:flex-row justify-between mt-[39px] md:gap-8 sm:mt-[44px] lg:mt-[30px] mb-[80px]">
                    <div className="md:w-[38%] flex justify-center">
                        <Image
                            src={`/assets/aboutus/${member.image}`}
                            height={700}
                            width={580}
                            alt="JASOBEROI"
                            layout="responsive"
                            className="hidden md:block object-cover w-full lg:max-h-[800px]  md:max-h-[700px]  lg:max-w-[460px] rounded-br-[100px]"
                        />

                        <img
                            src={`/assets/aboutus/${member.image}`}
                            alt="JASOBEROI"
                            className="md:hidden object-cover object-top max-h-[900px] w-full"
                        />

                    </div>
                    {/* Right Side Description */}
                    <div className="md:w-[61%] mt-7 md:mt-7  pr-3 lg:pr-10  md:text-left flex flex-col ">
                        <div className="heading">
                            <h2 className="font-poppins text-[25px] md:text-[40px] xl:text-[80px] text-[#2D2D2D]  font-[300]"><strong className="font-[600] ">{member.name}</strong></h2>
                            <p className="text-[#D3AA54] text-[16px] md:text-[16px] font-poppins">{member.role}</p>
                        </div>

                        <div className="flex flex-col gap-7 mt-7">
                            {
                                member.descriptions.map((data, index) => (
                                    <p className="font-poppins text-[15px] text-[#2D2D2D]">{data.content}</p>
                                ))
                            }
                            <hr className="border-t-2" />

                            <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between w-full items-center">
                                <div className="flex gap-2 items-center">
                                    <CiMail />
                                    <a href={`mailto:${member.email}`}>
                                        {member.email}
                                    </a>
                                </div>
                                <div>
                                    <Link href={"/featured-listing"} className="py-2 bg-[#D3AA  54] text-white text-[15px] font-semibold px-2">
                                        VIEW ALL PROPERTIES
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default page