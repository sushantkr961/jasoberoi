import React from 'react';
import Container from '../Containers/Container';

type Props = {
    imageSrc: string;
    heading: string;
};

const PageHeading: React.FC<Props> = ({ imageSrc, heading }) => {
    return (
        <div className='w-full relative py-[30px] md:h-[200px] flex items-center text-left' style={{ position: 'relative' }}>
            <img src={imageSrc} alt={heading} className='object-cover absolute h-full w-full' style={{ zIndex: 0 }} />
            <div className='absolute h-full w-full bg-black opacity-80' style={{ zIndex: 1 }}></div>
            <Container className='w-full z-30 m-auto text-center md:text-left leading-0'>
                <h1 className='font-poppins font-bold text-[35px] md:text-[60px]  text-center md:text-left z-30 text-white'>
                    {heading}
                </h1>
            </Container>
        </div>
    );
};

export default PageHeading;