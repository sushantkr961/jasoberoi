"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

function Carousel() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  const assets = [];
  for (let i = 4; i <= 22; i++) {
    assets.push(
      <div key={i}>
        <Image src={`/assets/asset ${i}.png`} alt={`Asset ${i}`} width={300} height={200} />
      </div>
    );
  }

  return (
    <div className="slider-container py-2">
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none",
        }}
      >
        <Slider {...settings}>
          {assets}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
