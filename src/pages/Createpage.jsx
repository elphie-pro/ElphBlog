import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { auth } from '../firebase-config'
import { collection } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar'
import Navv from '../components/Navv'

const Createpage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] =useState('')
  const navigate = useNavigate()

  const register = async(name, email) => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      await setDoc(doc(db, 'users', user.uid), {
        username: name,
        email: email,
      });
      navigate('/dashboard')
      toast.success("Sign Up successful")
    }
    catch(e) {
      toast.error(e.message)
    }
  }
  return (
   <>
   <Navv />
   <div className="form">
            <div className="title">
            Welcome, <br /> <span>Sign Up</span>
        </div>
        <input type="text" className="input" placeholder='Username' required onChange={(e) => {
          setName(e.target.value)
        }}/>
        <input type="email" placeholder="Email" className='input' id="" required onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        <input type="password" placeholder='Password' className='input' required onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        <div className="titl">
           <p>Already have an account? <Link className='dont' to="/" >  Login!!!</Link></p> 
        </div>
        <button className="button-confirm" onClick={() => {
          register(name, email)
        }}>Sign Up! </button>
    </div>
   </>
  )
}

export default Createpage
