import React from "react";
import lg from "../assets/lg.svg";
import sony from "../assets/sony.png";
import samsung from "../assets/samsung.svg";
import bose from "../assets/bose_logo.png";
import marley from "../assets/marley.webp";

interface ButtonContainerProps {
  addNewItem: (color: string) => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ addNewItem }) => {
  return (
    <div className="button-container">
      <button
        className="btnglobal color-w"
        id="lg"
        onClick={() => addNewItem("#b6345d")}
      >
        <img src={lg} alt="" />
      </button>

      <button
        className="btnglobal color-w"
        id="samsung"
        onClick={() => addNewItem("#142a9fde")}
      >
        <img src={samsung} alt="" />
      </button>
      <button
        className="btnglobal color-w"
        id="sony"
        onClick={() => addNewItem("#000")}
      >
        <img src={sony} alt="" />
      </button>
      <button
        className="btnglobal color-b"
        id="bose"
        onClick={() => addNewItem("#f7f8f8")}
      >
        <img src={bose} alt="" />
      </button>
      <button
        className="btnglobal color-w"
        id="marley"
        onClick={() => addNewItem("#1c1c28")}
      >
        <img src={marley} alt="" />
      </button>
    </div>
  );
};

export default ButtonContainer;
