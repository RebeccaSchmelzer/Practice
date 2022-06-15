import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
  
//     margin: 0.5rem 0;

  
//   &label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'black')};
//   }
  
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red': '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')} ;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
  
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }



// `;



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

    //78. replace the div with the styled component
    //dynamic way of changing 
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
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