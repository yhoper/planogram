import React, { useState, useEffect } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { generateLayoutRipleyMain } from "../utils/layoutUtilsRipleyAraucoMain.tsx";
import { LayoutItem } from "../interfaces/LayoutItem.tsx";
import { Props } from "../interfaces/Props.tsx";
import { Switch } from "antd";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ModalWithCarousel from "./modalWithCarousel.tsx";
import img_1 from "../assets/paris_arauco/img_1.jpg";
import img_2 from "../assets/paris_arauco/img_2.jpg";
import img_3 from "../assets/paris_arauco/img_3.jpg";
import img_4 from "../assets/paris_arauco/img_4.jpg";
import img_5 from "../assets/paris_arauco/img_5.jpg";
import img_6 from "../assets/paris_arauco/img_6.jpg";
import img_7 from "../assets/paris_arauco/img_7.jpg";
import img_8 from "../assets/paris_arauco/img_8.jpg";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import ModalWithProduct from "./modalWithProduct.tsx";

import { Card, Col, Row, Statistic, Button, Flex } from "antd";
import {
  DownOutlined,
  PlusCircleOutlined,
  GatewayOutlined,
} from "@ant-design/icons";

const ReactGridLayout = WidthProvider(RGL);

const PlanogramaGeneralRipleyMain: React.FC<Props> = ({
  className = "layout",
  cols = 84,
  rowHeight = 30,
  isDraggable = true,
  isResizable = true,
  onLayoutChange = () => {},
  compactType = "vertical",
  preventCollision = false,
  verticalCompact = false,
}) => {
  const [layout, setLayout] = useState<LayoutItem[]>([]);

  const [blockItem, setBlockItem] = useState(false);
  const [measureFurniture, setMeasureFurniture] = useState(false);
  const [measureAreaCol, setMeasureAreaCol] = useState(false);
  const [verDescripcion, setVerDescripcion] = useState(true);

  const areaFurniture: number[] = [];
  const [, setTotalAreaFurniture] = useState(0);
  const areaStore: number[] = [];
  const [totalAreaStore, setTotalAreaStore] = useState(0);
  useEffect(() => {
    setLayout(generateLayoutRipleyMain());
  }, []);

  const generateDOM = () => {
    const renderAreaMeasurements = (item: LayoutItem) => {
      if (
        (measureAreaCol && item.category === "area") ||
        (measureAreaCol && item.category === "pilar")
      ) {
        return (
          <>
            <div className="containterMeasureX">
              <div className="measureXLineL"></div>
              <div className="measureXTxt">{item.width} mts</div>
              <div className="measureXLineR"></div>
            </div>

            <div className="containterMeasureY">
              <div className="measureYTxt">{item.lenght} mts</div>
            </div>
          </>
        );
      }
      return null;
    };

    const renderFurnitureMeasurements = (item: LayoutItem) => {
      if (measureFurniture && item.category === "furniture") {
        return (
          <>
            <div className="containterMeasureX">
              <div className="measureXLineL"></div>
              <div className="measureXTxt">{item.lenght} mts.</div>
              <div className="measureXLineR"></div>
            </div>

            <div className="containterMeasureY">
              <div className="measureYTxt">{item.width} mts.</div>
            </div>
          </>
        );
      }
      return null;
    };

    const calculateArea = (item: LayoutItem) => {
      if (item.category === "furniture" || item.category === "area") {
        return item.width * item.lenght;
      }
      return null;
    };

    const updatedLayout = layout.map((item) => {
      let area;
      if (item.category === "furniture") {
        area = calculateArea(item);
        if (area !== null) {
          areaFurniture.push(area);
        }
      }
      if (item.category === "area") {
        area = calculateArea(item);
        if (area !== null) {
          areaStore.push(area);
        }
      }

      return (
        <div key={item.i} style={{ backgroundColor: item.bgColor }}>
          {verDescripcion && <span className="text">{item.i}</span>}
          {blockItem && (
            <div className="menuItems">
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          )}

          {renderFurnitureMeasurements(item)}
          {renderAreaMeasurements(item)}
        </div>
      );
    });

    return updatedLayout;
  };
  const handleAddItem = (color: string) => {
    const newItem: LayoutItem = {
      x: 0,
      y: 0,
      w: 13,
      h: 3,
      i: `${layout.length + 1}`,
      bgColor: color,
      category: "",
      lenght: 0,
      width: 0,
    };
    setLayout([...layout, newItem]);
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
      lenght: item.lenght,
      width: item.width,
    }));
    onLayoutChange(newLayout);
  };

  const handleBlokItemChange = (checked: any) => {
    setBlockItem(checked);
  };

  const handleMeasureChange = (checked: any) => {
    setMeasureFurniture(checked);
  };
  const handleMeasureAreaColChange = (checked: any) => {
    setMeasureAreaCol(checked);
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
    {
      key: "3",
      label: <a onClick={() => itemModalProducts()}>Eliminar item</a>,
    },
  ];

  useEffect(() => {
    if (areaFurniture.length > 0) {
      const sumAreaFurniture = areaFurniture.reduce(
        (acumulador, currentValue) => acumulador + currentValue,
        0
      );
      setTotalAreaFurniture(sumAreaFurniture);
    }

    if (areaStore.length > 0) {
      const sumAreaStore = areaStore.reduce(
        (acumulador, currentValue) => acumulador + currentValue
      );
      setTotalAreaStore(sumAreaStore);
    }
  }, [areaFurniture]);

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

      <Row gutter={12}>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="MEDIDAS"
              value={`7.50 x 8.70`}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<GatewayOutlined />}
              suffix="M"
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="TOTAL METROS CUADRADOS LG"
              value={totalAreaStore}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<GatewayOutlined />}
              suffix="M&#178;"
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="TOTAL METROS CUADRADOS USADOS"
              value={totalAreaStore - 8.38}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<GatewayOutlined />}
              suffix="M&#178;"
            />
          </Card>
        </Col>

        <Col span={6}>
          <div style={{ width: "100%", padding: "1rem" }}>
            <PlusCircleOutlined /> AGREGAR:
          </div>
          <Card bordered={false}>
            <Row gutter={12}>
              <Col span={24}>
                <Flex gap="small">
                  <Button
                    type="primary"
                    onClick={() => handleAddItem("rgba(182, 52, 93, 0.52)")}
                    block
                  >
                    Mobiliario
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleAddItem("rgb(188 172 177 / 82%)")}
                    block
                  >
                    Pilar
                  </Button>

                  <Button
                    type="primary"
                    onClick={() => handleAddItem("rgb(182, 52, 93)")}
                    block
                  >
                    Producto
                  </Button>
                </Flex>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={12}>
        <Col span={4}>
          <div className="switchDescription">
            <Switch
              defaultChecked={verDescripcion}
              onChange={handleDescripcionChange}
              size="small"
            />
            Ver Descripcion
          </div>
        </Col>
        <Col span={4}>
          <div className="switchDescription">
            <Switch
              defaultChecked={blockItem}
              onChange={handleBlokItemChange}
              size="small"
            />
            Bloquear items
          </div>
        </Col>

        <Col span={4}>
          <div className="switchDescription">
            <Switch
              defaultChecked={measureFurniture}
              onChange={handleMeasureChange}
              size="small"
            />
            Medidas en Mobiliario
          </div>
        </Col>

        <Col span={4}>
          <div className="switchDescription">
            <Switch
              defaultChecked={measureAreaCol}
              onChange={handleMeasureAreaColChange}
              size="small"
            />
            Medidas en Area y Columna
          </div>
        </Col>
      </Row>

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
        allowOverlap={true}
      >
        {generateDOM()}
      </ReactGridLayout>
    </>
  );
};

export default PlanogramaGeneralRipleyMain;
