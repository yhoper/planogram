import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Divider, Select } from "antd";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  images: string[];
}

interface Model {
  value: string;
  label: string;
}

const ModalWithProduct: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  images,
}) => {
  const [, setCurrentSlide] = useState(0);
  const [selectedInches, setSelectedInches] = useState<string | null>(null);

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const onChangeMeasure = (value: string) => {
    console.log(`selected ${value}`);
    setSelectedInches(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const modelsForInches: Record<string, Model[]> = {
    "40": [
      {
        value: "OLED42C3PSA",
        label: "OLED42C3PSA 42''",
      },
    ],
    "50": [
      {
        value: "OLED55C3PSA",
        label: "OLED55C3PSA 55''",
      },
      {
        value: "OLED55G3PSA",
        label: "OLED55G3PSA 55''",
      },
    ],
    "60": [
      {
        value: "OLED65G3PSA",
        label: "OLED65G3PSA 65''",
      },
      {
        value: "OLED65C3PSA",
        label: "OLED65C3PSA 65''",
      },
    ],
    "70": [
      {
        value: "OLED77G3PSA",
        label: "OLED77G3PSA 77''",
      },
    ],
    "80": [
      {
        value: "OLED83C3PSA",
        label: "OLED83C3PSA 83''",
      },
    ],
    "90": [],
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
      <Divider></Divider>
      <Select
        showSearch
        placeholder="Selecciona la medida"
        optionFilterProp="children"
        onChange={onChangeMeasure}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: "40",
            label: "40 ''",
          },
          {
            value: "50",
            label: "50 ''",
          },
          {
            value: "60",
            label: "60 ''",
          },
          {
            value: "70",
            label: "70 ''",
          },
          {
            value: "80",
            label: "80 ''",
          },
          {
            value: "90",
            label: "90 ''",
          },
        ]}
      />

      {selectedInches && (
        <Select
          showSearch
          placeholder="Selecciona el modelo"
          optionFilterProp="children"
          onChange={(value) => console.log(`selected model: ${value}`)}
          onSearch={onSearch}
          filterOption={filterOption}
          options={modelsForInches[selectedInches]}
        />
      )}
    </Modal>
  );
};

export default ModalWithProduct;
