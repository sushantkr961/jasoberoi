"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

type Props = {
  imageUrls: string[];
  backgroundColor?: string;
};

function Carousel({ imageUrls, backgroundColor }: Props) {
  const [display, setDisplay] = useState(true);

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
          <div key={index} className="p-2">
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
    </div>
  );
}

export default Carousel;
