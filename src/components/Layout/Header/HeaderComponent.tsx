import React from "react";
import type { MenuProps } from "antd";
import { CustomTheme } from "../../../types/layout/LayoutTheme";
import { Layout, Button, Flex } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { MenuLanguages } from "../DropdownLanguajes/";
import { useCollapseStore } from "../../../shared/state/layout/collapseMenu/collapseStore";

interface HeaderProps {
  items: MenuProps["items"];
}

const customTheme: CustomTheme = {
  colorBgContainer: "#ffffff",
  borderRadiusLG: "5px",
};

const Header: React.FC<HeaderProps> = ({}) => {
  const { collapsed, setCollapsed } = useCollapseStore();
  return (
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

          <MenuLanguages />
        </Flex>
      </Flex>
    </Layout.Header>
  );
};

export default Header;
