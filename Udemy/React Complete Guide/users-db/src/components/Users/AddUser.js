import React from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import { useState, useRef } from 'react'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../../Helpers/Wrapper'

//using refs bc rn everything is updated with every key stroke rather then just on submitting the form
const AddUser = (props) => {

 const nameInputRef =  useRef()
 const ageInputRef =  useRef()

    //var and setvar are used in array destructuring - js syntax
    //usestate always returns an array with exactly 2 elements
    //with this syntax were pulling elements out of that returned aray
    //store them in sep constants
    //first is the current state
    //everytime the component re-renders (when state is updated)
    //first constant holds latest state snapshot
    //second is a function called to change the state anf trigger the re-render
    
    //get rid of the states since were using refs now

    //using state as keylogger is not that efficient
    //use refs instead
  // const [enteredUsername, setEnteredUsername] = useState('')
  // const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

    const adduserHandler = (event) => {
      event.preventDefault()
        //prevent the requent from being sent automatically, has to be an onsubmit

        //so logging this gets u an object back, with current property
        //holds val that ref is connected with
        //what is being stored as a dom node, but dont touch the dom
        console.log(nameInputRef);

        //gets the actual val back
        //so u can get access to the vals stored in the element w/o having to log every keystroke
        //so use this instead to get the values, create a constant below
        console.log(nameInputRef.current.value);

        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value

        //all the code below should only render if the inputs are valid
        if(enteredName.trim().length===0 || enteredUserAge.trim().length===0) {
          //if invalid values set the error holder as this object, access by error.title or message
          setError({
            title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
        }
        

        //props is a function, passing a pointer to adduserhandler in the app to onadduser and adduserhandler is a function

        //ok so now were not using the state anymore, were using refs for everything
        props.onAddUser(enteredName, enteredUserAge);
        //rarely do this! bc ur manipulating the dom, just this once
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        //set the current state to an empty string when form is submitted
        //get rid of the set staters nc refs
        // setEnteredUsername('')
        // setEnteredAge('')
    }

      //triggered on every keystroke of the input username
      //gets event object (dom)

      //and get rid of these handlers bc refs
    // const usernameChangeHandler = (event) => {
    //   setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //   setEnteredAge(event.target.value);
    // }

      //trigger this in error modal bc thats where the button to dissapear it and the backdrop is 
    const errorHandler = () => {
      setError(null)
    };
//parenttheses run it when the component loads!

//errormodal is only output if u have an error

//wrapper it

//connect ref to the html element
    //sets the whatever the user inputs as a real dom element


    //now get rid of the value and onchange inputs
  return (
    <Wrapper>
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
        <input id='username' type='text' ref={nameInputRef} />

        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' ref={ageInputRef}/>

        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </Wrapper>
  )
}

export default AddUser
