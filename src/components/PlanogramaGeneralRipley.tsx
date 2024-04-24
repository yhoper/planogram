import React, { useState, useEffect } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { generateLayout } from "../utils/layoutUtilsRipleyArauco.tsx";
import { LayoutItem } from "../interfaces/LayoutItem.tsx";
import { Props } from "../interfaces/Props.tsx";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

const PlanogramaGeneralRipley: React.FC<Props> = ({
  className = "layout",
  cols = 84,
  rowHeight = 30,
  isDraggable = true,
  isResizable = true,
  onLayoutChange = () => {},
  compactType = "vertical",
  preventCollision = false,
  verticalCompact = false,
  allowOverlapOption = true,
}) => {
  const [layout, setLayout] = useState<LayoutItem[]>([]);

  useEffect(() => {
    setLayout(generateLayout());
  }, []);

  const generateDOM = () =>
    _.map(layout, (item) => (
      <div key={item.i} style={{ backgroundColor: item.bgColor }}>
        <span className="text">{item.i}</span>
        {/* <button onClick={() => handleRemoveItem(item.i)}>X</button> */}
      </div>
    ));

  const handleAddItem = (color:string) => {
    const newItem: LayoutItem = {
      x: 0,
      y: 0,
      w: 13,
      h: 3,
      i: `${layout.length + 1}`,
      bgColor: color,
    };
    setLayout([...layout, newItem]);
  };

//   const handleRemoveItem = (id: string) => {
//     const updatedLayout = layout.filter((item) => item.i !== id);
//     setLayout(updatedLayout);
//   };

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

  return (
    <>
      <div>
        <button onClick={()=>handleAddItem('rgb(182, 52, 93)')}>Agregar Item</button>
        <button onClick={()=>handleAddItem('rgba(182, 52, 93, 0.52)')}>Agregar Mobiliario</button>
        <button onClick={()=>handleAddItem('rgb(188 172 177 / 82%)')}>Agregar Pilar</button>
      </div>
      <ReactGridLayout
        cols={cols}
        layout={layout}
        onLayoutChange={onLayoutChangeHandler}
        className={className}
        rowHeight={rowHeight}
        isDraggable={isDraggable}
        isResizable={isResizable}
        compactType={compactType}
        preventCollision={preventCollision}
        verticalCompact={verticalCompact}
        useCSSTransforms={true}
        allowOverlap={allowOverlapOption}
      >
        {generateDOM()}
      </ReactGridLayout>
    </>
  );
};

export default PlanogramaGeneralRipley;
