import React from "react";
import { Card, Col, Row, Statistic, Divider, Button } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import ChartDoughnut from "./ChartCard/ChartDoughnut";
import CalendarComponent from "./CalendarComponent";


const ModelComponet: React.FC<{ onGoToModels: () => void }> = ({ onGoToModels }) => {
    return (
        <>
        <CalendarComponent></CalendarComponent>
            <Row gutter={12}>

                <Divider orientation="right" className="colorLG">
                    Cumplimiento por tienda
                </Divider>
                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="55QNED80"
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

                            title="55QNED85"
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
                            title="55UP7760"
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
                            title="55NANO80SQA"
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


                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="50UQ7500"
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


                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="50UQ8050"
                            value={82.3}
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
                            title="55OLED B2"
                            value={82.3}
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
                            title="55OLED C2"
                            value={82.3}
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


            </Row>
        </>
    );
};

export default ModelComponet;