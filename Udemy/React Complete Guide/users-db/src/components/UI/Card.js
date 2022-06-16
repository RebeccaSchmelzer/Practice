import React from 'react'
import classes from './Card.module.css'

//access between the opening and closing tags of card (form element) using props.children
const Card = (props) => {
  return (
    <div className={classes.card}>
        {props.children}
    </div>
  )
}

export default Card
