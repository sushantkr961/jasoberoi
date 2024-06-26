"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import BigCarousel from "./BigCarousel";
import {  useFullScreenHandle } from "react-full-screen";

type Props = {
  imageUrls: string[];
  backgroundColor?: string;
  onClick?: (index: number) => void;
  fullScreen: boolean;
  className?:string;
};

function Carousel({ imageUrls, backgroundColor, onClick, fullScreen=false,className }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fullScreenHandle = useFullScreenHandle();

  const handleClick = (index: number) => {
    if (onClick) {
      onClick(index);
    } else {
      setCurrentImageIndex(index);
      setModalOpen(true);
    }
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

  const sliderContainerClass = `slider-container max-w-[1350px] w-full mx-auto ${backgroundColor ? backgroundColor : "bg-black"
    }`;

  return (
    <div className={sliderContainerClass}>
      {fullScreen == true ?
        (
          <>
            <Slider {...settings}>
              {imageUrls?.map((url, index) => (
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
                  className={`object-cover  ${className} `}
                  />
                  <p className="text-white absolute bottom-3 left-5">{`${index + 1}/${imageUrls.length
                    }`}</p>
                </div>
              ))}
            </Slider>
            {modalOpen && (
              <BigCarousel
                imageUrls={imageUrls}
                startIndex={currentImageIndex}
                onClose={() => setModalOpen(false)}
                onZoom={() => { }}
                onFullScreen={() => fullScreenHandle.enter()}
              />
            )}
          </>
        ) : (
          <>
            <Slider {...settings}>
              {imageUrls?.map((url, index) => (
                <div
                  key={index}
                  className="p-2 focus:outline-none"
                >
                  <Image
                    src={url}
                    alt={`Slide ${index + 1}`}
                    width={600}
                    height={300}
                    layout="responsive"
                    unoptimized
                    className={`object-cover ${className} `}
                  />
                  <p className="text-white absolute bottom-3 left-5">{`${index + 1}/${imageUrls.length
                    }`}</p>
                </div>
              ))}
            </Slider>
          </>
        )


      }
    </div>
  );
}

export default Carousel;
