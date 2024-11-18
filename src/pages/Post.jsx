import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs  } from 'firebase/firestore'
import { useParams } from 'react-router' 
import Nav from '../components/Nav'
import { MoonLoader } from 'react-spinners'
import '../css/posts.css'
 
const Post = () => {
    const [post, setPost] = useState(null)
    const postCollectionRef = collection (db, 'blogposts')
    const {id} = useParams()

    const getPost = async() => {
        const data = await getDocs(postCollectionRef)
        const postList = data.docs.map((doc => ({...doc.data(), id: doc.id})))
        const specificList = postList.find((p) => p.id === id)
        setPost(specificList)
    }

    useEffect(() => {
        getPost()
    }, [id])

  return (
    <>
    <Nav />
    {post ? (
        <div className='Mainnnnn' key={post.id}>
          <div className="intro">
            <h2>Introduction: </h2>
              <h3>{post.Introduction}</h3>
           </div>
           <div className="mainpost">
              <h2>Post Content: </h2>
              <h3>{post.Post}</h3>
           </div>
           <div className="sideDe">
            <h2>Author: </h2>
            <h3>{post.Author}</h3>
            <h2>Title:</h2>
            <h3>{post.Title}</h3>
            <h2>Location:</h2>
            <h3>{post.Location}</h3>
            <h2>Date:</h2>
            <h3>{post.Date}</h3>
           </div>
           <div className="fin">
            <h2>Additional Content:</h2>
            <h3>{post.Additional}</h3>
           </div>
        </div>
      ) : (
        < MoonLoader className='loader'/>
      )}
    </>
  )
}

export default Post
