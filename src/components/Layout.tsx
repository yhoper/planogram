import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CollapseComponent from "./CollapseComponent";

// Define tu propio tipo para el tema
interface CustomTheme {
  colorBgContainer: string;
  borderRadiusLG: string;
  // Otros atributos del tema que puedas necesitar
}

const LayoutComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Suponiendo que tengas un tema personalizado
  const customTheme: CustomTheme = {
    colorBgContainer: "#ffffff",
    borderRadiusLG: "5px",
    // Otros valores del tema
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
          <CollapseComponent></CollapseComponent>
          
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
