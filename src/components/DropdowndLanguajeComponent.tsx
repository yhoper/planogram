import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Spanish
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        English
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Korean
      </a>
    ),
  },
];

const DropdownLanguaje: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a style={{ color: "#000" }} onClick={(e) => e.preventDefault()}>
      <Space>
        <span style={{ color: "#000" }}> ES </span>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownLanguaje;
