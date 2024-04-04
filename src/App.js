import React, { useState } from 'react';
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import { DatePicker } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import './App.css';

// const items = [
//   {
//     label: 'Home',
//     key: 'mail',
//     icon: <MailOutlined />,
//     link: '/'
//   },
//   {
//     label: 'About',
//     key: 'app',
//     icon: <AppstoreOutlined />,
//     link: '/about'
//   },
// ];
// const App = () => {
//   const [current, setCurrent] = useState('mail');
//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };

//   return (
//     <Router>
//       <div>
//         <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" className="custom-navbar">
//           {items.map(item => (
//             <Menu.Item key={item.key} icon={item.icon}>
//               <Link to={item.link}>{item.label}</Link>
//             </Menu.Item>
//           ))}
//         </Menu>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" exact component={About} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

const App = () => {
  return (
    <>
      <Navbar />
    </>
  )
}

export default App;
