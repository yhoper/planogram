import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CollapseComponent from "./CollapseComponent";
import { Select } from "antd";
import {  Location } from "../interfaces/types";
import { Alert } from "antd";
import ChartjsComponent from "./ChartjsComponent";
// Define tu propio tipo para el tema
interface CustomTheme {
  colorBgContainer: string;
  borderRadiusLG: string;
  // Otros atributos del tema que puedas necesitar
}

const { Option } = Select;

const LayoutComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [store, setStore] = useState<string | undefined>();
  const [location, setLocation] = useState<string | undefined>();
  

  // Suponiendo que tengas un tema personalizado
  const customTheme: CustomTheme = {
    colorBgContainer: "#ffffff",
    borderRadiusLG: "5px",
    // Otros valores del tema
  };


  const handleStoreChange = (value: string) => {
    setStore(value);
    setSelectedStore(value);
    // Lógica para cargar las ubicaciones basadas en la tienda seleccionada
    switch (value) {
      case "falabella":
        setLocations([
          
          
          { value: "costaneraCenter", label: "Costanera Center" },
        ]);
        break;
      case "paris":
        setLocations([{ value: "parqueArauco", label: "Parque Arauco" }]);
        break;
      case "ripley":
        setLocations([
          { value: "parqueArauco", label: "Parque Arauco" },
          { value: "costaneraCenter", label: "Costanera Center" },
        ]);
        break;
      case "walmart":
        setLocations([
          { value: "costaneraCenter", label: "Costanera Center" },
          { value: "puenteNuevo", label: "Puente Nuevo" },
        ]);
        break;
      default:
        setLocations([]);
        break;
    }
    setLocation(undefined);
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
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
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "LG",
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
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
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
          <div className="layoutSelect">
            <Select
              showSearch
              placeholder="Selecciona una tienda"
              onChange={handleStoreChange}
              style={{ width: 200, marginRight: 10 }}
              value={selectedStore}
            >
              <Option value="falabella">Falabella</Option>
              <Option value="paris">Paris</Option>
              {/* <Option value="ripley">Ripley</Option>
              <Option value="walmart">Walmart</Option> */}
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

          {store === "paris" && location === "parqueArauco" && (
            <>
              <ChartjsComponent />
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
              <ChartjsComponent/>
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
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
