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
    const [shoppingCart, setShoppingCart] = useState(0)

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        setShoppingCart(shoppingCart + 1)
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
        setShoppingCart(shoppingCart - 1)
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                let itemInfo = data.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price 
            }
        }
        return totalAmount; 
    }

    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount, 
        getTotalAmount,
        shoppingCart
    }

    return(
        <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>

    )
}

export default ShopContextProvider;