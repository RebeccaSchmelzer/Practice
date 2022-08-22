import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
  const [amtValid, setAmtValid] = useState(true)
  //go to component where u wanna use refs - input.js with react.forwardref
  const amountInputref = useRef()
  const submitHandler = event => {
    event.preventDefault() //make sure page doesnt reload
    //extract entered amount
    //use refs
    const enteredAmt = amountInputref.current.value
    const enteredtAmtNum = +enteredAmt

    if (enteredAmt.trim().length === 0 || enteredtAmtNum < 1 || enteredtAmtNum > 5) {
      setAmtValid(false)
      return
    }
    props.onAddtoCart(enteredtAmtNum)
  }

  return (
    <form className={classes.form} on onSubmit={submitHandler}>
        <Input label="Amount" 
        ref={amountInputref}
        input={{
          
            id:'amount',
            type:'number',
            min: '1',
            max: '5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>
            + Add
        </button>
        {!amtValid && <p>please enter valid amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm