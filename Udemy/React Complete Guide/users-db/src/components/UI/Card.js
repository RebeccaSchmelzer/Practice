import React from 'react'
import classes from './Card.module.css'

//access between the opening and closing tags of card (form element) using props.children
//card need to reflect card css and adduser css, so add both
//so classes.card allows u to take the styles from card and apply them here
//props.classname accesses the classname from adduser and outputs all children
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card
