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
    //class name for div is dynamic, strings can be concatted
    //check if isvalid is not true, if thats the case, insert invalid onto class and then those styles are placed
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;


// style={{color: !isValid ? 'red' : 'black'}}

// style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent'}}