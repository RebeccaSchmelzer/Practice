import React from 'react'
//used to modify values over states, use select is to access vals over states
import { useDispatch } from 'react-redux'
import { login } from '../features/user'

function Login() {
  //to change val of state
  const dispatch = useDispatch()

  return (
    <div>
    
        <button onClick={() => {dispatch()}}>Login</button>
    </div>
  )
}

export default Login