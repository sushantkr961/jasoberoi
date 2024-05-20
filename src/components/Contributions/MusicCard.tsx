import Image from 'next/image'
import React from 'react'

type Props = {
    imageSrc: string;
    text: string;
    className?: string;
  };
  
  const MusicCard: React.FC<Props> = ({ imageSrc, text, className }) => {
    return (
    <div>
        <div className='relative w-full '>
            <Image 
                src={imageSrc}
                height={400}
                width={600}
                layout='responsive'
                loading="lazy"
                alt={text}
                className="object-cover max-h-[913px] sm:max-h-[950px] md:max-h-[600px]"
            />
        </div>
        <div>
            <p className="text-[#111B1E]   font-poppins text-[14px] md:text-[15px] md:leading-[25px] font-[400] mt-5 text-center lg:text-left"> {text}</p>
        </div>
    </div>
  )
}

export default MusicCard