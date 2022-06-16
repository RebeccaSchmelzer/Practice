
import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

//click adduser and the page doesnt reload which is what the preventdefault is doing

//this wont work bc map is undefined, u need props for this method to work

//lift state here bc ur accessing both components and u can work with the root
//so when submit happens, forward the enteredUsername and enteredAge upward to here
function App() {

  const [usersList, setUsersList] = useState([])

    //define the same function from adduserhandler
    const adduserHandler = (uName, uAge) => {
      //update the state by taking the old state and update it
      //update state in function form when state update relies on previous state
      //function will get prev state and then append it to the new array
      //then add a new js obj at the end with new vals as the params
      setUsersList((prevUsersList) => {
        return [...prevUsersList, {name: uName, age: uAge}]
      })
    }

      //so when the adduser button is clicked, onadduser is triggered
  return (
    <div>
      <AddUser onAddUser={adduserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
