import React from "react";
import logo from './logo.png'
import './header.css'

function Header() {
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>

        </div>
    )
}

export default Header;