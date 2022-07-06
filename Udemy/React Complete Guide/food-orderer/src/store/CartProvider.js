import React from 'react'
import CartContext from './cart-context'

/*
    142
    - wrap any components that should get access to this context with this component
    - also add any logic for manipulating the context data to this component so its all managed here

    - add handlers to allow cartContext to only have pointers
*/

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {

    }

    const removeItemCartHandler = (id) => {

    }

    const cartContext = {
        items: [],
        totalAmount:0,
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