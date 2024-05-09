import { useState } from "react";
import {
  UserOutlined,
  BarChartOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useCollapseStore } from "../../../stores/Layout/collapseStore";

const SidebarComponent = () => {
  const { collapsed,  } = useCollapseStore();
  const [, setCurrentMenuItem] = useState<string>("dashboard");

  const handleMenuItemClick = (key: string) => {
    setCurrentMenuItem(key);
  };

  
  return (
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
  );
};

export default SidebarComponent;
