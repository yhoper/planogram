import { Layout } from "antd";
import { CustomTheme } from "../../types/layout/LayoutTheme";
import { Header } from "../../components/Layout/Header";
import { Sidebar } from "../../components/Layout/Sidebar";
import { Content } from "../../components/Layout/Content";

const customTheme: CustomTheme = {
  colorBgContainer: "#ffffff",
  borderRadiusLG: "5px",
};

const DashboardPage = () => {
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
          <Content />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;


