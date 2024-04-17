import React, { useState, useEffect } from "react";
import ModalWithCarousel from "./modalWithCarousel";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { generateLayout } from "../utils/layoutUtils.tsx";
import { LayoutItem } from "../interfaces/LayoutItem.tsx";
import { Props } from "../interfaces/Props";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import bose from "../assets/bose_logo.png";
import lg from "../assets/lg.svg";
import marley from "../assets/marley.webp";
import sony from "../assets/sony.png";
import samsung from "../assets/samsung.svg";
import img_1 from "../assets/locales/img_1.jpg";
import img_2 from "../assets/locales/img_2.jpg";
import img_3 from "../assets/locales/img_3.jpg";

const ReactGridLayout = WidthProvider(RGL);

const NoCollisionLayout: React.FC<Props> = ({
  className = "layout",
  cols = 84,
  rowHeight = 30,
  onLayoutChange = () => {},
  compactType = "vertical",
  preventCollision = false,
  verticalCompact = false,
}) => {
  const [layout, setLayout] = useState<LayoutItem[]>([]);

  useEffect(() => {
    setLayout(generateLayout());
  }, []);

  const itemModal = (i: any) => {
    console.log(i);
    setIsOpen(true);
  };

  const generateDOM = () =>
    _.map(layout, (item) => (
      <div
        
        onClick={() => itemModal(item.i)}
        key={item.i}
        style={{ backgroundColor: item.bgColor }}
      >
        <span className="text">{item.i}</span>
      </div>
    ));

  const onLayoutChangeHandler = (layout: LayoutItem[]): void => {
    const newLayout = layout.map((item) => ({
      x: item.x,
      y: item.y,
      w: item.w,
      h: item.h,
      i: item.i,
      bgColor: "",
    }));
    onLayoutChange(newLayout);
  };

  const addNewItem = (color: string): void => {
    const newItem: LayoutItem = {
      x: 0,
      y: 0,
      w: 2,
      h: Math.ceil(Math.random() * 4) + 1,
      i: `item-${layout.length}`,
      bgColor: color,
    };
    setLayout([...layout, newItem]);
  };
  const [isOpen, setIsOpen] = useState(false);
  const images = [img_1, img_2, img_3];

  return (
    <>
      <ModalWithCarousel
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        images={images}
      />
      <div className="button-container">
        <button
          className="btnglobal color-w"
          id="lg"
          onClick={() => addNewItem("#a50034")}
        >
          <img src={lg} alt="" />
        </button>
        <button
          className="btnglobal color-w"
          id="sony"
          onClick={() => addNewItem("#000")}
        >
          <img src={sony} alt="" />
        </button>
        <button
          className="btnglobal color-w"
          id="samsung"
          onClick={() => addNewItem("#14299f")}
        >
          <img src={samsung} alt="" />
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
      <ReactGridLayout
        cols={cols}
        layout={layout}
        onLayoutChange={(layout) => onLayoutChangeHandler(layout)}
        className={className}
        rowHeight={rowHeight}
        compactType={compactType}
        preventCollision={preventCollision}
        verticalCompact={verticalCompact}
      >
        {generateDOM()}
      </ReactGridLayout>
    </>
  );
};

export default NoCollisionLayout;
