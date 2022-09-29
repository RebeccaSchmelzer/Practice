import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

/**
 * 166 
 * in class based components you dont put consts but functions within the class
 * for state in class, define using constructor - state is always an object in a class, and has be called state
 * you have to group all states within an object
 * set State also only takes the object
 *  merges the new object with existing state, not overriding like useState, so old state is kept
 * for this in use of functions, you need to make sure the keyword inside the method refs the surrounding class
 * and this doesnt happen by default when the method is calledupon any event like onClick
 * so use .bind(this) - now the this inside the func has the same context/value as the main this when the code is evaluated
 * when constrctor is added and u extend another clss u need to call super which calls the construcotr of the super class, so the class were inheriting from
 */

  /**
   * 167
   * component did mount called once when component is mounted - like useeffect without depens
   * componwent did update called once when component updated - like useeffect with depends
   * component will unmount - like clean up for useeffect
   */

  

class Users extends Component {
  constructor() {
    super()
    this.state = {
      showUsers: true
    }
  }



  toggleUsersHandler () {
    // this.state.showUsers = false - this doesnt work
    //this.setState({showUsers: false})
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }
    })
  };

  render() {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }

}
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
