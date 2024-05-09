import React, { useState } from "react";
import { Layout, Menu, Button, Select, Flex } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BarChartOutlined,
  ProductOutlined,
} from "@ant-design/icons";

import CollapseComponent from "./CollapseComponent";
import { Location } from "../interfaces/types";
import ChartjsComponent from "./ChartjsComponent";
import ModelComponet from "./ModelComponet";
import { useTranslation } from "react-i18next";
import DropdownLanguaje from "./DropdowndLanguajeComponent";

interface CustomTheme {
  colorBgContainer: string;
  borderRadiusLG: string;
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
  const { t } = useTranslation();

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
        return [{ value: "parqueArauco", label: "Parque Arauco" }];
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

  const handleGoToModels = () => {
    setCurrentMenuItem("lg");
  };

  const getContent = () => {
    switch (currentMenuItem) {
      case "dashboard":
        return <ChartjsComponent onGoToModels={handleGoToModels} />;
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
                <Option value="ripley">Ripley</Option>
              </Select>

              <Select
                showSearch
                placeholder="Seleccione ubicación"
                style={{ width: 200 }}
                disabled={!selectedStore}
                options={locations}
                onChange={handleLocationChange}
              />
            </div>
            {store === "ripley" && location === "parqueArauco" && (
              <>
                <CollapseComponent />
              </>
            )}
            {store === "paris" && location === "parqueArauco" && (
              <>
                <CollapseComponent />
              </>
            )}
          </>
        );
      case "model":
        return (
          <ModelComponet
            onGoToModels={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        );
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
          <Flex gap="middle" vertical>
            <Flex vertical={false} justify="space-between">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: "16px", width: 64, height: 64 }}
              />

              <DropdownLanguaje />
            </Flex>
          </Flex>
        </Layout.Header>

        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: customTheme.colorBgContainer,
            borderRadius: customTheme.borderRadiusLG,
          }}
        >
          <p>{t("distribution")}</p>
          <p>{t("squareMeters")}</p>
          {getContent()}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
