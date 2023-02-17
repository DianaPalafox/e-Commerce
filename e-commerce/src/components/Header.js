import React from "react";
import logo from './logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci"
import { ShopContext } from '../context/shop-context'
import { useContext } from 'react'; 


function Header() {
    const { shoppingCart } = useContext(ShopContext);
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
                        <li className='icon'>
                            <CiShoppingCart size={30}/>
                            <div className="cart-num">{shoppingCart}</div>
                        </li>
                    </Link>
                </div>
                
            </ul>

        </nav>
    )
}

export default Header;