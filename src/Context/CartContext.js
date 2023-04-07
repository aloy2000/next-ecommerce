import React, { createContext } from "react"
import { CartProvider, initialState } from "./CartProvider"

const CartContext = createContext(initialState)

export default CartContext
