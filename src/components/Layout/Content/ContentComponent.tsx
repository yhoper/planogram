import React from "react";
import { Layout } from "antd";
import { CustomTheme } from "../../../types/layout/LayoutTheme";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { useTranslation } from "react-i18next";

const customTheme: CustomTheme = {
  colorBgContainer: "#ffffff",
  borderRadiusLG: "5px",
};

const ContentComponent: React.FC = ({}) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header items={undefined} />

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
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default ContentComponent;
