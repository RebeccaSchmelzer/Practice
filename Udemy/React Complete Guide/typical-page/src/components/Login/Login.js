import React, { useState, useEffect, useContext, useRef } from 'react';
import { useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

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
// 118 password reducer
const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === 'INPUT_BLUR') {
  return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false}
}

const Login = (props) => {
  //comment these out bc now using reducer
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  //118 comment these out for useReducer
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
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
  
  const [passState, dispatchPass] = useReducer(passwordReducer, {
    value: '', 
    isValid: null,
  })

  //set up use context - 125
  const authCtx = useContext(AuthContext)

  //set up useref - 129
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

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
  // useEffect(() => {
  //   console.log('hi');
  // }, [enteredPassword])

  // useEffect(() => {
  //   console.log('hi');
  //   //cleanup runs before the state functions as a whole runs but not before the first time it runs
  //   return () => {}
  // }, [enteredPassword])

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
  //118 uncomment this out were gonna use it for form validity
  //so this runs with the latest state value
  /*this is a problem tho bc it runs everytime the email or pass state is changed, runs too often */
  //so use object destructuring to pull out certain things from objects
  //get them an alias, and use them as constant
  const {isValid: emailIsValid} = emailState
  const {isValid: passIsValid} = passState

  useEffect(() => {
    //we want to rerun this for every keystroke and validation - 112
    //114 - this is not super efficient bc everykey storke is recorded
    //set the timeout to be 500 seconds before this is triggered
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passIsValid
      )  
    }, 500)
    
    //runs as a clean up process beofre useeffect runs agains
    //clean up also happens whenever the component is rerun
    return () => {
      clearTimeout(identifier)
    }
  }, [emailIsValid, passIsValid])

    //validate email if its correct
  const emailChangeHandler = (event) => {
    //so this triggers emailReducer bc this is the function used to do that
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
    //116 updating this state based on another state, shouldnt do that bc this code could acc lead to this running before enteredPass was entered
    //118 commwent this out bc were gonnna do form validity with useEffect
    // setFormIsValid(
    //   event.target.value.includes('@') && passState.isValid )
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    

    //118 CHANGE this to use the passDispatch
    dispatchPass({type: 'USER_INPUT', val: event.target.value})

      //118 comment this out were gonna do useeffect
    // setFormIsValid(
    //   //so change this to emailstate bc thats what were doing rn
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPass({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.activate()
    } else {
      
    }
    // //125 change this from props to useContext Hook
    // authCtx.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} id="email" label="E-mail" type="email" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
        <Input ref={passwordInputRef} id="password" label="Password" type="password" isValid={passIsValid} value={passState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
