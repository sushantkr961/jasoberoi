"use client"
import Container from "@/components/Containers/Container";
import Image from "next/image";
import React from "react";
import Data from "../../../data/AboutUs/data.json";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Props = {
    params: {
        id: string
    }
};



const page = ({ params }: Props) => {
    const { JASOBEROI, TEAM } = Data;
    const router = useRouter();
    const member = TEAM[parseInt(params?.id) as number - 1];

    if (params.id == "1" || params.id == "2" || params.id == "3") {

    } else {
        router.push("/about");
    }
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