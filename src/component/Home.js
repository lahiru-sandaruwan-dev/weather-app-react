import React from "react";
import { Card } from "antd";
import { Grid } from "antd";
import { Col, Divider, Row } from 'antd';
import { HeatMapOutlined } from '@ant-design/icons';
import LiveMap from "./LiveMap";

const style = {

    padding: '8px',

};

const Home = () => {
    return (
        <>
            {/* <Divider orientation="left">Horizontal</Divider> */}
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Card
                            bordered={false}
                            style={{
                                marginTop: 20
                            }}
                        >
                            <p><HeatMapOutlined /> Max. Temperature</p>
                            <p><HeatMapOutlined /> Min. Temperature</p>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Card
                            bordered={false}
                            style={{
                                marginTop: 20
                            }}
                        >
                            <p>Max. Humidity</p>
                            <p>Min. Humidity</p>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Card
                            bordered={false}
                            style={{
                                marginTop: 20
                            }}
                        >
                            <p>Max. Air Pressure</p>
                            <p>Min. Air Pressure</p>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Card
                            bordered={false}
                            style={{
                                marginTop: 20
                            }}
                        >
                            <p>Max. Temperature</p>
                            <p>Min. Temperature</p>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card
                        title="Weather and Climate Data"
                        bordered={false}
                        style={{
                            marginTop: 20
                        }}
                    >
                        <LiveMap />
                    </Card>
                </Col>
            </Row>
        </>

    )
}

export default Home