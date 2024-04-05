import React from "react";
import { Col, Divider, Row } from 'antd';
import { Card } from "antd";
import { Carousel } from "antd";
import contact from '../img/Contact-Us-Page-Examples.jpg'
import company2 from '../img/company2.jpg'
import company3 from '../img/company3.jpg'
import company4 from '../img/company4.jpg'
import company5 from '../img/company5.jpg'
const style = {
    background: '#0092ff',
    padding: '8px 0',
};

const contentStyle = {
    height: '250px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Contact = () => {
    return (
        <section>
            <h1>Contact Us</h1>
            <Row gutter={16} style={{ marginTop: '10px' }}>
                <Col className="gutter-row" span={12}>
                    <Card
                        bordered={false}
                        style={{
                            marginTop: 20,
                        }}
                    >
                        <Row gutter={16} style={{ marginTop: '10px' }}>
                            <Col className="gutter-row" span={12}>Address</Col>
                            <Col className="gutter-row" span={12}>
                                <span>
                                    Department of Meteorology
                                    383, Bauddhaloka Mawatha,
                                    Colombo 07
                                    Sri Lanka
                                </span>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginTop: '10px' }}>
                            <Col className="gutter-row" span={12}>Phone</Col>
                            <Col className="gutter-row" span={12}>
                                <span>
                                    +94 11 269 4847
                                </span>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginTop: '10px' }}>
                            <Col className="gutter-row" span={12}>Fax</Col>
                            <Col className="gutter-row" span={12}>
                                <span>
                                    +94 11 269 8311
                                </span>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginTop: '10px' }}>
                            <Col className="gutter-row" span={12}>Email </Col>
                            <Col className="gutter-row" span={12}>
                                <span>
                                    <a href="info@meteo.gov.lk">info@meteo.gov.lk</a>
                                </span>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginTop: '10px' }}>
                            <Col className="gutter-row" span={24}>
                                <span>
                                    <a href="https://gic.gov.lk/">Government Infomation Center</a>
                                </span>
                            </Col>
                        </Row>

                    </Card>
                </Col>
                <Col className="gutter-row" span={12}>
                    <img src={contact} alt="logo" style={{ width: '100%', height: '100%' }} /> {/* Logo */}
                </Col>
            </Row>
        </section>

    )
}

export default Contact