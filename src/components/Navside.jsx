import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../firebase-config'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navside = () => {
    const navigate = useNavigate()
    const logOut = async() => {
        await signOut(auth)
        navigate('/')
        toast.success('You have been signed out!')
    }   

  return (
    <>
    <div className="contain">
        <div className="navbar">
            <nav className="nav">
            <NavLink to='/dashboard' style={{ textDecoration: 'none' }}>
            <h2 className='head'>Elph<span>Blog</span></h2>
        </NavLink>
        <div className="links">
            <NavLink to='/create' style={{ textDecoration: 'none' }} onClick={() => {
                logOut()
            }}>
                <h2 className='tw'>Sign Out</h2>
            </NavLink>
        </div>
            </nav>    
        </div>   
        <div className="sidebar">
            <div className="div1"></div>
            <NavLink to='/dashboard' style={{ textDecoration: 'none' }} className="text">
                <h2 style={{color: "#ededed", fontWeight:"1000", marginLeft:"8%"}}>Home</h2>
            </NavLink>
            <NavLink to='/posts' style={{ textDecoration: 'none' }} className="text">
                <h2 style={{color: "#ededed", fontWeight:"1000", marginLeft:"8%"}}>BlogPosts</h2>
            </NavLink>
            <NavLink to='/settings' style={{ textDecoration: 'none' }} className="text">
                <h2 style={{color: "#ededed", fontWeight:"1000", marginLeft:"8%"}}>Add Post</h2>
            </NavLink>
            <div className="div2"></div>
        </div>

    </div>
    

    </>
  )
}

export default Navside
