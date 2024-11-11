import React from 'react'
import '../css/post.css'
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Posts = () => {
    const [post, setPost] = useState([])
  const postCollectionRef  =collection(db, "blogposts")

    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postCollectionRef)
        setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }

      getPosts()
    }, [])

  return (
    <>
        <div className="boxx">
          <h2 className='tt'>All Blogposts</h2>  
        </div>
        <div className="cardd-container">
      {post.map((pos) => {
      return (
        <div className="cardd" key={pos.id}>
        <div className="">
          <div className="">  
            <div className="">{pos.Title}</div>
            <h3 className="">By : {pos.Author}</h3>
          </div>
          <div className="intro">
            {pos.Introduction}
          </div>
          <h3 className="">{pos.Date}</h3>
          <div className=""></div>
          <div className="">
            <div className="">
              <i className=""></i>
              {pos.Location}
            </div>
            <Link to="job.html" className="text" style={{ textDecoration: "none", color: "#ededed", fontSize: "1.1rem", marginLeft:"2%" }}>
              Read More
            </Link>
          </div>
        </div>
      </div> 
      
      )
    })}
    </div>
        <button className="bbtn">
            Add New BlogPost
        </button>
       
    </>
  )
}

export default Posts
