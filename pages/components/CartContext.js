import { createContext, useEffect } from "react";
import { useState } from 'react';

export const CartContext = createContext({})

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([])


    function addToCart(id){
        console.log(id)
           setCart([...cart,id])
           localStorage.setItem('cart',JSON.stringify([...cart,id]))
      }

    function removeFromCart(id){

        setCart(prev=>{
            const position = prev.indexOf(id)

            if(position !== -1){
                console.log("if" + position)
                return prev.filter((value,index)=> index !== position)
            }else{
                console.log("else" + position)
                return prev
            }  
        })
        console.log(cart)
        localStorage.setItem('cart',JSON.stringify(cart))

        
        
        // setCart(prev=>{
        //     const pos = prev.indexOf(id)
            
        //     if(pos !== -1){
        //         return(prev.filter((value,index)=> index !== pos))
        //     } 
            
        //     return prev
           
        // })

        
        
    }
    

   
    useEffect(()=>{
        const localstorageCart = localStorage.getItem('cart')
        if(localstorageCart){
            setCart(JSON.parse(localstorageCart))
        }
        
    },[])

    return (
        <CartContext.Provider value={{cart, setCart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}