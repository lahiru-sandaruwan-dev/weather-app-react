import React from "react";
import { Col, Divider, Row } from 'antd';
import { Card } from "antd";
import { Carousel } from "antd";
import company1 from '../img/company1.jpg'
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

const About = () => {
    return (
        <section>
            <h1>About Us</h1>

            <Row gutter={16} style={{ marginTop: '10px' }}>
                <Col className="gutter-row" span={12}>
                    <div>
                        <Card
                            bordered={false}
                            style={{
                                marginTop: 20,
                                textAlign: 'justify'
                            }}
                        >
                            <p>A Centre of Excellence in weather and climate related services to provide services pertaining
                                to Meteorology, Aeronautical Meteorology, Ocean Meteorology, Hydro Meteorology, Agricultural
                                Meteorology, Climatology and Astronomy to government agencies, private sector and the general public
                                in keeping with national interest and international standards.</p>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div>
                        <Carousel autoplay>
                            <div>
                                <h3 style={contentStyle}>
                                    <img src={company2} alt="logo" style={{ width: '100%', height: '100%' }} /> {/* Logo */}
                                </h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>
                                    <img src={company4} alt="logo" style={{ width: '100%', height: '100%' }} /> {/* Logo */}
                                </h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>
                                    <img src={company3} alt="logo" style={{ width: '100%', height: '100%' }} /> {/* Logo */}
                                </h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>
                                    <img src={company5} alt="logo" style={{ width: '100%', height: '100%' }} /> {/* Logo */}
                                </h3>
                            </div>
                        </Carousel>
                    </div>
                </Col>

            </Row>
        </section>
    )
}

export default About