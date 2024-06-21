"use client"
import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaHeart } from "react-icons/fa"
import Link from 'next/link';
type Props = {
    _id?: string;
    title?: string;
    content?: string;
    createdAt?: string;
    imageUrl?: string;
}

const ExCard = ({
    _id,
    title,
    content,
    createdAt,
    imageUrl
}: Props) => {
    
    // const [liked, setLiked] = useState(() => {
    //     return JSON.parse(localStorage.getItem('liked')!) || false;
    // });

    // // Effect to update local storage whenever the liked state changes
    // useEffect(() => {setLiked
    //     localStorage.setItem('liked', JSON.stringify(liked));
    // }, [liked]);

    // Toggle the liked state
    // const toggleLike = () => {
    //     setLiked((prevLiked:boolean) => !prevLiked);
    // };

    return (
        <div className=" max-w-[600px] group w-full rounded-md overflow-hidden">
            <div className=" flex items-center bg-black relative z-0 ">
                <img src="https://jasoberoi.ca/wp-content/uploads/2024/02/1-2-592x444.jpg" alt="blogs tailwind section" className="bg-gray-500  h-full  object-cover w-full rounded-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className='absolute left-5 text-lg bottom-5 text-white font-bold '>Contact Listing Agent</div>
                <div className='absolute top-4 right-3 flex gap-3'>
                    <div className='text-black uppercase text-[10px] bg-white px-2 py-[2px] font-bold rounded-xl'>for sale</div>
                    <div className='text-black uppercase text-[10px] bg-white px-2 py-[2px] font-bold rounded-xl'>hot sale</div>
                </div>

                <div className='absolute right-3 bottom-5 gap-3  text-white flex   text-2xl'>
                    <button className='' style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}>
                        <AiOutlineFullscreen></AiOutlineFullscreen>
                    </button>
                    <button className='' style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }} >
                        {/* {liked ? <CiHeart /> : <CiHeart className='text-red-900'/>} */}
                    </button>
                </div>
            </div>
            <Link href={`/exclusive-properties/as`}>
            <div className="py-4 lg:py-6 transition-all duration-300 group-hover:bg-gray-50 px-3">
                <h4 className=" text-gray-900 font-medium text-[16px] mb-2">INDUSTRIAL SHOWROOM IN NEWTON SURREY</h4>
                <p className="text-[#636363] mb-2 text-[15px]">7260 Park Street | Mission, BC</p>
            </div>
            </Link>
        </div>
    )
}

export default ExCard;