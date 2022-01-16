import {useContext} from "react"
import {CartContext} from "../contexts/CartContext"

export const Cart = () => {
    const {cart} = useContext(CartContext)
    return <div>
      no. of Cart Items: {cart}
    </div>
}