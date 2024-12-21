import React from 'react'
import '../css/post.css'
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

const Posts = () => {
  const [post, setPost] = useState([])
  const postCollectionRef = collection(db, "blogposts")
  const Navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true)
        const data = await getDocs(postCollectionRef)
        setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      } catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }
    }


    getPosts()
  }, [])
  return (
    <>
      <div className="boxx">
        <h2 className='tt'>All Blogposts</h2>
      </div>
      <div className="maincon">
        {
          loading ? <MoonLoader className='loaderr' /> : (
            <main>
              <div className='cardd-container'>
                {post.map((pos) => {
                  return (
                    <div className="cardd" key={pos.id}>
                      <div className="">
                        <div className="">
                          <div className="">{pos.Title}</div>
                          <h3 className="">By : {pos.Author}</h3>
                        </div>
                        <div>
                          {pos.Introduction}
                        </div>
                        <h3 className="">{pos.Date}</h3>
                        <div className=""></div>
                        <div className="">
                          <div className="">
                            <i className=""></i>
                            {pos.Location}
                          </div>
                          <Link to={`/posts/${pos.id}`} className="text" style={{ textDecoration: "none", color: "#ededed", fontSize: "1.1rem", marginLeft: "2%" }}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>

                  )
                })}
              </div>
            </main>
          )}
      </div>
      <button className="bbtn" onClick={() => {
        Navigate('/add-post')
      }}>
        Add New BlogPost
      </button>

    </>
  )
}

export default Posts
