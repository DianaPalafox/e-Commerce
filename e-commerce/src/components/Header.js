import React from "react";
import logo from './logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci"


function Header() {
    return(
        <nav className="header">
            <ul className="links">
                <div className='logo'>
                    <Link to='/'>
                        <li><img src={logo} alt='logo' /></li>
                    </Link>
                </div>
                <div className='header-content'>
                    <Link to='/shop'>
                        <li className='shop-print'>Shop Prints</li>
                    </Link>
                    <Link to='/cart'>
                        <li className='icon'><CiShoppingCart size={30}/></li>
                    </Link>
                </div>
                
            </ul>

        </nav>
    )
}

export default Header;