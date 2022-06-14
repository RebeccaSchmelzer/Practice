import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  //allows u to select which state u wanna manage
  const user = useSelector((state) => state.user.value)
  return (
    <div>
      <h1>Profile page</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>email: {user.email}</p>

    </div>
  )
}

export default Profile