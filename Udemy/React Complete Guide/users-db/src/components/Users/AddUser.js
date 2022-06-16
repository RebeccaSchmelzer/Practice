import React from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {

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
  const [error, setError] = useState()

    const adduserHandler = (event) => {
        //prevent the requent from being sent automatically, has to be an onsubmit

        //all the code below should only render if the inputs are valid
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0) {
          //if invalid values set the error holder as this object, access by error.title or message
          setError({
            title: 'invalid input',
            message: 'please enter valid values'
          })
          
          return
        }
        //check if the age is a num and greater then 1
        if(+enteredAge < 1) {
          setError({
            title: 'invalid input',
            message: 'please enter valid values'
          })
          return;
        }
        event.preventDefault()

        //props is a function, passing a pointer to adduserhandler in the app to onadduser and adduserhandler is a function
        props.onAddUser(enteredUsername, enteredAge);
        //set the current state to an empty string when form is submitted
        setEnteredUsername('')
        setEnteredAge('')
    }

      //triggered on every keystroke of the input username
      //gets event object (dom)

    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    }

      //trigger this in error modal bc thats where the button to dissapear it and the backdrop is 
    const errorHandler = () => {
      setError(null)
    };
//parenttheses run it when the component loads!

//errormodal is only output if u have an error
  return (
    <div>
    {error && (
    <ErrorModal 
    title={error.title} 
    message={error.message} 
    onConfirm={errorHandler}
    />
    )}
      <Card className={styles.input}>
    <form onSubmit={adduserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>

        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />

        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUser
