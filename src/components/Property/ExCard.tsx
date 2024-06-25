"use client"
import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { AiOutlineFullscreen, AiOutlineShareAlt } from "react-icons/ai";
import { FaHeart } from "react-icons/fa"
import Link from 'next/link';
import { MdOutlineSquareFoot, MdSquareFoot } from 'react-icons/md';
import { FaSquareFontAwesome } from 'react-icons/fa6';
type Props = {
    _id: string;
    title: string;
    address: string;
    pricing: string;
    imageUrl: string;
    sale: boolean;
    hotOffer: boolean;
    featured: boolean;
    areaSize:string;
}

const ExCard = ({
    _id,
    title,
    address,
    pricing,
    imageUrl,
    sale,
    hotOffer,
    featured,
    areaSize
}: Props) => {
    return (
        <Link href={`/exclusive-properties/${_id}`} className=" max-w-[600px] group w-full rounded-md overflow-hidden">
            <div className=" flex items-center bg-black relative z-0 ">
                <img src={imageUrl} alt="blogs tailwind section" className="bg-gray-500  md:min-h-[450px] h-full  object-cover w-full rounded-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className='absolute left-5 text-lg bottom-5 text-white font-bold '>{pricing == "Contact Listing Agent" ? "Contact Listing Agent" : `$ ${pricing}`}</div>
                <div className='absolute top-4 left-3 flex gap-3'>
                    {featured && <div className='text-black uppercase text-[10px] bg-white px-2 py-[2px] font-bold rounded-xl'>Featured</div>}
                </div>


                <div className='absolute top-4 right-3 flex gap-3'>
                    {sale && <div className='text-black uppercase text-[10px] bg-white px-2 py-[2px] font-bold rounded-xl'>FOR SALE</div>}
                    {hotOffer && <div className='text-black uppercase text-[10px] bg-white px-2 py-[2px] font-bold rounded-xl'>HOT OFFER</div>}
                </div>

                <div className='absolute right-3 bottom-5 gap-3  text-white flex   text-2xl'>
                    <button className='' style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}>
                        <AiOutlineFullscreen></AiOutlineFullscreen>
                    </button>

                </div>
            </div>
            <Link href={`/exclusive-properties/${_id}`} className='flex items-center justify-between'>
                <div className="py-4 lg:py-4 transition-all duration-300 group-hover:bg-gray-50 px-2">
                    <h4 className=" text-gray-900 font-medium text-[16px] mb-1">{title}</h4>
                    <p className="text-[#636363]  text-[15px]">{address}</p>
                </div>

                <div className='flex  items-center'>
                <div className='text-[20px]'>
                <MdOutlineSquareFoot />
                </div>
                    <h4 className=" text-gray-900 font-medium text-[16px]">{areaSize}</h4>
                
                </div>
            </Link>
        </Link>
    )
}

export default ExCard;