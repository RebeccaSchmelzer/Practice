import React from "react";

/*
    142
    - create store for context of the cart, init empty object with default data to give up better autocomplete later
*/

const CartContext = React.createContext({
    items: [],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext