import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  //indicate whether the user input something true or false. trust the user first
  const [isValid, setIsValid ] = useState(true)

  const goalInputChangeHandler = event => {
    //reset functionality
    //check if entered text is value, so trim and get length, if not empty set to true again
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    //trim whitespaces and check if its empty
    //add styling to let the user know they entered something invalid.
    if(enteredValue.trim().length === 0) {
      //now set it as invalid and then add inline styles
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

    //overwrite all styles when styling like this
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;