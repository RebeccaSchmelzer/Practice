
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

//click adduser and the page doesnt reload which is what the preventdefault is doing

//this wont work bc map is undefined, u need props for this method to work
function App() {
  return (
    <div>
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
