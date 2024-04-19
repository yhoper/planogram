import React, { useState, useEffect } from "react";
import ModalWithCarousel from "./modalWithCarousel.tsx";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { generateLayout } from "../utils/layoutUtilsf.tsx";
import { LayoutItem } from "../interfaces/LayoutItem.tsx";
import { Props } from "../interfaces/Props.tsx";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import img_1 from "../assets/locales/img_1.jpg";
import img_2 from "../assets/locales/img_2.jpg";
import img_3 from "../assets/locales/img_3.jpg";
// import { ZoomInOutlined } from "@ant-design/icons";
import ButtonContainer from "./ButtonContainer.tsx";
import { Switch } from "antd";

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
  const [verMedidas, setVerMedidas] = useState(false);
  const [verDescripcion, setVerDescripcion] = useState(true);

  const [layout, setLayout] = useState<LayoutItem[]>([]);

  useEffect(() => {
    setLayout(generateLayout());
  }, []);

  const itemModal = (i: any) => {
    console.log(i);
    setIsOpen(true);
  };
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const generateDOM = () =>
    _.map(layout, (item) => (
      <div key={item.i} style={{ backgroundColor: item.bgColor }}>
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

  const handleMedidasChange = (checked: any) => {
    setVerMedidas(checked);
  };

  const handleDescripcionChange = (checked: any) => {
    setVerDescripcion(checked);
  };

  return (
    <>
      <div>
        <Switch
          defaultChecked={verMedidas}
          onChange={handleMedidasChange}
          size="small"
        />
        Ver medidas
        <Switch
          defaultChecked={verDescripcion}
          onChange={handleDescripcionChange}
          size="small"
        />
        Ver Descripcion
      </div>

      <ModalWithCarousel
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        images={images}
      />
      {/* <ButtonContainer addNewItem={addNewItem} /> */}
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
