"use client"; import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GalleryCarousel = () => {
    const imageUrls = Array.from({ length: 160 }, (_, index) => `/Gallery/DS_${index + 1}.jpg`);


    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        swipe: true,
        swipeThreshold: 10,
        swipeToSlide: true,
    };

    return (
        <div className="slider-container max-w-[1350px] w-full mx-auto bg-none">
            <Slider {...settings}>
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className="p-2 focus:outline-none"
                    >
                        <Image
                            src={url}
                            alt={`Slide ${index + 1}`}
                            height={100}
                            width={100}
                            unoptimized
                            className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]  object-cover object-top"
                        />
                    </div>
                ))}


            </Slider>
        </div>
    );
};
export default GalleryCarousel;