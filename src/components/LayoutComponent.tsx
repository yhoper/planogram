import React, { useState } from "react";
import { Layout, Menu, Button, Select, Alert } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BarChartOutlined,
  SettingOutlined,
  ProductOutlined,
} from "@ant-design/icons";

import CollapseComponent from "./CollapseComponent";
import { Location } from "../interfaces/types";
import ChartjsComponent from "./ChartjsComponent";

import { Card, Col, Row, Statistic, Divider } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import ChartDoughnut from "./ChartCard/ChartDoughnut";

interface CustomTheme {
  colorBgContainer: string;
  borderRadiusLG: string;
  // Otros atributos del tema que puedas necesitar
}

const { Option } = Select;

const LayoutComponent: React.FC = () => {
  const customTheme: CustomTheme = {
    colorBgContainer: "#ffffff",
    borderRadiusLG: "5px",
  };

  const [collapsed, setCollapsed] = useState(false);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [store, setStore] = useState<string | undefined>();
  const [location, setLocation] = useState<string | undefined>();
  const [currentMenuItem, setCurrentMenuItem] = useState<string>("dashboard");

  const handleStoreChange = (value: string) => {
    setStore(value);
    setSelectedStore(value);
    setLocations(getLocationsForStore(value));
    setLocation(undefined);
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
  };

  const getLocationsForStore = (store: string): Location[] => {
    switch (store) {
      case "falabella":
        return [{ value: "costaneraCenter", label: "Costanera Center" }];
      case "paris":
        return [{ value: "parqueArauco", label: "Parque Arauco" }];
      case "ripley":
        return [
          { value: "parqueArauco", label: "Parque Arauco" },
          { value: "costaneraCenter", label: "Costanera Center" },
        ];
      case "walmart":
        return [
          { value: "costaneraCenter", label: "Costanera Center" },
          { value: "puenteNuevo", label: "Puente Nuevo" },
        ];
      default:
        return [];
    }
  };

  const handleMenuItemClick = (key: string) => {
    setCurrentMenuItem(key);
  };

  const getContent = () => {
    switch (currentMenuItem) {
      case "dashboard":
        return <ChartjsComponent />;
      case "lg":
        return (
          <>
            <div className="layoutSelect twocol">
              <Select
                showSearch
                placeholder="Selecciona una tienda"
                onChange={handleStoreChange}
                style={{ width: 200, marginRight: 10 }}
                value={selectedStore}
              >
                <Option value="falabella">Falabella</Option>
                <Option value="paris">Paris</Option>
              </Select>

              <Select
                showSearch
                placeholder="Seleccione ubicación"
                style={{ width: 200 }}
                disabled={!selectedStore}
                options={locations}
                onChange={handleLocationChange}
              />

              {store === "paris" && location === "parqueArauco" && (
                <>
                  <Col span={6}>
                    <Card bordered={false}>
                      <Statistic
                        title="PARIS"
                        value={95.30}
                        precision={2}
                        valueStyle={{ color: "#3f8600" }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                      />
                      <div style={{ height: "140px" }}>
                        <ChartDoughnut />
                      </div>
                    </Card>
                  </Col>
                </>
              )}
              {store && !location && store !== "paris" && (
                <>
                  <Col span={6}>
                    <Card bordered={false}>
                      <Statistic
                        title="FALABELLA"
                        value={90.28}
                        precision={2}
                        valueStyle={{ color: "#3f8600" }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                      />
                      <div style={{ height: "140px" }}>
                        <ChartDoughnut />
                      </div>
                    </Card>
                  </Col>
                </>
              )}
            </div>
            {store === "paris" && location === "parqueArauco" && (
              <>
                <CollapseComponent />
              </>
            )}

            {!store && !location && (
              <div>
                <Alert message="Seleccione una tienda" type="warning" />
              </div>
            )}

            {store && !location && store !== "paris" && (
              <div>
                {/* <Alert message="Seleccione una ubicación" type="warning" /> */}
                <ChartjsComponent />
              </div>
            )}

            {store && location && store !== "paris" && (
              <div>
                <Alert
                  message="No tenemos PLANOGRAMA para la tienda y ubicación seleccionada"
                  type="error"
                />
              </div>
            )}
          </>
        );
      case "model":
        return <div>Aquí van los modelos</div>;
      case "settings":
        return <div>Aquí va la configuración</div>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <img
          className="logoMenu"
          src="https://www.lg.com/content/dam/lge/common/logo/logo-lg-100-44.svg"
        ></img>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => handleMenuItemClick(key.toString())}
          items={[
            {
              key: "dashboard",
              icon: <BarChartOutlined style={{ color: "#000" }} />,
              label: "Dashboard",
            },
            {
              key: "lg",
              icon: <UserOutlined style={{ color: "#000" }} />,
              label: "LG",
            },
            {
              key: "model",
              icon: <ProductOutlined style={{ color: "#000" }} />,
              label: "Modelos",
            },
            {
              key: "settings",
              icon: <SettingOutlined style={{ color: "#000" }} />,
              label: "Configuración",
            },
          ]}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header
          style={{
            padding: 0,
            background: customTheme.colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Layout.Header>
        {/* <Layout.Content style={{ margin: "24px 16px", minHeight: 280 }}> */}
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: customTheme.colorBgContainer,
            borderRadius: customTheme.borderRadiusLG,
          }}
        >
          {getContent()}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
