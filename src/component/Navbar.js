import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h3>Logo</h3>

            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
