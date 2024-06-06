
import React from "react";
import Slider from "react-slick";
import { Modal } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  startIndex: number;
  imageUrls: string[];
  onClose: () => void;
  onZoom?: () => void; // Optional zoom handler
  onFullScreen?: () => void; // Optional full screen handler
};

function BigCarousel({
  startIndex,
  imageUrls,
  onClose,
  onZoom,
  onFullScreen,
}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: startIndex,
  };

  // Function to handle the modal close event
  const handleModalClose = () => {
    onClose();
  };

  return (
    <Modal
      open={true}
      onClose={handleModalClose}
      aria-labelledby="big-carousel-modal-title"
      aria-describedby="big-carousel-modal-description"
    >
      <div className="slider-container border bottom-3 h-screen z-10 bg-white">
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index} className="image-slide">
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Slider>
        <button
          onClick={onZoom}
          style={{ position: "absolute", top: 20, right: 20 }}
        >
          Zoom
        </button>
        <button
          onClick={onFullScreen}
          style={{ position: "absolute", top: 60, right: 20 }}
        >
          Full Screen
        </button>
        <button
          onClick={handleModalClose}
          style={{ position: "absolute", top: 100, right: 20 }}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default BigCarousel;
