import React from "react";
import { Card, Col, Row, Statistic, Divider } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import ChartLine from "./ChartCard/ChartLine";
import ChartPolarArea from "./ChartCard/ChartPolarArea";
import ChartArea from "./ChartCard/ChartArea";
import ChartVerticalBar from "./ChartCard/ChartVerticalBar";
import ChartDoughnut from "./ChartCard/ChartDoughnut";

const ChartjsComponent: React.FC<{ onGoToModels: () => void }> = ({
  onGoToModels,
}) => {
  return (
    <>
      <Row gutter={12}>
        <Divider orientation="right" className="colorLG">
          Metros&#178; por tiendas
        </Divider>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="FALABELLA"
              value={97.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <div style={{ height: "140px" }}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false} onClick={onGoToModels}>
            <Statistic
              title="PARIS"
              value={95.3}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <div style={{ height: "140px" }}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="RIPLEY"
              value={91.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <div style={{ height: "140px" }}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="WALMART"
              value={82.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
            <div style={{ height: "140px" }}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={12}>
        <Divider orientation="right" className="colorLG">
          Cumplimiento por tienda
        </Divider>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="FALABELLA"
              value={97.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <div style={{ height: "140px" }}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false} onClick={onGoToModels}>
            <Statistic
              title="PARIS"
              value={95.3}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <div style={{ height: "140px" }}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="RIPLEY"
              value={91.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <div style={{ height: "140px" }}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="WALMART"
              value={82.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
            <div style={{ height: "140px" }}>
              <ChartDoughnut />
            </div>
          </Card>
        </Col>

        <Divider orientation="right" className="colorLG">
          Gráficos
        </Divider>

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
