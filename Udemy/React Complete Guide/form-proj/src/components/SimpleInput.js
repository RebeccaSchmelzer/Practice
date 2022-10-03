import {  useState} from 'react'

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setThat] = useState(false)
  const [enteredNameTouched, setThatTouched] = useState(false)

  const nameInputHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlur = (event) => {
    setThatTouched(true)

    if (enteredName.trim() === '') {
      setThat(false)
      return 
    }
  }

  const formSubHandler = event => {

    setThatTouched(true)
    event.preventDefault()

    if (enteredName.trim() === '') {
      setThat(false)
      return 
    }
    setThat(true)

    console.log(enteredName);
  }

  const nameInputisInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputisInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputHandler} onBlur={nameInputBlur} value={enteredName}/>
      {nameInputisInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
