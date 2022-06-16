import React from 'react'
import Card from '../UI/Card'

const AddUser = () => {
    const adduserHandler = (event) => {
        //prevent the requent from being sent automatically, has to be an onsubmit
        event.preventDefault()
    }

//parenttheses run it when the component loads!
  return (
      <Card>
    <form onSubmit={adduserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />

        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' />

        <button type='submit'>Add User</button>
    </form>
    </Card>
  )
}

export default AddUser
