import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'
import image from '../assets/back-svgrepo-com.svg' 

const Nav = () => {
  return (
    <>
        <div className="navbar">
        <nav className="nav">
        <NavLink to='/dashboard' style={{ textDecoration: 'none' }}>
        <h2 className='head'>Elph<span>Blog</span></h2>
      </NavLink>
      <div className="links">
        <NavLink to='/posts' style={{ textDecoration: 'none' }}>
            <h2 className='to'><img src={image} className='img' /><span>Back</span></h2>
        </NavLink>
      </div>
        </nav>    
    </div>
    </>
  )
}

export default Nav
