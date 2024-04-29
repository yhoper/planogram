import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  images: string[];
}

const ModalWithCarousel: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  images,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      id="centerModal"
    >
      <div className="contentCloseModal">
        <button className="closeModal" onClick={onRequestClose}>
          X
        </button>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ maxHeight: "300px" }}
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <p>
        Foto: {currentSlide + 1} de {images.length}{" "}
        <span className="dateModal">25 Abril 2024</span>
      </p>
    </Modal>
  );
};

export default ModalWithCarousel;
