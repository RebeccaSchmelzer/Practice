import React from 'react'
import classes from './Card.module.css'

//access between the opening and closing tags of card (form element) using props.children
//card need to reflect card css and adduser css, so add both
//so props.classname allows u to take the styles from adduser and apply them here
//props.classname accesses the classname from adduser
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card
