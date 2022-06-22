import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
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
  useEffect(() => {
    //we want to rerun this for every keystroke and validation - 112
    //114 - this is not super efficient bc everykey storke is recorded
    //set the timeout to be 500 seconds before this is triggered
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      )  
    }, 500)
    
    //runs as a clean up process beofre useeffect runs agains
    //clean up also happens whenever the component is rerun
    return () => {
      clearTimeout(identifier)
    }
  }, [enteredEmail, enteredPassword])

    //validate email if its correct
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
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
