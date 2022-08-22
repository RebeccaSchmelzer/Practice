import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useContext } from 'react'
import CardContext from '../../../store/cart-context'
import CartItem from './CartItem'

/*
    141
    - onclick in button 1, uses props to get onclose from app where the cart is used, onclick the modal closes
    - add onclose prop here in the modal, now that its defined in the modal itsef and pass them props down
*/

const Cart = (props) => {
    const cardctx = useContext(CardContext)
    const totalamt = `${cardctx.totalAmount.toFixed(2)}`
    const hasitems = cardctx.items.length > 0

    const cartitemremoveHandle = id => {

    }

    const cartitemAddHandle = item => {
        
    }

    const cartItems = <ul className={classes['cart-items']}>{[
        cardctx].map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartitemremoveHandle.bind(null, item.id)} onAdd={cartitemAddHandle.bind(null, item)}/>)}</ul>
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>{totalamt}</span>
        </div>
        <div className={classes.action}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasitems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart