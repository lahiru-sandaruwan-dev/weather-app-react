import React, { useState } from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import logo from "../img/logo.png";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Button } from "antd";
import { Flex } from "antd";
import { Divider } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;


const items = [
    {
        label: 'Home',
        key: 'mail',
        icon: <HomeOutlined />,
        link: '/'
    },
    {
        label: 'About',
        key: 'app',
        icon: <AppstoreOutlined />,
        link: '/about'
    },
    {
        label: 'Contact ',
        key: 'contact',
        icon: <AppstoreOutlined />,
        link: '/contact'
    },
];

const Navbar = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Router>
            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    <Flex style={{ justifyContent: 'space-between' }}>
                        <img src={logo} alt="logo" style={{ width: '380px', marginRight: '550px' }} /> {/* Logo */}
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" >
                            {items.map(item => (
                                <Menu.Item key={item.key} icon={item.icon} >
                                    <Link to={item.link}>{item.label}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Flex>

                </Header>
                <Content
                    style={{
                        padding: '0 10px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '5px 0',
                        }}
                    >
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 380,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" exact component={About} />
                            <Route path="/contact" exact component={Contact} />
                        </Switch>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        backgroundColor: 'black',
                        color: 'white'
                    }}
                >
                    {/* <Divider style={{
                        textAlign: 'center',
                        backgroundColor: 'white',
                        color: 'white'
                    }}></Divider> */}
                    @Department of Meteorology - Sri Lanka. All Rights Reserved.{new Date().getFullYear()}
                </Footer>
            </Layout>
        </Router>
    );
};
export default Navbar;
