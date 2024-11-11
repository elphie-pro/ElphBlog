import React from 'react'
import '../css/nav.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <nav className="nav">
        <NavLink to='/' style={{ textDecoration: 'none' }}>
        <h2 className='head'>Elph<span>Blog</span></h2>
      </NavLink>
      <div className="links">
        <NavLink to='/create' style={{ textDecoration: 'none' }}>
            <h2 className='two'>Create Account</h2>
        </NavLink>
      </div>
        </nav>    
    </div>

    </>
  )
}

export default Navbar
