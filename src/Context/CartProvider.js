import { useEffect, useReducer } from "react"
import CartContext from "./CartContext"

export const initialState = {
  items: [],
  total: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price * action.payload.quantity,
      }
    case "REMOVE_FROM_CART":
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      )
      return {
        ...state,
        items: updatedItems,
        total: state.total - action.payload.price,
      }
    case "CLEAR_CART":
      return initialState
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cartState))
  }, [cartState])

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
