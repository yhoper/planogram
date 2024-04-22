import React, { useState, useEffect } from "react";
import ModalWithCarousel from "./modalWithCarousel.tsx";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { generateLayout } from "../utils/layoutUtilsf.tsx";
import { LayoutItem } from "../interfaces/LayoutItem.tsx";
import { Props } from "../interfaces/Props.tsx";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import img_1 from "../assets/paris_arauco/img_1.jpg";
import img_2 from "../assets/paris_arauco/img_2.jpg";
import img_3 from "../assets/paris_arauco/img_3.jpg";
import img_4 from "../assets/paris_arauco/img_4.jpg";
import img_5 from "../assets/paris_arauco/img_5.jpg";
import img_6 from "../assets/paris_arauco/img_6.jpg";
import img_7 from "../assets/paris_arauco/img_7.jpg";
import img_8 from "../assets/paris_arauco/img_8.jpg";

// import { ZoomInOutlined } from "@ant-design/icons";

import { Switch } from "antd";

const ReactGridLayout = WidthProvider(RGL);

const planogramaF: React.FC<Props> = ({
  className = "layout",
  cols = 84,
  rowHeight = 30,
  isDraggable = false,
  isResizable = false,
  onLayoutChange = () => {},
  compactType = "vertical",
  preventCollision = false,
  verticalCompact = false,
}) => {
  const [verMedidas, setVerMedidas] = useState(false);
  const [verDescripcion, setVerDescripcion] = useState(true);
  const [inPosition, setInPosition] = useState("");

  const [layout, setLayout] = useState<LayoutItem[]>([]);

  useEffect(() => {
    setLayout(generateLayout());
  }, []);

  const itemModal = (i: any) => {
    console.log(i);
    setInPosition(i);
    setIsOpen(true);
  };

  const generateDOM = () =>
    _.map(layout, (item) => (
      <div
        onClick={() => itemModal(item.i)}
        key={item.i}
        style={{ backgroundColor: item.bgColor }}
      >
        {verDescripcion && <span className="text">{item.i}</span>}
        {verMedidas && (
          <>
            <div className="containterMeasureX">
              <div className="measureXLineL"></div>
              <div className="measureXTxt">200cm</div>
              <div className="measureXLineR"></div>
            </div>

            <div className="containterMeasureY">
              <div className="measureYTxt">200cm</div>
            </div>
          </>
        )}
        <span className="text-view" onClick={() => itemModal(item.i)}>
          {/* <ZoomInOutlined /> */}
        </span>
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

  const [isOpen, setIsOpen] = useState(false);

  //const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];
  //const images =[];

  const handleMedidasChange = (checked: any) => {
    setVerMedidas(checked);
  };

  const handleDescripcionChange = (checked: any) => {
    setVerDescripcion(checked);
  };

  return (
    <>
      {inPosition === "LG" && (
        <ModalWithCarousel
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          images={[img_1, img_2, img_6, img_7, img_8]}
        />
      )}

      {inPosition === "PILAR" && (
        <ModalWithCarousel
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          images={[img_3, img_4, img_5]}
        />
      )}
      <div className="contentSwitch">
        <div className="switchMeasure">
          <Switch
            defaultChecked={verMedidas}
            onChange={handleMedidasChange}
            size="small"
          />
          Ver medidas
        </div>
        <div className="switchDescription">
          <Switch
            defaultChecked={verDescripcion}
            onChange={handleDescripcionChange}
            size="small"
          />
          Ver Descripcion
        </div>
      </div>

      {/* <ButtonContainer addNewItem={addNewItem} /> */}
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

export default planogramaF;
