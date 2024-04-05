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