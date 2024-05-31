"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import BigCarousel from "./BigCarousel";

type Props = {
  imageUrls: string[];
  backgroundColor?: string;
};

function Carousel({ imageUrls, backgroundColor }: Props) {
  // const [display, setDisplay] = useState(true);
  // const [isBigCarouselVisible, setIsBigCarouselVisible] = useState(false);

  // const handleClick = () => {
  //   setIsBigCarouselVisible(true);
  // };

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderContainerClass = `slider-container max-w-[1350px] w-full mx-auto ${
    backgroundColor ? backgroundColor : "bg-black"
  }`;

  return (
    <div className={sliderContainerClass}>
      <Slider {...settings}>
        {imageUrls?.map((url, index) => (
          // <div key={index} className="p-2 focus:outline-none" onClick={() => handleClick()}>
          <div
            key={index}
            className="p-2 focus:outline-none"
            onClick={() => handleClick(index)}
          >
            <Image
              src={url}
              alt={`Slide ${index + 1}`}
              width={600}
              height={300}
              layout="responsive"
              unoptimized
            />
          </div>
        ))}
      </Slider>
      {modalOpen && (
        <BigCarousel
          imageUrls={imageUrls}
          startIndex={currentImageIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Carousel;
