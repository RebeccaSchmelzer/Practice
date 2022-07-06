import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

/*
    141
    - onclick in button 1, uses props to get onclose from app where the cart is used, onclick the modal closes
    - add onclose prop here in the modal, now that its defined in the modal itsef and pass them props down
*/

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[
        {id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}</ul>
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.action}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart