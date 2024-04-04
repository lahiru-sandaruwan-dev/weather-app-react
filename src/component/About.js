import React from "react";
import { Col, Divider, Row } from 'antd';
import { Carousel } from "antd";
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

const About = () => {
    return (
        <section>
            <h1>About Us</h1>

            <Row gutter={16} style={{ marginTop: '10px' }}>
                <Col className="gutter-row" span={12}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div>
                        <Carousel autoplay>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </div>
                </Col>

            </Row>
        </section>
    )
}

export default About