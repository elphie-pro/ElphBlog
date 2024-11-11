import React from 'react'
import { useState } from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar'

const Loginpage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = async() => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
       navigate('/dashboard')
       toast.success("Login Successful")
    }
    catch(e) {
      toast.error(e.message)
    }
  }

  return (
    <>
    <Navbar />
    <div className="form">
            <div className="title">
            Welcome Back, <br /> <span>Login to continue </span>
        </div>
        <input type="email" placeholder="Email" className='input' id="" required onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        <input type="password" placeholder='Password' className='input' required onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        <div className="titl">
           <p >Don't have an account? <Link className='dont' to="/create" >Sign Up!!!</Link></p> 
        </div>
        <button className="button-confirm" onClick={() => {
          login()
        }}>Login → </button>
    </div>
   </>
  )
}

export default Loginpage
