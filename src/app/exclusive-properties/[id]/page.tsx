"use client"
import Container from '@/components/Containers/Container'
import Breadcrumb from '@/components/Property/Breadcrumb'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


type Props = {}

const page = (props: Props) => {
    return (
        <Container className='mx-auto px-11 '>
            <div className='sm:max-w-[88%] mx-auto'>
                {/* Heading  */}
                <div className='flex justify-end sm:justify-between py-4'>
                    <div className='hidden sm:block '>
                        <Breadcrumb
                            title=' something come here'
                        />
                    </div>
                    <div className='flex justify-end text-[1rem]  gap-3 items-center '>
                        <button className='border-[1px] border-black p-[5px]  rounded-[3px]  hover:bg-black hover:text-white'>
                            <CiHeart />
                        </button>
                        <button className='border-[1px] border-black p-[5px]  rounded-[3px]  hover:bg-black hover:text-white'>
                            <FiShare2 />
                        </button>
                        <button className='border-[1px] border-black p-[5px]  rounded-[3px]  hover:bg-black hover:text-white'>
                            <MdOutlineLocalPrintshop />
                        </button>
                    </div>
                </div>
                <section>
                    <div className=''>
                        <span className='bg-[#000000A6] text-white py-1 px-2 text-[10px] xl:hidden'>FOR SALE</span>
                        <div className='mt-2 xl:mt-0 flex flex-col xl:flex-row justify-between'>
                            <h1 className='text-[16px] lg:text-[26px] xl:text-[30px] font-poppins text-[#2D2D2D] font-[400]'>Industrial Warehouse At Rymar Business Center</h1>
                            <h2 className='text-[14px] lg:text-[20px] xl:text-[30px] font-poppins text-[#2D2D2D]  font-semibold'>Contact Listing Agent</h2>
                        </div>
                        <span className='bg-[#000000A6] mt-1 text-white py-1 px-2 text-[12px] hidden xl:inline-block'>FOR SALE</span>
                        <div className='text-[#636363] mt-1 text-[14px] xl:text-[16px] flex items-center gap-2 py-2'>
                            <div><IoLocationOutline fontSize={20} /></div>
                            <div>109 - 18669 52 Ave. Surrey, Bc</div>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default page