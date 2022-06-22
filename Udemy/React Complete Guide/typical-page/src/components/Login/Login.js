import React, { useState, useEffect } from 'react';
import { useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//117 outside the component bc it doesnt need to interact with the component
/*so set the state within this with a new object
and set the email to be valid if the type is user-input*/
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR') {
  return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false}
}

const Login = (props) => {
  //comment these out bc now using reducer
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  //117 understanding useReducer
  //1 state snapshot used in the component re-render/reeval cycle
  //2 function that can be used to dispatch a new action (trigger the update of the state)
    //does not just set the state, dispatch an action, action is consumed by 3
  //3 reducer function, gets state snap, gets the action and updates the state
    //triggered automatically once an action is dispatched via 2 and received the latest state 1, and returns the new updated state
  //4 initial state
  //5 function to set inti state programatically
  // const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)
  /*so this is the initial state*/
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', 
    isValid: null,
  })
  
  //115 useeffect

  //this runs after every keystroke, after every reeval
  useEffect(() => {
    console.log('hi');
  })
  //only runs for the first time and not for any subsequent rerender
  useEffect(() => {
    console.log('hi');
  }, [])

    //only runs the first time + keystrokes in password input, whenever password changes this runs
  useEffect(() => {
    console.log('hi');
  }, [enteredPassword])

  useEffect(() => {
    console.log('hi');
    //cleanup runs before the state functions as a whole runs but not before the first time it runs
    return () => {}
  }, [enteredPassword])

  //cleanup only when component is removed from the dom, so after the entire login is completed
  useEffect(() => {
    console.log('hi');
    return () => {}
  }, [])

    //no depens == only run once
    //using setformisvalid and enteredemail + passw
    //theref u add these three bc after login function execution, only if either setform is valid or if eneteredemail/passw change
  //if neither change, this will not run
  //helps to make sure we have one piece of code that reruns whenever the depens change
  //side effects are http reqs, also a side effect if save every keystroke after listen
  // useEffect(() => {
  //   //we want to rerun this for every keystroke and validation - 112
  //   //114 - this is not super efficient bc everykey storke is recorded
  //   //set the timeout to be 500 seconds before this is triggered
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     )  
  //   }, 500)
    
  //   //runs as a clean up process beofre useeffect runs agains
  //   //clean up also happens whenever the component is rerun
  //   return () => {
  //     clearTimeout(identifier)
  //   }
  // }, [enteredEmail, enteredPassword])

    //validate email if its correct
  const emailChangeHandler = (event) => {
    //so this triggers emailReducer bc this is the function used to do that
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
    //116 updating this state based on another state, shouldnt do that bc this code could acc lead to this running before enteredPass was entered
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      //so change this to emailstate bc thats what were doing rn
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
