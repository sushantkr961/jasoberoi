import React from 'react'
import { CiHeart } from "react-icons/ci";
import { AiOutlineFullscreen } from "react-icons/ai";
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
    // md:min-h-[300px] 
    return (
        <div className=" max-w-[600px] group w-full rounded-md overflow-hidden">
            <div className=" flex items-center  bg-black relative z-0 min-h-[40px] ">
                <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section" className="bg-gray-500  h-full  object-cover w-full rounded-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className='absolute left-5 text-lg bottom-5 text-white font-bold '>Contact Listing Agent</div>
                <div className='absolute top-0 right-0'>
                    <div>for sale</div>
                    <div>hot sale</div>
                </div>

                <div className='absolute right-3 bottom-5 gap-3  text-white flex  text-2xl'>
                        <button className='' style={{background:"rgba(0, 0, 0, 0.35)"}}>
                        <CiHeart></CiHeart>
                        </button>
                        <button className='' style={{background:"rgba(0, 0, 0, 0.35)"}}>
                        <AiOutlineFullscreen></AiOutlineFullscreen>
                        </button>
                </div>
            </div>
            <div className="py-4 lg:py-6 transition-all duration-300 group-hover:bg-gray-50 px-3">
                <span className="text-[#C1A468] font-medium mb-3 block">adasd</span>
                <h4 className="text-xl text-gray-900 font-medium text-[16px] mb-3">INDUSTRIAL SHOWROOM IN NEWTON SURREY</h4>
                <p className="text-[#636363] mb-2 text-[15px]">7260 Park Street | Mission, BC</p>
            </div>
        </div>
    )
}

export default ExCard;