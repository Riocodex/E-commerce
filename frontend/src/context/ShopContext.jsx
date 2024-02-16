import React, { createContext } from "react";
//here we will use all product and use it in different components

import all_product from "../components/Assets/all_product"

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const contextValue = {all_product}
  
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;