import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

/*
  141
  get the props from header and use them here to actually perform the onclick in the button
  - prop chains like this could be handled using CONTEXT
*/

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton