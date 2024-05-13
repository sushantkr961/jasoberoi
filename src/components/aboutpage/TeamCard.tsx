"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}
const TeamCard = ({ teamMemberDetails }: { teamMemberDetails: any }) => {
    const backgroundImage = `/assets/aboutus/${teamMemberDetails.image}`;

    const [showInfo, setShowInfo] = useState(false);
    const [hideInfo, setHideInfo] = useState(true);

    const handleMouseEnter = () => {
        setShowInfo(true);
        setHideInfo(false);
    };
    const handleMouseLeave = () => {
        setShowInfo(false);
        setTimeout(() => {
            setHideInfo(true);
        }, 300); // Delay hiding to allow the animation to complete
    };
    return (
        <Link className='relative  bg-cover  h-full w-full m-auto group overflow-hidden'
        href={`about/${teamMemberDetails.id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={backgroundImage}
                alt={teamMemberDetails.name}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="md:h-full xl:min-w-[315px] object-cover lg:min-h-[470px]"
            />
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-black opacity-80'></div>
            <div
                className={`text-center absolute bottom-[28px] w-full text-white z-10 transition-all duration-200 ${
                    showInfo ? 'opacity-0 translate-x-[-100%] pointer-events-none' : 'opacity-100 translate-x-0'
                }`}
            >
                <strong className='text-[15px] leading-7'>{teamMemberDetails.name}</strong>
                <div className="team-title font-poppins text-[14px]">{teamMemberDetails.role}</div>
            </div>
            <div
                className={`flex flex-col items-center justify-center text-center px-8 absolute bottom-0 right-0 h-full w-full bg-white   transition-all duration-200 ${showInfo ? 'opacity-80 translate-x-0' : hideInfo ? 'opacity-0 translate-x-full pointer-events-none' : 'opacity-0 translate-x-full pointer-events-none'
                    }`}
                style={{ visibility: hideInfo ? 'hidden' : 'visible' }}
            >
            
                <strong className='text-[16px] leading-7'>{teamMemberDetails.name}</strong>
                <p className='font-poppins text-[15px]  '>{teamMemberDetails.role}</p>
                {teamMemberDetails.descriptions && teamMemberDetails.descriptions.length > 0 && (
                    <div className="team-title leading-[22px] font-poppins text-[15px] overflow-ellipsis mt-5">{teamMemberDetails.descriptions[0].content.substring(0, 160)}...</div>
                )}
            </div>
        </Link>
    )
}

export default TeamCard