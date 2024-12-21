import React from 'react'
import { useState } from 'react'
import '../css/add.css'
import { doc, addDoc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { collection } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Body = () => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [Intro, setIntro] = useState('')
  const [post, setPost] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [add, setAdd] = useState('')

  const navigate = useNavigate()

  const postRef = collection(db, 'blogposts')

  const addPost = async() => {
    await addDoc(postRef, {Author: author, Title : title, Introduction : Intro, Location : location, Date : date, Additional : add, Post: post})
    navigate('/posts')
    toast.success('BlogPost Added')
  }

  return (
   <>
   <div className="con">
    <h2 className='ttt'>Add a New Blog Post</h2>
    <div className="textbox">
        <h3>Introduction </h3>
        <textarea name="" placeholder='Required' id="" className='te' required onChange={(e) => {
          setIntro(e.target.value)
        }}></textarea>

        <h3>Blogpost</h3>
        <textarea name="" className='tee' placeholder='Required' id="" onChange={(e) => {
          setPost(e.target.value)
        }}></textarea>
    </div>
    <div className="sidebox">
        <h3>Author's Name</h3>
        <input type="text" className='aut' onChange={(e) => {
          setAuthor(e.target.value)
        }}/>
        <h3>Title</h3>
        <input type="text" className="aut" onChange={(e) => {
          setTitle(e.target.value)
        }}/>
        <h3>Location</h3>
        <input type="text" className="aut" onChange={(e) => {
          setLocation(e.target.value)
        }}/>
        <h3>Date</h3>
        <input type="date" className="aut" onChange={(e) => {
          setDate(e.target.value)
        }}/>
        <h3>Additional Content</h3>
        <textarea name="" className='ad' placeholder='(Optional)' id="" onChange={(e) => {
          setAdd(e.target.value)
        }}></textarea>
    </div>

    <button className='bbbtn' onClick={() => {
      addPost()
    }}>Add BlogPost</button>
   </div>
    
   </>
  )
}

export default Body
