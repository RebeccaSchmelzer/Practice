import React from 'react'
//used to modify values over states, use select is to access vals over states
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

function Login() {
  //to change val of state, pass info ur gonna take then pass a payload that will be accessed in uiser.js
  const dispatch = useDispatch()

  return (
    <div>
    
        <button onClick={() => {
          dispatch(login({name:"", age:0, email:""}))
          }}>Login</button>

          <button onClick={() => {
          dispatch(logout())
          }}>Logout</button>
    </div>
  )
}

export default Login