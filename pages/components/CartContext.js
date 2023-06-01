import { createContext, useEffect } from "react";
import { useState } from 'react';

export const CartContext = createContext({})

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([])
    

   
    useEffect(()=>{
        const localstorageCart = localStorage.getItem('cart')
        if(localstorageCart){
            setCart(JSON.parse(localstorageCart))
        }
        
    },[])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}