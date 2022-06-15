
//not dealing with jsx so we dont need to import resct


// import styled from 'styled-components'

import React from 'react';

import styles from './Button.module.css'

//applies button class to the class modularly, changes the class name to be unique
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

//wraps styles in generated classes and add them in the dev tools


//set width to auto so that with is 100% whenever the window is moved
// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//     @media (min-width: 768px) {
//       width: auto;
//     }
  
//   &:focus {
//     outline: none;
//   }
  
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }


// `;




export default Button;