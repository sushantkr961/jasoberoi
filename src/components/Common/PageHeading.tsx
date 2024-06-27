"use client"
import React, { useEffect } from 'react';
import Container from '../Containers/Container';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
    imageSrc: string;
    heading: string;
    className?: string;
};

const PageHeading: React.FC<Props> = ({ imageSrc, heading, className }) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className='w-full relative py-[30px] md:h-[200px] flex items-center text-center'

            style={{ position: 'relative', pointerEvents: 'none' }}>
            <img src={imageSrc} alt={heading} className='absolute object-cover h-full w-full' style={{ pointerEvents: 'none' }} />
          
            <div className='absolute h-full w-full bg-black opacity-80 ' ></div>
            <Container className='w-full z-10 m-auto text-center md:text-center leading-0'>
                <h1 className={`font-poppins font-bold text-[35px] md:text-[60px]  text-center md:text-center  text-white ${className}`}>
                    {heading}
                </h1>
            </Container>
        </motion.div >

    );
};

export default PageHeading;
