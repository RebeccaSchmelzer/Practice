import React from 'react'
import classes from './Button.module.css'


//so if props.type is undefined then the fallback if button
//gte a button handler thru props 

//the button name is defined in adduser and just bring that in thru props
const Button = (props) => {
  return (
    <button className={classes.button} type={props.type || 'button'}
            onClick={props.onClick}
    
    >
        {props.children}
    </button>
  )
}

export default Button