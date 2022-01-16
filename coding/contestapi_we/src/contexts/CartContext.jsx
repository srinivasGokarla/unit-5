import { createContext, useState } from "react";

const CartContext = createContext();
  const CartContextProvider = ({children}) => {
      const[cart,setCart] = useState(0);
      const handleCartUpdate = (value) => {
          setCart(cart + value)
      }
    return <CartContext.Provider value = {{cart,handleCartUpdate}} >
{children} 
    </CartContext.Provider >
}

export { CartContext, CartContextProvider }