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
            {/* <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <div style={style}>
                        <Card
                            bordered={false}
                            style={{
                                marginTop: 20
                            }}
                        >
                            <h3 style={{ marginBottom: '20px' }}>Temperature</h3>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={8}>Max</Col>
                                <Col className="gutter-row" span={8}><span style={{ float: 'center' }}>Kurunagala</span></Col>
                                <Col className="gutter-row" span={8}> <span style={{ float: 'right' }}>34°C</span></Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={8}>Min</Col>
                                <Col className="gutter-row" span={8}><span style={{ float: 'center' }}>Nuwara Eliya</span></Col>
                                <Col className="gutter-row" span={8}> <span style={{ float: 'right' }}>20°C</span></Col>
                            </Row>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div style={style}>
                        <Card
                            bordered={false}
                            style={{
                                marginTop: 20
                            }}
                        >
                            <h3 style={{ marginBottom: '20px' }}>Humidity</h3>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={8}>Max</Col>
                                <Col className="gutter-row" span={8}><span style={{ float: 'center' }}>Kurunagala</span></Col>
                                <Col className="gutter-row" span={8}> <span style={{ float: 'right' }}>70%</span></Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={8}>Min</Col>
                                <Col className="gutter-row" span={8}><span style={{ float: 'center' }}>Nuwara Eliya</span></Col>
                                <Col className="gutter-row" span={8}> <span style={{ float: 'right' }}>20%</span></Col>
                            </Row>

                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div style={style}>
                        <Card
                            bordered={false}
                            style={{
                                marginTop: 20
                            }}
                        >
                            <h3 style={{ marginBottom: '20px' }}>Air Pressure</h3>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={8}>Max</Col>
                                <Col className="gutter-row" span={8}><span style={{ float: 'center' }}>Kurunagala</span></Col>
                                <Col className="gutter-row" span={8}> <span style={{ float: 'right' }}>1000 hPa</span></Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={8}>Min</Col>
                                <Col className="gutter-row" span={8}><span style={{ float: 'center' }}>Nuwara Eliya</span></Col>
                                <Col className="gutter-row" span={8}> <span style={{ float: 'right' }}>800hPa</span></Col>
                            </Row>

                        </Card>
                    </div>
                </Col>
            </Row> */}

            <Divider style={{
                textAlign: 'center',
            }}>Weather and Climate Data</Divider>
            <Row>
                <Col span={24}>
                    <Card
                        // title="Weather and Climate Data"
                        bordered={false}
                        style={{
                            // marginTop: 5
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