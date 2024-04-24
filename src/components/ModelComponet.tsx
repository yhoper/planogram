import React from "react";
import { Card, Col, Row, Statistic, Divider } from "antd";
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


                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="ABCDIN"
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
                            title="LA POLAR"
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
                            title="HITES"
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
                            title="EASY"
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