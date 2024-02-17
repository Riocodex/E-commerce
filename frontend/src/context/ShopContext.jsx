import React, { createContext, useState } from "react";
//here we will use all product and use it in different components

import all_product from "../components/Assets/all_product"

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart={};
    for(let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const contextValue = {all_product,cartItems}
    console.log(cartItems)
  
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;