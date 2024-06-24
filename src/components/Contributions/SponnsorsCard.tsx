import Image from 'next/image'
import React from 'react'

type Props = {
    imageSrc: string;
    altText: string;
    description: string;
    className?: string;
};

const SponnsorsCard: React.FC<Props> = ({ imageSrc, altText, description, className }) => {
    return (
        <div>
            <div className='relative w-full '>
                <Image
                    src={imageSrc}
                    height={400}
                    width={600}
                    layout='responsive'
                    loading="lazy"
                    alt={altText}
                    className="object-cover max-h-[913px] sm:max-h-[950px] md:max-h-[600px]"
                />
            </div>
            <div>
                <p className="font-poppins text-[14px] md:text-[15px] md:leading-[25px] font-[400] text-white mt-5 text-center lg:text-left"> {description}</p>
            </div>
        </div>
    )
}

export default SponnsorsCard