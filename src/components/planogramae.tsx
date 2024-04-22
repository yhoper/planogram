import React, { useState, useEffect } from "react";
import ModalWithCarousel from "./modalWithCarousel";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { generateLayout } from "../utils/layoutUtilse.tsx";
import { LayoutItem } from "../interfaces/LayoutItem.tsx";
import { Props } from "../interfaces/Props";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import img_1 from "../assets/locales/img_1.jpg";
import img_2 from "../assets/locales/img_2.jpg";
import img_3 from "../assets/locales/img_3.jpg";
import ButtonContainer from "./ButtonContainer.tsx";


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
    EEEE
      <ModalWithCarousel
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        images={images}
      />
      <ButtonContainer addNewItem={addNewItem} />
      <ReactGridLayout
        cols={cols}
        layout={layout}
        onLayoutChange={onLayoutChangeHandler}
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
