import classes from './User.module.css';
import { Component } from 'react'

/**
 * 165 - defining a class
 * react calls render method, equivalent to return in functional component
 * in functions, props is a param, in class no props
 * need to iimport component from react  - and extend it from user
 * bc of extends component - this is used with props in classes
 * now we have the class based equivalent to the functional component
 * a class can also render a functional component like users.js
 */

class User extends Component {
  // constructor() {

  // }

  componentWillUnmount () {
    console.log("tester");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
