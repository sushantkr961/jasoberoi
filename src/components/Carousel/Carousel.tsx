"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

function Carousel() {
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

  const imageUrls = [
    "/assets/asset 4.png",
    "/assets/asset 5.png",
    "/assets/asset 6.png",
    "/assets/asset 7.png",
    "/assets/asset 8.png",
    "/assets/asset 9.png",
    "/assets/asset 10.png",
    "/assets/asset 11.png",
    "/assets/asset 12.png",
    "/assets/asset 13.png",
    "/assets/asset 14.png",
    "/assets/asset 15.png",
  ];

  return (
    <div className="bg-black slider-container max-w-[1350px] w-full mx-auto">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
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
