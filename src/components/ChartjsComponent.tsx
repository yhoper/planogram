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
          Distribución por Metros&#178;
        </Divider>
        <Col span={6}>
          <Card bordered={false}>
            <Col span={12}>
              <div style={{ width: "100%", padding: "1rem 0 1rem  0" }}>
                METROS &#178; POR MARCA
              </div>

              <Row gutter={12}>
                <Col span={24}>
                  <span style={{ fontSize: "20px", color: "rgb(207, 19, 34)" }}>
                    LG 53%
                  </span>
                </Col>
                <Col span={24}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgba(20, 42, 159, 0.87)",
                    }}
                  >
                    SAMSUNG 38%
                  </span>
                </Col>
                <Col span={24}>
                  <span style={{ fontSize: "20px", color: "BLACK" }}>
                    SONY 9%
                  </span>
                </Col>
              </Row>
            </Col>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Col span={12}>
              <div style={{ width: "100%", padding: "1rem 0 1rem  0" }}>
                METROS &#178; FALABELLA
              </div>

              <Row gutter={12}>
                <Col span={24}>
                  <span style={{ fontSize: "20px", color: "rgb(207, 19, 34)" }}>
                    LG 45%
                  </span>
                </Col>
                <Col span={24}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgba(20, 42, 159, 0.87)",
                    }}
                  >
                    SAMSUNG 40%
                  </span>
                </Col>
                <Col span={24}>
                  <span style={{ fontSize: "20px", color: "BLACK" }}>
                    SONY 15%
                  </span>
                </Col>
              </Row>
            </Col>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Col span={12}>
              <div style={{ width: "100%", padding: "1rem 0 1rem  0" }}>
                METROS &#178; PARIS
              </div>

              <Row gutter={12}>
                <Col span={24}>
                  <span style={{ fontSize: "20px", color: "rgb(207, 19, 34)" }}>
                    LG 48%
                  </span>
                </Col>
                <Col span={24}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgba(20, 42, 159, 0.87)",
                    }}
                  >
                    SAMSUNG 35%
                  </span>
                </Col>
                <Col span={24}>
                  <span style={{ fontSize: "20px", color: "BLACK" }}>
                    SONY 17%
                  </span>
                </Col>
              </Row>
            </Col>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Col span={12}>
              <div style={{ width: "100%", padding: "1rem 0 1rem  0" }}>
                METROS &#178; RIPLEY
              </div>

              <Row gutter={12}>
                <Col span={24}>
                  <span style={{ fontSize: "20px", color: "rgb(207, 19, 34)" }}>
                    LG 40%
                  </span>
                </Col>
                <Col span={24}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgba(20, 42, 159, 0.87)",
                    }}
                  >
                    SAMSUNG 40%
                  </span>
                </Col>
                <Col span={24}>
                  <span style={{ fontSize: "20px", color: "BLACK" }}>
                    SONY 20%
                  </span>
                </Col>
              </Row>
            </Col>
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
