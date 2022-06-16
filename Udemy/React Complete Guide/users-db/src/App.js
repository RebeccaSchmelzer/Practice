
import './App.css';
import AddUser from './components/Users/AddUser';

//click adduser and the page doesnt reload which is what the preventdefault is doing
function App() {
  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
