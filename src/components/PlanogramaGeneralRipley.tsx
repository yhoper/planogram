import React, { useState, useEffect } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { generateLayout } from "../utils/layoutUtilsRipleyArauco.tsx";
import { LayoutItem } from "../interfaces/LayoutItem.tsx";
import { Props } from "../interfaces/Props.tsx";
import { Switch } from "antd";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ModalWithCarousel from "./modalWithCarousel";
import img_1 from "../assets/paris_arauco/img_1.jpg";
import img_2 from "../assets/paris_arauco/img_2.jpg";
import img_3 from "../assets/paris_arauco/img_3.jpg";
import img_4 from "../assets/paris_arauco/img_4.jpg";
import img_5 from "../assets/paris_arauco/img_5.jpg";
import img_6 from "../assets/paris_arauco/img_6.jpg";
import img_7 from "../assets/paris_arauco/img_7.jpg";
import img_8 from "../assets/paris_arauco/img_8.jpg";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import ModalWithProduct from "./modalWithProduct";

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

  const [blockItem, setBlockItem] = useState(false);
  const [verDescripcion, setVerDescripcion] = useState(true);

  useEffect(() => {
    setLayout(generateLayout());
  }, []);

  const generateDOM = () =>
    _.map(layout, (item) => (
      <div key={item.i} style={{ backgroundColor: item.bgColor }}>
        {verDescripcion === true && <span className="text">{item.i}</span>}
        {blockItem === true && (
          <div className="menuItems">
            {/* <ExpandAltOutlined onClick={() => handleRemoveItem(item.i)} /> */}

            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        )}
      </div>
    ));
  const handleAddItem = (color: string) => {
    const newItem: LayoutItem = {
      x: 0,
      y: 0,
      w: 13,
      h: 3,
      i: `${layout.length + 1}`,
      bgColor: color,
      category: "",
    };
    setLayout([...layout, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    // const updatedLayout = layout.filter((item) => item.i !== id);
    // setLayout(updatedLayout);
    alert(id);
  };

  const onLayoutChangeHandler = (layout: LayoutItem[]): void => {
    const newLayout = layout.map((item) => ({
      x: item.x,
      y: item.y,
      w: item.w,
      h: item.h,
      i: item.i,
      bgColor: "",
      category: item.category,
    }));
    onLayoutChange(newLayout);
  };

  const handleBlokItemChange = (checked: any) => {
    setBlockItem(checked);
  };

  const handleDescripcionChange = (checked: any) => {
    setVerDescripcion(checked);
  };

  const [isOpenImage, setIsOpenImage] = useState(false);
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];

  const itemModalImages = () => {
    setIsOpenImage(true);
  };

  const itemModalProducts = () => {
    setIsOpenProduct(true);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={() => itemModalImages()}>Ver imagenes</a>,
    },
    {
      key: "2",
      label: <a onClick={() => itemModalProducts()}>Actualizar producto</a>,
    },
  ];

  return (
    <>
      {isOpenImage === true && (
        <ModalWithCarousel
          isOpen={isOpenImage}
          onRequestClose={() => setIsOpenImage(false)}
          images={images}
        />
      )}

      {isOpenProduct === true && (
        <ModalWithProduct
          isOpen={isOpenProduct}
          onRequestClose={() => setIsOpenProduct(false)}
          images={[
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_oled_64_normal.svg",
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_qned_64_normal.svg",
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_nanocell_64_normal.svg",
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_8k-uhd-tvs_64_normal.svg",
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_ultrabig_64_normal.svg",
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_4kuhd_64_normal.svg",
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_smarttv_64_normal.svg",
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_soundbars_64_normal.svg",
            "https://www.lg.com/content/dam/lge/common/common-icon/new-product_icon/icon_oled-evo_64_normal.svg",
          ]}
        />
      )}
      <div className="contentSwitch">
        <div className="switchDescription">
          <Switch
            defaultChecked={verDescripcion}
            onChange={handleDescripcionChange}
            size="small"
          />
          Ver Descripcion
        </div>

        <div className="switchDescription">
          <Switch
            defaultChecked={blockItem}
            onChange={handleBlokItemChange}
            size="small"
          />
          Bloquear items
        </div>
      </div>

      <div>
        <button onClick={() => handleAddItem("rgb(182, 52, 93)")}>
          Agregar Item
        </button>
        <button onClick={() => handleAddItem("rgba(182, 52, 93, 0.52)")}>
          Agregar Mobiliario
        </button>
        <button onClick={() => handleAddItem("rgb(188 172 177 / 82%)")}>
          Agregar Pilar
        </button>
      </div>
      <ReactGridLayout
        cols={cols}
        layout={layout}
        onLayoutChange={onLayoutChangeHandler}
        className={className}
        rowHeight={rowHeight}
        isDraggable={blockItem === false ? isDraggable : false}
        isResizable={blockItem === false ? isResizable : false}
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
