import React from 'react';
import Container from '../Containers/Container';

type Props = {
    imageSrc: string;
    heading: string;
};

const PageHeading: React.FC<Props> = ({ imageSrc, heading }) => {
    return (
        <div className='w-full relative py-[30px] md:h-[200px] flex items-center text-center' 
        style={{ position: 'relative', pointerEvents: 'none' }}>
            <img src={imageSrc} alt={heading} className='absolute object-cover h-full w-full' style={{ pointerEvents: 'none' }} />
            <div className='absolute h-full w-full bg-black opacity-80 ' ></div>
            <Container className='w-full z-10 m-auto text-center md:text-center leading-0'>
                <h1 className='font-poppins font-bold text-[35px] md:text-[60px]  text-center md:text-center  text-white'>
                    {heading}
                </h1>
            </Container>
        </div>
    );
};

export default PageHeading;
