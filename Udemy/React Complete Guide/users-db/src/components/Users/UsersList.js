import React from 'react'

import Card from '../UI/Card'
import classes from './UsersList.module.css'


//so this is rendering a card component with userslist styles but with card component functionality
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
    <ul>
        {props.users.map((user) => (
        <li>
            {user.name} ({user.age} years old)
        </li>
        ))}
    </ul>
    </Card>
  )
}

export default UsersList