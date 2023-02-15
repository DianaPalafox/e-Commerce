import React from "react";
import logo from './logo.png'
import './header.css'
import { Link } from 'react-router-dom'


function Header() {
    return(
        <nav className="header">
            <ul className="links">
                <Link to='/'>
                    <li><img src={logo} alt='logo' /></li>
                </Link>
                <Link to='/shop'>
                    <li>Shop Prints</li>
                </Link>
            </ul>

        </nav>
    )
}

export default Header;