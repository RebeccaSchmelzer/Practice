/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

/*141
  use props in the headercartbutton to click onShowcart when clicked here
  then go to headercartbutton and handle it there
*/

const Header = (props) => {
  return (
    <React.Fragment>
       <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header> 
       <div className={classes['main-image']}>
        <img src={mealsImage}/>
       </div>
    </React.Fragment>
  )
}

export default Header