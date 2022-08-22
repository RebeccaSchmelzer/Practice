import React from 'react'

import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CardContext from '../../../store/cart-context'

const MealItem = (props) => {
  const Cardctx = useContext(CardContext)
    const price = `$${props.price.toFixed(2)}`

    const onAddtoCart = amount => {
      Cardctx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    }

  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddtoCart={onAddtoCart}/>
        </div>

    </li>
  )
}

export default MealItem