import React from "react";
import { useState, createContext } from 'react'
import data from "../components/data";

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < data.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

    return(
        <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>

    )
}

export default ShopContextProvider;