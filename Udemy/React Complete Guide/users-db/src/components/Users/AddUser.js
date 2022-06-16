import React from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'

const AddUser = () => {
    const adduserHandler = (event) => {
        //prevent the requent from being sent automatically, has to be an onsubmit
        event.preventDefault()
    }

//parenttheses run it when the component loads!
  return (
      <Card className={styles.input}>
    <form onSubmit={adduserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />

        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' />

        <Button type='submit'>Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser
