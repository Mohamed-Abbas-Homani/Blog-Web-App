import React from 'react'
import { useSetLogin, useSetLogout } from '../services/store'

const LoginPage = () => {
  const login = useSetLogin()

  return (
    <>
    <button onClick={() => login("user","token")}>login!</button>
    
    </>
  )
}

export default LoginPage