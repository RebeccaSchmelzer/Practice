import {  useState} from 'react'

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setThat] = useState(true)

  const nameInputHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubHandler = event => {
    event.preventDefault()

    if (enteredName.trim() === '') {
      setThat(false)
      return 
    }
    setThat(true)

    console.log(enteredName);
  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputHandler} value={enteredName}/>
      {!enteredNameIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
