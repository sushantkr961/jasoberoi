"use client";
import Image from "next/image";
import Slider from "react-slick";

function CarouselSponsors() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        swipe: true,
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

    const imageUrls = [182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195];

    return (
        <div className="slider-container max-w-[1350px] w-full mx-auto bg-none">
            <Slider {...settings}>
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className="p-2 focus:outline-none"
                    >
                        <Image
                            src={`/assets/ourcontributions/asset ${url}.png`}
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
}

export default CarouselSponsors;
