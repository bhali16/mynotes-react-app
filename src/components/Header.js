import React from 'react'
import {Outlet} from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <h1 className='app-header'>My Notes</h1>
        <Outlet/>
    </div>
  )
}

export default Header