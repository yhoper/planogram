import React from "react";
import { Card, Col, Row, Statistic, Divider } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import ChartLine from "./ChartCard/ChartLine";
import ChartPolarArea from "./ChartCard/ChartPolarArea";
import ChartArea from "./ChartCard/ChartArea";
import ChartVerticalBar from "./ChartCard/ChartVerticalBar";
import ChartDoughnut from "./ChartCard/ChartDoughnut";

const ChartjsComponent: React.FC = () => {
  return (
    <>
      {/* <Divider orientation="left">Horizontal</Divider> */}
      <Row gutter={12}>
        {/* <Col className="gutter-row" span={12}>
          <CardComponent />
        </Col> */}

        <Divider orientation="right" className="colorLG">Cumplimiento por tienda</Divider>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="FALABELLA"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <div style={{height:"140px"}}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="PARIS"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
            <div style={{height:"140px"}}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="RIPLEY"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <div style={{height:"140px"}}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="WALMART"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
            <div style={{height:"140px"}}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Divider orientation="right" className="colorLG">Gráficos</Divider>

        <Col span={6}>
          <Card bordered={false}>
            <ChartLine />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <ChartPolarArea />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <ChartArea />
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <ChartVerticalBar />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ChartjsComponent;
