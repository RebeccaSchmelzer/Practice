import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

/*
  141
  get the props from header and use them here to actually perform the onclick in the button
  - prop chains like this could be handled using CONTEXT
*/

/*
  143
  - bring is context for cart, not provider tho!
  - using useContext, this component will be reevaled by react whenever the context is changed
    - changes when we update it in the cart provider component
  - so now these two are connected
  - dont add the items.length bc its only the amount, 3 sushis = 1 order of sushi
  - use reduce() to get the amount of an array -> look into this
*/

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext)

  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton