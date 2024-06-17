import React from 'react'

type Props = {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    imageUrl: string;
}

const Card = ({
    _id,
    title,
    content,
    createdAt,
    imageUrl
}: Props) => {
    return (
        <div key={_id} className="group w-full rounded-md overflow-hidden">
            <div className="flex items-center  relative z-0  md:min-h-[300px] ">
                <img alt="blogs tailwind section" className="bg-gray-500  h-full object-cover w-full rounded-none" />
                <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section" className="bg-gray-500  h-full  md:min-h-[300px] object-cover w-full rounded-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div className="py-4 lg:py-6 transition-all duration-300 group-hover:bg-gray-50 px-3">
                <span className="text-[#C1A468] font-medium mb-3 block">{new Date(createdAt).toLocaleDateString()}</span>
                <h4 className="text-xl text-gray-900 font-medium text-[16px] mb-3">{title}</h4>
                <p className="text-[#636363] mb-2 text-[15px]">{content}</p>
                <a href={`/blog/${_id}`} className="cursor-pointer text-[15px] text-[#C1A468] font-semibold  ">Read more..</a>
            </div>
        </div>
    )
}