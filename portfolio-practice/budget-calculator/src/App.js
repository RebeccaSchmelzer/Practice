import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState('')

  const calculate = (e) => {
    e.preventDefault()
    const myNum = number * 10
    console.log(myNum);
  }
  return (
    <div className="App">
        <form onSubmit={calculate}>
            <h1>Log in</h1>
            <input type="text" name="" id="" placeholder='hours for the week' value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button type="submit">calculate</button>
        </form>
    </div>
  );
}

export default App;
