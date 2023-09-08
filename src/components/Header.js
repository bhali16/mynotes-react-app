import React from 'react'
import {Outlet} from 'react-router-dom'
const Header = () => {
  return (
    <>
        <h1>My Notes</h1>
        <Outlet/>
    </>
  )
}

export default Header