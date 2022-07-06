import React, { useReducer } from 'react'
import CartContext from './cart-context'

/*
    142
    - wrap any components that should get access to this context with this component
    - also add any logic for manipulating the context data to this component so its all managed here

    - add handlers to allow cartContext to only have pointers
*/

/*
  144
  - update the cart items here! in the add item to cart
  - use reducer bc its for more complex logic (if one item is already in the cart)
*/

const defaultCartState = {
  items: [],
  totalAmount:0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item)
    const updatedTotal = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotal
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
      dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemCartHandler = (id) => {
      dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider