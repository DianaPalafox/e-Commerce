import React from "react";
import logo from './logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci"
import { ShopContext } from '../context/shop-context'
import { useContext, useState } from 'react'; 
import Cart from '../pages/ShoppingCart'


function Header() {
    const { shoppingCart } = useContext(ShopContext);
    const [isOpen, setIsOpen] = useState(false)
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
                    
                        <li className='icon'>
                            <button className='cart-btn' onClick={() => setIsOpen(true)}><CiShoppingCart size={30}/>
                            <div className="cart-num">{shoppingCart}</div></button>
                        </li>
                    <Cart open={isOpen} onClose = {() => setIsOpen(false)}/>
                </div>
                
            </ul>

        </nav>
    )
}

export default Header;