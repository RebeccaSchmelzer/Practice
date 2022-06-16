import React from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import { useState } from 'react'

const AddUser = () => {

    //var and setvar are used in array destructuring - js syntax
    //usestate always returns an array with exactly 2 elements
    //with this syntax were pulling elements out of that returned aray
    //store them in sep constants
    //first is the current state
    //everytime the component re-renders (when state is updated)
    //first constant holds latest state snapshot
    //second is a function called to change the state anf trigger the re-render
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

    const adduserHandler = (event) => {
        //prevent the requent from being sent automatically, has to be an onsubmit
        event.preventDefault()
        console.log(enteredUsername, enteredAge);
    }

      //triggered on every keystroke of the input username
      //gets event object (dom)

    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    }

//parenttheses run it when the component loads!
  return (
      <Card className={styles.input}>
    <form onSubmit={adduserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={usernameChangeHandler}/>

        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' onChange={ageChangeHandler} />

        <Button type='submit'>Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser
