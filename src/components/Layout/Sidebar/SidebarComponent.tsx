import { useState } from "react";
import {
  UserOutlined,
  BarChartOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useCollapseStore } from "../../../shared/state/layout/collapseMenu/collapseStore";
import { useTranslation } from "react-i18next";
import { useSidebarState } from "../../../shared/state/layout/sidebarMenu/sidebarStore";

const SidebarComponent = () => {
  const { t } = useTranslation();
  const { collapsed } = useCollapseStore();
  const [, setCurrentMenuItem] = useState<string>("dashboard");
  const { currentSection, setCurrentSection } = useSidebarState();

  const handleMenuItemClick = (key: string) => {
    setCurrentMenuItem(key);
    setCurrentSection(key);
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
        defaultSelectedKeys={[currentSection]}
        onClick={({ key }) => handleMenuItemClick(key.toString())}
        items={[
          {
            key: "dashboard",
            icon: <BarChartOutlined style={{ color: "#000" }} />,
            label: t("txtDashboard"),
          },
          {
            key: "lg",
            icon: <UserOutlined style={{ color: "#000" }} />,
            label: t("LG"),
          },
          {
            key: "model",
            icon: <ProductOutlined style={{ color: "#000" }} />,
            label: t("txtModels"),
          },
          {
            key: "planogram",
            icon: <ProductOutlined style={{ color: "#000" }} />,
            label: t("txtPlanogram"),
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default SidebarComponent;
