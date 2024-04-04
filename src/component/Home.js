import React from "react";
import { Card } from "antd";
import { Grid } from "antd";
import { Col, Divider, Row } from 'antd';
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
                            <p>Test</p>
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
                            <p>Test</p>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card
                        title="Live Map"
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