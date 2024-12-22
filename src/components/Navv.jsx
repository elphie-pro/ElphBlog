import React from 'react'
import '../css/nav.css'
import { NavLink } from 'react-router-dom'

const Navv = () => {
  return (
    <>
    <div className="navbar">
        <nav className="nav">
        <NavLink to='/' style={{ textDecoration: 'none' }}>
        <h2 className='head'>Elph<span>Blog</span></h2>
      </NavLink>
      <div className="links">
        <NavLink to='/' style={{ textDecoration: 'none' }}>
            <h2 className='two'>Sign In</h2>
        </NavLink>
      </div>
        </nav>    
    </div>

    </>
  )
}

export default Navv
