import React from 'react'
import {useSetLogout } from '../services/store'
const HomePage = () => {
    const logout = useSetLogout()
  return (
    <div>HomePage  <button onClick={() => logout()}>logout!</button></div>
  )
}

export default HomePage